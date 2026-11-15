"""穿出檢查：讀 harness.mjs 的輸出，用 winding number 找出落在皮膚外的結構頂點。
用法：python3 tools/poke_check.py <harness 輸出資料夾> [個案名…]"""
import sys, os, json, numpy as np, igl
from collections import Counter
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'ctpipe'))
from mskmodel import MskModel
m = MskModel(os.path.join(os.path.dirname(__file__), '..', 'docs', 'model.js'))
d = sys.argv[1]; names = sys.argv[2:] or sorted({f.split('.')[0] for f in os.listdir(d) if f.endswith('.json')})
# 檢查對象：肌肉、肌腱、骨骼、軟骨、韌帶、關節囊、滑液囊、深筋膜（不含毛髮、眼球、牙齒、附著區）
TESTED = {0, 1, 2, 3, 5, 6, 7, 8}
for n in names:
    info = json.load(open(os.path.join(d, n + '.json')))
    P = np.fromfile(os.path.join(d, n + '.pos.f32'), np.float32).reshape(-1, 3).astype(np.float64)
    S = np.fromfile(os.path.join(d, n + '.spos.f32'), np.float32).reshape(-1, 3).astype(np.float64)
    F = np.array(info['skinTri'], np.int64).reshape(-1, 3) if info.get('skinTri') else m.stri.astype(np.int64)
    hid = set(info['hiddenMale'])
    ok = np.zeros(len(m.parts), bool)
    for p in m.parts: ok[p['i']] = p['t'] in TESTED and p['i'] not in hid
    vm = ok[m.vpart]
    idx = np.where(vm)[0]
    wn = igl.fast_winding_number(S, F, P[idx])
    out = idx[wn < 0.5]
    c = Counter(m.parts[m.vpart[i]]['en'] for i in out)
    # 依高度分區
    H = info['case']['H']; y = P[out, 1] / H if len(out) else np.array([])
    zones = Counter(np.select([y > 0.87, y > 0.70, y > 0.52, y > 0.28], ['頭頸', '胸肩', '腹盆', '大腿'], '小腿足') if len(out) else [])
    print(f'{n}: 穿出頂點 {len(out)}  分區 {dict(zones)}')
    print('   ', c.most_common(10))
