"""女性皮膚補片：把模板（男性）在外生殖器與乳頭附近的皮膚三角形換成新網格。
- 外陰：男性外生殖器那一區的邊界不動，內部重建成陰阜、大陰唇與中線裂隙；兩腿之間往上拱到胯下高度，不再吊著一塊皮。
- 乳頭：乳頭周圍 3.4 cm 細分成同心圓網格，加上乳暈與乳頭的起伏，並標記乳暈顏色權重。
補片頂點的其他屬性（脂肪厚度、肌肉增長場、部位等）在網頁端依 interp 權重由原有頂點內插，因此會跟著體型、脂肪與 CT 一起變形。

用法：python3 tools/build_patches.py docs/model.js docs/patches.js [--preview out.png]
"""
import sys, os, json, argparse
import numpy as np
from collections import defaultdict
from scipy.spatial import Delaunay, cKDTree
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'ctpipe'))
from mskmodel import MskModel

sm = lambda a, b, x: np.clip((np.asarray(x, float) - a) / (b - a), 0, 1) ** 2 * (3 - 2 * np.clip((np.asarray(x, float) - a) / (b - a), 0, 1))


def boundary_loop(T, rem):
    ec = defaultdict(list)
    for ti, t in enumerate(T):
        for a, b in ((t[0], t[1]), (t[1], t[2]), (t[2], t[0])): ec[(min(a, b), max(a, b))].append(ti)
    bd = [e for e, ts in ec.items() if len(ts) == 2 and rem[ts[0]] != rem[ts[1]]]
    adj = defaultdict(list)
    for a, b in bd: adj[a].append(b); adj[b].append(a)
    assert all(len(v) == 2 for v in adj.values()), '補片邊界不是單純的環'
    s = bd[0][0]; loop = [s]; prev = None; cur = s
    while True:
        nx = [n for n in adj[cur] if n != prev]
        nxt = nx[0] if nx[0] != loop[0] or len(loop) < 3 else None
        if nxt is None or nxt == loop[0]: break
        prev, cur = cur, nxt; loop.append(cur)
    assert len(loop) == len(adj), '補片邊界有多個環'
    return np.array(loop)


def arclen(P):
    d = np.r_[0, np.cumsum(np.linalg.norm(np.diff(P, axis=0), axis=1))]
    return d / d[-1]


def interp_chain(P, t, q):
    return np.stack([np.interp(q, t, P[:, k]) for k in range(3)], 1)


def closest_on_tris(Q, V, T, bary=False):
    """Q 每點投影到三角形集合 (V, T) 上的最近點；bary=True 時另回傳三角形索引與重心座標。"""
    out = np.empty_like(Q); A, B, C = V[T[:, 0]], V[T[:, 1]], V[T[:, 2]]; ti = np.zeros(len(Q), int)
    for i, p in enumerate(Q):
        best, bp = 1e18, p
        for k, (a, b, c) in enumerate(zip(A, B, C)):
            ab, ac, ap = b - a, c - a, p - a
            d1, d2 = ab @ ap, ac @ ap
            if d1 <= 0 and d2 <= 0: x = a
            else:
                bp_ = p - b; d3, d4 = ab @ bp_, ac @ bp_
                cp_ = p - c; d5, d6 = ab @ cp_, ac @ cp_
                if d3 >= 0 and d4 <= d3: x = b
                elif d6 >= 0 and d5 <= d6: x = c
                else:
                    vc = d1 * d4 - d3 * d2; vb = d5 * d2 - d1 * d6; va = d3 * d6 - d5 * d4
                    if vc <= 0 and d1 >= 0 and d3 <= 0: x = a + ab * (d1 / (d1 - d3))
                    elif vb <= 0 and d2 >= 0 and d6 <= 0: x = a + ac * (d2 / (d2 - d6))
                    elif va <= 0 and (d4 - d3) >= 0 and (d5 - d6) >= 0: x = b + (c - b) * ((d4 - d3) / ((d4 - d3) + (d5 - d6)))
                    else: dn = 1 / (va + vb + vc); x = a + ab * (vb * dn) + ac * (vc * dn)
            dd = np.sum((p - x) ** 2)
            if dd < best: best, bp, ti[i] = dd, x, k
        out[i] = bp
    if not bary: return out
    bc = np.zeros((len(Q), 3))
    for i in range(len(Q)):
        a, b, c = A[ti[i]], B[ti[i]], C[ti[i]]; v0, v1, v2 = b - a, c - a, out[i] - a
        d00, d01, d11, d20, d21 = v0 @ v0, v0 @ v1, v1 @ v1, v2 @ v0, v2 @ v1; dn = d00 * d11 - d01 * d01
        w1 = (d11 * d20 - d01 * d21) / dn; w2 = (d00 * d21 - d01 * d20) / dn; bc[i] = np.clip([1 - w1 - w2, w1, w2], 0, 1); bc[i] /= bc[i].sum()
    return out, ti, bc


class Builder:
    def __init__(self, m):
        self.m = m; self.S = m.sbase; self.T = m.stri; self.NS = m.NS
        self.verts, self.interp, self.areola = [], [], []
        self.tris, self.remove = [], np.zeros(len(self.T), bool)

    def add(self, P, weights, areola=None):
        """新增補片頂點；weights[n] = [(原頂點索引, 權重), …]，網頁端以此內插脂肪厚度、肌肉增長場等屬性。回傳全域索引。"""
        base = self.NS + len(self.verts)
        for n, p in enumerate(P):
            acc = defaultdict(float)
            for i, w in weights[n]: acc[int(i)] += float(w)
            tot = sum(acc.values())
            self.verts.append(p); self.interp.append([[i, round(w / tot, 4)] for i, w in acc.items() if w / tot > 1e-4])
            self.areola.append(0.0 if areola is None else float(areola[n]))
        return np.arange(base, base + len(P))

    def triangulate(self, uv, gidx, outward, simplices=None):
        """在參數平面上做 Delaunay（或用給定的三角形）；補片內部方向一致（廣度優先），整片朝向依外向量與周邊原三角形多數決。"""
        tri = [list(map(int, gidx[t])) for t in (Delaunay(uv).simplices if simplices is None else simplices)]
        nb = defaultdict(list)
        for k, t in enumerate(tri):
            for a, b in ((t[0], t[1]), (t[1], t[2]), (t[2], t[0])): nb[(min(a, b), max(a, b))].append(k)
        done = [False] * len(tri); done[0] = True; q = [0]
        while q:
            k = q.pop(); t = tri[k]
            for a, b in ((t[0], t[1]), (t[1], t[2]), (t[2], t[0])):
                for j in nb[(min(a, b), max(a, b))]:
                    if done[j]: continue
                    u = tri[j]; dirs = [(u[0], u[1]), (u[1], u[2]), (u[2], u[0])]
                    if (a, b) in dirs: tri[j] = [u[0], u[2], u[1]]      # 共用邊要反向
                    done[j] = True; q.append(j)
        allP = np.vstack([self.S, np.array(self.verts)]); gl = {int(g): o for g, o in zip(gidx, outward)}
        vote = 0.0
        for a, b, c in tri:
            n = np.cross(allP[b] - allP[a], allP[c] - allP[a]); vote += np.sign(n @ (gl[a] + gl[b] + gl[c]))
        # 與周邊原三角形比對：邊界上的共用邊應該方向相反
        kept = self.T[~self.remove]; ed = set()
        for t in kept:
            for a, b in ((t[0], t[1]), (t[1], t[2]), (t[2], t[0])): ed.add((int(a), int(b)))
        same = opp = 0
        for t in tri:
            for a, b in ((t[0], t[1]), (t[1], t[2]), (t[2], t[0])):
                if (a, b) in ed: same += 1
                elif (b, a) in ed: opp += 1
        flip = (same > opp) if same + opp >= 6 else (vote < 0)
        if flip: tri = [[a, c, b] for a, b, c in tri]
        self.orient_info = getattr(self, 'orient_info', []) + [dict(same=same, opp=opp, vote=round(vote), flip=bool(flip))]
        self.tris.extend(tri)

    # ---------------- 外陰
    def vulva(self):
        """以邊界的真實形狀為參數平面（橫向 x、縱向沿中線弧長 s），Triangle 受限 Delaunay 品質網格，
        調和曲面為基底，再沿法向加上陰阜、大陰唇與中線裂隙。屬性以調和座標內插。"""
        import triangle as tr_
        from scipy.sparse import coo_matrix
        from scipy.sparse.linalg import splu
        m, S, T = self.m, self.S, self.T; L = m.lm
        U = np.linalg.norm(m.sFem, axis=1) > 1e-3
        rem = U[T].any(1); loop = boundary_loop(T, rem); self.remove |= rem
        # 女性胯下高度：男性模板貼著陰囊的大腿內側與會陰皮膚在 y≈72，往上提到胯下高度，
        # 提升量在周圍皮膚以 Laplace 方程式平滑遞減（外圍固定），補片再以提升後的邊界重建
        from scipy.sparse import coo_matrix as _coo
        from scipy.sparse.linalg import spsolve as _sps
        y_t = L['yCrotch'] + 0.5
        D = np.zeros_like(S); lift_loop = np.maximum(0, y_t - S[loop, 1]); D[loop, 1] = lift_loop
        low = loop[lift_loop > 0]
        dist = cKDTree(S[low]).query(S)[0] if len(low) else np.full(len(S), 1e9)
        E = (dist < 8.0) & ~U & (np.abs(S[:, 0]) < 11) & (S[:, 1] < 88); E[loop] = False
        ed = np.r_[T[:, [0, 1]], T[:, [1, 2]], T[:, [2, 0]]]; ed = np.r_[ed, ed[:, ::-1]]
        A = _coo((np.ones(len(ed)), (ed[:, 0], ed[:, 1])), shape=(len(S), len(S))).tocsr(); A.data[:] = 1
        Ei = np.where(E)[0]; deg = np.asarray(A.sum(1)).ravel()
        Lap = (_coo((deg[Ei], (np.arange(len(Ei)), np.arange(len(Ei)))), shape=(len(Ei), len(Ei))) - A[Ei][:, Ei]).tocsc()
        rhs = A[Ei] @ D                                   # 邊界（環上的提升量與外圍的 0）
        for k in range(3): D[Ei, k] = _sps(Lap, rhs[:, k])
        self.fem_disp = {int(i): D[i] for i in np.where(np.linalg.norm(D, axis=1) > 1e-3)[0]}
        # 皮膚下方 3 cm 內的結構（股薄肌、內收肌腱等）跟著上提，越深越少；骨骼與軟骨不動
        mv = np.where(np.linalg.norm(D, axis=1) > 1e-3)[0]
        if len(mv):
            tri_s = cKDTree(S[mv]); dV = {}
            ok = np.zeros(m.NV, bool)
            for pp in m.parts:
                if pp['t'] not in (2, 3, 4): ok[pp['v0']:pp['v0'] + pp['nv']] = True
            cand = np.where(ok & (np.linalg.norm(m.base - S[mv].mean(0), axis=1) < 16))[0]
            dd, jj = tri_s.query(m.base[cand], k=6)
            w_ = np.exp(-0.5 * (dd / 1.2) ** 2); wsum = w_.sum(1)
            disp = (w_[..., None] * D[mv][jj]).sum(1) / np.maximum(wsum, 1e-9)[:, None]
            fall = 1 - sm(1.5, 3.5, dd[:, 0])
            disp *= fall[:, None]
            for i, d_ in zip(cand, disp):
                if np.linalg.norm(d_) > 1e-3: dV[int(i)] = d_
            self.fem_disp_v = dV
        S = S + D
        P = S[loop]; n = len(loop)
        iT, iB = int(np.argmax(P[:, 1] + P[:, 2])), int(np.argmin(P[:, 2]))
        fw = [(iT + k) % n for k in range(((iB - iT) % n) + 1)]; bw = [(iT - k) % n for k in range(((iT - iB) % n) + 1)]
        A_, B_ = loop[fw], loop[bw]; left, right = (A_, B_) if S[A_, 0].mean() > S[B_, 0].mean() else (B_, A_)
        tl, tr = arclen(S[left]), arclen(S[right])
        q = np.linspace(0, 1, 240); mid = (interp_chain(S[left], tl, q) + interp_chain(S[right], tr, q)) / 2; mid[:, 0] = 0
        for _ in range(30): mid[1:-1] = 0.5 * mid[1:-1] + 0.25 * (mid[:-2] + mid[2:])
        s_mid = np.r_[0, np.cumsum(np.linalg.norm(np.diff(mid, axis=0), axis=1))]
        kd = cKDTree(mid[:, 1:])
        def param(X):
            k = kd.query(X[:, 1:])[1]; return np.c_[X[:, 0], s_mid[k]]
        B2 = param(P)
        for i in range(n):      # 參數邊界不可自我相交
            for j in range(i + 2, n):
                if (i == 0 and j == n - 1): continue
                p1, p2, p3, p4 = B2[i], B2[(i + 1) % n], B2[j], B2[(j + 1) % n]
                d = lambda a, b, c: (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
                assert not (d(p1, p2, p3) * d(p1, p2, p4) < 0 and d(p3, p4, p1) * d(p3, p4, p2) < 0), '參數邊界自我相交'
        out = tr_.triangulate({'vertices': B2, 'segments': np.c_[np.arange(n), (np.arange(n) + 1) % n]}, 'pq30a0.09Y')
        V2, F2 = out['vertices'], out['triangles']; assert np.allclose(V2[:n], B2), '邊界頂點被改動'
        N2 = len(V2); I = np.arange(n, N2)
        # 參數平面上的餘切權重 Laplacian
        rows, cols, vals = [], [], []
        for t in F2:
            for k in range(3):
                a, b, c = t[k], t[(k + 1) % 3], t[(k + 2) % 3]
                u, v = V2[a] - V2[c], V2[b] - V2[c]; cot = (u @ v) / max(abs(u[0] * v[1] - u[1] * v[0]), 1e-12)
                rows += [a, b, a, b]; cols += [b, a, a, b]; vals += [-0.5 * cot, -0.5 * cot, 0.5 * cot, 0.5 * cot]
        Lp = coo_matrix((vals, (rows, cols)), shape=(N2, N2)).tocsc()
        LII = splu(Lp[I][:, I].tocsc()); LIB = Lp[I][:, :n].toarray()
        Wh = -LII.solve(LIB)                       # 調和座標（內部 × 邊界）
        X = Wh @ P                                  # 調和基底曲面
        # 基底法向（朝離開骨盆中心）
        allX = np.vstack([P, X]); fn = np.cross(allX[F2[:, 1]] - allX[F2[:, 0]], allX[F2[:, 2]] - allX[F2[:, 0]]); Nv = np.zeros_like(allX)
        for k in range(3): np.add.at(Nv, F2[:, k], fn)
        Nv /= np.maximum(np.linalg.norm(Nv, axis=1, keepdims=True), 1e-12)
        cp = np.array([0, L['yCrotch'] + 9, 0.5]); Nv *= np.sign(((allX - cp) * Nv).sum(1))[:, None]
        # 中線由「向下」轉為「向後」的位置 s45（約在前聯合）
        tg = np.gradient(mid, axis=0); tg /= np.linalg.norm(tg, axis=1, keepdims=True)
        k45 = int(np.argmax((-tg[:, 2] > -tg[:, 1]) & (q > 0.15))); s45 = float(s_mid[k45])
        xs, ss = V2[n:, 0], V2[n:, 1]
        # 到邊界的參數距離（漸弱）
        segA, segB = B2, np.roll(B2, -1, 0)
        def dist_poly(Q):
            ab = segB - segA; t = np.clip((((Q[:, None] - segA[None]) * ab[None]).sum(2)) / np.maximum((ab ** 2).sum(1), 1e-12)[None], 0, 1)
            return np.min(np.linalg.norm(Q[:, None] - (segA[None] + t[..., None] * ab[None]), axis=2), 1)
        taper = sm(0, 2.0, dist_poly(V2[n:]))
        band = lambda a0, a1, b0, b1: sm(a0, a1, ss) * (1 - sm(b0, b1, ss))
        mons = 0.5 * np.exp(-((ss - (s45 - 1.6)) / 2.4) ** 2) * np.exp(-(xs / 3.0) ** 2)
        lab = 0.22 * band(s45 - 1.8, s45 - 0.4, s45 + 5.4, s45 + 7.0) * np.exp(-((np.abs(xs) - 0.95) / 0.6) ** 2)
        cleft = 0.32 * band(s45 - 1.2, s45 - 0.1, s45 + 5.0, s45 + 6.4) * np.exp(-(xs / 0.36) ** 2)
        h = (mons + lab - cleft) * taper
        Pin = X + Nv[n:] * h[:, None]
        self.vulva_info = dict(loop=n, interior=len(Pin), tris=len(F2), s45=round(s45, 2), s_len=round(float(s_mid[-1]), 2), h=[round(float(h.min()), 2), round(float(h.max()), 2)])
        W = []
        for r in range(len(Pin)):
            o = np.argsort(-Wh[r])[:8]; W.append([(loop[k], Wh[r, k]) for k in o if Wh[r, k] > 1e-4])
        gidx_in = self.add(Pin, W)
        gidx = np.r_[loop, gidx_in]
        outward = np.r_[m.sn[loop], Nv[n:]]
        S0_ = self.S; self.S = S
        self.triangulate(V2, gidx, outward, simplices=F2)
        self.S = S0_

    # ---------------- 乳頭與乳暈
    def nipple(self, side):
        """乳頭周圍 3.4 cm：投影到切平面做受限 Delaunay 品質網格（邊界邊全部保留），頂點投回原皮膚表面，
        以所在原三角形的重心座標內插屬性；加上乳暈（半徑約 1.8 cm 微隆）與乳頭（直徑約 1.1 cm、高約 0.6 cm）。"""
        import triangle as tr_
        m, S, T = self.m, self.S, self.T; L = m.lm
        c0 = np.array([side * abs(L['nipple'][0]), L['nipple'][1], L['nipple'][2]])
        j0 = cKDTree(S).query(c0)[1]; n0 = m.sn[j0]
        R = 3.4
        near = np.linalg.norm(S - c0, axis=1) < R
        rem = near[T].all(1) & (m.sn[T[:, 0], 2] > 0) & (m.scls[T[:, 0]] == 0); rem_tris = T[rem]
        self.remove |= rem
        loop = boundary_loop(T, rem)
        c = closest_on_tris(c0[None], S, rem_tris)[0]
        e1 = np.array([1.0, 0, 0]) - n0[0] * n0; e1 /= np.linalg.norm(e1); e2 = np.cross(n0, e1)
        B2 = np.c_[(S[loop] - c) @ e1, (S[loop] - c) @ e2]; n = len(loop)
        seg = np.c_[np.arange(n), (np.arange(n) + 1) % n]
        out = tr_.triangulate({'vertices': np.vstack([B2, [[0.0, 0.0]]]), 'segments': seg}, 'pq30a0.04Y')
        V2, F2 = out['vertices'], out['triangles']; assert np.allclose(V2[:n], B2)
        Q = c + V2[n:, :1] * e1 + V2[n:, 1:2] * e2
        pts, ti, bc = closest_on_tris(Q, S, rem_tris, bary=True)
        W = [[(rem_tris[ti[k], q], bc[k, q]) for q in range(3)] for k in range(len(pts))]
        rho = np.linalg.norm(V2[n:], axis=1)
        h = 0.12 * (1 - sm(1.2, 2.0, rho)) + 0.55 * (1 - sm(0.35, 0.62, rho)) + 0.08 * (1 - sm(0.0, 0.3, rho))
        pts = pts + n0 * h[:, None]
        are = 1 - sm(1.55, 2.05, rho)
        gidx_in = self.add(pts, W, areola=are)
        gidx = np.r_[loop, gidx_in]
        outward = np.r_[m.sn[loop], np.repeat(n0[None], len(pts), 0)]
        self.triangulate(V2, gidx, outward, simplices=F2)

    def normals(self):
        allP = np.vstack([self.S, np.array(self.verts)]); keep = np.where(~self.remove)[0]
        Tf = np.vstack([self.T[keep], np.array(self.tris)])
        fn = np.cross(allP[Tf[:, 1]] - allP[Tf[:, 0]], allP[Tf[:, 2]] - allP[Tf[:, 0]])
        n = np.zeros_like(allP)
        for k in range(3): np.add.at(n, Tf[:, k], fn)
        n /= np.maximum(np.linalg.norm(n, axis=1, keepdims=True), 1e-12)
        return n[self.NS:], Tf, allP


def main():
    ap = argparse.ArgumentParser(); ap.add_argument('model'); ap.add_argument('out'); ap.add_argument('--preview')
    a = ap.parse_args()
    m = MskModel(a.model); b = Builder(m)
    b.vulva(); b.nipple(1); b.nipple(-1)
    N, Tf, allP = b.normals()
    # 檢查：女性皮膚的邊（每條邊被兩個三角形共用），補片沒有破洞或重疊
    ec = defaultdict(int)
    for t in Tf:
        for x, y in ((t[0], t[1]), (t[1], t[2]), (t[2], t[0])): ec[(min(x, y), max(x, y))] += 1
    bad = sum(1 for k, v in ec.items() if v > 2)
    print('orient', b.orient_info); print('vulva', b.vulva_info, '| patch verts', len(b.verts), 'tris', len(b.tris), 'removed', int(b.remove.sum()), '| non-manifold edges', bad)
    r = lambda x, d=3: [round(float(v), d) for v in np.asarray(x).ravel()]
    data = dict(version=1, NS=m.NS, removeTris=np.where(b.remove)[0].tolist(), verts=r(b.verts), normals=r(N), tris=np.array(b.tris).ravel().tolist(),
                interp=b.interp, areola=r(b.areola, 2),
                femDisp=[[i] + [round(float(v), 3) for v in d] for i, d in sorted(getattr(b, 'fem_disp', {}).items())],
                femDispV=[[i] + [round(float(v), 3) for v in d] for i, d in sorted(getattr(b, 'fem_disp_v', {}).items())])
    js = 'window.__PATCH = ' + json.dumps(data, separators=(',', ':')) + ';\n'
    open(a.out, 'w').write(js); print('wrote', a.out, len(js) // 1024, 'KB')
    if a.preview:
        import matplotlib; matplotlib.use('Agg'); import matplotlib.pyplot as plt
        Pv = np.array(b.verts); fig, ax = plt.subplots(1, 3, figsize=(15, 6))
        for k, (i, j, t) in enumerate(((2, 1, 'side'), (0, 1, 'front'), (0, 2, 'bottom'))):
            ax[k].triplot(allP[:, i], allP[:, j], np.array(b.tris), lw=0.3); ax[k].set_aspect('equal'); ax[k].set_title(t)
            ax[k].set_xlim(Pv[:, i].min() - 1, Pv[:, i].max() + 1) if k else None
        sel = Pv[:, 1] < 95
        for k in range(3): ax[k].set_ylim(*( (66, 88) if k < 2 else (-6, 10)))
        ax[0].set_xlim(-6, 10); ax[1].set_xlim(-6, 6); ax[2].set_xlim(-6, 6)
        plt.tight_layout(); plt.savefig(a.preview, dpi=70)


if __name__ == '__main__':
    main()
