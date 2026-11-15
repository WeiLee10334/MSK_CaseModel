# 第二階段：分類、熔接、肌腱權重、起止點、增肌向量（含深層推擠）、皮膚與皮下厚度、封裝
import json, re, gzip, struct, sys, time
import numpy as np
from scipy.spatial import cKDTree, ConvexHull
from scipy.sparse import coo_matrix
S, OUT = sys.argv[1], sys.argv[2]
meta = json.load(open(S + '/za_stage1.json', encoding='utf8')); z = np.load(S + '/za_stage1.npz'); V, T, FM = z['V'], z['T'], z['FM']
ZH = json.load(open(sys.argv[3], encoding='utf8')) if len(sys.argv) > 3 else {}
t_start = time.time()
def weld(pos, tri, extra=None):
    key = np.round(pos * 1000).astype(np.int64); uq, first, inv = np.unique(key, axis=0, return_index=True, return_inverse=True); inv = inv.ravel()
    npos = np.zeros((len(uq), 3)); cnt = np.zeros(len(uq)); np.add.at(npos, inv, pos); np.add.at(cnt, inv, 1); npos /= cnt[:, None]
    t2 = inv[tri]; ok = (t2[:, 0] != t2[:, 1]) & (t2[:, 1] != t2[:, 2]) & (t2[:, 0] != t2[:, 2])
    return npos, t2[ok], ok
def vnormals(pos, tri):
    fn = np.cross(pos[tri[:, 1]] - pos[tri[:, 0]], pos[tri[:, 2]] - pos[tri[:, 0]]); n = np.zeros_like(pos)
    for k in range(3): np.add.at(n, tri[:, k], fn)
    l = np.linalg.norm(n, axis=1, keepdims=True); l[l < 1e-9] = 1; return n / l
def volume(pos, tri):
    a, b, c = pos[tri[:, 0]], pos[tri[:, 1]], pos[tri[:, 2]]; return float((a * np.cross(b, c)).sum() / 6)
def adjacency(n, tri):
    r = np.concatenate([tri[:, 0], tri[:, 1], tri[:, 2], tri[:, 1], tri[:, 2], tri[:, 0]]); c = np.concatenate([tri[:, 1], tri[:, 2], tri[:, 0], tri[:, 0], tri[:, 1], tri[:, 2]])
    A = coo_matrix((np.ones(len(r)), (r, c)), shape=(n, n)).tocsr(); A.data[:] = 1; return A
def smooth(A, v, it, lam=0.6):
    deg = np.maximum(np.asarray(A.sum(1)).ravel(), 1)
    if v.ndim == 2: deg = deg[:, None]
    for _ in range(it): v = (1 - lam) * v + lam * (A @ v) / deg
    return v
def vweight(n, tri, fmask):
    a = np.zeros(n); b = np.zeros(n)
    for k in range(3): np.add.at(a, tri[:, k], fmask.astype(float)); np.add.at(b, tri[:, k], 1.0)
    return a / np.maximum(b, 1)
SPECIAL_APO = ('Posterior layer of thoracolumbar fascia',)
def base(n): return re.sub(r'\.[a-z]+\d*[a-z]*$', '', n)
# ---------- 部件 ----------
parts = []; skin_objs = []; ins_objs = []
for m in meta:
    pos = V[m['v0']:m['v0'] + m['nv']].astype(np.float64); tri = T[m['t0']:m['t0'] + m['nt']].astype(np.int64); fm = FM[m['t0']:m['t0'] + m['nt']]
    mats = m['mats']; m0 = mats[0] if mats else ''; nm = base(m['name']); ch = m['chain']
    if m['cls'] == 'skin':
        if any('Hairs' in c for c in ch) or nm in ('Eyelashes', 'Hairs of eyebrow', 'Hairs of head'):
            if nm == 'Pubic hairs': continue
            pos, tri, ok = weld(pos, tri); c = pos.mean(0)
            if len(tri) > 1: parts.append(dict(t=11, s=2 if abs(c[0]) < 1.5 else (0 if c[0] > 0 else 1), pos=pos, tri=tri, mix=np.zeros(len(pos)), en=nm, chain=ch, act='', kind=0, c=c))
            continue
        skin_objs.append((m, pos, tri)); continue
    fname = lambda i: mats[i] if i < len(mats) else ''
    pos, tri, ok = weld(pos, tri); fm = fm[ok]
    if len(tri) < 2: continue
    fmat = np.array([fname(i) for i in range(int(fm.max()) + 1)]); fn_ = fmat[fm]
    mix = np.zeros(len(pos)); act = ''
    if m['cls'] == 'bone':
        if m0.startswith('Teeth'): t = 4
        elif (fn_ == 'Cartilage').all() or m0 == 'Cartilage': t = 3
        else: t = 2; mix = vweight(len(pos), tri, fn_ == 'Cartilage')
    elif m['cls'] == 'joint':
        t = {'Ligament': 5, 'Cartilage': 3, 'Articular capsule': 6, 'Fat': 8}.get(m0, 5)
    elif m['cls'] == 'muscle':
        if m0 in ('Tendon', 'Ligament'): t = 1
        elif m0 == 'Cartilage': t = 3
        elif (fn_ == 'Tendon').mean() > 0.95: t = 1
        else: t = 0; mix = vweight(len(pos), tri, fn_ == 'Tendon'); act = m0
    elif m['cls'] == 'fascia': t = 1 if nm in SPECIAL_APO else 7
    elif m['cls'] == 'bursa': t = 8
    elif m['cls'] == 'ins': t = 10
    elif m['cls'] == 'eye': t = 9
    sf = m['suf']; c = pos.mean(0)
    sd = 0 if sf.endswith('l') else 1 if sf.endswith('r') else (2 if abs(c[0]) < 1.5 else (0 if c[0] > 0 else 1))
    kind = 0
    if t == 10: kind = 1 if sf.startswith('o') else 2
    parts.append(dict(t=t, s=sd, pos=pos, tri=tri, mix=mix, en=nm, chain=ch, act=act, kind=kind, c=c))
ORDER = {0: 0, 1: 1, 7: 2, 2: 3, 3: 4, 4: 5, 9: 5.5, 5: 6, 6: 7, 8: 8, 10: 9, 11: 10}
parts.sort(key=lambda q: (ORDER[q['t']], q['s']))
print('parts', len(parts), 'by tissue', {k: sum(1 for q in parts if q['t'] == k) for k in ORDER}, 'verts', sum(len(q['pos']) for q in parts))
byname = {}
for q in parts: byname.setdefault((q['en'], q['s'], q['t']), q)
def bone(n, s): return byname[(n, s, 2)]['pos']
# ---------- 標記與軸 ----------
LM = {}
hum, rad, uln, fem, tib = bone('Humerus', 0), bone('Radius', 0), bone('Ulna', 0), bone('Femur', 0), bone('Tibia', 0)
top = hum[hum[:, 1] > hum[:, 1].max() - 4.5]; LM['shoulder'] = [float(abs(top[:, 0]).mean()), float(hum[:, 1].max() - 2.3)]
ft = fem[fem[:, 1] > fem[:, 1].max() - 4.0]; LM['hipJ'] = [float(np.percentile(np.abs(ft[:, 0]), 15)), float(fem[:, 1].max() - 2.4)]
LM.update(yElbow=float(uln[:, 1].max()), yWrist=float(rad[:, 1].min()), yKnee=float(fem[:, 1].min()), yAnkle=float(tib[:, 1].min()), yTroch=float(fem[fem[:, 0] > np.percentile(fem[:, 0], 92)][:, 1].max()))
def seg_axis(names, s):
    pts = np.concatenate([bone(n, s) for n in names]); c = pts.mean(0); _, _, vt = np.linalg.svd(pts - c, full_matrices=False); a = vt[0]; t = (pts - c) @ a
    return c + a * t.min(), c + a * t.max()
AX = []
for s in (0, 1): AX += [seg_axis(['Humerus'], s), seg_axis(['Radius', 'Ulna'], s), seg_axis(['Femur'], s), seg_axis(['Tibia', 'Fibula'], s)]
# ---------- 皮膚 ----------
sp = np.concatenate([o[1] for o in skin_objs]); off = np.cumsum([0] + [len(o[1]) for o in skin_objs])
st = np.concatenate([o[2] + off[i] for i, o in enumerate(skin_objs)]); sobj = np.concatenate([np.full(len(o[2]), i) for i, o in enumerate(skin_objs)])
vobj = np.concatenate([np.full(len(o[1]), i) for i, o in enumerate(skin_objs)])
key = np.round(sp * 200).astype(np.int64); uq, first, inv = np.unique(key, axis=0, return_index=True, return_inverse=True); inv = inv.ravel()
sp = sp[first]; vobj = vobj[first]; st = inv[st]; ok = (st[:, 0] != st[:, 1]) & (st[:, 1] != st[:, 2]) & (st[:, 0] != st[:, 2]); st = st[ok]; sobj = sobj[ok]
e = np.sort(np.concatenate([st[:, [0, 1]], st[:, [1, 2]], st[:, [2, 0]]]), 1); ue, ec = np.unique(e, axis=0, return_counts=True)
if volume(sp, st) < 0: st = st[:, ::-1].copy()
# 會陰附近的皮膚開口（男性模型由陰囊遮住）：找出邊界環並補上三角形，男女共用
he = np.concatenate([st[:, [0, 1]], st[:, [1, 2]], st[:, [2, 0]]]); hown = np.concatenate([sobj, sobj, sobj])
key_ = np.sort(he, 1); _, inv_, cnt_ = np.unique(key_, axis=0, return_inverse=True, return_counts=True); bd = cnt_[inv_.ravel()] == 1
nxt_ = {}; own_ = {}
for (a_, b_), o_ in zip(he[bd], hown[bd]):
    pa, pb = sp[a_], sp[b_]
    if abs(pa[0]) < 9 and 62 < pa[1] < 84 and -11 < pa[2] < 10 and abs(pb[0]) < 9 and 62 < pb[1] < 84: nxt_.setdefault(int(a_), []).append(int(b_)); own_[int(a_)] = int(o_)
loops = []; used_ = set()
for a0 in list(nxt_):
    if a0 in used_: continue
    loop = [a0]; used_.add(a0); cur = a0
    while True:
        cand = [v for v in nxt_.get(cur, []) if v not in used_ or v == a0]
        if not cand: loop = None; break
        cur = cand[0]
        if cur == a0: break
        loop.append(cur); used_.add(cur)
        if len(loop) > 400: loop = None; break
    if loop and len(loop) >= 3: loops.append(loop)
newv = []; newt = []; newo = []; newvo = []
for lp in loops:
    P_ = sp[lp]; ext_ = P_.max(0) - P_.min(0)
    if len(lp) > 120 or ext_.max() > 16: continue
    ci = len(sp) + len(newv); newv.append(P_.mean(0)); newvo.append(vobj[lp[0]])
    for i_ in range(len(lp)): newt.append([lp[(i_ + 1) % len(lp)], lp[i_], ci]); newo.append(own_[lp[i_]])
print('perineal boundary loops', [len(l) for l in loops], 'filled tris', len(newt))
if newv:
    sp = np.concatenate([sp, np.array(newv)]); vobj = np.concatenate([vobj, np.array(newvo)]); st = np.concatenate([st, np.array(newt)]); sobj = np.concatenate([sobj, np.array(newo)])
sn = vnormals(sp, st)
print('skin verts', len(sp), 'tris', len(st), 'boundary edges', int((ec == 1).sum()), 'nonmanifold', int((ec > 2).sum()), 'volume L', round(volume(sp, st) / 1000, 2), 'height', round(float(sp[:, 1].max()), 1), 'min y', round(float(sp[:, 1].min()), 2))
def sclass(o):
    m, pos = o[0], o[1]; ch = ' | '.join(m['chain']) + ' | ' + m['name']; c = pos.mean(0)
    upper = ('upper limb' in ch) or bool(re.search(r'Brachial|Cubital|Antebrachial|Carpal|hand|Palm|Deltoid region|bicipital|Radial foveola|Nail plate\.|Perionyx\.', ch)) and 'foot' not in ch
    if upper:
        free = abs(c[0]) > LM['shoulder'][0] + 1.0 and c[1] < LM['shoulder'][1] - 4.0
        ext = bool(re.search(r'hand|Palm|Nail plate|Perionyx', ch))
        return ((1 if c[0] > 0 else 2) if free else 0) + (8 if ext else 0) + 16
    if re.search(r'foot|Sole|Heel region|Hallucial|Metatarsal region|arch of foot', ch): return 8
    if re.search(r'Regions of head|Regions of face|epicranium|Auricular|Oral region', ch): return 5 + 8
    if re.search(r'Regions of neck|region of neck|Sternocleidomastoid region|triangle|supraclavicular|hyoid region', ch) and not re.search(r'Femoral triangle|auscultation|Deltopectoral', ch): return 5
    return 0
ocls = np.array([sclass(o) for o in skin_objs]); tcls = ocls[sobj]
cls = np.zeros(len(sp), int)
for k in range(3): cls[st[:, k]] = np.maximum(cls[st[:, k]], 0)
order = np.argsort((tcls % 8 != 0).astype(int) + (tcls >= 16).astype(int))      # 軀幹先寫，肢體後寫覆蓋
for k in range(3): cls[st[order, k]] = tcls[order]
y = sp[:, 1]
anal = [o[1] for o in skin_objs if base(o[0]['name']) == 'Anal region']
yCrotch = float(np.mean([a_[:, 1].mean() for a_ in anal])) if anal else 0.455 * float(sp[:, 1].max()); LM['yCrotch'] = yCrotch
H0 = float(sp[:, 1].max()); LM['H0'] = H0
struct_idx = [i for i, q in enumerate(parts) if q['t'] in (0, 1, 2, 3)]
ALLS = np.concatenate([parts[i]['pos'] for i in struct_idx]); tree = cKDTree(ALLS)
depth = np.full(len(sp), np.nan); active = np.ones(len(sp), bool)
for sdep in np.arange(0.0, 7.0, 0.2):
    ix = np.where(active)[0]
    if not len(ix): break
    dd, _ = tree.query(sp[ix] - sn[ix] * sdep, workers=-1); hit = dd < 0.42; depth[ix[hit]] = sdep; active[ix[hit]] = False
As = adjacency(len(sp), st); deg = np.maximum(np.asarray(As.sum(1)).ravel(), 1)
print('skin depth: hit at 0', int((depth == 0).sum()), 'no hit', int(np.isnan(depth).sum()), 'median', round(float(np.nanmedian(depth)), 2))
for _ in range(20):
    nanm = np.isnan(depth)
    if not nanm.any(): break
    cnt = As @ (~nanm).astype(float); sm = As @ np.where(nanm, 0, depth); fill = nanm & (cnt > 0); depth[fill] = sm[fill] / cnt[fill]
depth[np.isnan(depth)] = np.nanmedian(depth)
for _ in range(3): depth = np.minimum(depth, (As @ depth) / deg + 0.35)
tb = np.clip(smooth(As, depth, 6), 0.25, 4.0)
# 皮膚可向內移動的上限：到最近結構頂點的距離扣除安全距離，再取鄰近頂點的最小值，確保肌肉不會穿出皮膚
d0, _ = tree.query(sp, workers=-1); sgap = np.clip(d0 - 0.3, 0, 5.0)
for _ in range(2):
    g2 = sgap.copy()
    for a_, b_ in ((0, 1), (1, 2), (2, 0)): np.minimum.at(g2, st[:, a_], sgap[st[:, b_]]); np.minimum.at(g2, st[:, b_], sgap[st[:, a_]])
    sgap = g2
print('skin gap: zero', int((sgap < 0.02).sum()), 'median', round(float(np.median(sgap)), 2))
# 軀幹中心 z(y)
trunkv = (cls % 8 == 0) & (cls < 16) & (y > yCrotch)
zc = []
for v in np.arange(60, 160, 4.0):
    m_ = trunkv & (np.abs(y - v) < 2.5) if v < 148 else (np.abs(y - v) < 2.5) & (np.abs(sp[:, 0]) < 12)
    zc.append([float(v), float((sp[m_][:, 2].min() + sp[m_][:, 2].max()) / 2) if m_.sum() > 8 else 0.0])
zc = np.array(zc); LM['zc'] = zc.tolist()
def zcen(yv): return np.interp(yv, zc[:, 0], zc[:, 1])
def outward(p):
    best = np.full(len(p), 1e9); o = np.zeros_like(p)
    for a, b in AX:
        ab = b - a; t = np.clip(((p - a) @ ab) / (ab @ ab), -0.2, 1.15); v = p - (a + t[:, None] * ab); dist = np.linalg.norm(v, axis=1)
        m_ = dist < best; best[m_] = dist[m_]; o[m_] = v[m_]
    v = p.copy(); v[:, 2] -= zcen(p[:, 1]); v[:, 1] = 0; dist = np.linalg.norm(v, axis=1) - 10.0
    m_ = (p[:, 1] > LM['yCrotch'] - 2) & (np.abs(p[:, 0]) < LM['shoulder'][0] + 3) & (dist < best); o[m_] = v[m_]
    n = np.linalg.norm(o, axis=1, keepdims=True); n[n < 1e-6] = 1
    return o / n
# ---------- 肌肉分區 ----------
RULES = [(r'compartment of thigh|Quadriceps|Hamstring|Adductor (longus|brevis|magnus|minimus)|Gracilis|Pectineus|Sartorius', 9), (r'compartment of leg|Triceps surae|Gastrocnemius|Soleus', 10),
         (r'[Gg]luteal|Gluteus|Tensor fasciae|Piriformis|Obturator|Gemellus|Quadratus femoris', 8), (r'compartment of arm|Biceps brachii|Triceps brachii|Brachialis|Coracobrachialis', 6), (r'compartment of forearm', 7),
         (r'Scapulohumeral|Deltoid|Rotator cuff|Teres major', 2), (r'Pectoralis|Serratus anterior', 3),
         (r'Muscles of abdomen|Rectus abdominis|oblique muscle|Transversus abdominis|Quadratus lumborum|Pyramidalis', 5),
         (r'Dorsal part of muscular system|Erector spinae|Epaxial|Hypaxial muscles of back|Transversospinal|Spinotransversales|Trapezius|Latissimus|Rhomboid|Levator scapulae', 4),
         (r'Sternocleidomastoid|Scalen|Platysma', 1)]
def region(q):
    txt = q['en'] + ' | ' + ' | '.join(q['chain'][:3])
    if re.search(r'Muscles of (foot|hand|head|soft palate|tongue)|hallucis brevis|Adductor hallucis|Cranial part|Pelvic diaphragm|Perineal|Levator ani|Laryngeal|Pharyngeal|hyoid|Digastric|Suboccipital|Interspinales|intertransversarii', txt): return 0
    if re.search(r'Diaphragm|ntercostal|Subcostal|Levatores|Transversus thoracis|Subclavius|Longus c|Rectus (anterior|lateralis) capitis|Serratus posterior|Rotatores', q['en']): return 0
    if re.search(r'Iliacus|Psoas', q['en']): return 0
    for rx, r in RULES:
        if re.search(rx, txt): return r
    return 0
# ---------- 起止點對應 ----------
ins_by = {}
for q in parts:
    if q['t'] == 10:
        k = (re.sub(r'^\((.*)\)$', r'\1', q['en']), q['s']); ins_by.setdefault(k, []).append(q['pos'])
def attach_pts(q):
    out = []
    for k in [(q['en'], q['s']), (q['en'], 2)]:
        out += ins_by.get(k, [])
    return np.concatenate(out) if out else None
# ---------- 增肌位移場（體素） ----------
# 作法：把可增長的肌腹體素化成密度場 rho（靠近肌腱與起止點處為 0），沿「由骨往外」的射線積分得到 m(p)，
# 位移 = 方向 o(p) × beta × m(p)。相鄰或上下層的表面取到同一個平滑場，所以不會互相穿透。
from scipy import ndimage
BETA = 0.5; HV = 0.5
for q in parts:
    pos, tri = q['pos'], q['tri']; c = q['c']
    _, s_, vt = np.linalg.svd(pos - c, full_matrices=False); e1 = vt[0]; ax = (pos - c) @ e1
    q['len'] = float(ax.max() - ax.min()); q['vol'] = abs(volume(pos, tri)) if q['t'] in (0, 1, 2, 3, 4) else 0.0
    q['rg'] = region(q) if q['t'] == 0 else 0; q['ax'] = ax
    txt_ = q['en'] + ' | ' + ' | '.join(q['chain'])
    free_ = bool(re.search(r'compartment of (arm|forearm)|Biceps brachii|Triceps brachii|Muscles of hand|free (part of )?upper limb|Joints of hand|Bones of hand|sheaths of upper limb|Carpal tendon sheaths|Fasciae of upper limb', txt_)) and not re.search(r'Scapulohumeral|Deltoid|Rotator cuff|girdle', txt_)
    q['seg'] = 1 if free_ or (abs(c[0]) > LM['shoulder'][0] + 1.0 and c[1] < LM['shoulder'][1] - 4.0) else 0
bone_free = set(q['en'] for q in parts if q['t'] == 2 and q['seg'])
for q in parts:      # 起止點貼片跟著所在的骨頭
    if q['t'] == 10 and q['chain'] and base(q['chain'][0]) in bone_free: q['seg'] = 1
# 男性外生殖器相關結構：女性體型時不顯示
ps_ = [q for q in parts if q['en'] == 'Pubic symphysis']; zpub = float(ps_[0]['pos'][:, 2].max()) if ps_ else 6.0
for q in parts:
    c_ = q['c']; q['male'] = 1 if (q['t'] in (0, 1, 5, 6, 7, 8, 10) and abs(c_[0]) < 3.5 and LM['hipJ'][1] - 18 < c_[1] < LM['hipJ'][1] - 2 and q['pos'][:, 2].max() > zpub + 2.5 and c_[2] > zpub - 1.0) or bool(re.search(r'Bulbospongiosus|Ischiocavernosus|Cremaster|penis|Dartos', q['en'], re.I)) else 0
print('male-only parts', sorted(set(q['en'] for q in parts if q['male'])))
print('free upper limb parts', sum(q['seg'] for q in parts), 'muscles', sorted(set(q['en'].replace(' muscle', '') for q in parts if q['t'] == 0 and q['seg']))[:60])
grow = [i for i, q in enumerate(parts) if q['t'] == 0 and q['rg'] > 0]
gp = np.concatenate([parts[i]['pos'] for i in grow]); org = gp.min(0) - 7.0; gshape = tuple(np.ceil((gp.max(0) + 7.0 - org) / HV).astype(int))
rho = np.zeros(gshape, np.float32); rgrid = np.zeros(gshape, np.uint8)
def voxelize(pos, tri):
    u = (pos - org) / HV - 0.5 + np.array([1.3e-4, 1.7e-4, 0.0]); a, b, c = u[tri[:, 0]], u[tri[:, 1]], u[tri[:, 2]]
    x0 = np.ceil(np.minimum(np.minimum(a[:, 0], b[:, 0]), c[:, 0])).astype(int); x1 = np.floor(np.maximum(np.maximum(a[:, 0], b[:, 0]), c[:, 0])).astype(int)
    y0 = np.ceil(np.minimum(np.minimum(a[:, 1], b[:, 1]), c[:, 1])).astype(int); y1 = np.floor(np.maximum(np.maximum(a[:, 1], b[:, 1]), c[:, 1])).astype(int)
    den = (b[:, 1] - c[:, 1]) * (a[:, 0] - c[:, 0]) + (c[:, 0] - b[:, 0]) * (a[:, 1] - c[:, 1]); ok = np.abs(den) > 1e-12
    cols = []; zs = []
    for dx in range(int((x1 - x0).max()) + 1):
        for dy in range(int((y1 - y0).max()) + 1):
            m_ = ok & (x0 + dx <= x1) & (y0 + dy <= y1)
            if not m_.any(): continue
            gx = (x0 + dx)[m_]; gy = (y0 + dy)[m_]; A, B, C, D = a[m_], b[m_], c[m_], den[m_]
            w0 = ((B[:, 1] - C[:, 1]) * (gx - C[:, 0]) + (C[:, 0] - B[:, 0]) * (gy - C[:, 1])) / D
            w1 = ((C[:, 1] - A[:, 1]) * (gx - C[:, 0]) + (A[:, 0] - C[:, 0]) * (gy - C[:, 1])) / D; w2 = 1 - w0 - w1
            ins = (w0 >= 0) & (w1 >= 0) & (w2 >= 0)
            cols.append(gx[ins] * 100000 + gy[ins]); zs.append((w0 * A[:, 2] + w1 * B[:, 2] + w2 * C[:, 2])[ins])
    if not cols: return np.zeros((0, 3), int)
    cols = np.concatenate(cols); zs = np.concatenate(zs); o_ = np.lexsort((zs, cols)); cols = cols[o_]; zs = zs[o_]
    same = cols[1:] == cols[:-1]; rank = np.zeros(len(cols), int)
    for i_ in range(1, len(cols)): pass
    start = np.r_[True, ~same]; grp = np.cumsum(start) - 1; first = np.where(start)[0]; rank = np.arange(len(cols)) - first[grp]
    cnt = np.bincount(grp); even = cnt[grp] % 2 == 0
    lo = (rank % 2 == 0) & even; lo[-1] = False if len(lo) else False
    i0 = np.where(lo)[0]; i0 = i0[i0 + 1 < len(cols)]
    k0 = np.ceil(zs[i0]).astype(int); k1 = np.floor(zs[i0 + 1]).astype(int); n = np.maximum(k1 - k0 + 1, 0)
    cx = np.repeat(cols[i0] // 100000, n); cy = np.repeat(cols[i0] % 100000, n); kz = np.repeat(k0, n) + (np.arange(n.sum()) - np.repeat(np.cumsum(n) - n, n))
    v = np.stack([cx, cy, kz], 1); okv = (v >= 0).all(1) & (v < np.array(gshape)).all(1); return v[okv]
n_att = 0; nvox = 0
for i in grow:
    q = parts[i]; pos = q['pos']; vox = voxelize(pos, q['tri'])
    if not len(vox): continue
    anchors = [pos[q['mix'] > 0.5]]; ap = attach_pts(q)
    if ap is not None: anchors.append(ap); n_att += 1
    tt = (q['ax'] - q['ax'].min()) / max(1e-6, q['ax'].max() - q['ax'].min()); anchors.append(pos[(tt < 0.04) | (tt > 0.96)])
    an = np.concatenate(anchors); pc = org + (vox + 0.5) * HV
    da, _ = cKDTree(an).query(pc); w = np.clip((da - 0.6) / 2.6, 0, 1); w = w * w * (3 - 2 * w)
    cur = rho[vox[:, 0], vox[:, 1], vox[:, 2]]; upd = w > cur
    rho[vox[upd, 0], vox[upd, 1], vox[upd, 2]] = w[upd]; rgrid[vox[upd, 0], vox[upd, 1], vox[upd, 2]] = q['rg']; nvox += len(vox)
print('growing muscles', len(grow), 'with attachment data', n_att, 'voxels', nvox, 'grid', gshape, 'belly volume L', round(float((rho > 0.5).sum()) * HV ** 3 / 1000, 1), 'regions', np.bincount([parts[i]['rg'] for i in grow], minlength=11).tolist())
def dirfield(p):
    ds = []; vs = []; ts = []
    for a, b in AX:
        ab = b - a; t = np.clip(((p - a) @ ab) / (ab @ ab), -0.15, 1.1); v = p - (a + t[:, None] * ab); d = np.linalg.norm(v, axis=1); ds.append(d); vs.append(v / np.maximum(d, 1e-6)[:, None]); ts.append(d)
    v = p.copy(); v[:, 2] -= zcen(p[:, 1]); v[:, 1] = 0; d = np.linalg.norm(v, axis=1); okt = p[:, 1] > LM['yCrotch'] - 3
    ds.append(np.where(okt, np.maximum(d - 9.0, 0.0), 1e6)); vs.append(v / np.maximum(d, 1e-6)[:, None]); ts.append(np.minimum(d, 14.0))
    ds = np.stack(ds, 1); w = np.exp(-(ds - ds.min(1, keepdims=True)) / 2.0); w /= w.sum(1, keepdims=True)
    o = np.einsum('nk,knj->nj', w, np.stack(vs)); n_ = np.linalg.norm(o, axis=1, keepdims=True); o = o / np.maximum(n_, 1e-6)
    return o, (w * np.stack(ts, 1)).sum(1)
occ = np.zeros(gshape, bool)
for P_ in [ALLS, sp] + [parts[i]['pos'] for i, q in enumerate(parts) if q['t'] in (7, 5, 6, 8)]:
    ii = np.floor((P_ - org) / HV).astype(int); ok_ = (ii >= 0).all(1) & (ii < np.array(gshape)).all(1); occ[ii[ok_, 0], ii[ok_, 1], ii[ok_, 2]] = True
occ = ndimage.binary_dilation(occ, iterations=3); vi = np.argwhere(occ); pc = org + (vi + 0.5) * HV
o_, T_ = dirfield(pc); msum = np.zeros(len(vi), np.float32); racc = np.zeros((len(vi), 11), np.float32); STEP = 0.4
for j in range(34):
    t = (j + 0.5) * STEP; act = t < T_
    if not act.any(): break
    qi = np.floor((pc[act] - o_[act] * t - org) / HV).astype(int); ok_ = (qi >= 0).all(1) & (qi < np.array(gshape)).all(1)
    val = np.zeros(act.sum(), np.float32); rr = np.zeros(act.sum(), int)
    val[ok_] = rho[qi[ok_, 0], qi[ok_, 1], qi[ok_, 2]]; rr[ok_] = rgrid[qi[ok_, 0], qi[ok_, 1], qi[ok_, 2]]
    msum[act] += val * STEP; ia = np.where(act)[0]; np.add.at(racc, (ia, rr), val)
mg = np.zeros(gshape, np.float32); mg[vi[:, 0], vi[:, 1], vi[:, 2]] = msum
wgt = ndimage.gaussian_filter(occ.astype(np.float32), 1.2); mg = ndimage.gaussian_filter(mg, 1.2) / np.maximum(wgt, 1e-3) * occ
MCAP = 7.0; mg = (MCAP * np.tanh(mg / MCAP)).astype(np.float32)      # 柔性上限：沿射線仍單調，層次不會交錯
# 每個體素記下貢獻最大的兩個部位與比例，讓不同部位各自調整時，上下層的位移仍一致
racc[:, 0] = 0; od = np.argsort(racc, axis=1)[:, ::-1]; ar_ = np.arange(len(vi)); v1_ = racc[ar_, od[:, 0]]; v2_ = racc[ar_, od[:, 1]]
rg3 = np.zeros(gshape, np.uint8); rg3b = np.zeros(gshape, np.uint8); fr3 = np.full(gshape, 255, np.uint8)
rg3[vi[:, 0], vi[:, 1], vi[:, 2]] = od[:, 0]; rg3b[vi[:, 0], vi[:, 1], vi[:, 2]] = np.where(v2_ > 0, od[:, 1], od[:, 0]); fr3[vi[:, 0], vi[:, 1], vi[:, 2]] = np.round(255 * v1_ / np.maximum(v1_ + v2_, 1e-6))
def sample(p):
    u = ((p - org) / HV - 0.5).T; m_ = ndimage.map_coordinates(mg, u, order=1, mode='nearest')
    ii = np.clip(np.floor((p - org) / HV).astype(int), 0, np.array(gshape) - 1); o, _ = dirfield(p)
    on_ = m_ > 0.02; g_ = lambda G_: G_[ii[:, 0], ii[:, 1], ii[:, 2]]
    return o * (BETA * m_)[:, None], np.where(on_, g_(rg3), 0), np.where(on_, g_(rg3b), 0), np.where(on_, g_(fr3), 255)
defo = [i for i, q in enumerate(parts) if q['t'] in (0, 1, 7)]
NVd = sum(len(parts[i]['pos']) for i in defo)
for i in defo:
    q = parts[i]; q['F'], q['vrg'], q['vrg2'], q['vfr'] = sample(q['pos'])
sF, srg, srg2, sfr = sample(sp)
print('field done; max F', round(max(np.linalg.norm(parts[i]['F'], axis=1).max() for i in defo), 2), 'skin F max/median', round(float(np.linalg.norm(sF, axis=1).max()), 2), round(float(np.median(np.linalg.norm(sF, axis=1))), 2))
# 脊椎中心線（軀幹寬深縮放時保持椎體不變形）
zs = []
for q in parts:
    if q['t'] == 2 and re.match(r'^(Vertebra [CTL]\d+|Atlas|Axis|Sacrum|Coccyx)', q['en']):
        p_ = q['pos']; zs.append([float(p_[:, 1].mean()), float(p_[:, 2].max() - (1.5 if not q['en'].startswith('Vertebra C') else 1.0))])
zs.sort(); LM['zs'] = zs
# 女性：把男性外生殖器的皮膚撫平（調和曲面）
uro = np.zeros(len(sp), bool)
for i_, o in enumerate(skin_objs):
    if base(o[0]['name']) == 'Urogenital region': uro[np.unique(st[sobj == i_])] = True
fem = sp.copy()
if uro.any():
    from scipy.sparse import diags
    from scipy.sparse.linalg import spsolve
    U_ = np.where(uro)[0]; Fx = np.where(~uro)[0]; dg_ = np.asarray(As.sum(1)).ravel()
    ring = np.where(((As @ uro.astype(float)) > 0) & ~uro)[0]; rc_ = sp[ring].mean(0)
    Auu = (diags(dg_[U_] + 1e-3) - As[U_][:, U_]).tocsc(); rhs = As[U_][:, Fx] @ sp[Fx] + 1e-3 * rc_
    fem[U_] = np.stack([spsolve(Auu, rhs[:, k_]) for k_ in range(3)], 1)
sFem = fem - sp
# 脂肪增厚時把肌肉線條撫平：Taubin 平滑後的皮膚（只作用在軀幹與四肢）
ssm = sp.copy(); fixed = ((cls & 8) > 0) | ((cls & 7) == 5) | (np.asarray(As.sum(1)).ravel() < 3)
for _ in range(25):
    for lam_ in (0.55, -0.58):
        nxt = ssm + lam_ * ((As @ ssm) / deg[:, None] - ssm); nxt[fixed] = sp[fixed]; ssm = nxt
sSm = ssm - sp; l_ = np.linalg.norm(sSm, axis=1, keepdims=True); sSm = sSm * np.minimum(1.0, 2.5 / np.maximum(l_, 1e-6))
print('skin smoothing delta max/median', round(float(np.linalg.norm(sSm, axis=1).max()), 2), round(float(np.median(np.linalg.norm(sSm, axis=1))), 3))
print('spine nodes', len(zs), 'urogenital verts', int(uro.sum()), 'max female delta', round(float(np.abs(sFem).max()), 1))
# ---------- 圍度基準 ----------
notarm = ~(cls[st] >= 16).any(1); tr_tri = st[notarm]
def girth(yv, P=sp):
    a, b, c = P[tr_tri[:, 0]], P[tr_tri[:, 1]], P[tr_tri[:, 2]]; pts = []
    for p_, q_ in [(a, b), (b, c), (c, a)]:
        dp, dq = p_[:, 1] - yv, q_[:, 1] - yv; m_ = (dp < 0) != (dq < 0); t = (dp[m_] / (dp[m_] - dq[m_]))[:, None]; pts.append(p_[m_] + t * (q_[m_] - p_[m_]))
    pts = np.concatenate(pts)[:, [0, 2]]
    return float(ConvexHull(pts).area) if len(pts) >= 8 else 0.0
hip = byname[('Hip bone', 0, 2)]['pos']; yCrest = float(hip[:, 1].max())
ribs = [q['pos'] for q in parts if q['t'] == 2 and re.search(r'^(Tenth|Rib 10|10th)|rib \(?X\)?|Rib X$|Tenth rib', q['en'])]
names_rib = sorted(set(q['en'] for q in parts if q['t'] == 2 and 'ib' in q['en']))
mam = [o for o in skin_objs if base(o[0]['name']) == 'Mammary region']
yChest = float(np.mean([o[1][:, 1].mean() for o in mam])) if mam else 0.72 * H0
if mam:
    mp_ = np.concatenate([o[1] for o in mam]); fr = mp_[mp_[:, 2] > np.percentile(mp_[:, 2], 90)]
    LM['nipple'] = [float(np.abs(fr[:, 0]).mean()), float(fr[:, 1].mean()), float(fr[:, 2].mean())]; LM['yUnder'] = float(fr[:, 1].mean() - 7.0)
top_ = hum[hum[:, 1] > hum[:, 1].max() - 4.5]; wr_ = rad[rad[:, 1] < rad[:, 1].min() + 2.5]
LM['shoulder3'] = [float(top_[:, 0].mean()), float(hum[:, 1].max() - 2.3), float(top_[:, 2].mean())]; LM['wrist3'] = [float(wr_[:, 0].mean()), float(wr_[:, 1].mean()), float(wr_[:, 2].mean())]
ys = np.arange(yCrotch + 1, yChest + 8, 1.0); gs = np.array([girth(v) for v in ys])
wm = (ys > yCrest - 1) & (ys < yChest - 8); yWaist = float(ys[wm][np.argmin(gs[wm])])
gl = sp[(y > yCrotch + 1) & (y < yCrest - 3) & (np.abs(sp[:, 0]) > 3) & (np.abs(sp[:, 0]) < 13)]
yHip = float(gl[np.argsort(gl[:, 2])[:30]][:, 1].mean())
LM.update(yChest=yChest, yWaist=yWaist, yHip=yHip, yCrest=yCrest, girth0=[girth(yChest), girth(yWaist), girth(yHip)])
print('rib names', names_rib[:6], '| crest', round(yCrest, 1), 'levels C/W/H', round(yChest, 1), yWaist, yHip, 'girths', [round(g, 1) for g in LM['girth0']], 'crotch', round(yCrotch, 1), 'troch', round(LM['yTroch'], 1))
vs = abs(volume(sp, st)); vshell = abs(volume(sp - sn * tb[:, None], st))
print('regions by name', {r: sorted(set(q['en'].replace(' muscle', '') for q in parts if q['t'] == 0 and q['rg'] == r))[:60] for r in range(1, 11)})
print('skin vol L', round(vs / 1000, 1), 'under-fat shell L', round(vshell / 1000, 1), 'tb median', round(float(np.median(tb)), 2), 'class counts', np.bincount(cls % 8, minlength=6).tolist(), 'ext', int(((cls & 8) > 0).sum()), 'upper', int((cls >= 16).sum()))
print('muscle volume L', round(sum(q['vol'] for q in parts if q['t'] == 0) / 1000, 1), 'bone L', round(sum(q['vol'] for q in parts if q['t'] in (2, 3, 4)) / 1000, 2))
# ---------- 名稱 ----------
def zh_of(q):
    n = q['en']
    if q['t'] == 10: return (ZH.get(re.sub(r'^\((.*)\)$', r'\1', n), '') )
    return ZH.get(n, '')
# ---------- 封裝 ----------
ALL = np.concatenate([q['pos'] for q in parts]); NV = len(ALL); NT = sum(len(q['tri']) for q in parts)
# 皮膚的上肢權重取自正下方結構，讓腋下皮膚跟著底下的肌肉走，避免胸廓與肩寬不同步時肌肉穿出
def sstep(a_, b_, x_): t_ = np.clip((x_ - a_) / (b_ - a_), 0, 1); return t_ * t_ * (3 - 2 * t_)
def geo_arm(P_): return sstep(LM['shoulder'][0] - 1, LM['shoulder'][0] + 2, np.abs(P_[:, 0])) * sstep(yChest - 8, yChest - 2, P_[:, 1])
aw_struct = np.concatenate([np.ones(len(q['pos'])) if q['seg'] else geo_arm(q['pos']) for q in parts])
sk_own = np.where(np.isin(cls & 7, [1, 2]), 1.0, geo_arm(sp)); dn, jn = cKDTree(ALL).query(sp, workers=-1)
sarm = np.where(dn < 3.0, aw_struct[jn], sk_own); sarm = np.where(np.isin(cls & 7, [1, 2]), np.maximum(sarm, 0.999), sarm); sarm = np.clip(smooth(As, sarm, 1), 0, 1)
print('skin arm weight changed verts', int((np.abs(sarm - sk_own) > 0.2).sum()))
allp = np.concatenate([ALL, sp]); bmin = allp.min(0) - 0.5; bsz = allp.max(0) + 0.5 - bmin
q16 = lambda a: np.round((a - bmin) / bsz * 65535).astype('<u2')
def q8(v, scale): return np.clip(np.round(v / scale * 127), -127, 127).astype(np.int8)
IS = 7.0
FALL = np.concatenate([parts[i]['F'] for i in defo]); VRG = np.concatenate([parts[i]['vrg'] for i in defo]).astype(np.uint8)
MIX = np.concatenate([q['mix'] for q in parts]); 
mp = []; v0 = 0; t0 = 0
for q in parts:
    grp = q['chain'][0] if q['chain'] else ''
    mp.append([q['t'], q['s'], v0, len(q['pos']), t0, len(q['tri']), q['rg'], q['kind'] + 4 * q['seg'] + 8 * q['male'], q['en'], zh_of(q), grp, q['act'], round(q['vol'], 1), round(q['len'], 1)])
    v0 += len(q['pos']); t0 += len(q['tri'])
metaj = dict(version='Z-Anatomy (BodyParts3D)', bmin=bmin.tolist(), bsz=bsz.tolist(), NV=NV, NT=NT, NVd=NVd, NS=len(sp), NTs=len(st), inflScale=IS, femScale=14.0, smScale=3.0, tbScale=0.02, lm=LM, parts=mp)
mj = json.dumps(metaj, ensure_ascii=False, separators=(',', ':')).encode('utf8'); mj += b' ' * ((4 - len(mj) % 4) % 4)
assert max(len(q['pos']) for q in parts) < 65536 and len(sp) < 65536
def pad4(b): return b + b'\0' * ((4 - len(b) % 4) % 4)
blob = [struct.pack('<I', len(mj)), mj, pad4(q16(ALL).tobytes()), pad4(np.concatenate([q['tri'] for q in parts]).astype('<u2').tobytes()),
        pad4(q8(FALL, IS).tobytes()), pad4(VRG.tobytes()), pad4(np.clip(np.round(MIX * 255), 0, 255).astype(np.uint8).tobytes()),
        pad4(q16(sp).tobytes()), pad4(st.astype('<u2').tobytes()), pad4(q8(sn, 1.0).tobytes()), pad4(q8(sF, IS).tobytes()), pad4(q8(sFem, 14.0).tobytes()),
        pad4(np.clip(np.round(tb / 0.02), 0, 255).astype(np.uint8).tobytes()), pad4(cls.astype(np.uint8).tobytes()), pad4(srg.astype(np.uint8).tobytes()), pad4(np.clip(np.floor(sgap / 0.02), 0, 255).astype(np.uint8).tobytes()), pad4(q8(sSm, 3.0).tobytes()), pad4(np.round(sarm * 255).astype(np.uint8).tobytes()),
        pad4(np.concatenate([parts[i]['vrg2'] for i in defo]).astype(np.uint8).tobytes()), pad4(np.concatenate([parts[i]['vfr'] for i in defo]).astype(np.uint8).tobytes()), pad4(srg2.astype(np.uint8).tobytes()), pad4(sfr.astype(np.uint8).tobytes())]
rawb = b''.join(blob); open(f'{OUT}/model.raw', 'wb').write(rawb); gz = gzip.compress(rawb, 9); open(f'{OUT}/model.bin', 'wb').write(gz)
json.dump(sorted(set(q['en'] for q in parts)), open(f'{OUT}/names_en.json', 'w'), ensure_ascii=False)
print('NV', NV, 'NT', NT, 'NVd', NVd, 'raw MB', round(len(rawb) / 1e6, 2), 'gzip MB', round(len(gz) / 1e6, 2), 'json KB', round(len(mj) / 1e3, 1), 'zh coverage', sum(1 for p_ in mp if p_[9]), '/', len(mp), 'total s', round(time.time() - t_start))
