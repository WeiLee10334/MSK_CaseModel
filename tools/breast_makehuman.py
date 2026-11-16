"""女性乳房形狀：取自 MakeHuman（CC0）年輕女性、平均肌肉與體重的小／中／大罩杯。
1. MakeHuman 上把乳房從胸壁分離：胸壁 = 乳房區外圍一圈做仿射對齊後的男性胸部（頂點一一對應），
   區域內殘差以調和方程式從外圍延伸後扣除，隆起在區域邊界為 0。三種罩杯共用同一胸壁（差異 = 罩杯 target）。
2. 乳頭位置：以 MakeHuman 女性的比例（乳頭離中線 / 該高度前胸半寬、乳頭高度 / 身高）在預設女性
   （160 cm / 55 kg，平胸求解）變形後的座標定目標，換回靜止座標寫入 tools/breast_site.json，重跑 build_patches.py 在那裡做乳頭補片。
3. 胸前每個皮膚點以「離乳頭的水平、垂直距離」對應到 MakeHuman 胸壁，取樣三組隆起向量。
寫入 docs/patches.js 的 breast：idx、m0/m5/m1（隆起，除以整體比例 s）、乳頭列 nipRow、量胸圍的靜止高度 bandY。
網頁端：在軀幹縮放之後依罩杯內插加上（src/model.js deformSkin）。
用法：python3 -I tools/breast_makehuman.py <MakeHuman 原始碼>/makehuman/data
之後需重跑 python3 tools/clearance.py 3。
"""
import sys, os, json, subprocess
import numpy as np
from scipy.sparse import coo_matrix, identity
from scipy.sparse.linalg import splu
from scipy.spatial import cKDTree
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE); sys.path.insert(0, os.path.join(ROOT, 'ctpipe'))
from mskmodel import MskModel
from build_patches import closest_on_tris

MH = sys.argv[1] if len(sys.argv) > 1 else '/home/claude/makehumancommunity/makehuman/makehuman/data'
H_MH = 159.0
RS = 13.0                  # 滑移影響半徑（靜止座標 cm）
RM = 14.0                  # MakeHuman 乳房區半徑
SIG = 1.0                  # 取樣隆起向量的高斯核寬（MakeHuman 胸壁上，cm）
TMP = '/tmp/breast_mh'


def load_base():
    V, F, grp, cur = [], [], [], None
    for ln in open(os.path.join(MH, '3dobjs/base.obj')):
        if ln.startswith('v '): V.append([float(x) for x in ln.split()[1:4]])
        elif ln.startswith('g '): cur = ln.split()[1]
        elif ln.startswith('f '):
            idx = [int(p.split('/')[0]) - 1 for p in ln.split()[1:]]
            for k in range(1, len(idx) - 1): F.append([idx[0], idx[k], idx[k + 1]]); grp.append(cur)
    return np.array(V) * 10, np.array(F), np.array(grp)


def target(path, n):
    o = np.zeros((n, 3))
    for ln in open(os.path.join(MH, 'targets', path)):
        if ln.startswith('#') or not ln.strip(): continue
        p = ln.split(); o[int(p[0])] = [float(x) for x in p[1:4]]
    return o * 10


FIRM = 1.0       # MakeHuman 乳房堅挺度 0–1（0.5 為平均）；取最堅挺，大罩杯才不會下垂到把皮膚網格拉成大片三角形


def mh_body(V0, sex, cup=None, firm=FIRM):
    """MakeHuman 年輕、平均肌肉與體重的身體；女性另加乳房罩杯 cup（0–1）與堅挺度 firm（0–1），罩杯×堅挺度雙線性混合 target。"""
    s = 'female' if sex == 'F' else 'male'; n = len(V0)
    V = V0 + target(f'macrodetails/universal-{s}-young-averagemuscle-averageweight.target', n)
    for r in ('african', 'asian', 'caucasian'): V = V + target(f'macrodetails/{r}-{s}-young.target', n) / 3
    if cup is None: return V
    wc = {'mincup': max(0, 0.5 - cup) * 2, 'averagecup': 1 - abs(cup - 0.5) * 2, 'maxcup': max(0, cup - 0.5) * 2}
    wf = {'minfirmness': max(0, 0.5 - firm) * 2, 'averagefirmness': 1 - abs(firm - 0.5) * 2, 'maxfirmness': max(0, firm - 0.5) * 2}
    for c, a in wc.items():
        for f, b in wf.items():
            if a * b > 0 and not (c == 'averagecup' and f == 'averagefirmness'):
                V = V + a * b * target(f'breast/female-young-averagemuscle-averageweight-{c}-{f}.target', n)
    return V


def sm(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)


def mh_mounds():
    V0, F, G = load_base(); Fb = F[G == 'body']; n = len(V0); used = np.unique(Fb)
    V5 = mh_body(V0, 'F', 0.5); Vm = mh_body(V0, 'M')
    ok = used[(V5[used, 0] > 4) & (V5[used, 0] < 16) & (V5[used, 1] > 15) & (V5[used, 1] < 45)]; k = ok[np.argmax(V5[ok, 2])]
    c = V5[k]; d = np.hypot(V5[:, 0] - c[0], (V5[:, 1] - c[1]) * 0.95)
    reg = np.zeros(n, bool); reg[used] = (d[used] < RM) & (V5[used, 2] > c[2] - 12) & (V5[used, 0] > -1e-3)
    ring = np.unique(Fb[reg[Fb].any(1) & ~reg[Fb].all(1)]); ring = ring[~reg[ring]]
    e = np.r_[Fb[:, [0, 1]], Fb[:, [1, 2]], Fb[:, [2, 0]]]; e = np.r_[e, e[:, ::-1]]
    A = coo_matrix((np.ones(len(e)), (e[:, 0], e[:, 1])), shape=(n, n)).tocsr(); A.data[:] = 1
    Lp = (coo_matrix((np.asarray(A.sum(1)).ravel(), (np.arange(n), np.arange(n))), shape=(n, n)) - A).tocsr()
    I = np.where(reg)[0]; B = np.setdiff1d(np.arange(n), I)
    T, *_ = np.linalg.lstsq(np.c_[Vm[ring], np.ones(len(ring))], V5[ring], rcond=None)
    R = V5 - np.c_[Vm, np.ones(n)] @ T
    C = np.zeros_like(R); C[B] = R[B]; LII = splu(Lp[I][:, I].tocsc()); LIB = Lp[I][:, B]
    C[I] = np.column_stack([LII.solve(-(LIB @ C[B])[:, q]) for q in range(3)])
    m5 = R - C; m5[~reg] = 0
    tap = (1 - sm(RM - 3, RM, d))[:, None] * reg[:, None]
    out = {'m5': m5, 'm0': m5 + (mh_body(V0, 'F', 0.0) - V5) * tap, 'm1': m5 + (mh_body(V0, 'F', 1.0) - V5) * tap}
    wall = V5 - m5; tri = Fb[reg[Fb].all(1)]
    # 胸壁上乳頭點的比例：離中線 / 該高度軀幹半寬，高度 / 身高
    ymin = V5[used, 1].min(); Q0 = wall[k]
    s = used[(np.abs(wall[used, 1] - Q0[1]) < 0.8)]; xs = np.sort(np.abs(wall[s, 0])); g = np.diff(xs); hw = xs[np.argmax(g * (xs[:-1] > 8))]
    xf = front_hw(wall, used, Q0[1])
    out_ring = np.unique(Fb[np.isin(Fb, ring).any(1)]); out_ring = out_ring[~reg[out_ring]]
    info = dict(Q0=Q0, rx=Q0[0] / xf, fy=(Q0[1] - ymin) / H_MH, hw=xf, ring=out_ring)
    print('MakeHuman wall nipple', np.round(Q0, 2), 'x / front half-width %.3f' % info['rx'], 'height frac %.4f' % info['fy'], 'front half-width %.1f' % xf)
    for nm in out: print('  mound', nm, 'at nipple', np.round(out[nm][k], 2), 'max', round(float(np.linalg.norm(out[nm], axis=1).max()), 2))
    return out, wall, tri, info


def front_hw(X, idx, y, drop=2.5):
    """前胸半寬：該高度胸前表面比中央（|x| ≤ 6 cm 的最高處）低 drop 公分的位置離中線的距離（比最大半寬穩定，不受腋下、手臂影響）。"""
    s = idx[np.abs(X[idx, 1] - y) < 0.7]; prof = []
    for x in np.arange(0.0, 20.0, 0.5):
        k = s[np.abs(np.abs(X[s, 0]) - x) < 0.5]; prof.append(X[k, 2].max() if len(k) else np.nan)
    prof = np.array(prof); xs = np.arange(0.0, 20.0, 0.5); z0 = np.nanmax(prof[xs <= 6])
    for x, z in zip(xs, prof):
        if x > 6 and not np.isnan(z) and z < z0 - drop: return x
    return np.nan


def read_patches(pj):
    t = open(pj).read(); return json.loads(t[t.index('{'):t.rindex('}') + 1])


def write_patches(pj, P):
    open(pj, 'w').write('window.__PATCH = ' + json.dumps(P, separators=(',', ':')) + ';\n')


def female_default():
    """以網頁的變形程式求解預設女性，回傳最終皮膚座標、靜止座標、身高與比例 s。"""
    subprocess.run(['node', os.path.join(HERE, 'harness.mjs'), TMP, '[{"name":"F","sex":"F"}]'], check=True, stdout=subprocess.DEVNULL)
    J = json.load(open(os.path.join(TMP, 'F.json')))
    S = np.fromfile(os.path.join(TMP, 'F.spos.f32'), np.float32).reshape(-1, 3).astype(float)
    Bs = np.fromfile(os.path.join(TMP, 'sbase.f32'), np.float32).reshape(-1, 3).astype(float)
    return S, Bs, J['case']['H'], J['s']


def smoothed_surface(m, X, it=12):
    """皮膚的平滑版（只用原始頂點與三角形），滑移沿此曲面進行，避免帶入男性乳頭等細節。"""
    T = m.stri; n = m.NS
    e = np.r_[T[:, [0, 1]], T[:, [1, 2]], T[:, [2, 0]]]; e = np.r_[e, e[:, ::-1]]
    A = coo_matrix((np.ones(len(e)), (e[:, 0], e[:, 1])), shape=(n, n)).tocsr(); A.data[:] = 1
    deg = np.asarray(A.sum(1)).ravel(); deg[deg == 0] = 1; X = X.astype(float).copy()
    for _ in range(it): X = 0.5 * X + 0.5 * (A @ X) / deg[:, None]
    return X, T


def build_fields(m, pj, site, mounds, wall, tri, info):
    """依 site 重做乳頭補片，在預設女性（平胸求解）上取樣三組隆起向量並寫入 patches.js；回傳兩側乳頭尖端的頂點索引。"""
    NS = m.NS
    json.dump(site, open(os.path.join(HERE, 'breast_site.json'), 'w'), indent=1)
    subprocess.run([sys.executable, os.path.join(HERE, 'build_patches.py'), os.path.join(ROOT, 'docs', 'model.js'), pj], check=True, stdout=subprocess.DEVNULL)
    P = read_patches(pj); PV = np.array(P['verts']).reshape(-1, 3); NP = len(PV)
    cls = np.r_[m.scls, np.zeros(NP, np.uint8)]; sn = np.vstack([m.sn, np.array(P['normals']).reshape(-1, 3)]); are = np.array(P['areola'])
    S2, Bs, H, s = female_default(); NA = len(Bs); tips = {}; Q0 = info['Q0']
    for side in (1, -1):
        c = np.array(site[str(side)]['c']); pc = NS + np.where((are > 0.99) & (PV[:, 0] * side > 0))[0]
        tips[side] = pc[np.argmax((Bs[pc] - c) @ sn[pc].mean(0))]
    field = {nm: np.zeros((NA, 3)) for nm in mounds}
    keepT = np.r_[np.delete(m.stri, P['removeTris'], 0), np.array(P['tris']).reshape(-1, 3)]
    e = np.r_[keepT[:, [0, 1]], keepT[:, [1, 2]], keepT[:, [2, 0]]]; e = np.r_[e, e[:, ::-1]]
    Ad = coo_matrix((np.ones(len(e)), (e[:, 0], e[:, 1])), shape=(NA, NA)).tocsr(); Ad.data[:] = 1
    Lap = (coo_matrix((np.asarray(Ad.sum(1)).ravel(), (np.arange(NA), np.arange(NA))), shape=(NA, NA)) - Ad).tocsr()
    wid = np.unique(tri); ring = np.unique(np.r_[wid, info['ring']]); wid = ring      # 區域內頂點 + 外圍一圈（隆起為 0，讓邊緣平順收到 0）
    wxy = wall[wid, :2]; kdv = cKDTree(wxy)
    for side in (1, -1):
        tip = tips[side]; Nf = S2[tip]
        hw = front_hw(S2, np.where(cls == 0)[0], Nf[1])
        KY = H / H_MH; KX = float(np.clip(hw / info['hw'], 0.92, 1.1)) / KY          # x 依前胸半寬（下限 0.92：乳房底寬大致固定，太窄會變成下垂的長條）、y 依身高
        reg = np.where((cls == 0) & (S2[:, 0] * side > -0.05) & (np.hypot((S2[:, 0] - Nf[0]) / KX, (S2[:, 1] - Nf[1]) / KY) < RM + 2) & (sn[:, 2] > -0.5))[0]
        qx = Q0[0] + (np.abs(S2[reg, 0]) - abs(Nf[0])) / (KX * KY); qy = Q0[1] + (S2[reg, 1] - Nf[1]) / KY
        # 隆起向量以高斯核（σ 1 cm）對 MakeHuman 胸壁上的頂點加權平均：比在 MakeHuman 三角形上線性內插平順，
        # 否則 MakeHuman 三角形的邊會在細的乳房網格上顯成一條條折痕
        Qp = np.c_[qx, qy]; nbrs = kdv.query_ball_point(Qp, 3 * SIG); hit = 0
        for row, vi in enumerate(reg):
            jj = np.array(nbrs[row], int)
            if not len(jj): continue
            w = np.exp(-((wxy[jj] - Qp[row]) ** 2).sum(1) / (2 * SIG ** 2)); sw = w.sum()
            if sw < 1e-6: continue
            hit += 1
            for nm, mm in mounds.items():
                v = (w[:, None] * mm[wid[jj]]).sum(0) / sw
                field[nm][vi] += [side * v[0] * KX * KY, v[1] * KY, v[2] * KY]
        print(f'  side {side:+d}: nipple final {np.round(Nf, 1)}, KX {KX:.3f} KY {KY:.3f}, sampled {hit}/{len(reg)}')
        # 乳頭整個跟著乳頭尖端平移，不被隆起的梯度扭歪
        dxy = np.hypot(S2[:, 0] - Nf[0], S2[:, 1] - Nf[1]); near = np.where((dxy < 2.6) & (np.arange(NA) >= NS))[0]
        t = (1 - sm(0.5, 2.5, dxy[near]))[:, None]      # 乳頭剛性平移，往外 2.5 cm 內平順過渡到隆起場
        for nm in field: field[nm][near] = field[nm][near] * (1 - t) + field[nm][tip][None] * t
        print(f'  side {side:+d}: rigid nipple {len(near)}')
    idx = np.where(np.abs(np.c_[field['m0'], field['m5'], field['m1']]).max(1) > 1e-3)[0]
    rr = lambda a: [round(float(x), 3) for x in np.asarray(a).ravel()]
    nipRow = int(np.where(idx == tips[1])[0][0])
    P['breast'] = dict(idx=idx.tolist(), m0=rr(field['m0'][idx] / s), m5=rr(field['m5'][idx] / s), m1=rr(field['m1'][idx] / s),
                       nipRow=nipRow, tips=[int(tips[1]), int(tips[-1])], bandY=round(float(Bs[tips[1], 1]), 3),
                       source=f'MakeHuman 1.x (CC0) base mesh + female-young-averagemuscle-averageweight cup×firmness targets (firmness {FIRM})')
    write_patches(pj, P)
    return tips, P


def nipple_size(m, P, case):
    """參考女性變形後，乳頭（nipple 權重 > 0.5）在切平面上沿左右、上下方向的寬度（cm）。"""
    subprocess.run(['node', os.path.join(HERE, 'harness.mjs'), TMP, json.dumps([dict(name='R', sex='F', **case)])], check=True, stdout=subprocess.DEVNULL)
    S = np.fromfile(os.path.join(TMP, 'R.spos.f32'), np.float32).reshape(-1, 3).astype(float)
    nw = np.array(P['nipple']); PV = np.array(P['verts']).reshape(-1, 3)
    a = m.NS + np.where((nw > 0.5) & (PV[:, 0] > 0))[0]; X = S[a] - S[a].mean(0)
    nrm = np.linalg.svd(X)[2][2]; ex = np.array([1.0, 0, 0]) - nrm[0] * nrm; ex /= np.linalg.norm(ex); ey = np.cross(nrm, ex)
    return np.ptp(X @ ex), np.ptp(X @ ey)


def main():
    m = MskModel(os.path.join(ROOT, 'docs', 'model.js'))
    pj = os.path.join(ROOT, 'docs', 'patches.js'); P = read_patches(pj)
    for k in ('breast', 'breastSlide', 'clear'): P.pop(k, None)      # 舊資料先清掉，預設女性以平胸求解
    write_patches(pj, P)
    NS = m.NS; NP = len(P['verts']) // 3; cls = np.r_[m.scls, np.zeros(NP, np.uint8)]
    mounds, wall, tri, info = mh_mounds()

    # ── 第一步：女性乳頭位置 ──
    # 以 MakeHuman 女性的比例（乳頭離中線 / 該高度前胸半寬、乳頭高度 / 身高）在預設女性（平胸求解）變形後的座標定目標，
    # 再換回男性模板的靜止座標，交給 build_patches.py 在那裡做乳頭補片（不滑移皮膚，避免網格被拉扯）。
    S1, Bs, H, s = female_default(); ymin = S1[:NS, 1].min(); site = {}
    for side in (1, -1):
        yt = ymin + info['fy'] * H
        hw = front_hw(S1, np.where(cls == 0)[0], yt); tgt = np.array([side * info['rx'] * hw, yt])
        cand = np.where((cls[:NS] == 0) & (m.sn[:, 2] > 0.2) & (Bs[:NS, 0] * side > 0))[0]
        j = cand[np.argmin(np.linalg.norm(S1[cand, :2] - tgt, axis=1))]
        nb = cand[np.linalg.norm(Bs[cand] - Bs[j], axis=1) < 3]
        J, *_ = np.linalg.lstsq(np.c_[Bs[nb, :2], np.ones(len(nb))], S1[nb, :2], rcond=None); J2 = J[:2].T      # 最終 xy 對靜止 xy
        c = Bs[j].copy(); c[:2] += np.linalg.solve(J2, tgt - S1[j, :2])
        c = closest_on_tris(c[None], Bs[:NS], m.stri[np.linalg.norm(Bs[m.stri].mean(1) - c, axis=1) < 5])[0]
        dn = np.array([0.18 * side, -0.08, 1.0]); dn /= np.linalg.norm(dn)      # 乳頭略朝外、朝下
        site[str(side)] = dict(c=[round(float(v), 3) for v in c], su=1.0, sv=1.0, dir=[round(float(v), 3) for v in dn])
        print(f'side {side:+d}: target final {np.round(tgt, 1)} (front half-width {hw:.1f}) → rest {np.round(c, 2)}')

    # ── 第二步：取樣隆起；乳頭大小以參考女性（上胸圍 84、下胸圍 70，約中等罩杯）實測，調到直徑約 1 cm 的圓
    #    （乳暈顏色在網頁端依變形後離乳頭的距離即時計算，不受皮膚拉伸影響）──
    ref = dict(H=160, W=55, chest=84, under=70, waist=70, hip=93); goal = 1.0
    for it in range(4):
        tips, P = build_fields(m, pj, site, mounds, wall, tri, info)
        du, dv = nipple_size(m, P, ref)
        print(f'iter {it}: nipple {du:.2f} × {dv:.2f} cm (su {site["1"]["su"]:.3f}, sv {site["1"]["sv"]:.3f})')
        if abs(du / goal - 1) < 0.06 and abs(dv / goal - 1) < 0.06: break
        for k in site: site[k]['su'] = round(site[k]['su'] * (goal / du) ** 0.9, 3); site[k]['sv'] = round(site[k]['sv'] * (goal / dv) ** 0.9, 3)
    br = P['breast']; tip = tips[1]; row = br['nipRow']
    for nm in ('m0', 'm5', 'm1'): print(nm, 'verts', len(br['idx']), 'at nipple', br[nm][row * 3:row * 3 + 3])


if __name__ == '__main__':
    main()
