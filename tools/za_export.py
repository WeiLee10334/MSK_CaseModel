# 第一階段：以 Blender 讀取 Z-Anatomy，套用必要修改器、依面積減面，輸出世界座標網格與材質分面
import bpy, sys, re, json, collections
import numpy as np
SRC, OUT = sys.argv[-2], sys.argv[-1]
KEEP = {'1: Skeletal system': 'bone', '2: Muscular insertions': 'ins', '3: Joints': 'joint', '4: Muscular system': 'muscle', '9: Regions of human body': 'skin'}
BUDGET = {'bone': 118000, 'joint': 46000, 'muscle': 315000, 'fascia': 24000, 'bursa': 9000, 'ins': 24000, 'skin': 10 ** 9}
bpy.ops.wm.open_mainfile(filepath=SRC, use_scripts=False, load_ui=False)
vl = bpy.context.view_layer
for lc in vl.layer_collection.children: lc.exclude = lc.name not in KEEP
def suf(n):
    m = re.search(r'\.([a-z]+\d*[a-z]*)$', n); return m.group(1) if m else ''
def chain(o):
    out = []; p = o.parent
    while p is not None: out.append(re.sub(r'\.(t|g|j|st)$', '', p.name)); p = p.parent
    return out
objs = []
for cn, base in KEEP.items():
    for o in bpy.data.collections[cn].objects:
        if o.type != 'MESH': continue
        s = suf(o.name)
        if base == 'ins':
            if not re.match(r'^[oe]\d*[lr]?$', s): continue
        elif s not in ('r', 'l', ''): continue
        if o.name in ('Pubic hairs',): continue
        m0 = o.data.materials[0].name if o.data.materials and o.data.materials[0] else ''
        cls = base
        if base == 'muscle':
            cls = 'fascia' if m0 == 'Fascia' else 'bursa' if m0 in ('Bursa', 'Articular capsule') else 'muscle'
        for m in o.modifiers:
            if m.type == 'SUBSURF':
                keep = base in ('joint', 'muscle') and len(o.data.vertices) <= 1500
                m.show_viewport = keep
                if keep: m.levels = min(m.levels, 2)
            elif m.type in ('HOOK', 'BOOLEAN', 'WIREFRAME'): m.show_viewport = False
            elif m.type == 'SOLIDIFY' and base in ('skin', 'ins'): m.show_viewport = False
            elif m.type == 'SOLIDIFY' and cls in ('fascia', 'bursa'): m.show_viewport = False
        objs.append((o, cls))
EYES = [o for o in bpy.data.collections['7: Nervous system & Sense organs'].objects if o.type == 'MESH' and re.sub(r'\.[lr]$', '', o.name) in ('Sclera', 'Iris')]
vl.update(); dg = bpy.context.evaluated_depsgraph_get()
stat = collections.defaultdict(list)
for o, cls in objs:
    e = o.evaluated_get(dg); me = e.to_mesh(); nv = len(me.vertices)
    ar = np.empty(len(me.polygons), np.float32); me.polygons.foreach_get('area', ar)
    sc = abs(np.linalg.det(np.array(e.matrix_world)[:3, :3])) ** (2 / 3)
    stat[cls].append((o.name, nv, float(ar.sum()) * sc * 1e4)); e.to_mesh_clear()
ratio = {}
for cls, lst in stat.items():
    nvs = np.array([x[1] for x in lst], float); A = np.array([x[2] for x in lst])
    def total(L): return np.minimum(nvs, np.maximum(24, A / (0.866 * L * L))).sum()
    lo, hi = 0.01, 5.0
    if total(lo) <= BUDGET[cls]: L = lo
    else:
        for _ in range(50):
            mid = (lo + hi) / 2
            if total(mid) > BUDGET[cls]: lo = mid
            else: hi = mid
        L = hi
    for (n, nv, a) in lst: ratio[n] = min(1.0, max(24, a / (0.866 * L * L)) / max(nv, 1))
    print(cls, 'objects', len(lst), 'verts', int(nvs.sum()), 'area cm2', int(A.sum()), 'edge cm', round(L, 3), '->', int(total(L)))
for o, cls in objs:
    r = ratio[o.name]
    if r < 0.97:
        m = o.modifiers.new('dec', 'DECIMATE'); m.decimate_type = 'COLLAPSE'; m.ratio = max(0.02, r)
vl.update(); dg = bpy.context.evaluated_depsgraph_get()
V = []; T = []; FM = []; meta = []; v0 = 0; t0 = 0
for o, cls in objs:
    e = o.evaluated_get(dg); me = e.to_mesh(); nv = len(me.vertices)
    if nv < 3: e.to_mesh_clear(); continue
    me.calc_loop_triangles(); nt = len(me.loop_triangles)
    if nt < 1: e.to_mesh_clear(); continue
    co = np.empty(nv * 3, np.float32); me.vertices.foreach_get('co', co); co = co.reshape(-1, 3).astype(np.float64)
    tri = np.empty(nt * 3, np.int32); me.loop_triangles.foreach_get('vertices', tri); tri = tri.reshape(-1, 3)
    pi = np.empty(nt, np.int32); me.loop_triangles.foreach_get('polygon_index', pi)
    pm = np.empty(len(me.polygons), np.int32); me.polygons.foreach_get('material_index', pm)
    M = np.array(e.matrix_world); w = co @ M[:3, :3].T + M[:3, 3]
    if np.linalg.det(M[:3, :3]) < 0: tri = tri[:, ::-1].copy()
    p = np.stack([w[:, 0], w[:, 2], -w[:, 1]], 1) * 100.0       # 轉為 Y 向上、面向 +Z、公分
    mats = [m.name if m else '' for m in o.data.materials]
    V.append(p.astype(np.float32)); T.append(tri.astype(np.int32)); FM.append(pm[pi].astype(np.uint8))
    meta.append(dict(name=o.name, cls=cls, suf=suf(o.name), chain=chain(o), mats=mats, v0=v0, nv=nv, t0=t0, nt=nt)); v0 += nv; t0 += nt
    e.to_mesh_clear()
for o in EYES:      # 眼球：直接讀原始網格（不經修改器）
    me = o.data; nv = len(me.vertices); me.calc_loop_triangles(); nt = len(me.loop_triangles)
    co = np.empty(nv * 3, np.float32); me.vertices.foreach_get('co', co); co = co.reshape(-1, 3).astype(np.float64)
    tri = np.empty(nt * 3, np.int32); me.loop_triangles.foreach_get('vertices', tri); tri = tri.reshape(-1, 3)
    M = np.array(o.matrix_world); w = co @ M[:3, :3].T + M[:3, 3]
    if np.linalg.det(M[:3, :3]) < 0: tri = tri[:, ::-1].copy()
    p = np.stack([w[:, 0], w[:, 2], -w[:, 1]], 1) * 100.0
    V.append(p.astype(np.float32)); T.append(tri.astype(np.int32)); FM.append(np.zeros(nt, np.uint8))
    meta.append(dict(name=o.name, cls='eye', suf=suf(o.name), chain=chain(o), mats=[m.name if m else '' for m in me.materials], v0=v0, nv=nv, t0=t0, nt=nt)); v0 += nv; t0 += nt
np.savez_compressed(OUT + '/za_stage1.npz', V=np.concatenate(V), T=np.concatenate(T), FM=np.concatenate(FM))
json.dump(meta, open(OUT + '/za_stage1.json', 'w'), ensure_ascii=False)
print('exported objects', len(meta), 'verts', v0, 'tris', t0)
by = collections.Counter(); 
for m in meta: by[m['cls']] += m['nv']
print(dict(by))
