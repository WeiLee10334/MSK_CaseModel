#!/usr/bin/env python3
"""地端伺服器：提供網頁（docs/）與 CT／MR 影像重建 API。只用 Python 標準函式庫，影像不離開這台電腦。

    python3 server.py                  # http://127.0.0.1:8765
    python3 server.py --host 0.0.0.0   # 讓院內網路其他電腦連線（請自行確認網段與防火牆）

API
    GET  /api/health          {"ok": true, ...}
    POST /api/ct?modality=auto  上傳（網頁的多檔容器格式，或單一 zip / nii / nrrd 檔）；modality = auto / CT / MR → {"id": ...}
    GET  /api/ct/<id>         處理狀態 {"state": queued|running|done|error, "step", "progress", "log", "error"}
    GET  /api/ct/<id>/case    重建檔（.reco，gzip：各結構表面、體積、量化指標）
    GET  /api/ct/<id>/volume  檢視用影像體積（gzip：標頭 JSON＋int16，約 1.5 mm）
    DELETE /api/ct/<id>       立即刪除該筆結果
原始上傳檔在處理完（成功或失敗）後立即刪除；重建檔只保留在記憶體，逾時（預設 6 小時）或伺服器結束即消失。
"""
import argparse, http.server, json, os, re, shutil, struct, sys, tempfile, threading, time, traceback, uuid
from urllib.parse import urlparse

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, 'ctpipe'))
DOCS = os.path.join(HERE, 'docs')
JOBS = {}
LOCK = threading.Lock()
QUEUE = threading.Semaphore(1)          # 一次只處理一筆（分割模型吃記憶體）
CFG = dict(fast=True, device=None, keep_hours=6.0, max_upload=4 << 30)


def log_line(job, msg):
    with LOCK:
        job['log'].append(f'{time.strftime("%H:%M:%S")} {msg}'); del job['log'][:-200]


def save_upload(rfile, length, dst):
    """把請求內容存到 dst 資料夾。網頁送來的是多檔容器 [u32 名稱長度][名稱][u64 大小][內容]…；
    也接受直接上傳單一檔案（curl --data-binary @case.zip）。邊讀邊寫，不整包放進記憶體。"""
    head = rfile.read(min(length, 12)); left = length - len(head)
    def chunks(first, n):
        if first: yield first
        while n > 0:
            b = rfile.read(min(n, 1 << 20))
            if not b: raise IOError('上傳中斷')
            n -= len(b); yield b
    is_container = False
    if len(head) >= 12:
        ln = struct.unpack('<I', head[:4])[0]
        is_container = 0 < ln < 1024 and ln + 12 <= length
    if not is_container:
        name = 'upload.zip' if head[:2] == b'PK' else 'upload.nii.gz' if head[:2] == b'\x1f\x8b' else 'upload.nrrd' if head[:4] == b'NRRD' else 'upload.dcm'
        with open(os.path.join(dst, name), 'wb') as f:
            for b in chunks(head, left): f.write(b)
        return 1
    buf = bytearray(head); src = chunks(b'', left); n = 0
    def need(k):
        while len(buf) < k:
            try: buf.extend(next(src))
            except StopIteration: raise IOError('上傳內容不完整')
    while True:
        if not buf:
            try: buf.extend(next(src))
            except StopIteration: break
        need(4); ln = struct.unpack('<I', buf[:4])[0]
        if not 0 < ln < 1024: raise IOError('上傳格式錯誤')
        need(4 + ln + 8); name = bytes(buf[4:4 + ln]).decode('utf8', 'replace'); sz = struct.unpack('<Q', buf[4 + ln:12 + ln])[0]
        del buf[:12 + ln]
        safe = re.sub(r'[^\w.\-]', '_', name.replace('\\', '/').split('/')[-1])[-120:] or 'f'
        with open(os.path.join(dst, f'{n:05d}_{safe}'), 'wb') as f:
            while sz > 0:
                if not buf: need(1)
                k = min(sz, len(buf)); f.write(buf[:k]); del buf[:k]; sz -= k
        n += 1
    return n


def pick_input(folder):
    """資料夾裡只有一個 zip / nii / nrrd 時直接用那個檔，否則當成 DICOM 資料夾。"""
    files = [os.path.join(folder, f) for f in sorted(os.listdir(folder))]
    vol = [f for f in files if f.lower().endswith(('.zip', '.nii', '.nii.gz', '.nrrd', '.mha'))]
    return vol[0] if len(vol) == 1 and len(files) <= 2 else folder


def run_job(job, upload_dir, modality='auto'):
    import pipeline
    with QUEUE:
        job['state'] = 'running'; work = tempfile.mkdtemp(prefix='ctwork_'); out = os.path.join(work, 'case.reco')
        try:
            def step(s, p):
                with LOCK: job['step'], job['progress'] = s, round(0.1 + 0.9 * p, 3)
                log_line(job, s)
            hdr = pipeline.run(pick_input(upload_dir), out, workdir=work, fast=CFG['fast'], log=lambda *a: log_line(job, ' '.join(map(str, a))), step=step, device=CFG['device'], modality=modality)
            with open(out, 'rb') as f: job['case'] = f.read()
            if os.path.exists(out + '.vol'):
                with open(out + '.vol', 'rb') as f: job['vol'] = f.read()
            with LOCK: job.update(state='done', step='完成', progress=1.0)
        except Exception as e:
            traceback.print_exc()
            with LOCK: job.update(state='error', error=f'{type(e).__name__}: {e}')
        finally:
            shutil.rmtree(upload_dir, ignore_errors=True); shutil.rmtree(work, ignore_errors=True)
            log_line(job, '已刪除上傳的原始影像與暫存檔')


def janitor():
    while True:
        time.sleep(300)
        with LOCK:
            for k in [k for k, j in JOBS.items() if j['state'] in ('done', 'error') and time.time() - j['t'] > CFG['keep_hours'] * 3600]: del JOBS[k]


class Handler(http.server.SimpleHTTPRequestHandler):
    server_version = 'MSKCase/0.4'

    def __init__(self, *a, **k): super().__init__(*a, directory=DOCS, **k)

    def log_message(self, fmt, *args):
        if '/api/ct/' in (self.path or '') and self.command == 'GET': return     # 輪詢不刷版面
        sys.stderr.write('%s %s\n' % (self.log_date_time_string(), fmt % args))

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store'); self.send_header('X-Content-Type-Options', 'nosniff'); super().end_headers()

    def json(self, obj, code=200):
        b = json.dumps(obj, ensure_ascii=False).encode('utf8')
        self.send_response(code); self.send_header('Content-Type', 'application/json; charset=utf-8'); self.send_header('Content-Length', str(len(b))); self.end_headers(); self.wfile.write(b)

    def job(self, jid):
        with LOCK: return JOBS.get(jid)

    def do_GET(self):
        p = urlparse(self.path).path
        if p == '/api/health':
            return self.json(dict(ok=True, version='0.6', fast=CFG['fast'], device=CFG['device'] or 'auto', busy=any(j['state'] == 'running' for j in JOBS.values())))
        m = re.fullmatch(r'/api/ct/([0-9a-f]{32})(/case|/volume)?', p)
        if m:
            j = self.job(m.group(1))
            if not j: return self.json(dict(error='找不到這筆工作（可能已逾時刪除）'), 404)
            if m.group(2):
                if j['state'] != 'done': return self.json(dict(error='尚未完成'), 409)
                b = j['case'] if m.group(2) == '/case' else j.get('vol')
                if b is None: return self.json(dict(error='沒有影像資料'), 404)
                self.send_response(200); self.send_header('Content-Type', 'application/octet-stream'); self.send_header('Content-Length', str(len(b))); self.end_headers(); self.wfile.write(b); return
            with LOCK: return self.json({k: j[k] for k in ('state', 'step', 'progress', 'log', 'error')})
        if p.startswith('/api/'): return self.json(dict(error='not found'), 404)
        return super().do_GET()

    def do_POST(self):
        u = urlparse(self.path)
        if u.path != '/api/ct': return self.json(dict(error='not found'), 404)
        mq = re.search(r'(?:^|&)modality=(auto|CT|MR)(?:&|$)', u.query or ''); modality = mq.group(1) if mq else 'auto'
        n = int(self.headers.get('Content-Length') or 0)
        if n <= 0: return self.json(dict(error='沒有收到檔案'), 400)
        if n > CFG['max_upload']: return self.json(dict(error=f'檔案太大（上限 {CFG["max_upload"] >> 20} MB）'), 413)
        dst = tempfile.mkdtemp(prefix='ctupload_')
        try: cnt = save_upload(self.rfile, n, dst)
        except Exception as e:
            shutil.rmtree(dst, ignore_errors=True); return self.json(dict(error=str(e)), 400)
        jid = uuid.uuid4().hex
        job = dict(state='queued', step=f'已收到 {cnt} 個檔案，排隊中', progress=0.1, log=[], error=None, case=None, vol=None, t=time.time())
        with LOCK: JOBS[jid] = job
        log_line(job, f'收到 {cnt} 個檔案（{n / 1e6:.0f} MB）')
        threading.Thread(target=run_job, args=(job, dst, modality), daemon=True).start()
        self.json(dict(id=jid))

    def do_DELETE(self):
        m = re.fullmatch(r'/api/ct/([0-9a-f]{32})', urlparse(self.path).path)
        if not m: return self.json(dict(error='not found'), 404)
        with LOCK: ok = JOBS.pop(m.group(1), None) is not None
        self.json(dict(deleted=ok))


def main():
    ap = argparse.ArgumentParser(description='個案化肌骨模型：地端網頁與 CT／MR 影像重建伺服器')
    ap.add_argument('--host', default='127.0.0.1'); ap.add_argument('--port', type=int, default=8765)
    ap.add_argument('--full', action='store_true', help='用 1.5 mm 分割模型（建議有 GPU 時使用）')
    ap.add_argument('--device', default=None, help='gpu / cpu / mps（預設自動）')
    ap.add_argument('--keep-hours', type=float, default=6.0, help='個案結果保留時數')
    a = ap.parse_args()
    CFG.update(fast=not a.full, device=a.device, keep_hours=a.keep_hours)
    threading.Thread(target=janitor, daemon=True).start()
    srv = http.server.ThreadingHTTPServer((a.host, a.port), Handler)
    print(f'個案化肌骨模型：http://{"127.0.0.1" if a.host in ("0.0.0.0", "") else a.host}:{a.port}/  （Ctrl+C 結束）')
    if a.host not in ('127.0.0.1', 'localhost'): print('注意：已開放其他電腦連線，請確認只在院內受控網段使用。')
    try: srv.serve_forever()
    except KeyboardInterrupt: pass


if __name__ == '__main__':
    main()
