# CT 個案流程：讀檔 → 分割 → 擬合 → 輸出網頁可載入的個案檔（.ctcase，gzip）。
import os, sys, json, gzip, struct, time, shutil, tempfile
import numpy as np
sys.path.insert(0, os.path.dirname(__file__))
import ctio, segment, ctfit
from mskmodel import MskModel

VERSION = 1


def ct2rel(fit):
    """CT 的 LPS 物理座標（mm）→ 模型的 rel 座標（cm，以 T1–T12 為原點）：rel = M·p + b。
    Q = (x/10, z/10, -y/10)；rel = (Q - t)·R - s·anchor（列向量）。"""
    C = np.array([[0.1, 0, 0], [0, 0, 0.1], [0, -0.1, 0]])
    M = fit.R.T @ C; b = -(fit.R.T @ fit.t) - fit.s * fit.anchor()
    return dict(M=[round(float(v), 7) for v in M.ravel()], b=[round(float(v), 5) for v in b])


def volume(img, target=1.5, target_z=2.5):
    """瀏覽器檢視用的影像體積：平面約 target mm、切片約 target_z mm；HU 以 int16 保存，體外空氣統一成 -1024。
    回傳 gzip 位元組：[u32 標頭長度][標頭 JSON][int16 z,y,x]。"""
    import SimpleITK as sitk
    a = sitk.GetArrayFromImage(img).astype(np.float32)          # z, y, x（LPS）
    sp = img.GetSpacing(); org = img.GetOrigin()
    fx = max(1, int(round(target / sp[0]))); fy = max(1, int(round(target / sp[1]))); fz = max(1, int(round(target_z / sp[2])))
    nz, ny, nx = a.shape[0] // fz, a.shape[1] // fy, a.shape[2] // fx
    a = a[:nz * fz, :ny * fy, :nx * fx].reshape(nz, fz, ny, fy, nx, fx).mean((1, 3, 5))
    v = np.clip(np.round(a), -1024, 3071).astype('<i2'); v[v < -900] = -1024
    nsp = [sp[0] * fx, sp[1] * fy, sp[2] * fz]
    no = [org[0] + (fx - 1) * sp[0] / 2, org[1] + (fy - 1) * sp[1] / 2, org[2] + (fz - 1) * sp[2] / 2]
    hj = json.dumps(dict(size=[nx, ny, nz], spacing=[round(x, 4) for x in nsp], origin=[round(x, 3) for x in no]), separators=(',', ':')).encode()
    hj += b' ' * ((2 - len(hj) % 2) % 2)
    return gzip.compress(struct.pack('<I', len(hj)) + hj + v.tobytes(), 6)


def pack(fit, info, extra):
    m = fit.m
    q16 = lambda a: np.clip(np.round(a * 100), -32767, 32767).astype('<i2')       # 0.01 公分
    u = fit.to_rel(fit.Q); us = fit.to_rel(fit.Qs)
    w = np.round(fit.w * 255).astype(np.uint8); ws = np.round(fit.ws * 255).astype(np.uint8)
    u[w == 0] = 0; us[ws == 0] = 0
    ov = fit.overlays()
    hdr = dict(version=VERSION, NV=m.NV, NS=m.NS, scan=info, s_ct=float(fit.s), anchor=fit.anchor().tolist(), arms_down=fit.arms_down,
               fit=dict(bones=[dict(b, mean=round(b['mean'], 3), p95=round(b['p95'], 3), partial=bool(b['partial'])) for b in fit.bone_err],
                        skin_mean=round(fit.fit_err['skin_mean'], 3), skin_p95=round(fit.fit_err['skin_p95'], 3),
                        rays_fat=round(float(fit.valid_lay.mean()), 3), rays_muscle=round(float(fit.valid_bon.mean()), 3)),
               g=fit.g_est, meas=fit.measurements(),
               ylim_rel=[float(fit.to_rel(np.array([[0, fit.ylim[0], 0]]))[0, 1]), float(fit.to_rel(np.array([[0, fit.ylim[1], 0]]))[0, 1])],
               overlays=[dict(name=g['name'], color=g['color'], nv=len(g['V']), nt=len(g['F'])) for g in ov],
               ct2rel=ct2rel(fit), **extra)
    hj = json.dumps(hdr, ensure_ascii=False, separators=(',', ':')).encode('utf8'); hj += b' ' * ((4 - len(hj) % 4) % 4)
    pad = lambda b: b + b'\0' * ((4 - len(b) % 4) % 4)
    parts = [struct.pack('<I', len(hj)), hj, pad(w.tobytes()), pad(q16(u).tobytes()), pad(ws.tobytes()), pad(q16(us).tobytes())]
    for g in ov: parts += [pad(q16(g['V']).tobytes()), pad(g['F'].astype('<u4').tobytes())]
    return gzip.compress(b''.join(parts), 6), hdr


def run(src, out_path, model_path, workdir=None, fast=True, log=print, step=lambda s, p: None, device=None):
    t0 = time.time(); own = workdir is None
    workdir = workdir or tempfile.mkdtemp(prefix='ctcase_')
    try:
        step('讀取影像', 0.05); img, info = ctio.load_ct(src)
        log(f'影像 {info["size"][0]}×{info["size"][1]}×{info["size"][2]}，間距 {info["spacing"]} mm')
        step('自動分割（約 1–3 分鐘）', 0.1); lab, classes = segment.segment(img, workdir, fast=fast, device=device, log=log)
        step('組織分類', 0.6); m = MskModel(model_path); ct = ctfit.CTVolume(img, lab, classes, log=log)
        step('擬合模型', 0.7); fit = ctfit.Fit(m, ct, log=log).run()
        step('輸出結果', 0.95)
        data, hdr = pack(fit, info, dict(source=os.path.basename(src) if not os.path.isdir(src) else 'DICOM', seg_model='TotalSegmentator total ' + ('3 mm' if fast else '1.5 mm'), seconds=round(time.time() - t0)))
        open(out_path, 'wb').write(data)
        vol = volume(img); open(out_path + '.vol', 'wb').write(vol)
        log(f'檢視用影像 {len(vol) / 1e6:.1f} MB')
        log(f'完成，共 {time.time() - t0:.0f} 秒；個案檔 {len(data) / 1e6:.1f} MB')
        return hdr
    finally:
        if own: shutil.rmtree(workdir, ignore_errors=True)


if __name__ == '__main__':
    import argparse
    ap = argparse.ArgumentParser(description='CT → 個案模型')
    ap.add_argument('input', help='DICOM 資料夾、zip、.nii(.gz) 或 .nrrd'); ap.add_argument('output', help='輸出 .ctcase')
    ap.add_argument('--model', default=os.path.join(os.path.dirname(__file__), '..', 'docs', 'model.js'))
    ap.add_argument('--full', action='store_true', help='用 1.5 mm 模型（需要 GPU 或較長時間）')
    ap.add_argument('--device', default=None, help='gpu / cpu / mps（預設自動）')
    a = ap.parse_args()
    run(a.input, a.output, a.model, fast=not a.full, device=a.device)
