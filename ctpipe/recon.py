# 影像重建：把分割結果直接做成各結構的 3D 表面（影像本身的座標，位置即真實位置），並計算量化指標。
# 不套用人形模板；只有影像範圍內的內容。CT 與 MR 共用，CT 另有依 CT 值的骨骼表面修正、骨骼肌、脂肪與骨密度指標。
import json, gzip, struct, time
import numpy as np
import SimpleITK as sitk
from scipy import ndimage as ndi
from skimage.measure import marching_cubes
import vtk
from vtk.util.numpy_support import numpy_to_vtk, numpy_to_vtkIdTypeArray, vtk_to_numpy
from anatomy import describe, level_order, GROUP_ZH

Q = 0.05      # 封包內頂點量化單位（mm）


# ---------------- 網格工具
def _polydata(V, F):
    pd = vtk.vtkPolyData(); pts = vtk.vtkPoints(); pts.SetData(numpy_to_vtk(np.ascontiguousarray(V, np.float64), deep=True)); pd.SetPoints(pts)
    ca = vtk.vtkCellArray(); ca.SetCells(len(F), numpy_to_vtkIdTypeArray(np.c_[np.full(len(F), 3), F].astype(np.int64).ravel(), deep=True)); pd.SetPolys(ca)
    return pd


def _arrays(pd):
    V = vtk_to_numpy(pd.GetPoints().GetData()).astype(np.float64)
    F = vtk_to_numpy(pd.GetPolys().GetConnectivityArray()).reshape(-1, 3).astype(np.int64)
    return V, F


def smooth_decimate(V, F, target, it=20):
    """去掉體素階梯（windowed sinc，體積幾乎不變）後以 quadric 減面到約 target 個三角形。"""
    pd = _polydata(V, F)
    s = vtk.vtkWindowedSincPolyDataFilter(); s.SetInputData(pd); s.SetNumberOfIterations(it); s.SetPassBand(0.08)
    s.NormalizeCoordinatesOn(); s.BoundarySmoothingOff(); s.FeatureEdgeSmoothingOff(); s.NonManifoldSmoothingOn(); s.Update(); pd = s.GetOutput()
    if pd.GetNumberOfPolys() > target:
        d = vtk.vtkQuadricDecimation(); d.SetInputData(pd); d.SetTargetReduction(1 - target / pd.GetNumberOfPolys()); d.VolumePreservationOn(); d.Update(); pd = d.GetOutput()
    c = vtk.vtkCleanPolyData(); c.SetInputData(pd); c.Update()
    return _arrays(c.GetOutput())


def mesh_mask(m, spacing, sigma_mm=1.0):
    """二值遮罩（z,y,x）→ 表面（索引座標乘上間距，順序 x,y,z，單位 mm）。先高斯平滑再取 0.5 等值面。"""
    sz, sy, sx = spacing[2], spacing[1], spacing[0]
    f = ndi.gaussian_filter(np.pad(m, 2).astype(np.float32), sigma=(sigma_mm / sz, sigma_mm / sy, sigma_mm / sx))
    if f.max() < 0.5: return None, None
    V, F, _, _ = marching_cubes(f, 0.5, spacing=(sz, sy, sx))
    V = V[:, ::-1] - 2 * np.array([sx, sy, sz]); return V, F      # 轉成 (x,y,z)；軸序反轉後三角形繞向即為法向朝外（帶號體積為正）


class Grid:
    """影像格點 → 物理座標（LPS，mm）。"""
    def __init__(self, img):
        self.sp = np.array(img.GetSpacing()); self.org = np.array(img.GetOrigin()); self.D = np.array(img.GetDirection()).reshape(3, 3)
        self.size = np.array(img.GetSize())

    def phys(self, P_idx_mm, off_idx=(0, 0, 0)):
        """P_idx_mm：以 (x,y,z) 索引 × 間距表示的點；off_idx：裁切區塊的起點索引 (x,y,z)。"""
        return self.org + (P_idx_mm + np.asarray(off_idx) * self.sp) @ self.D.T


def bbox(m, pad, shape):
    idx = np.argwhere(m)
    lo = np.maximum(idx.min(0) - pad, 0); hi = np.minimum(idx.max(0) + pad + 1, shape)
    return tuple(slice(a, b) for a, b in zip(lo, hi)), lo


def surface_error(V_idxmm, m, spacing):
    """重建表面到分割邊界的距離（mm）：在遮罩的帶號距離場上取樣網格頂點。"""
    sz, sy, sx = spacing[2], spacing[1], spacing[0]
    din = ndi.distance_transform_edt(m, sampling=(sz, sy, sx)); dout = ndi.distance_transform_edt(~m, sampling=(sz, sy, sx))
    sd = np.where(m, -din + 0.5 * min(spacing), dout - 0.5 * min(spacing))
    ijk = V_idxmm[:, ::-1] / np.array([sz, sy, sx])
    d = ndi.map_coordinates(sd, ijk.T, order=1, mode='nearest')
    return np.abs(d)


# ---------------- 主流程
def body_mask(A, modality):
    if modality == 'CT':
        m = A > -350
    else:
        a = A.astype(np.float32); v = a[a > np.percentile(a, 5)]
        hist, edges = np.histogram(v, 256); w = np.cumsum(hist).astype(float); mu = np.cumsum(hist * edges[:-1])
        bc = (mu[-1] * w / w[-1] - mu) ** 2 / np.maximum(w * (w[-1] - w), 1); th = edges[np.argmax(bc)]      # Otsu 門檻
        m = ndi.gaussian_filter(a, 1.0) > 0.5 * th
    lab, n = ndi.label(m)
    if n == 0: return m
    cnt = np.bincount(lab.ravel()); cnt[0] = 0; keep = np.where(cnt > 0.05 * cnt.max())[0]
    m = np.isin(lab, keep)
    disk = np.hypot(*np.mgrid[-3:4, -3:4]) <= 3      # 去掉貼在皮膚上的細長物（心電圖導線、管路）：寬度 < 約 6 mm 的會被開運算移除
    for k in range(m.shape[0]): m[k] = ndi.binary_fill_holes(ndi.binary_opening(m[k], structure=disk))
    lab, n = ndi.label(m)
    if n > 1: cnt = np.bincount(lab.ravel()); cnt[0] = 0; m = np.isin(lab, np.where(cnt > 0.05 * cnt.max())[0])
    return m


def build(img, lab, classes, modality='CT', log=print, source='', seg_model=''):
    t0 = time.time(); g = Grid(img)
    A = sitk.GetArrayFromImage(img); L = sitk.GetArrayFromImage(lab).astype(np.int32)
    assert A.shape == L.shape, (A.shape, L.shape)
    sp = g.sp; vox = float(np.prod(sp)) / 1000.0      # mL
    CT = modality == 'CT'
    log('體表')
    # 體表：在約 2 mm 的格點上平滑取面（皮膚面的精度約 1–2 mm 即足夠，速度快很多）
    body = body_mask(A, modality)
    f = np.maximum(1, np.round(2.0 / sp[::-1]).astype(int))
    bs = body[::f[0], ::f[1], ::f[2]]; sp_b = sp * f[::-1]
    V, F = mesh_mask(bs, sp_b, sigma_mm=2.0)
    structs = []; centroids = {}; levels = {}

    def zprof(mask, k0, step=1):
        """每一層的截面積（cm²），供前後比較時只算兩次共同涵蓋的高度範圍：[第一層的 z（mm）, 層距（mm）, 面積…]。"""
        a = mask.reshape(mask.shape[0], -1).sum(1) * sp[0] * sp[1] / 100.0 * step * step
        z0 = float(g.phys(np.array([0.0, 0.0, k0 * sp[2]]))[2]); dz = float(sp[2] * g.D[2, 2])
        return [round(z0, 2), round(dz, 3)] + [round(float(x), 2) for x in a]

    def add(name, P, F, mask_vol, hu, cat=None, zh=None, color=None, err=None, zp=None):
        z, c, col = describe(name)
        structs.append(dict(name=name, zh=zh or z, cat=cat or c, color=color or col, vol_ml=round(mask_vol, 1),
                            hu=None if hu is None else round(float(hu), 1), err=err, zp=zp, V=P.astype(np.float32), F=F.astype(np.uint32)))
    if V is not None:
        V, F = smooth_decimate(V, F, 60000, it=15)
        add('body', g.phys(V), F, float(body.sum()) * vox, None, cat='skin', zh='體表（皮膚）', color='#e8b89a', zp=zprof(body, 0))

    log('分割結構')
    counts = np.bincount(L.ravel(), minlength=max(classes) + 1); objs = ndi.find_objects(L)
    for k, name in sorted(classes.items()):
        if k >= len(counts) or counts[k] < 30 or objs[k - 1] is None: continue
        zh, cat, col = describe(name)
        sl = tuple(slice(max(0, o.start - 4), min(n, o.stop + 4)) for o, n in zip(objs[k - 1], L.shape)); lo = np.array([o.start for o in sl])
        m = L[sl] == k; a = A[sl]
        if CT and cat == 'bone':
            # 骨骼表面修正：分割（3 mm 模型）邊界附近，以原解析度的 CT 值（> 180 HU）貼齊皮質骨
            ero = ndi.binary_erosion(m, iterations=1); dil = ndi.binary_dilation(m, iterations=2)
            r = ero | (dil & (a > 180)); r = ndi.binary_closing(r, iterations=1)
            r = ndi.binary_fill_holes(r); lb, nl = ndi.label(r)
            if nl > 1:
                cnt = np.bincount(lb.ravel()); cnt[0] = 0; r = lb == np.argmax(cnt) if name.startswith(('rib', 'vertebrae', 'sternum')) else np.isin(lb, np.where(cnt > 0.1 * cnt.max())[0])
            if r.sum() > 0.5 * m.sum(): m = r
        sig = 0.7 if (CT and cat == 'bone') else 1.4
        V, F = mesh_mask(m, sp, sigma_mm=sig)
        if V is None: continue
        area = 0.5 * np.linalg.norm(np.cross(V[F[:, 1]] - V[F[:, 0]], V[F[:, 2]] - V[F[:, 0]]), axis=1).sum()
        tgt = int(np.clip(area / (5.0 if cat in ('bone', 'cart') else 8.0), 400, 24000))
        V, F = smooth_decimate(V, F, tgt, it=12 if cat == 'bone' else 20)
        e = surface_error(V, m, sp)
        hu = float(a[m].mean())
        off = np.array([lo[2], lo[1], lo[0]])
        add(name, g.phys(V, off), F, float(m.sum()) * vox, hu, err=[round(float(e.mean()), 2), round(float(np.percentile(e, 95)), 2)], zp=zprof(m, lo[0]))
        idx = np.argwhere(m).mean(0)[::-1] + off; centroids[name] = g.phys(idx * sp).round(2).tolist()
        if level_order(name): levels[name] = centroids[name][2]
    log(f'結構 {len(structs)} 個，{time.time() - t0:.0f} 秒')

    metrics, quality = {}, {}
    if CT:
        musc = other_muscle(A, L, body, classes, sp, log)
        if musc is not None:
            V, F, vol = musc; add('other_muscle', g.phys(V), F, vol, None, cat='muscle', zh='其他骨骼肌（依 CT 值估計）', color='#b8505a')
        metrics, quality = ct_metrics(A, L, body, classes, sp, g, levels, log)
    quality.update(voxel_mm=[round(float(x), 3) for x in sp], size=[int(x) for x in g.size], modality=modality, seg_model=seg_model,
                   coverage=_coverage(levels), surface_error_mm=_err_summary(structs))
    return structs, dict(metrics=metrics, quality=quality, centroids=centroids, levels=levels, source=source, seconds=round(time.time() - t0))


def _coverage(levels):
    if not levels: return None
    ks = sorted(levels, key=level_order)
    return [ks[0].replace('vertebrae_', ''), ks[-1].replace('vertebrae_', '')]


def _err_summary(structs):
    e = [s['err'] for s in structs if s.get('err')]
    if not e: return None
    a = np.array(e); return dict(mean=round(float(a[:, 0].mean()), 2), p95_max=round(float(a[:, 1].max()), 2))


NONMUSCLE_PREFIX = ('lung', 'heart', 'aorta', 'atrial', 'pulmonary', 'superior_vena', 'inferior_vena', 'portal', 'brachiocephalic', 'subclavian',
                    'common_carotid', 'iliac', 'liver', 'spleen', 'kidney', 'stomach', 'pancreas', 'gallbladder', 'adrenal', 'esophagus', 'trachea',
                    'thyroid', 'small_bowel', 'duodenum', 'colon', 'urinary_bladder', 'prostate', 'brain', 'spinal_cord')


VISCERA_PREFIX = ('liver', 'spleen', 'kidney', 'stomach', 'pancreas', 'gallbladder', 'adrenal', 'small_bowel', 'duodenum', 'colon',
                  'urinary_bladder', 'prostate', 'esophagus', 'inferior_vena_cava', 'aorta', 'portal')


def viscera_hull(l, classes, dil=1):
    """單一軸切面上腹腔器官（含腸道）的凸包：分割沒標到的腸管、腸繫膜多半在這個範圍內，不算骨骼肌。"""
    from skimage.morphology import convex_hull_image
    lut = np.zeros(max(classes) + 1, bool)
    for k, n in classes.items():
        if n.startswith(VISCERA_PREFIX): lut[k] = True
    v = lut[l]
    if v.sum() < 30: return np.zeros_like(v)
    h = convex_hull_image(v)
    return ndi.binary_dilation(h, iterations=dil) if dil else h


def wall_layer(cand, body, maxd_px, gap_px=3, n_rays=540):
    """單一軸切面：從皮膚往身體中心沿放射線，取遇到的第一段肌肉（中間可有 gap_px 以內的細脂肪層），最深 maxd_px。
    腹部沒被分割到的腸管與體壁肌肉 CT 值相同，只能用「最外層那段」近似體壁肌。"""
    out = np.zeros_like(cand)
    ys, xs = np.nonzero(body)
    if len(ys) < 50: return out
    cy, cx = ys.mean(), xs.mean(); R = np.hypot(ys - cy, xs - cx).max() + 2
    t = np.arange(0, R, 0.7); ang = np.linspace(0, 2 * np.pi, n_rays, endpoint=False)
    Y = np.clip(np.round(cy + np.outer(np.sin(ang), t)).astype(int), 0, body.shape[0] - 1); X = np.clip(np.round(cx + np.outer(np.cos(ang), t)).astype(int), 0, body.shape[1] - 1)
    B = body[Y, X]; C = cand[Y, X]
    for r in range(n_rays):
        bi = np.nonzero(B[r])[0]
        if not len(bi): continue
        j = bi.max(); stop = max(0, j - maxd_px / 0.7); seen = False; gap = 0
        while j > stop:
            if C[r, j]: seen = True; gap = 0; out[Y[r, j], X[r, j]] = True
            elif seen:
                gap += 1
                if gap > gap_px / 0.7: break
            j -= 1
    return ndi.binary_closing(out, iterations=1) & cand


def other_muscle(A, L, body, classes, sp, log):
    """分割沒有標的骨骼肌（胸壁、腹壁、肩背等）：體內、CT 值 −29～150、排除器官血管骨骼與已分割的肌肉、去掉皮膚下 3 mm。在約 1.5 mm 格點上做。"""
    log('其他骨骼肌（CT 值）')
    f = np.maximum(1, np.round(1.5 / sp[::-1]).astype(int)); a = A[::f[0], ::f[1], ::f[2]]; l = L[::f[0], ::f[1], ::f[2]]; b = body[::f[0], ::f[1], ::f[2]]
    sp2 = sp * f[::-1]
    excl = np.zeros_like(b)
    lut = np.zeros(max(classes) + 1, bool)
    for k, n in classes.items():
        if n.startswith(NONMUSCLE_PREFIX) or describe(n)[1] in ('bone', 'cart', 'muscle'): lut[k] = True
    excl = lut[l]
    excl = ndi.binary_dilation(excl, iterations=1)
    inner = ndi.binary_erosion(b, iterations=max(1, int(round(3.0 / sp2.min()))))
    m = inner & (a >= -29) & (a <= 150) & ~excl
    for z in range(m.shape[0]):
        if not m[z].any(): continue
        m[z] &= ~viscera_hull(l[z], classes, dil=0)      # 腹腔內（器官凸包）不算骨骼肌
        # 每個身體區塊（軀幹、手臂）各自從皮膚往內，只取體壁最外層那段肌肉：腹部沒被分割的腸管 CT 值與肌肉相同，
        # 胸部也一樣處理，上下才不會在橫膈處出現落差
        cc, nc = ndi.label(b[z]); keep = np.zeros_like(m[z])
        for c in range(1, nc + 1):
            comp = cc == c
            if comp.sum() > 200: keep |= wall_layer(m[z] & comp, comp, maxd_px=45.0 / sp2[0], gap_px=4.0 / sp2[0])
        m[z] = keep
    m = ndi.binary_opening(m, iterations=1)
    lb, n = ndi.label(m)
    if n == 0: return None
    cnt = np.bincount(lb.ravel()) * np.prod(sp2) / 1000; cnt[0] = 0
    m = np.isin(lb, np.where(cnt > 3.0)[0])
    if not m.any(): return None
    V, F = mesh_mask(m, sp2, sigma_mm=1.2)
    V, F = smooth_decimate(V, F, 60000, it=15)
    return V, F, float(m.sum()) * np.prod(sp2) / 1000


def ct_metrics(A, L, body, classes, sp, g, levels, log):
    """CT 量化：L3 骨骼肌與脂肪面積、L1 椎體海綿骨 CT 值、肝脾 CT 值；判斷是否打了顯影劑。"""
    inv = {n: k for k, n in classes.items()}; M = {}; Qd = {}
    mean_in = lambda name: float(A[L == inv[name]].mean()) if name in inv and (L == inv[name]).any() else None
    ao = mean_in('aorta'); contrast = ao is not None and ao > 150
    Qd['contrast'] = dict(aorta_hu=None if ao is None else round(ao), enhanced=bool(contrast))
    # L3 中段：骨骼肌面積（SMA）、內臟與皮下脂肪
    if 'vertebrae_L3' in inv and (L == inv['vertebrae_L3']).any():
        zs = np.where((L == inv['vertebrae_L3']).any((1, 2)))[0]; k = int(zs.mean())
        a = A[k]; l = L[k]; b = body[k]; px = sp[0] * sp[1] / 100.0      # cm²
        lb0, n0 = ndi.label(b)
        if n0 > 1: cnt0 = np.bincount(lb0.ravel()); cnt0[0] = 0; b = lb0 == np.argmax(cnt0)      # 只量軀幹（放在身旁的手臂不算）
        area = lambda names: round(float(sum((l == inv[n]).sum() for n in names if n in inv) * px), 1)
        hu_of = lambda names: (lambda mm: round(float(a[mm].mean()), 1) if mm.any() else None)(np.isin(l, [inv[n] for n in names if n in inv]))
        PS, PV = ('iliopsoas_left', 'iliopsoas_right'), ('autochthon_left', 'autochthon_right')
        M['L3'] = dict(z_mm=round(float(g.phys(np.array([0, 0, k * sp[2]]))[2]), 1), psoas_cm2=area(PS), psoas_hu=hu_of(PS),
                       paraspinal_cm2=area(PV), paraspinal_hu=hu_of(PV),
                       note='腰大肌、豎脊肌為 TotalSegmentator 分割；全部骨骼肌面積（SMA）與內臟／皮下脂肪需組織分割模型')
    # L1 椎體海綿骨：椎體前半、內縮 3 mm、中間三分之一高度
    for lv in ('vertebrae_L1', 'vertebrae_T12', 'vertebrae_L2'):
        if lv in inv and (L == inv[lv]).any():
            v = L == inv[lv]; sl, lo = bbox(v, 1, v.shape); v = v[sl]; a = A[sl]
            ys = np.where(v.any((0, 2)))[0]; yc = ys.min() + int(0.45 * (ys.max() - ys.min()))
            body_part = v.copy(); body_part[:, yc:, :] = False      # LPS：y 越大越後面，椎體在前
            zz = np.where(body_part.any((1, 2)))[0]; z0, z1 = zz.min() + (np.ptp(zz) // 3), zz.max() - (np.ptp(zz) // 3)
            body_part[:z0] = False; body_part[z1 + 1:] = False
            # 椎體中央的橢圓 ROI（避開皮質骨與終板）：每層取椎體範圍中心、半徑為寬深的 30%
            core = np.zeros_like(body_part)
            for z in range(z0, z1 + 1):
                yy, xx = np.nonzero(body_part[z])
                if len(yy) < 10: continue
                cy, cx = (yy.min() + yy.max()) / 2, (xx.min() + xx.max()) / 2; ry, rx = 0.3 * (yy.max() - yy.min()), 0.3 * (xx.max() - xx.min())
                Y, X = np.ogrid[:body_part.shape[1], :body_part.shape[2]]
                core[z] = (((Y - cy) / max(ry, 1)) ** 2 + ((X - cx) / max(rx, 1)) ** 2 <= 1) & body_part[z]
            if core.sum() > 20:
                M['vertebral_hu'] = dict(level=lv.replace('vertebrae_', ''), hu=round(float(np.median(a[core])), 1), n_vox=int(core.sum())); break
    lh, sh = mean_in('liver'), mean_in('spleen')
    if lh is not None: M['liver_hu'] = round(lh, 1)
    if sh is not None: M['spleen_hu'] = round(sh, 1)
    if lh is not None and sh is not None: M['liver_spleen_diff'] = round(lh - sh, 1)
    return M, Qd


# ---------------- 封包
def pack(structs, meta, vol_bytes=None):
    """[u32 標頭長度][標頭 JSON][int16 頂點（以中心為原點、單位 0.05 mm）][uint32 三角形]，整體 gzip。"""
    allV = np.concatenate([s['V'] for s in structs]); lo, hi = allV.min(0), allV.max(0); c = (lo + hi) / 2
    vparts, fparts, items, vo, fo = [], [], [], 0, 0
    for i, s in enumerate(structs):
        q = np.round((s['V'] - c) / Q).astype(np.int16); vparts.append(q); fparts.append(s['F'].astype(np.uint32))
        items.append({k: v for k, v in s.items() if k not in ('V', 'F')} | dict(i=i, vo=vo, nv=len(q), fo=fo, nf=len(s['F'])))
        vo += len(q); fo += len(s['F'])
    hdr = dict(version=1, kind='recon', q=Q, center=c.round(3).tolist(), bbox=[lo.round(2).tolist(), hi.round(2).tolist()], structures=items, **meta)
    hj = json.dumps(hdr, ensure_ascii=False).encode('utf8')
    hj += b' ' * ((-len(hj)) % 4)
    body = struct.pack('<I', len(hj)) + hj + np.concatenate(vparts).tobytes() + (b'\0\0' if vo % 2 else b'') + np.concatenate(fparts).tobytes()
    return gzip.compress(body, 6), hdr
