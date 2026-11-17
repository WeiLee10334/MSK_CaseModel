"""示範資料：公開胸腹部 CT（3D Slicer 範例 CTACardio）跑完整影像流程，另以它人工模擬一次「追蹤檢查」做前後比較。
模擬內容（示範用，非真實病人追蹤）：豎脊肌與髂腰肌外緣削去約 2 mm（肌肉萎縮），肝臟往外長約 1 mm，
並加上約 2° 旋轉與 1 cm 內的位移（擺位不同）。追蹤影像同樣從頭分割、重建，不沿用第一次的結果。
輸出 docs/demo-a.js、demo-a-vol.js、demo-b.js、demo-b-vol.js（base64 分段，供靜態網頁載入）。
用法：python3 -I tools/make_demo_recon.py <CTA-cardio.nrrd> [工作資料夾]"""
import os, sys, json, base64, tempfile
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, 'ctpipe'))
import SimpleITK as sitk
from scipy import ndimage as ndi
import pipeline
import json as _json

SRC = sys.argv[1]; WORK = sys.argv[2] if len(sys.argv) > 2 else tempfile.mkdtemp(prefix='demo_')
SIM = ('以示範 CT 人工模擬的追蹤影像（非真實病人資料）：豎脊肌、髂腰肌外緣削去約 2 mm 模擬肌肉萎縮，肝臟外緣增加約 1 mm，'
       '另加約 2° 旋轉與 1 cm 內位移模擬擺位不同；追蹤影像重新分割與重建。')
DEMO = dict(demo=True, demo_source='3D Slicer SampleData CTACardio（CTA-cardio.nrrd，3D Slicer License）')


def js(name, var, data):
    b = base64.b64encode(data).decode(); chunks = [b[i:i + (1 << 20)] for i in range(0, len(b), 1 << 20)]
    open(os.path.join(ROOT, 'docs', name), 'w').write(f'window.{var} = ' + json.dumps(chunks) + ';\n')
    print('wrote', name, round(len(data) / 1e6, 2), 'MB')


def simulate(img, lab, classes):
    A = sitk.GetArrayFromImage(img).astype(np.float32); L = sitk.GetArrayFromImage(lab).astype(np.int32); inv = {n: k for k, n in classes.items()}
    rng = np.random.default_rng(7); sp = img.GetSpacing(); st = np.zeros((1, 3, 3), bool); st[0, 1, :] = st[0, :, 1] = True      # 只在橫切面內侵蝕
    it = max(1, int(round(2.0 / sp[0])))
    for n in ('autochthon_left', 'autochthon_right', 'iliopsoas_left', 'iliopsoas_right'):
        if n not in inv: continue
        m = L == inv[n]; e = ndi.binary_erosion(m, structure=st, iterations=it); cut = m & ~e
        A[cut] = -85 + rng.normal(0, 12, cut.sum())      # 萎縮的肌肉由脂肪取代
    if 'liver' in inv:
        m = L == inv['liver']; d = ndi.binary_dilation(m, structure=st, iterations=1) & ~m & (L == 0) & (A > -200) & (A < 200)
        A[d] = float(np.median(A[m])) + rng.normal(0, 10, d.sum())
    out = sitk.GetImageFromArray(np.round(A).astype(np.int16)); out.CopyInformation(img)
    c = out.TransformContinuousIndexToPhysicalPoint([s / 2 for s in out.GetSize()])
    T = sitk.Euler3DTransform(); T.SetCenter(c); T.SetRotation(np.radians(1.5), np.radians(0.8), np.radians(2.0)); T.SetTranslation((6.0, -4.0, 8.0))
    return sitk.Resample(out, out, T, sitk.sitkLinear, -1024, sitk.sitkInt16)


def stage(src, wd, out, extra):
    """分割（若資料夾裡已有分割就沿用）＋重建。"""
    import ctio, recon, segment
    os.makedirs(wd, exist_ok=True); img, info = ctio.load_ct(src)
    if os.path.exists(os.path.join(wd, 'seg.nii.gz')):
        lab = sitk.ReadImage(os.path.join(wd, 'seg.nii.gz')); classes = {int(k): v for k, v in json.load(open(os.path.join(wd, 'classes.json'))).items()}
    else:
        lab, classes = segment.segment(img, wd, fast=True)
        sitk.WriteImage(lab, os.path.join(wd, 'seg.nii.gz')); json.dump(classes, open(os.path.join(wd, 'classes.json'), 'w'))
    S, meta = recon.build(img, lab, classes, modality='CT', source=os.path.basename(src), seg_model='TotalSegmentator total 3 mm')
    meta['scan'] = {k: info[k] for k in ('size', 'spacing', 'extent_mm') if k in info}; meta.update(extra)
    data, _ = recon.pack(S, meta); open(out, 'wb').write(data); open(out + '.vol', 'wb').write(pipeline.volume(img, 'CT'))
    return lab, classes, img


def main():
    os.makedirs(WORK, exist_ok=True)
    outA, outB, pb = os.path.join(WORK, 'a.reco'), os.path.join(WORK, 'b.reco'), os.path.join(WORK, 'b.nii.gz')
    if len(sys.argv) > 3:      # 子行程：只做一個階段（每階段各自一個行程，記憶體用完即還，分割程式才不會因記憶體不足被終止）
        if sys.argv[3] == 'a':
            lab, classes, a_img = stage(SRC, os.path.join(WORK, 'a'), outA, dict(DEMO, label='示範：第一次檢查'))
            if not os.path.exists(pb): sitk.WriteImage(simulate(a_img, lab, classes), pb)
        else:
            stage(pb, os.path.join(WORK, 'b'), outB, dict(DEMO, label='示範：模擬追蹤（非真實資料）', simulated=SIM))
        return
    import subprocess
    for st in ('a', 'b'): subprocess.run([sys.executable, '-I', os.path.abspath(__file__), SRC, WORK, st], check=True)
    for tag, p in (('a', outA), ('b', outB)):
        js(f'demo-{tag}.js', f'__DEMO_{tag.upper()}', open(p, 'rb').read())
        js(f'demo-{tag}-vol.js', f'__DEMO_{tag.upper()}_VOL', open(p + '.vol', 'rb').read())

if __name__ == '__main__':
    main()
