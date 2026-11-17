# 以 TotalSegmentator 分割（CT 用 total、MR 用 total_mr，兩者皆不需授權）。另開子行程執行，記憶體用完即釋放。
import os, sys, json, signal, subprocess, tempfile, time
import SimpleITK as sitk


def _body_box(img, pad_mm=12.0):
    """CT 的身體範圍（CT 值 > −500 的部分，含手臂與檢查床）在橫切面上的外框；四周的空氣不送進分割，記憶體與時間都省很多。"""
    import numpy as np
    a = sitk.GetArrayViewFromImage(img); m = a[::2, ::2, ::2] > -500
    if m.sum() < 1000: return None
    sp = img.GetSpacing(); ys = np.where(m.any((0, 2)))[0] * 2; xs = np.where(m.any((0, 1)))[0] * 2
    px, py = int(pad_mm / sp[0]), int(pad_mm / sp[1]); nx, ny, nz = img.GetSize()
    x0, x1, y0, y1 = max(0, xs.min() - px), min(nx, xs.max() + 2 + px), max(0, ys.min() - py), min(ny, ys.max() + 2 + py)
    if (x1 - x0) * (y1 - y0) > 0.9 * nx * ny: return None
    return [int(x0), int(y0), 0], [int(x1 - x0), int(y1 - y0), int(nz)]


def segment(img, workdir, fast=True, device=None, log=print, task='total'):
    """img：sitk 影像（LPS）。回傳 (標籤影像, {編號: 類別名稱})。"""
    os.makedirs(workdir, exist_ok=True)
    src = os.path.join(workdir, 'ct.nii.gz'); dst = os.path.join(workdir, 'seg.nii.gz')
    full = img; box = _body_box(img) if task == 'total' else None
    if box: img = sitk.RegionOfInterest(img, box[1], box[0]); log(f'裁掉體外空氣後分割：{box[1][0]}×{box[1][1]}×{box[1][2]}（原 {full.GetSize()[0]}×{full.GetSize()[1]}）')
    sitk.WriteImage(img, src)
    if device is None:
        try:
            import torch; device = 'gpu' if torch.cuda.is_available() else 'cpu'
        except Exception: device = 'cpu'
    code = (
        'import sys,json\n'
        'from totalsegmentator.python_api import totalsegmentator\n'
        'from totalsegmentator.map_to_binary import class_map\n'
        'from totalsegmentator.config import setup_totalseg, set_config_key\n'
        'setup_totalseg(); set_config_key("send_usage_stats", False)\n'      # TotalSegmentator 預設會回傳使用統計（不含影像）；地端一律關閉
        f'totalsegmentator(sys.argv[1], sys.argv[2], ml=True, fast={fast!r}, device={device!r}, task={task!r}, nr_thr_resamp=1, nr_thr_saving=1, quiet=True, skip_saving=False)\n'
        f'json.dump(class_map[{task!r}], open(sys.argv[3], "w"))\n')
    cm = os.path.join(workdir, 'classes.json'); t0 = time.time()
    log(f'分割中（TotalSegmentator {task}，{"3 mm 快速模型" if fast else "1.5 mm 模型"}，{device.upper()}）')
    env = dict(os.environ, TOTALSEG_DISABLE_HTTP1='1', OMP_NUM_THREADS=str(os.cpu_count() or 2))
    # 子行程的輸出寫到檔案，不用管線：nnU-Net 會再開子行程，若用管線，主程式被系統終止時孫行程仍握著管線，這裡會一直等不到結束
    lf = os.path.join(workdir, 'seg.log')
    # 另開行程群組：結束（或被系統終止）後把整組一起清掉，nnU-Net 留下的子行程才不會一直佔著記憶體（每個約 1.5 GB）
    with open(lf, 'w') as fo:
        r = subprocess.Popen([sys.executable, '-c', code, src, dst, cm], stdout=fo, stderr=subprocess.STDOUT, stdin=subprocess.DEVNULL, env=env, start_new_session=True)
        try: r.wait()
        finally:
            try: os.killpg(r.pid, signal.SIGKILL)
            except (ProcessLookupError, PermissionError): pass
    if r.returncode != 0 or not os.path.exists(dst):
        tail = open(lf, errors='replace').read()[-800:]
        if r.returncode in (-9, 137): raise RuntimeError('分割程式被系統終止，多半是記憶體不足（建議 8 GB 以上，或關閉其他程式後重試）')
        raise RuntimeError('分割失敗：' + tail)
    log(f'分割完成 {time.time() - t0:.0f} 秒')
    lab = sitk.ReadImage(dst)
    lab = sitk.DICOMOrient(lab, 'LPS')
    if box: lab = sitk.Resample(lab, full, sitk.Transform(), sitk.sitkNearestNeighbor, 0, lab.GetPixelID())      # 放回原影像格點
    classes = {int(k): v for k, v in json.load(open(cm)).items()}
    os.remove(src)
    return lab, classes
