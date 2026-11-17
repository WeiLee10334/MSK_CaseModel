# 讀取 CT：DICOM 資料夾或 zip、NIfTI、NRRD。只取影像與幾何，不保留任何病人識別資料。
import os, struct, zipfile, tempfile, shutil
import numpy as np
import SimpleITK as sitk

# 允許讀入的 DICOM 標籤（皆非識別資料），其他一律不讀出
SAFE_TAGS = {'0008|0060': 'modality', '0018|0050': 'slice_thickness', '0018|0060': 'kvp', '0018|1210': 'kernel',
             '0028|1052': 'rescale_intercept', '0028|1053': 'rescale_slope', '0010|0040': 'sex'}


def unpack_container(data, dst):
    """網頁上傳的多檔容器：重複 [4 位元組名稱長度][名稱 UTF-8][8 位元組大小][內容]。"""
    o = 0; n = 0
    while o < len(data):
        ln = struct.unpack('<I', data[o:o + 4])[0]; o += 4
        name = data[o:o + ln].decode('utf8', 'replace'); o += ln
        sz = struct.unpack('<Q', data[o:o + 8])[0]; o += 8
        safe = '_'.join(p for p in name.replace('\\', '/').split('/') if p not in ('', '.', '..'))[-180:] or f'f{n}'
        with open(os.path.join(dst, f'{n:05d}_{safe}'), 'wb') as f: f.write(data[o:o + sz])
        o += sz; n += 1
    return n


def _extract_zip(path, dst):
    with zipfile.ZipFile(path) as z:
        for i, info in enumerate(z.infolist()):
            if info.is_dir() or info.file_size > 2 << 30: continue
            base = os.path.basename(info.filename) or f'f{i}'
            with z.open(info) as src, open(os.path.join(dst, f'{i:05d}_{base}'), 'wb') as out: shutil.copyfileobj(src, out)


def _volume_files(folder):
    out = []
    for root, _, files in os.walk(folder):
        for f in files:
            if f.lower().endswith(('.nii', '.nii.gz', '.nrrd', '.nhdr', '.mha', '.mhd')): out.append(os.path.join(root, f))
    return out


def read_dicom_series(folder):
    r = sitk.ImageSeriesReader(); best = None
    for root, _, _ in os.walk(folder):
        for sid in r.GetGDCMSeriesIDs(root) or []:
            files = r.GetGDCMSeriesFileNames(root, sid)
            if best is None or len(files) > len(best): best = files
    if not best or len(best) < 20: raise ValueError('找不到足夠切片的 CT 影像（至少 20 張）')
    info = {}
    fr = sitk.ImageFileReader(); fr.SetFileName(best[len(best) // 2]); fr.LoadPrivateTagsOff(); fr.ReadImageInformation()
    for tag, key in SAFE_TAGS.items():
        if fr.HasMetaDataKey(tag): info[key] = fr.GetMetaData(tag).strip()
    r.SetFileNames(best); r.MetaDataDictionaryArrayUpdateOff(); r.LoadPrivateTagsOff()
    img = r.Execute()
    info['slices'] = len(best)
    return img, info


def load_ct(path):
    """回傳 (以 LPS 方向排列的 sitk 影像, 掃描資訊)。path 可為檔案或資料夾。"""
    tmp = None
    try:
        if os.path.isdir(path):
            vols = _volume_files(path)
            if vols: img, info = sitk.ReadImage(vols[0]), {'format': 'volume'}
            else: img, info = read_dicom_series(path); info['format'] = 'dicom'
        elif path.lower().endswith('.zip'):
            tmp = tempfile.mkdtemp(prefix='ctzip_'); _extract_zip(path, tmp)
            vols = _volume_files(tmp)
            if vols: img, info = sitk.ReadImage(vols[0]), {'format': 'volume'}
            else: img, info = read_dicom_series(tmp); info['format'] = 'dicom'
        else:
            img, info = sitk.ReadImage(path), {'format': 'volume'}
    finally:
        if tmp: shutil.rmtree(tmp, ignore_errors=True)
    if img.GetDimension() != 3: raise ValueError('需要 3D 影像')
    img = sitk.DICOMOrient(img, 'LPS')
    if img.GetPixelID() in (sitk.sitkFloat32, sitk.sitkFloat64):      # MR 常以浮點存放、範圍很小：先拉到 0–4000 再存成 int16
        a = sitk.GetArrayViewFromImage(img); p1, p99 = np.percentile(a[::4, ::8, ::8], [1, 99])
        if p1 >= -10 and p99 < 100: img = sitk.Cast(img, sitk.sitkFloat32) * float(4000.0 / max(p99, 1e-6))
    img = sitk.Cast(img, sitk.sitkInt16) if img.GetPixelID() != sitk.sitkInt16 else img
    for k in list(img.GetMetaDataKeys()): img.EraseMetaData(k)
    sp = img.GetSpacing(); sz = img.GetSize()
    info.update(size=list(sz), spacing=[round(s, 3) for s in sp], extent_mm=[round(a * b, 1) for a, b in zip(sz, sp)])
    a = sitk.GetArrayViewFromImage(img)
    info['hu_p50'] = float(np.percentile(a[::4, ::8, ::8], 50))
    # 影像類型：DICOM 有 Modality 就用；沒有時，CT 會有大量接近 −1000 的空氣，MR 沒有負值
    mod = (info.get('modality') or '').upper()
    info['modality'] = 'MR' if mod in ('MR', 'MRI') else 'CT' if mod == 'CT' else ('CT' if float(np.percentile(a[::4, ::8, ::8], 1)) < -500 else 'MR')
    return img, info


def write_dicom_series(img, folder, desc='synthetic test series'):
    """把體積影像寫成 DICOM 序列（測試上傳流程用，不含任何病人資料）。"""
    os.makedirs(folder, exist_ok=True)
    img = sitk.Cast(img, sitk.sitkInt16)
    w = sitk.ImageFileWriter(); w.KeepOriginalImageUIDOn()
    import time
    uid = '1.2.826.0.1.3680043.2.1125.' + str(int(time.time() * 1000))
    d = img.GetDirection()
    tags = [('0008|0060', 'CT'), ('0020|000d', uid + '.1'), ('0020|000e', uid + '.2'), ('0008|103e', desc), ('0010|0010', 'ANON'), ('0010|0020', 'ANON'),
            ('0020|0037', '\\'.join(map(str, (d[0], d[3], d[6], d[1], d[4], d[7])))), ('0028|1052', '0'), ('0028|1053', '1'), ('0018|0050', str(img.GetSpacing()[2]))]
    for i in range(img.GetDepth()):
        s = img[:, :, i]
        for k, v in tags: s.SetMetaData(k, v)
        s.SetMetaData('0020|0032', '\\'.join(map(str, img.TransformIndexToPhysicalPoint((0, 0, i)))))
        s.SetMetaData('0020|0013', str(i + 1)); s.SetMetaData('0008|0018', f'{uid}.3.{i + 1}')
        w.SetFileName(os.path.join(folder, f'{i + 1:04d}.dcm')); w.Execute(s)
