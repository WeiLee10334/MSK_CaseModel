# 影像流程：讀檔 → 分割 → 重建各結構表面與量化指標 → 輸出網頁可載入的重建檔（.reco，gzip）與檢視用影像（.reco.vol）。
# CT 與 MR 皆可；只重建影像範圍內的內容，不套用人形模板。
import os, sys, json, gzip, struct, time, shutil, tempfile
import numpy as np
sys.path.insert(0, os.path.dirname(__file__))
import ctio, segment, recon


def volume(img, modality='CT', target=1.5, target_z=2.5):
    """瀏覽器檢視用的影像體積：平面約 target mm、切片約 target_z mm，int16。CT 體外空氣統一成 -1024；
    MR 另附建議的窗寬窗位。回傳 gzip 位元組：[u32 標頭長度][標頭 JSON][int16 z,y,x]。"""
    import SimpleITK as sitk
    a = sitk.GetArrayFromImage(img).astype(np.float32)          # z, y, x（LPS）
    sp = img.GetSpacing(); org = img.GetOrigin()
    fx = max(1, int(round(target / sp[0]))); fy = max(1, int(round(target / sp[1]))); fz = max(1, int(round(target_z / sp[2])))
    nz, ny, nx = a.shape[0] // fz, a.shape[1] // fy, a.shape[2] // fx
    a = a[:nz * fz, :ny * fy, :nx * fx].reshape(nz, fz, ny, fy, nx, fx).mean((1, 3, 5))
    meta = dict(modality=modality)
    if modality == 'CT':
        v = np.clip(np.round(a), -1024, 3071).astype('<i2'); v[v < -900] = -1024
    else:
        v = np.clip(np.round(a), -32768, 32767).astype('<i2'); p1, p99 = np.percentile(v[v > 0], [1, 99.5]) if (v > 0).any() else (0, 1)
        meta['window'] = [float(p99 - p1), float((p99 + p1) / 2)]
    nsp = [sp[0] * fx, sp[1] * fy, sp[2] * fz]
    no = [org[0] + (fx - 1) * sp[0] / 2, org[1] + (fy - 1) * sp[1] / 2, org[2] + (fz - 1) * sp[2] / 2]
    hj = json.dumps(dict(size=[nx, ny, nz], spacing=[round(x, 4) for x in nsp], origin=[round(x, 3) for x in no], **meta), separators=(',', ':')).encode()
    hj += b' ' * ((2 - len(hj) % 2) % 2)
    return gzip.compress(struct.pack('<I', len(hj)) + hj + v.tobytes(), 6)


def run(src, out_path, workdir=None, fast=True, log=print, step=lambda s, p: None, device=None, modality='auto', extra=None):
    t0 = time.time(); own = workdir is None
    workdir = workdir or tempfile.mkdtemp(prefix='reco_')
    try:
        step('讀取影像', 0.05); img, info = ctio.load_ct(src)
        mod = info['modality'] if modality in (None, '', 'auto') else modality.upper()
        log(f'{mod} 影像 {info["size"][0]}×{info["size"][1]}×{info["size"][2]}，間距 {info["spacing"]} mm')
        task = 'total_mr' if mod == 'MR' else 'total'
        step('自動分割（約 1–3 分鐘）', 0.1); lab, classes = segment.segment(img, workdir, fast=fast, device=device, log=log, task=task)
        step('重建 3D 結構與量化', 0.65)
        seg_model = f'TotalSegmentator {task} ' + ('3 mm' if fast else '1.5 mm')
        S, meta = recon.build(img, lab, classes, modality=mod, log=log, source=os.path.basename(src) if not os.path.isdir(src) else 'DICOM', seg_model=seg_model)
        meta['scan'] = {k: info[k] for k in ('size', 'spacing', 'extent_mm', 'slice_thickness', 'kvp', 'kernel', 'sex', 'slices', 'format') if k in info}
        meta['seconds_total'] = round(time.time() - t0)
        if extra: meta.update(extra)
        step('輸出結果', 0.95)
        data, hdr = recon.pack(S, meta)
        open(out_path, 'wb').write(data)
        vol = volume(img, mod); open(out_path + '.vol', 'wb').write(vol)
        log(f'完成，共 {time.time() - t0:.0f} 秒；重建檔 {len(data) / 1e6:.1f} MB、檢視影像 {len(vol) / 1e6:.1f} MB')
        return hdr
    finally:
        if own: shutil.rmtree(workdir, ignore_errors=True)


if __name__ == '__main__':
    import argparse
    ap = argparse.ArgumentParser(description='CT／MR → 3D 重建檔')
    ap.add_argument('input', help='DICOM 資料夾、zip、.nii(.gz) 或 .nrrd'); ap.add_argument('output', help='輸出 .reco')
    ap.add_argument('--full', action='store_true', help='用 1.5 mm 模型（需要 GPU 或較長時間）')
    ap.add_argument('--device', default=None, help='gpu / cpu / mps（預設自動）')
    ap.add_argument('--modality', default='auto', help='CT / MR / auto（預設自動判斷）')
    a = ap.parse_args()
    run(a.input, a.output, fast=not a.full, device=a.device, modality=a.modality)
