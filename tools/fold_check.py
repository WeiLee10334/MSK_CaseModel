"""皮膚翻折檢查：變形後三角形法向與模板相反（看起來是黑色楔形）的位置。"""
import sys, os, json, numpy as np
from collections import Counter
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'ctpipe'))
from mskmodel import MskModel
m = MskModel(os.path.join(os.path.dirname(__file__), '..', 'docs', 'model.js'))
d = sys.argv[1]; names = sys.argv[2:] or sorted({f.split('.')[0] for f in os.listdir(d) if f.endswith('.json')})
T = m.stri
def nrm(V): n = np.cross(V[T[:, 1]] - V[T[:, 0]], V[T[:, 2]] - V[T[:, 0]]); return n / np.maximum(np.linalg.norm(n, axis=1, keepdims=True), 1e-12)
n0 = nrm(m.sbase)
for n in names:
    info = json.load(open(os.path.join(d, n + '.json')))
    S = np.fromfile(os.path.join(d, n + '.spos.f32'), np.float32).reshape(-1, 3).astype(np.float64)
    S0 = np.fromfile(os.path.join(d, 'sbase.f32'), np.float32).reshape(-1, 3).astype(np.float64)
    Tt = np.array(info['skinTri']).reshape(-1, 3)
    def nr(V): q = np.cross(V[Tt[:, 1]] - V[Tt[:, 0]], V[Tt[:, 2]] - V[Tt[:, 0]]); return q / np.maximum(np.linalg.norm(q, axis=1, keepdims=True), 1e-12)
    dot = (nr(S) * nr(S0)).sum(1); bad = np.where(dot < -0.2)[0]
    c = S0[Tt[bad]].mean(1) if len(bad) else np.zeros((0, 3))
    cls = Counter('patch' if Tt[b].max() >= m.NS else int(m.scls[Tt[b, 0]]) for b in bad)
    print(f'{n}: 翻折三角形 {len(bad)}  皮膚類別 {dict(cls)}')
    if len(bad):
        # 依模板位置分群列出
        from scipy.cluster.vq import kmeans2
        k = min(8, len(bad)); cen, lab = kmeans2(c, k, seed=1, minit='++')
        for j in range(k):
            s = lab == j
            if s.sum(): print(f'    群 {j}: {s.sum():4d} 個，模板位置 x={cen[j,0]:6.1f} y={cen[j,1]:6.1f} z={cen[j,2]:6.1f}')
