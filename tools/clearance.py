"""皮膚間隙：在多種體型（男女、胖瘦）下找出穿出皮膚的結構，算出附近皮膚需要沿法向外推的量（模板單位），
寫回 docs/patches.js 的 clear 欄位。網頁端 deformSkin 會把它加在皮膚法向位移上。
用法：python3 tools/clearance.py [輪數=2]"""
import sys, os, json, subprocess, numpy as np, igl
from scipy.spatial import cKDTree
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, 'ctpipe'))
from mskmodel import MskModel
m = MskModel(os.path.join(ROOT, 'docs', 'model.js'))
PJ = os.path.join(ROOT, 'docs', 'patches.js')
OUT = '/tmp/clearance_cases'
CASES = [dict(name='M_default'), dict(name='M_thin', W=58, chest=88, waist=70, hip=88), dict(name='M_big', W=100, chest=112, waist=100, hip=106),
         dict(name='M_tall', H=190, W=85), dict(name='M_muscle', W=88, chest=110, waist=80, hip=98, bf=10),
         dict(name='F_default', sex='F'), dict(name='F_thin', sex='F', W=45, chest=80, under=68, waist=60, hip=84),
         dict(name='F_big', sex='F', W=80, chest=104, under=86, waist=88, hip=108), dict(name='F_C', sex='F', chest=94, under=72),
         dict(name='F_short', sex='F', H=150, W=48)]
TESTED = {0, 1, 2, 3, 5, 6, 7, 8}


def load_patch():
    t = open(PJ).read(); return json.loads(t[t.index('{'):t.rindex('}') + 1])


def save_patch(P):
    open(PJ, 'w').write('window.__PATCH = ' + json.dumps(P, separators=(',', ':')) + ';\n')


def one_round(clear):
    subprocess.run(['node', os.path.join(HERE, 'harness.mjs'), OUT, json.dumps(CASES)], check=True, stdout=subprocess.DEVNULL)
    need_all = np.zeros_like(clear); total = 0
    for cs in CASES:
        n = cs['name']; info = json.load(open(os.path.join(OUT, n + '.json')))
        P = np.fromfile(os.path.join(OUT, n + '.pos.f32'), np.float32).reshape(-1, 3).astype(np.float64)
        S = np.fromfile(os.path.join(OUT, n + '.spos.f32'), np.float32).reshape(-1, 3).astype(np.float64)
        F = np.array(info['skinTri'], np.int64).reshape(-1, 3); hid = set(info['hiddenMale'])
        ok = np.array([p['t'] in TESTED and p['i'] not in hid for p in m.parts]); idx = np.where(ok[m.vpart])[0]
        out = idx[igl.fast_winding_number(S, F, P[idx]) < 0.5]; total += len(out)
        if not len(out): continue
        fn = np.cross(S[F[:, 1]] - S[F[:, 0]], S[F[:, 2]] - S[F[:, 0]]); nr = np.zeros_like(S)
        for k in range(3): np.add.at(nr, F[:, k], fn)
        nr /= np.maximum(np.linalg.norm(nr, axis=1, keepdims=True), 1e-12)
        used = np.unique(F); tr = cKDTree(S[used])
        sc = info['case'].get('H', 171) / m.lm['H0']          # 世界單位 → 模板單位
        d, j = tr.query(P[out], k=12, distance_upper_bound=3.0)
        for r in range(len(out)):
            for q in range(12):
                if not np.isfinite(d[r, q]): continue
                si = used[j[r, q]]; v = P[out[r]] - S[si]; pr = v @ nr[si]; lat = np.linalg.norm(v - pr * nr[si])
                if lat < 1.6: need_all[si] = max(need_all[si], (pr + 0.15) / sc)
    return need_all, total


def main():
    rounds = int(sys.argv[1]) if len(sys.argv) > 1 else 2
    P = load_patch(); NA = m.NS + len(P['verts']) // 3
    clear = np.zeros(NA)
    CAP = 0.6      # 每點外推上限（公分）：避免為了極端體型在一般體型上造成隆起
    # 鄰接（含補片）做擴散平滑
    T = np.r_[np.delete(m.stri, P['removeTris'], 0), np.array(P['tris']).reshape(-1, 3)]
    cls_all = np.r_[m.scls, np.zeros(NA - m.NS, np.uint8)]; ext = (cls_all & 8) > 0
    brs = np.zeros(NA, bool)
    if P.get('breast'): brs[np.array(P['breast']['idx'])] = True
    ed = np.r_[T[:, [0, 1]], T[:, [1, 2]], T[:, [2, 0]]]
    for rd in range(rounds):
        P['clear'] = [[int(i), round(float(v), 3)] for i, v in enumerate(clear) if v > 1e-3]; save_patch(P)
        need, total = one_round(clear)
        print(f'第 {rd + 1} 輪：穿出頂點合計 {total}，需外推的皮膚頂點 {int((need > 0).sum())}，最大 {need.max():.2f} cm')
        if not (need > 0).any(): break
        add = np.minimum(need, 1.2); add[ext] = 0      # 手、腳、頭的細小凹處外推會自我交疊，不處理
        for _ in range(2):      # 擴散到相鄰頂點，避免單點突起
            nb = np.zeros_like(add); np.maximum.at(nb, ed[:, 0], add[ed[:, 1]] * 0.6); np.maximum.at(nb, ed[:, 1], add[ed[:, 0]] * 0.6); add = np.maximum(add, nb)
        clear = np.minimum(clear + add, CAP)
    # 補片（乳房、外陰）與乳房區的網格比原網格細很多：外推量先擴張再大範圍平均，變成平順的小隆起，不然會像皺紙
    isp = (np.arange(NA) >= m.NS) | brs
    deg = np.zeros(NA); np.add.at(deg, ed[:, 0], 1); np.add.at(deg, ed[:, 1], 1); deg[deg == 0] = 1
    c2 = clear.copy()
    for _ in range(8):
        nb = c2.copy(); np.maximum.at(nb, ed[:, 0], c2[ed[:, 1]]); np.maximum.at(nb, ed[:, 1], c2[ed[:, 0]]); c2[isp] = nb[isp]
    for _ in range(30):
        sm_ = np.zeros(NA); np.add.at(sm_, ed[:, 0], c2[ed[:, 1]]); np.add.at(sm_, ed[:, 1], c2[ed[:, 0]]); c2[isp] = 0.5 * c2[isp] + 0.5 * (sm_ / deg)[isp]
    clear = np.minimum(c2, CAP)
    P['clear'] = [[int(i), round(float(v), 3)] for i, v in enumerate(clear) if v > 1e-3]; save_patch(P)
    _, total = one_round(clear)
    print(f'完成：外推頂點 {len(P["clear"])}，最大 {clear.max():.2f} cm；最後檢查穿出頂點合計 {total}')


if __name__ == '__main__':
    main()
