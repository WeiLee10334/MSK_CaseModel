# 把模板人體擬合到一份 CT：骨骼逐一對位、沿射線轉移肌肉層與皮下脂肪層厚度、CT 範圍外平順接回模板。
# 座標：模型座標為公分，X 向個案左側、Y 向上、Z 向前；CT 為 LPS（毫米）。X = x/10、Y = z/10、Z = -y/10。
import re, time
import numpy as np
import SimpleITK as sitk
from scipy import ndimage
from scipy.spatial import cKDTree
from scipy.sparse import coo_matrix
from skimage import measure

H = 1.5                                   # 分析網格（毫米）
FADE = 7.0                                # CT 掃描範圍上端的淡出長度（公分）
EXT = 15.0                                # 掃描範圍下端以下，沿用邊界位移並漸減的長度（公分）
ORD = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth']
VERTS = [f'C{i}' for i in range(1, 8)] + [f'T{i}' for i in range(1, 13)] + [f'L{i}' for i in range(1, 6)]


def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)


def umeyama(src, dst, scale=True, w=None):
    w = np.ones(len(src)) if w is None else w; w = w / w.sum()
    ms, md = (src * w[:, None]).sum(0), (dst * w[:, None]).sum(0)
    S, D = src - ms, dst - md
    C = (D * w[:, None]).T @ S
    U, sv, Vt = np.linalg.svd(C); d = np.sign(np.linalg.det(U @ Vt)); E = np.diag([1, 1, d])
    R = U @ E @ Vt
    s = (sv * np.diag(E)).sum() / (w * (S ** 2).sum(1)).sum() if scale else 1.0
    return s, R, md - s * R @ ms


def adjacency(n, tri):
    r = np.concatenate([tri[:, 0], tri[:, 1], tri[:, 2], tri[:, 1], tri[:, 2], tri[:, 0]]); c = np.concatenate([tri[:, 1], tri[:, 2], tri[:, 0], tri[:, 0], tri[:, 1], tri[:, 2]])
    A = coo_matrix((np.ones(len(r)), (r, c)), shape=(n, n)).tocsr(); A.data[:] = 1; return A


# ---------------------------------------------------------------- CT 端
class CTVolume:
    def __init__(self, img, lab_img, classmap, log=print):
        self.log = log
        ref = sitk.Image([int(round(s * p / H)) for s, p in zip(img.GetSize(), img.GetSpacing())], sitk.sitkInt16)
        ref.SetSpacing((H, H, H)); ref.SetOrigin(img.GetOrigin()); ref.SetDirection(img.GetDirection())
        ct = sitk.Resample(img, ref, sitk.Transform(), sitk.sitkLinear, -3024)
        lab = sitk.Resample(lab_img, ref, sitk.Transform(), sitk.sitkNearestNeighbor, 0)
        self.hu = sitk.GetArrayFromImage(ct).astype(np.int16)          # (k=S, j=P, i=L)
        self.lab = sitk.GetArrayFromImage(lab).astype(np.uint8)
        self.o = np.array(ref.GetOrigin()); self.shape = self.hu.shape
        self.names = {int(k): v for k, v in classmap.items()}
        self.ids = {v: k for k, v in self.names.items()}
        self._masks()

    def vox2model(self, kji):
        kji = np.asarray(kji, float)
        x = self.o[0] + kji[..., 2] * H; y = self.o[1] + kji[..., 1] * H; z = self.o[2] + kji[..., 0] * H
        return np.stack([x / 10, z / 10, -y / 10], -1)

    def model2vox(self, P):
        P = np.asarray(P, float)
        return np.stack([(P[..., 1] * 10 - self.o[2]) / H, (-P[..., 2] * 10 - self.o[1]) / H, (P[..., 0] * 10 - self.o[0]) / H], -1)

    def label_mask(self, names):
        ids = [self.ids[n] for n in names if n in self.ids]
        return np.isin(self.lab, ids) if ids else np.zeros(self.shape, bool)

    def _masks(self):
        t0 = time.time(); hu, lab = self.hu, self.lab
        self.fovout = hu < -2000
        body = (hu > -400) & ~self.fovout
        body = ndimage.binary_opening(body, iterations=1)
        cc, n = ndimage.label(body)
        if n > 1:
            sz = ndimage.sum(np.ones_like(cc), cc, range(1, n + 1)); body = cc == (1 + int(np.argmax(sz)))
        for k in range(body.shape[0]): body[k] = ndimage.binary_fill_holes(body[k])
        self.body = body
        self.trunc = ndimage.binary_dilation(self.fovout, iterations=2) & ndimage.binary_dilation(body, iterations=1)
        bone_names = [v for v in self.names.values() if re.match(r'(vertebrae_|rib_|sternum|costal_cart|clavicula|scapula|humerus|hip_|sacrum|femur_|skull)', v)]
        organ_names = [v for v in self.names.values() if v not in bone_names and not re.match(r'(autochthon|iliopsoas|gluteus)', v)]
        self.bone = self.label_mask(bone_names); organs = self.label_mask(organ_names)
        self.axial = self.label_mask([v for v in self.names.values() if re.match(r'(vertebrae_|rib_|sternum|costal_cart)', v)])
        dist = ndimage.distance_transform_edt(body) * H
        deep = dist >= 3.0                                              # 去掉表皮與真皮約 3 mm
        self.muscle = body & deep & (hu >= -29) & (hu <= 150) & ~self.bone & ~organs
        self.fat = body & (hu >= -190) & (hu <= -30)
        core = (self.muscle | self.bone | organs) & deep
        core = ndimage.binary_opening(core, structure=np.ones((1, 3, 3), bool))
        core_c = np.zeros_like(core)
        st = ndimage.generate_binary_structure(2, 1)
        for k in range(core.shape[0]):
            c = ndimage.binary_closing(core[k], structure=st, iterations=3)
            cc2, n2 = ndimage.label(c)
            if n2 > 1:
                sz = ndimage.sum(np.ones_like(cc2), cc2, range(1, n2 + 1)); keep = 1 + np.where(sz >= max(200, 0.02 * sz.max()))[0]; c = np.isin(cc2, keep)
            core_c[k] = ndimage.binary_fill_holes(c)
        self.core = core_c & body
        self.subq = body & ~self.core & self.fat
        cav = np.zeros_like(core_c)
        for k in range(core.shape[0]):
            c = ndimage.binary_closing(organs[k], structure=st, iterations=5); cav[k] = ndimage.binary_dilation(ndimage.binary_fill_holes(c), structure=st)
        self.cavity = cav                                               # 胸腔與腹腔內容物（量肌肉面積時排除）
        ks = np.where(body.reshape(body.shape[0], -1).sum(1) > 2000)[0]
        self.k_lo, self.k_hi = int(ks.min()), int(ks.max())
        self.log(f'CT 組織分類完成 {time.time() - t0:.0f} 秒；體表涵蓋第 {self.k_lo}–{self.k_hi} 層')

    def surface(self, mask, step=1):
        """二值遮罩的等值面（模型座標，公分）。"""
        if mask.sum() < 30: return None, None
        idx = np.argwhere(mask); lo = np.maximum(idx.min(0) - 2, 0); hi = np.minimum(idx.max(0) + 3, np.array(self.shape))
        crop = mask[lo[0]:hi[0], lo[1]:hi[1], lo[2]:hi[2]].astype(np.float32)
        crop = np.pad(crop, 1); crop = ndimage.gaussian_filter(crop, 0.6)
        v, f, _, _ = measure.marching_cubes(crop, 0.5, step_size=step)
        v = v - 1 + lo
        return self.vox2model(v), f.astype(np.int64)

    def touches_ends(self, mask):
        ks = np.where(mask.reshape(mask.shape[0], -1).any(1))[0]
        return len(ks) == 0 or ks.min() <= self.k_lo + 1 or ks.max() >= self.k_hi - 1


# ---------------------------------------------------------------- 對位
def icp_fit(X, Y, ylim, iters_sim=12, iters_aff=10, lam=0.3):
    """X（已整體對位的模板點）對到 Y（CT 表面點），先相似變換再加正則化的仿射。回傳函式。"""
    ty = cKDTree(Y); A = np.eye(3); b = np.zeros(3)
    inside = (X[:, 1] > ylim[0] + 0.3) & (X[:, 1] < ylim[1] - 0.3)
    def pairs(Xa, thr):
        d, j = ty.query(Xa); m = (d < thr) & inside
        d2, i2 = cKDTree(Xa).query(Y); m2 = d2 < thr
        return np.concatenate([X[m], X[i2[m2]]]), np.concatenate([Y[j[m]], Y[m2]])
    for it in range(iters_sim + iters_aff):
        Xa = X @ A.T + b
        d0, _ = ty.query(Xa[inside] if inside.any() else Xa)
        thr = max(0.35, min(3.0, np.percentile(d0, 85) * 1.5))
        src, dst = pairs(Xa, thr)
        if len(src) < 12: break
        s, R, t = umeyama(src, dst, scale=True)
        if it < iters_sim:
            A, b = s * R, t
        else:
            cs = src.mean(0); P = np.hstack([src - cs, np.ones((len(src), 1))])
            W0 = np.vstack([(s * R).T, (s * R @ cs + t)[None]])
            reg = lam * len(src) * np.diag([1, 1, 1, 0])
            W = np.linalg.solve(P.T @ P + reg, P.T @ dst + reg @ W0)
            A = W[:3].T; b = W[3] - A @ cs
    return A, b


def nonrigid(Xv, tri, Y, ylim, rounds=3, thr=0.8):
    A = adjacency(len(Xv), tri); deg = np.maximum(np.asarray(A.sum(1)).ravel(), 1); ty = cKDTree(Y)
    inside = (Xv[:, 1] > ylim[0] + 0.3) & (Xv[:, 1] < ylim[1] - 0.3)
    for r in range(rounds):
        d, j = ty.query(Xv); m = (d < thr) & inside
        acc = np.zeros_like(Xv); cnt = np.zeros(len(Xv))
        acc[m] += Y[j[m]] - Xv[m]; cnt[m] += 1
        d2, i2 = cKDTree(Xv).query(Y); m2 = (d2 < thr) & inside[i2]
        np.add.at(acc, i2[m2], Y[m2] - Xv[i2[m2]]); np.add.at(cnt, i2[m2], 1)
        wv = (cnt > 0).astype(float); disp = acc / np.maximum(cnt, 1)[:, None]
        num, den = disp * wv[:, None], wv.copy()
        for _ in range(8): num = 0.5 * num + 0.5 * (A @ num) / deg[:, None]; den = 0.5 * den + 0.5 * (A @ den) / deg
        Xv = Xv + 0.7 * num / np.maximum(den, 1e-3)[:, None] * np.minimum(den / 0.2, 1)[:, None]
    return Xv


def section_area(X, tri, Y0):
    """封閉網格在 y = Y0 平面上的截面積（公分²），以有向線段積分。"""
    d = X[:, 1] - Y0; da, db, dc = d[tri[:, 0]], d[tri[:, 1]], d[tri[:, 2]]
    cross = ~(((da > 0) & (db > 0) & (dc > 0)) | ((da <= 0) & (db <= 0) & (dc <= 0)))
    if not cross.any(): return 0.0
    T = tri[cross]; a = 0.0
    P = X[T]; D = d[T]
    n = np.cross(P[:, 1] - P[:, 0], P[:, 2] - P[:, 0])
    pts = []
    for (i, j) in ((0, 1), (1, 2), (2, 0)):
        s_ = (D[:, i] > 0) != (D[:, j] > 0); u = np.where(s_, D[:, i] / np.where(s_, D[:, i] - D[:, j], 1), np.nan)
        pts.append(P[:, i] + u[:, None] * (P[:, j] - P[:, i]))
    pts = np.stack(pts, 1); ok = ~np.isnan(pts[:, :, 0])
    seg = np.array([p_[o_][:2] if o_.sum() >= 2 else np.full((2, 3), np.nan) for p_, o_ in zip(pts, ok)])
    good = ~np.isnan(seg[:, 0, 0]); seg, n = seg[good], n[good]
    dvec = seg[:, 1] - seg[:, 0]
    # 方向：(三角形法向 × 平面法向) 與線段同向
    want = np.cross(n, np.array([0.0, 1.0, 0.0]))
    flip = (want * dvec).sum(1) < 0
    p0 = np.where(flip[:, None], seg[:, 1], seg[:, 0]); p1 = np.where(flip[:, None], seg[:, 0], seg[:, 1])
    return abs(0.5 * float((p0[:, 2] * p1[:, 0] - p1[:, 2] * p0[:, 0]).sum()))


def pair_list(model, ct):
    """(名稱, 模板部件, CT 標籤名稱, 類別)"""
    out = []
    for v in VERTS:
        ps = model.find(f'Vertebra {v}', t=2)
        if ps and f'vertebrae_{v}' in ct.ids: out.append((f'vertebrae_{v}', ps, [f'vertebrae_{v}'], 'axial'))
    for i, w in enumerate(ORD):
        for side, sn in ((0, 'left'), (1, 'right')):
            ps = model.find(f'{w} rib', side=side, t=2)
            if ps and f'rib_{sn}_{i + 1}' in ct.ids: out.append((f'rib_{sn}_{i + 1}', ps, [f'rib_{sn}_{i + 1}'], 'axial'))
    st = [p for n in ('Manubrium of sternum', 'Body of sternum', 'Xiphoid process') for p in model.find(n, t=2)]
    if st and 'sternum' in ct.ids: out.append(('sternum', st, ['sternum'], 'axial'))
    for side, sn in ((0, 'left'), (1, 'right')):
        for en, ln in (('Clavicle', 'clavicula'), ('Scapula', 'scapula'), ('Humerus', 'humerus')):
            ps = model.find(en, side=side, t=2)
            if ps and f'{ln}_{sn}' in ct.ids: out.append((f'{ln}_{sn}', ps, [f'{ln}_{sn}'], 'girdle'))
    return out


class Fit:
    def __init__(self, model, ct, log=print):
        self.m, self.ct, self.log = model, ct, log

    def run(self):
        m, ct, log = self.m, self.ct, self.log
        t0 = time.time()
        Ylo, Yhi = ct.vox2model([ct.k_lo, 0, 0])[1], ct.vox2model([ct.k_hi, 0, 0])[1]
        self.ylim = (Ylo, Yhi)
        # 1. 結構配對與整體相似變換
        pairs = []
        for name, parts, labs, kind in pair_list(m, ct):
            mk = ct.label_mask(labs)
            if mk.sum() < 40: continue
            Y, _ = ct.surface(mk)
            if Y is None: continue
            X = np.concatenate([m.part_verts(p) for p in parts])
            pairs.append(dict(name=name, parts=parts, kind=kind, Y=Y, partial=ct.touches_ends(mk), cY=ct.vox2model(np.argwhere(mk).mean(0)), cX=X.mean(0), nvox=int(mk.sum())))
        full = [p for p in pairs if p['kind'] == 'axial' and not p['partial']]
        if len(full) < 6: raise ValueError(f'CT 內可完整辨識的胸椎、肋骨或胸骨太少（{len(full)} 個），無法對位')
        s, R, t = umeyama(np.array([p['cX'] for p in full]), np.array([p['cY'] for p in full]))
        for _ in range(3):      # 剔除離群的配對後重算
            res = np.linalg.norm(np.array([p['cY'] for p in full]) - (s * np.array([p['cX'] for p in full]) @ R.T + t), axis=1)
            keep = res < max(1.5, 2.5 * np.median(res))
            s, R, t = umeyama(np.array([p['cX'] for p, k in zip(full, keep) if k]), np.array([p['cY'] for p, k in zip(full, keep) if k]))
        self.s, self.R, self.t = s, R, t
        G = lambda P: s * P @ R.T + t
        log(f'整體對位：{len(full)} 個完整骨性結構，比例 {s:.3f}，殘差中位數 {np.median(res):.2f} cm')
        # 2. 肩帶姿勢：上臂是否舉高
        hum = [p for p in pairs if p['name'].startswith('humerus')]; scp = {p['name'][-4:]: p for p in pairs if p['name'].startswith('scapula')}
        arms_down = bool(hum) and all(p['cY'][1] < scp.get(p['name'][-4:], p)['cY'][1] - 4 for p in hum) and not any(p['partial'] for p in hum)
        self.arms_down = arms_down
        log('上臂姿勢：' + ('自然下垂，肩帶一併擬合' if arms_down else '上舉或不在影像內，肩帶沿用模板'))
        # 3. 逐一擬合骨骼
        self.fitted = {}                 # part index -> 擬合後頂點（CT 座標）
        self.bone_err = []
        for p in pairs:
            if p['kind'] == 'girdle' and not arms_down: continue
            X0 = np.concatenate([G(m.part_verts(q)) for q in p['parts']])
            A, b = icp_fit(X0, p['Y'], self.ylim)
            o = 0
            for q in p['parts']:
                Xq = X0[o:o + q['nv']] @ A.T + b
                if not p['partial']: Xq = nonrigid(Xq, m.part_tris(q), p['Y'], self.ylim)
                self.fitted[q['i']] = Xq; o += q['nv']
            Xall = np.concatenate([self.fitted[q['i']] for q in p['parts']])
            inside = (Xall[:, 1] > Ylo + 0.3) & (Xall[:, 1] < Yhi - 0.3)
            d1, _ = cKDTree(p['Y']).query(Xall[inside]) if inside.any() else (np.array([np.nan]), None)
            d2, _ = cKDTree(Xall).query(p['Y'])
            self.bone_err.append(dict(name=p['name'], partial=p['partial'], mean=float(np.nanmean(np.r_[d1, d2])), p95=float(np.nanpercentile(np.r_[d1, d2], 95))))
        log(f'骨骼擬合 {len(self.fitted)} 件，{time.time() - t0:.0f} 秒')
        # 4. 由骨骼位移內插出全身位移場
        bi = np.array(sorted(self.fitted)); src = []; disp = []
        for i in bi:
            q = m.parts[i]; P0 = G(m.part_verts(q)); step = max(1, q['nv'] // 400)
            src.append(P0[::step]); disp.append(self.fitted[i][::step] - P0[::step])
        src = np.concatenate(src); disp = np.concatenate(disp); self.src, self.disp = src, disp
        self.tree = cKDTree(src)
        P = G(m.base)
        Q = P + self.warp(P)
        for i, X in self.fitted.items():
            q = m.parts[i]; Q[q['v0']:q['v0'] + q['nv']] = X
        Ps = G(m.sbase); Qs = Ps + self.warp(Ps)
        # 肋軟骨：先跟著已擬合的肋骨與胸骨走，再貼到 CT 的肋軟骨表面
        cc = ct.label_mask(['costal_cartilages'])
        if cc.sum() > 40:
            Yc, _ = ct.surface(cc); ncc = 0
            for q in m.parts:
                if q['t'] == 3 and q['en'].startswith('Costal cartilage of'):
                    sl = slice(q['v0'], q['v0'] + q['nv']); X = Q[sl].copy()
                    near = Yc[cKDTree(X).query(Yc, distance_upper_bound=3.5)[0] < 3.5]
                    if len(near) < 30: continue
                    for thr in (2.5, 1.2, 0.6): X = nonrigid(X, m.part_tris(q), near, self.ylim, rounds=2, thr=thr)
                    self.fitted[q['i']] = X; Q[sl] = X; ncc += 1
            self.axial_extra = ncc
        log(f'位移場完成 {time.time() - t0:.0f} 秒')
        # 5. 肌肉層與皮下脂肪層厚度
        self.profiles(Q, Qs)
        Q, Qs, conf_v, conf_s = self.remap(Q, Qs)
        Qs = self.clearance(Q, Qs)
        Q, Qs = self.extend_below(Q, Qs)
        log(f'厚度轉移完成 {time.time() - t0:.0f} 秒')
        # 6. 權重：CT 範圍、上肢、肩帶
        self.Q, self.Qs = Q, Qs
        self.ws = self.weights(Qs, conf_s, structure=False); self.w = self.weights(Q, conf_v, structure=True)
        # 掃描範圍兩端與肩帶是 CT 與模板的過渡帶，兩者形狀差很多（例如仰躺的腹部）時，混合後的肌肉可能穿出皮膚。
        # 以模板（網頁預設體型）與 CT 組態依權重混合，再做一次間隙推移，推移量換算回 CT 皮膚的位移。
        G = lambda P: self.s * P @ self.R.T + self.t
        w, ws = self.w[:, None], self.ws[:, None]
        Vb = (1 - w) * G(m.base) + w * Q
        Qs = Qs.copy(); ok = self.ws > 0.03
        for it in range(2):
            Sb = (1 - ws) * G(m.sbase) + ws * Qs
            dS = self.clearance(Vb, Sb, note=f'混合後 {it + 1}') - Sb
            Qs[ok] += dS[ok] / np.maximum(self.ws[ok], 0.1)[:, None]
        self.Qs = Qs
        self.metrics(); log(f'擬合完成，共 {time.time() - t0:.0f} 秒')
        return self

    def warp(self, P, sigma=2.5, k=48):
        d, j = self.tree.query(P, k=k, workers=-1)
        w = np.exp(-0.5 * (d / sigma) ** 2)
        num = np.einsum('nk,nkj->nj', w, self.disp[j]); den = w.sum(1) + np.exp(-0.5 * (6.0 / sigma) ** 2)
        return num / den[:, None]

    # ---------------- 射線剖面
    def raster(self, P, tris, shape):
        """把三角形密集取樣並標進體素（CT 網格），回傳布林陣列。"""
        ct = self.ct; out = np.zeros(shape, bool)
        if len(tris) == 0: return out
        a, b, c = P[tris[:, 0]], P[tris[:, 1]], P[tris[:, 2]]
        L = np.maximum(np.maximum(np.linalg.norm(b - a, axis=1), np.linalg.norm(c - a, axis=1)), np.linalg.norm(c - b, axis=1))
        n = np.clip(np.ceil(L / (H / 10 * 0.8)).astype(int), 1, 40)
        for nn in np.unique(n):
            sel = n == nn; u, v = np.meshgrid(np.arange(nn + 1), np.arange(nn + 1)); keep = (u + v) <= nn
            u = u[keep] / nn; v = v[keep] / nn
            pts = a[sel][:, None] * (1 - u - v)[None, :, None] + b[sel][:, None] * u[None, :, None] + c[sel][:, None] * v[None, :, None]
            ijk = np.round(ct.model2vox(pts.reshape(-1, 3))).astype(int)
            ok = (ijk >= 0).all(1) & (ijk < np.array(shape)).all(1); ijk = ijk[ok]
            out[ijk[:, 0], ijk[:, 1], ijk[:, 2]] = True
        return out

    def profiles(self, Q, Qs):
        m, ct = self.m, self.ct; shape = ct.shape
        free = np.array([p['seg'] for p in m.parts], bool)
        axial_ids = set(self.fitted) & set(p['i'] for p in m.parts if p['t'] in (2, 3) and re.match(r'(Vertebra [CTL]|\w+ rib$|Manubrium|Body of sternum|Xiphoid|Costal cartilage)', p['en']))
        core_t = [p for p in m.parts if p['t'] in (0, 1, 2, 3, 5, 7) and not p['seg']]
        def tris_of(ps): return np.concatenate([m.tri[p['t0']:p['t0'] + p['nt']] for p in ps]) if ps else np.zeros((0, 3), int)
        sk = m.scls; trunk_t = m.stri[(sk[m.stri] < 16).all(1)]
        self.R_bone = ndimage.binary_dilation(self.raster(Q, tris_of([m.parts[i] for i in axial_ids]), shape))
        self.R_core = ndimage.binary_dilation(self.raster(Q, tris_of(core_t), shape))
        self.R_skin = ndimage.binary_dilation(self.raster(Qs, trunk_t, shape))
        # 每層的射線原點：軀幹（最大連通區）的質心
        K = np.arange(ct.k_lo, ct.k_hi + 1); TH = np.deg2rad(np.arange(0, 360, 5)); RR = np.arange(0.5, 32, 0.1)   # 公分
        orig = np.full((len(K), 2), np.nan)
        for n, k in enumerate(K):
            b = ct.body[k]; cc, nl = ndimage.label(b)
            if nl == 0: continue
            if nl > 1: sz = ndimage.sum(np.ones_like(cc), cc, range(1, nl + 1)); b = cc == 1 + int(np.argmax(sz))
            jj, ii = np.nonzero(b); orig[n] = [jj.mean(), ii.mean()]
        ok = ~np.isnan(orig[:, 0])
        for c in range(2): orig[:, c] = ndimage.uniform_filter1d(np.interp(K, K[ok], orig[ok, c]), 7)
        self.K, self.TH, self.orig = K, TH, orig
        dj = -np.cos(TH)[:, None] * 0; di = np.cos(TH); dz = np.sin(TH)          # 模型 X 向 = +i；模型 Z 向 = -j
        prof = {key: np.full((len(K), len(TH)), np.nan) for key in ('bc', 'mc', 'sc', 'bt', 'mt', 'st')}
        trc = np.zeros((len(K), len(TH)), bool)
        rstep = RR * 10 / H
        for n, k in enumerate(K):
            jj = np.round(orig[n, 0] - dz[:, None] * rstep[None, :]).astype(int); ii = np.round(orig[n, 1] + di[:, None] * rstep[None, :]).astype(int)
            inb = (jj >= 0) & (jj < shape[1]) & (ii >= 0) & (ii < shape[2]); jc = np.clip(jj, 0, shape[1] - 1); ic = np.clip(ii, 0, shape[2] - 1)
            body = ct.body[k][jc, ic] & inb; tr = ct.trunc[k][jc, ic] | ~inb
            core = ct.core[k][jc, ic] & inb; axb = ct.axial[k][jc, ic] & inb
            rb, rc, rs = self.R_bone[k][jc, ic] & inb, self.R_core[k][jc, ic] & inb, self.R_skin[k][jc, ic] & inb
            for a in range(len(TH)):
                ex = np.where(~body[a])[0]
                if len(ex) and ex[0] > 5:
                    e = ex[0]; prof['sc'][n, a] = RR[e - 1]; trc[n, a] = tr[a, min(e, len(RR) - 1)] or tr[a, e - 1]
                    c = np.where(core[a, :e])[0]
                    if len(c): prof['mc'][n, a] = RR[c[-1]]
                    bb = np.where(axb[a, :e])[0]
                    if len(bb): prof['bc'][n, a] = RR[bb[-1]]
                sh = np.where(rs[a])[0]
                if len(sh):
                    e = sh[0]; prof['st'][n, a] = RR[e] + 0.15
                    c = np.where(rc[a, :e])[0]
                    if len(c): prof['mt'][n, a] = RR[c[-1]] - 0.15
                    bb = np.where(rb[a, :e])[0]
                    if len(bb): prof['bt'][n, a] = RR[bb[-1]] - 0.15
        lay = np.isfinite(prof['mc']) & np.isfinite(prof['sc']) & np.isfinite(prof['mt']) & np.isfinite(prof['st']) & ~trc
        lay &= (prof['sc'] - prof['mc'] > 0.05) & (prof['sc'] - prof['mc'] < 9) & (prof['st'] - prof['mt'] > 0.05)
        lay &= np.abs(prof['sc'] - prof['st']) < 6
        bon = lay & np.isfinite(prof['bc']) & np.isfinite(prof['bt']) & (prof['mc'] - prof['bc'] > 0.2) & (prof['mt'] - prof['bt'] > 0.2) & (prof['mc'] - prof['bc'] < 10)
        def fill(a, ok):
            a = a.copy(); a[~ok] = np.nan
            for n in range(a.shape[0]):
                r = a[n]; g = np.isfinite(r)
                if g.sum() >= 3:
                    idx = np.arange(len(r)); a[n] = np.interp(idx, idx[g], r[g], period=len(r))
            for c in range(a.shape[1]):
                r = a[:, c]; g = np.isfinite(r)
                if g.sum() >= 2: idx = np.arange(len(r)); a[:, c] = np.interp(idx, idx[g], r[g])
            a = np.nan_to_num(a, nan=np.nanmedian(a) if np.isfinite(a).any() else 0)
            pad = np.concatenate([a[:, -1:], a, a[:, :1]], 1)          # 方向是環狀的
            return ndimage.median_filter(pad, size=(3, 3), mode='nearest')[:, 1:-1]
        self.P = {k: fill(v, bon if k[0] == 'b' else lay) for k, v in prof.items()}
        self.conf_lay = ndimage.gaussian_filter(lay.astype(float), (2, 1.5), mode=('nearest', 'wrap'))
        self.conf_bon = ndimage.gaussian_filter(bon.astype(float), (2, 1.5), mode=('nearest', 'wrap'))
        self.valid_lay, self.valid_bon, self.trc, self.raw = lay, bon, trc, prof
        self.log(f'射線剖面 {len(K)} 層 × {len(TH)} 方向：脂肪層有效 {lay.mean():.0%}、肌肉層有效 {bon.mean():.0%}')

    def lookup(self, P):
        ct = self.ct; v = ct.model2vox(P); kf = np.clip(v[:, 0] - self.K[0], 0, len(self.K) - 1.001)
        k0 = np.floor(kf).astype(int); fk = kf - k0
        oj = self.orig[k0, 0] * (1 - fk) + self.orig[np.minimum(k0 + 1, len(self.K) - 1), 0] * fk
        oi = self.orig[k0, 1] * (1 - fk) + self.orig[np.minimum(k0 + 1, len(self.K) - 1), 1] * fk
        dx = (v[:, 2] - oi) * H / 10; dzz = -(v[:, 1] - oj) * H / 10
        r = np.hypot(dx, dzz); th = np.mod(np.arctan2(dzz, dx), 2 * np.pi)
        tf = th / (2 * np.pi) * len(self.TH); t0 = np.floor(tf).astype(int) % len(self.TH); ft = tf - np.floor(tf); t1 = (t0 + 1) % len(self.TH)
        def bil(a): return (a[k0, t0] * (1 - fk) * (1 - ft) + a[np.minimum(k0 + 1, len(self.K) - 1), t0] * fk * (1 - ft) + a[k0, t1] * (1 - fk) * ft + a[np.minimum(k0 + 1, len(self.K) - 1), t1] * fk * ft)
        return r, dx, dzz, bil, (v[:, 0] >= self.K[0] - 1) & (v[:, 0] <= self.K[-1] + 1)

    def remap(self, Q, Qs):
        m = self.m; P = self.P
        soft = np.ones(m.NV, bool)
        for i in self.fitted: q = m.parts[i]; soft[q['v0']:q['v0'] + q['nv']] = False
        free = np.repeat(np.array([p['seg'] for p in m.parts], bool), [p['nv'] for p in m.parts])
        soft &= ~free
        def apply(X, mask, skin):
            r, dx, dzz, bil, inK = self.lookup(X)
            bc, mc, sc, bt, mt, stt = (bil(P[k]) for k in ('bc', 'mc', 'sc', 'bt', 'mt', 'st'))
            cl, cb = np.clip(bil(self.conf_lay), 0, 1), np.clip(bil(self.conf_bon), 0, 1)
            rn = r.copy()
            fat = (r > mt) & (r <= stt); rn[fat] = mc[fat] + (r[fat] - mt[fat]) * (sc[fat] - mc[fat]) / np.maximum(stt[fat] - mt[fat], 0.05)
            out = r > stt; rn[out] = r[out] + (sc[out] - stt[out])
            ml = r <= mt
            mus = ml & (r > bt); rb = bc + (r - bt) * (mc - bc) / np.maximum(mt - bt, 0.2)
            sh = r + (mc - mt) * smoothstep(mt - 3, mt, r)
            deep = ml & (r <= bt); rd = r + (bc - bt) * smoothstep(bt - 2, bt, r)
            rn[mus] = cb[mus] * rb[mus] + (1 - cb[mus]) * sh[mus]
            rn[deep] = cb[deep] * rd[deep] + (1 - cb[deep]) * sh[deep]
            rn = r + cl * (rn - r)
            f = np.where(r > 1e-3, rn / np.maximum(r, 1e-3), 1.0); f = np.where(mask & inK, f, 1.0)
            Y = X.copy(); Y[:, 0] += dx * (f - 1); Y[:, 2] += dzz * (f - 1)
            return Y, np.where(inK, cl, 0)
        Q2, cv = apply(Q, soft, False)
        Qs2, cs = apply(Qs, np.ones(len(Qs), bool), True)
        # 肌肉量比較：模板在 g=1 時的肌肉層厚度
        self.g_est = self.estimate_g(Q)
        return Q2, Qs2, cv, cs

    def clearance(self, Q, Qs, margin=0.15, note=''):
        """皮膚至少要蓋住正下方的組織：找出凸出皮膚的結構點，把皮膚沿法向推出去。"""
        m = self.m
        keep = np.repeat(np.array([p['t'] in (0, 1, 2, 3, 5, 6, 7) and not p['seg'] for p in m.parts], bool), [p['nv'] for p in m.parts])
        P = Q[keep][::2]; tr = cKDTree(P)
        tri = m.stri; fn = np.cross(Qs[tri[:, 1]] - Qs[tri[:, 0]], Qs[tri[:, 2]] - Qs[tri[:, 0]])
        n = np.zeros_like(Qs)
        for k in range(3): np.add.at(n, tri[:, k], fn)
        n /= np.maximum(np.linalg.norm(n, axis=1, keepdims=True), 1e-9)
        # 皮膚網格粗（邊長 2–5 cm）時，肌肉可能從頂點之間的三角形穿出：側向容許距離依局部邊長放大
        el = np.linalg.norm(Qs[tri] - Qs[np.roll(tri, 1, 1)], axis=2); le = np.zeros(len(Qs)); cnt = np.zeros(len(Qs))
        for k in range(3): np.add.at(le, tri[:, k], el[:, k]); np.add.at(cnt, tri[:, k], 1)
        tol = np.maximum(0.8, 0.6 * le / np.maximum(cnt, 1))
        d, j = tr.query(Qs, k=64, distance_upper_bound=3.5)
        ok = np.isfinite(d); jj = np.where(ok, j, 0)
        v = P[jj] - Qs[:, None]; proj = (v * n[:, None]).sum(2); lat = np.linalg.norm(v - proj[..., None] * n[:, None], axis=2)
        need = np.where(ok & (lat < tol[:, None]), proj + margin, -1).max(1)
        push = np.clip(need, 0, 2.5); push[m.scls >= 16] = 0
        A = adjacency(len(Qs), tri); deg = np.maximum(np.asarray(A.sum(1)).ravel(), 1)
        for _ in range(3): push = np.maximum(push, 0.6 * (A @ push) / deg)
        for _ in range(4): push = 0.5 * push + 0.5 * (A @ push) / deg
        self.push_stats = dict(n=int((push > 0.05).sum()), max=float(push.max()))
        self.log(f'皮膚與底下組織的間隙{note}：推出 {self.push_stats["n"]} 個頂點，最多 {self.push_stats["max"]:.1f} cm')
        return Qs + n * push[:, None]

    def estimate_g(self, Q):
        m = self.m; P = self.P
        Qg = Q.copy(); G = lambda X: self.s * X @ self.R.T
        Qg[:m.NVd] += G(m.F)                     # 模板 g=1 的增長量（已縮放）
        core_t = [p for p in m.parts if p['t'] in (0, 1, 2, 3, 5, 7) and not p['seg']]
        tri = np.concatenate([m.tri[p['t0']:p['t0'] + p['nt']] for p in core_t])
        Rg = ndimage.binary_dilation(self.raster(Qg, tri, self.ct.shape))
        RR = np.arange(0.5, 32, 0.1); mt1 = np.full(P['mt'].shape, np.nan); ct = self.ct
        di = np.cos(self.TH); dz = np.sin(self.TH); rstep = RR * 10 / H; shape = ct.shape
        for n, k in enumerate(self.K):
            jj = np.round(self.orig[n, 0] - dz[:, None] * rstep[None, :]).astype(int); ii = np.round(self.orig[n, 1] + di[:, None] * rstep[None, :]).astype(int)
            inb = (jj >= 0) & (jj < shape[1]) & (ii >= 0) & (ii < shape[2]); rc = Rg[k][np.clip(jj, 0, shape[1] - 1), np.clip(ii, 0, shape[2] - 1)] & inb
            rs = self.R_skin[k][np.clip(jj, 0, shape[1] - 1), np.clip(ii, 0, shape[2] - 1)] & inb
            for a in range(len(self.TH)):
                sh = np.where(rs[a])[0]
                if not len(sh): continue
                c = np.where(rc[a, :sh[0] + 25])[0]
                if len(c): mt1[n, a] = RR[c[-1]] - 0.15
        raw = self.raw; ok = self.valid_bon & np.isfinite(mt1)
        ks = [int(round(np.argwhere(ct.lab == ct.ids[f'vertebrae_{v}'])[:, 0].mean())) - self.K[0] for v in ('T6', 'L1') if f'vertebrae_{v}' in ct.ids]
        if len(ks) == 2:                                  # 只用 T6–L1：避開肩胛骨與上臂姿勢影響最大的上胸段
            band = np.zeros(len(self.K), bool); band[max(min(ks), 0):max(ks) + 1] = True; ok &= band[:, None]
        tc = raw['mc'] - raw['bc']; t0 = raw['mt'] - raw['bt']; t1 = mt1 - raw['bt']
        ok &= (t1 - t0 > 0.15)
        g = np.where(ok, (tc - t0) / np.where(ok, t1 - t0, 1), np.nan)
        thd = np.rad2deg(self.TH)
        front = (np.abs(((thd - 90 + 180) % 360) - 180) < 50)[None, :] & ok      # 前方（模型 +Z 為 90 度）
        back = (np.abs(((thd - 270 + 180) % 360) - 180) < 50)[None, :] & ok
        med = lambda m_: float(np.clip(np.nanmedian(g[m_]), -0.9, 1.8)) if m_.sum() > 20 else None
        out = dict(all=med(ok), chest=med(front), back=med(back), n=int(ok.sum()))
        out['erector'] = self.erector_g(Q)          # 僅供參考：模板的深層背肌網格偏細，不用來推估
        self.log(f'肌肉發達程度推估（相對模板）：整體 {out["all"]}、胸 {out["chest"]}、背 {out["back"]}（{out["n"]} 條射線）')
        return out

    def erector_g(self, Q):
        """以豎脊肌（TotalSegmentator 的 autochthon）截面積比較模板，換算成肌肉發達程度 g。"""
        m, ct = self.m, self.ct
        if 'autochthon_left' not in ct.ids: return None
        ER = re.compile(r'(Iliocostalis|Longissimus|Spinalis|Multifidus|Semispinalis (thoracis|colli)|Rotatores|Interspinales)')
        parts = [p for p in m.parts if p['t'] == 0 and ER.search(p['en'])]
        G = lambda X: self.s * X @ self.R.T
        res = []
        for v in ('T10', 'T11', 'T12', 'L1', 'L2'):
            n = f'vertebrae_{v}'
            if n not in ct.ids: continue
            mk = ct.lab == ct.ids[n]
            if mk.sum() < 40 or ct.touches_ends(mk): continue
            k = int(round(np.argwhere(mk)[:, 0].mean())); Y0 = ct.vox2model([k, 0, 0])[1]
            a_ct = float(ct.label_mask(['autochthon_left', 'autochthon_right'])[k].sum()) * (H / 10) ** 2
            a0 = a1 = 0.0
            for p in parts:
                sl = slice(p['v0'], p['v0'] + p['nv']); tri = m.part_tris(p); X = Q[sl]
                a0 += section_area(X, tri, Y0)
                if p['v0'] < m.NVd: a1 += section_area(X + G(m.F[sl]), tri, Y0)
            if a0 > 1 and a1 - a0 > 0.5 and a_ct > 1: res.append((v, a_ct, a0, a1, (a_ct - a0) / (a1 - a0)))
        if not res: return None
        g = float(np.clip(np.median([r[4] for r in res]), -0.9, 1.8))
        self.log('（參考）豎脊肌截面積 CT／模板／模板 g=1（cm²）：' + '；'.join(f'{r[0]} {r[1]:.1f}/{r[2]:.1f}/{r[3]:.1f}' for r in res) + f' → g = {g:.2f}')
        return dict(g=g, levels=[dict(level=r[0], ct=round(r[1], 1), template=round(r[2], 1), template_g1=round(r[3], 1)) for r in res])

    def extend_below(self, Q, Qs):
        """胸部 CT 通常只到上腹部。掃描範圍下端以下不直接淡回模板（仰躺的腹部和站姿模板差好幾公分，會出現一道台階），
        而是沿用邊界那一圈皮膚的位移，往下 EXT cm 逐漸減為 0；同一欄的皮膚與底下的肌肉、骨頭用同一個位移，層次不會互相穿出。"""
        m = self.m; G = lambda P: self.s * P @ self.R.T + self.t
        Gs, Gv = G(m.sbase), G(m.base); y0 = self.ylim[0] + 1.5; self.y_ext = y0
        torso = m.scls < 16
        band = torso & (Gs[:, 1] > y0) & (Gs[:, 1] < y0 + 2.5)
        if band.sum() < 30: return Q, Qs
        cx, cz = Gs[band, 0].mean(), Gs[band, 2].mean()
        ang = lambda P: np.arctan2(P[:, 2] - cz, P[:, 0] - cx)
        Db = (Qs - Gs)[band]; ab = ang(Gs[band])
        def Dang(a):
            da = np.angle(np.exp(1j * (a[:, None] - ab[None, :]))); k = np.exp(-0.5 * (da / np.deg2rad(10)) ** 2)
            return (k @ Db) / np.maximum(k.sum(1, keepdims=True), 1e-9)
        Qs = Qs.copy(); Q = Q.copy()
        BL = 6.0                                  # 邊界上方 BL cm 內，CT 形狀與延伸形狀漸變，避免轉角
        Ds = np.zeros_like(Qs); Ds[torso] = Dang(ang(Gs[torso]))
        tgt = torso & (Gs[:, 1] < y0 + BL); a_s = smoothstep(y0, y0 + BL, Gs[:, 1])[:, None]
        Qs[tgt] = (Gs + Ds)[tgt] * (1 - a_s[tgt]) + Qs[tgt] * a_s[tgt]
        # 結構：取模板靜止姿勢下最近的軀幹皮膚點的邊界位移；邊界上方 BL cm 內與自己的 CT 位移漸變
        ti = np.where(torso)[0]; _, j = cKDTree(m.sbase[ti]).query(m.base, workers=-1); Dv = Ds[ti[j]]
        fit = np.zeros(len(Q), bool)
        for i in self.fitted:
            q = m.parts[i]
            if q['t'] in (2, 3): fit[q['v0']:q['v0'] + q['nv']] = True
        a = smoothstep(y0, y0 + BL, Gv[:, 1])[:, None]
        sel = ~fit & (Gv[:, 1] < y0 + BL)
        Q[sel] = (Gv + Dv)[sel] * (1 - a[sel]) + Q[sel] * a[sel]
        self.log(f'掃描範圍下端（Y {y0:.1f}）以下沿用邊界位移，往下 {EXT:.0f} cm 漸減：軀幹皮膚 {int((torso & (Gs[:, 1] < y0)).sum())} 點')
        return Q, Qs

    def weights(self, Q, conf, structure):
        """CT 套用權重。皮膚：CT 掃描範圍（兩端 5 cm 淡出）× 肩帶淡出（手臂上舉時）。
        結構：取模板靜止姿勢下最近的軀幹皮膚點的權重，讓同一位置的皮膚、肌肉、骨頭用同一個權重混合，
        混合後才不會互相穿出；已擬合的軸骨（椎骨、肋骨、胸骨、肋軟骨）只看掃描範圍，維持與 CT 疊圖對齊。"""
        m = self.m; Ylo, Yhi = self.ylim
        fov = smoothstep(Ylo + 0.5, Ylo + FADE, Q[:, 1]) * (1 - smoothstep(Yhi - FADE, Yhi - 0.5, Q[:, 1]))
        if not structure:
            y0 = getattr(self, 'y_ext', None)
            if y0 is not None:      # 下端：依模板對齊後的高度，往下 EXT cm 漸減（見 extend_below）
                Gy = (self.s * m.sbase @ self.R.T + self.t)[:, 1]
                lo = np.where(Gy >= y0, 1.0, 1 - smoothstep(0, EXT, y0 - Gy))
                fov = lo * (1 - smoothstep(Yhi - FADE, Yhi - 0.5, Q[:, 1]))
            w = fov.copy(); w[m.scls >= 16] = 0
            if not self.arms_down:
                L = self.m.lm['shoulder3']; G = lambda P: self.s * np.asarray(P) @ self.R.T + self.t
                for sg in (1, -1):
                    c = G([sg * L[0], L[1] - 1.5, L[2]]); c = c + self.warp(c[None])[0]
                    w = w * smoothstep(5, 12, np.linalg.norm(Q - c, axis=1))
            return np.clip(w, 0, 1)
        torso = np.where(m.scls < 16)[0]
        _, j = cKDTree(m.sbase[torso]).query(m.base, workers=-1)
        w = self.ws[torso[j]].copy()
        free = np.repeat(np.array([p['seg'] for p in m.parts], bool), [p['nv'] for p in m.parts]); w[free] = 0
        for i in self.fitted:
            q = m.parts[i]
            if q['t'] in (2, 3) and not re.match(r'(Clavicle|Scapula|Humerus)', q['en']):
                sl = slice(q['v0'], q['v0'] + q['nv']); w[sl] = fov[sl]
        return np.clip(w, 0, 1)

    # ---------------- 結果
    def metrics(self):
        m, ct = self.m, self.ct
        Qs, ws = self.Qs, self.ws
        sel = ws > 0.9
        surf, _ = ct.surface(ct.body & ~ct.trunc, step=2)
        d_skin = cKDTree(surf).query(Qs[sel])[0] if sel.any() else np.array([np.nan])
        self.fit_err = dict(bones=self.bone_err, skin_mean=float(np.nanmean(d_skin)), skin_p95=float(np.nanpercentile(d_skin, 95)))

    def measurements(self):
        """CT 實測值：在 T4、T12 椎體高度的肌肉與脂肪面積、平均 HU。"""
        ct = self.ct; out = {}
        A = (H / 10) ** 2
        for v in ('T4', 'T8', 'T12', 'L1'):
            n = f'vertebrae_{v}'
            if n not in ct.ids: continue
            mk = ct.lab == ct.ids[n]
            if mk.sum() < 40 or ct.touches_ends(mk): continue
            k = int(round(np.argwhere(mk)[:, 0].mean()))
            mus = ct.muscle[k] & ct.core[k] & ~ct.cavity[k]; e = {}
            e['muscle_cm2'] = round(float(mus.sum() * A), 1)
            e['muscle_hu'] = round(float(ct.hu[k][mus].mean()), 1) if mus.any() else None
            e['subq_fat_cm2'] = round(float(ct.subq[k].sum() * A), 1)
            au = ct.label_mask(['autochthon_left', 'autochthon_right'])[k]
            if au.any(): e['erector_cm2'] = round(float(au.sum() * A), 1); e['erector_hu'] = round(float(ct.hu[k][au].mean()), 1)
            ribs = ct.label_mask([x for x in ct.names.values() if x.startswith('rib_')])[k]
            if ribs.any():
                jj, ii = np.nonzero(ribs); e['ribcage_width_cm'] = round(float((ii.max() - ii.min()) * H / 10), 1); e['ribcage_depth_cm'] = round(float((jj.max() - jj.min()) * H / 10), 1)
            out[v] = e
        thd = np.rad2deg(self.TH); raw = self.raw; lay = self.valid_lay
        def sect(c, half=40): return (np.abs(((thd - c + 180) % 360) - 180) < half)[None, :] & lay
        fat_t = raw['sc'] - raw['mc']
        out['subq_mm'] = {k: (round(float(np.nanmedian(fat_t[sect(c)]) * 10), 1) if sect(c).sum() > 10 else None) for k, c in (('anterior', 90), ('posterior', 270), ('left', 0), ('right', 180))}
        levels = [v for v in VERTS if f'vertebrae_{v}' in ct.ids and (ct.lab == ct.ids[f'vertebrae_{v}']).sum() > 40]
        out['levels'] = [levels[0], levels[-1]] if levels else None
        return out

    def overlays(self, mode='bones'):
        ct = self.ct; groups = []
        bones = [v for v in ct.names.values() if re.match(r'(vertebrae_|rib_|sternum|costal_cart|clavicula|scapula|humerus)', v)]
        for name, labs, col, step in (('CT 骨骼', bones, 0xffcf4d, 2), ('CT 體表', None, 0x5bb6ff, 3), ('CT 肺與心臟', [v for v in ct.names.values() if v.startswith('lung_') or v == 'heart'], 0xff7aa8, 3)):
            mk = (ct.body & ~ct.trunc) if labs is None else ct.label_mask(labs)
            V, F = ct.surface(mk, step=step)
            if V is None: continue
            groups.append(dict(name=name, color=col, V=self.to_rel(V), F=F))
        return groups

    def to_rel(self, Q):
        """CT 座標 → 以 T1–T12 中心為原點、去除旋轉、保留實際尺寸的座標（公分）。"""
        return (Q - self.t) @ self.R - self.s * self.anchor()

    def anchor(self):
        m = self.m
        ps = [p for v in range(1, 13) for p in m.find(f'Vertebra T{v}', t=2)]
        return np.concatenate([m.part_verts(p) for p in ps]).mean(0)
