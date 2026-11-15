# 讀取網頁用的模型資料（model.bin 或 docs/model.js），頂點順序與網頁完全一致。
import base64, gzip, json, re, struct
import numpy as np


def _read_raw(path):
    data = open(path, 'rb').read()
    if path.endswith('.js'):
        chunks = re.findall(rb'"([A-Za-z0-9+/=]+)"', data)
        data = b''.join(base64.b64decode(c) for c in chunks)
    if data[:2] == b'\x1f\x8b':
        data = gzip.decompress(data)
    return data


class MskModel:
    TISSUE = {0: 'muscle', 1: 'tendon', 7: 'fascia', 2: 'bone', 3: 'cart', 4: 'teeth', 9: 'eye', 5: 'lig', 6: 'capsule', 8: 'bursa', 10: 'ins', 11: 'hair'}

    def __init__(self, path):
        buf = _read_raw(path)
        jl = struct.unpack('<I', buf[:4])[0]
        meta = json.loads(buf[4:4 + jl].decode('utf8'))
        self.meta, self.lm = meta, meta['lm']
        o = [4 + jl]

        def take(dt, n):
            a = np.frombuffer(buf, dt, n, o[0]); o[0] = (o[0] + n * np.dtype(dt).itemsize + 3) & ~3
            return a
        NV, NT, NVd, NS, NTs = meta['NV'], meta['NT'], meta['NVd'], meta['NS'], meta['NTs']
        self.NV, self.NT, self.NVd, self.NS, self.NTs = NV, NT, NVd, NS, NTs
        qp = take('<u2', NV * 3); tl = take('<u2', NT * 3)
        self.F = take('i1', NVd * 3).reshape(-1, 3).astype(np.float64) * meta['inflScale'] / 127
        take('u1', NVd); self.MIX = take('u1', NV)
        qs = take('<u2', NS * 3); stl = take('<u2', NTs * 3); sn8 = take('i1', NS * 3)
        take('i1', NS * 3); self.sFem = take('i1', NS * 3).reshape(-1, 3).astype(np.float64) * meta['femScale'] / 127
        self.tb = take('u1', NS).astype(np.float64) * meta['tbScale']
        self.scls = take('u1', NS)
        bm, bs = np.array(meta['bmin']), np.array(meta['bsz'])
        self.base = bm + qp.reshape(-1, 3).astype(np.float64) / 65535 * bs
        self.sbase = bm + qs.reshape(-1, 3).astype(np.float64) / 65535 * bs
        sn = sn8.reshape(-1, 3).astype(np.float64) / 127
        self.sn = sn / np.maximum(np.linalg.norm(sn, axis=1, keepdims=True), 1e-9)
        self.stri = stl.reshape(-1, 3).astype(np.int64)
        self.parts = []
        for i, p in enumerate(meta['parts']):
            self.parts.append(dict(i=i, t=p[0], side=p[1], v0=p[2], nv=p[3], t0=p[4], nt=p[5], rg=p[6], kind=p[7] & 3, seg=(p[7] >> 2) & 1, en=p[8], zh=p[9], grp=p[10]))
        tri = tl.reshape(-1, 3).astype(np.int64)
        self.tri = np.empty_like(tri)
        for p in self.parts:
            self.tri[p['t0']:p['t0'] + p['nt']] = tri[p['t0']:p['t0'] + p['nt']] + p['v0']
        self.vpart = np.zeros(NV, np.int32)
        for p in self.parts:
            self.vpart[p['v0']:p['v0'] + p['nv']] = p['i']

    def part_verts(self, p):
        return self.base[p['v0']:p['v0'] + p['nv']]

    def part_tris(self, p):
        return self.tri[p['t0']:p['t0'] + p['nt']] - p['v0']

    def find(self, en, side=None, t=None):
        return [p for p in self.parts if p['en'] == en and (side is None or p['side'] == side) and (t is None or p['t'] == t)]
