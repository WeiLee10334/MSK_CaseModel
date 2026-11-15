# 以 TotalSegmentator（total 任務，可商用）分割 CT。另開子行程執行，記憶體用完即釋放。
import os, sys, json, subprocess, tempfile, time
import SimpleITK as sitk


def segment(img, workdir, fast=True, device=None, log=print):
    """img：sitk 影像（LPS）。回傳 (標籤影像, {編號: 類別名稱})。"""
    os.makedirs(workdir, exist_ok=True)
    src = os.path.join(workdir, 'ct.nii.gz'); dst = os.path.join(workdir, 'seg.nii.gz')
    sitk.WriteImage(img, src)
    if device is None:
        try:
            import torch; device = 'gpu' if torch.cuda.is_available() else 'cpu'
        except Exception: device = 'cpu'
    code = (
        'import sys,json\n'
        'from totalsegmentator.python_api import totalsegmentator\n'
        'from totalsegmentator.map_to_binary import class_map\n'
        f'totalsegmentator(sys.argv[1], sys.argv[2], ml=True, fast={fast!r}, device={device!r}, task="total", nr_thr_resamp=1, nr_thr_saving=1, quiet=True, skip_saving=False)\n'
        'json.dump(class_map["total"], open(sys.argv[3], "w"))\n')
    cm = os.path.join(workdir, 'classes.json'); t0 = time.time()
    log(f'分割中（TotalSegmentator，{"3 mm 快速模型" if fast else "1.5 mm 模型"}，{device.upper()}）')
    env = dict(os.environ, TOTALSEG_DISABLE_HTTP1='1', OMP_NUM_THREADS=str(os.cpu_count() or 2))
    r = subprocess.run([sys.executable, '-c', code, src, dst, cm], capture_output=True, text=True, env=env)
    if r.returncode != 0 or not os.path.exists(dst):
        raise RuntimeError('分割失敗：' + (r.stderr or r.stdout)[-800:])
    log(f'分割完成 {time.time() - t0:.0f} 秒')
    lab = sitk.ReadImage(dst)
    lab = sitk.DICOMOrient(lab, 'LPS')
    classes = {int(k): v for k, v in json.load(open(cm)).items()}
    os.remove(src)
    return lab, classes
