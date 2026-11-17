// 影像重建（CT／MR）：讀重建檔、建立 3D 網格、兩次檢查的對齊與變化量。
// 重建檔：gzip 解壓後為 [u32 標頭長度][標頭 JSON][int16 頂點 (x,y,z) × N（以 center 為原點、單位 q mm）][對齊][uint32 三角形]。
// 座標：影像為 LPS（mm）；3D 視窗為公分，x 朝病人左、y 朝頭、z 朝前，以重建中心為原點。
import * as THREE from 'three';

export const CATS = [['skin', '體表'], ['bone', '骨骼'], ['cart', '軟骨'], ['muscle', '肌肉'], ['organ', '內臟'], ['lung', '肺'], ['vessel', '血管'], ['nerve', '神經']];
export const CAT_ZH = Object.fromEntries(CATS);
// 預設不透明度（0 = 隱藏）
export const STYLE = {
  surface: { skin: 1, bone: 1, cart: 1, muscle: 1, organ: 1, lung: 0.5, vessel: 1, nerve: 1 },
  xray: { skin: 0.12, bone: 1, cart: 1, muscle: 0.3, organ: 1, lung: 0.25, vessel: 1, nerve: 1 },
  bone: { skin: 0.08, bone: 1, cart: 1, muscle: 0, organ: 0, lung: 0, vessel: 0, nerve: 0 },
  organ: { skin: 0.08, bone: 0.35, cart: 0.35, muscle: 0, organ: 1, lung: 0.25, vessel: 1, nerve: 1 },
  muscle: { skin: 0.08, bone: 1, cart: 1, muscle: 1, organ: 0, lung: 0, vessel: 0, nerve: 0 },
};

export class Recon {
  constructor(buf) {
    const dv = new DataView(buf), hl = dv.getUint32(0, true);
    this.hdr = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl)));
    const S = this.S = this.hdr.structures, nv = S.reduce((a, s) => a + s.nv, 0), nf = S.reduce((a, s) => a + s.nf, 0);
    const vo = 4 + hl, fo = vo + nv * 6 + (nv % 2 ? 2 : 0);
    this.q = new Int16Array(buf, vo, nv * 3); this.f = new Uint32Array(buf, fo, nf * 3);
    this.c = this.hdr.center; this.Q = this.hdr.q; this.byName = Object.fromEntries(S.map(s => [s.name, s]));
    this.T = null;      // 對齊到另一次檢查：p' = R p + t（LPS，mm）
    this.origin = this.c;      // 3D 視窗原點（LPS，mm）
  }
  get modality() { return this.hdr.quality?.modality || 'CT'; }
  // 某結構頂點的 LPS 座標（mm；若有對齊則已套用）
  lps(s) {
    const out = new Float32Array(s.nv * 3), q = this.q, Q = this.Q, c = this.c, T = this.T;
    for (let i = 0; i < s.nv; i++) {
      const k = (s.vo + i) * 3; let x = c[0] + q[k] * Q, y = c[1] + q[k + 1] * Q, z = c[2] + q[k + 2] * Q;
      if (T) { const R = T.R, X = R[0] * x + R[1] * y + R[2] * z + T.t[0], Y = R[3] * x + R[4] * y + R[5] * z + T.t[1], Z = R[6] * x + R[7] * y + R[8] * z + T.t[2]; x = X; y = Y; z = Z; }
      out[i * 3] = x; out[i * 3 + 1] = y; out[i * 3 + 2] = z;
    }
    return out;
  }
  tris(s) { return this.f.subarray(s.fo * 3, (s.fo + s.nf) * 3); }
  toWorld(p) { const o = this.origin; return [(p[0] - o[0]) / 10, (p[2] - o[2]) / 10, -(p[1] - o[1]) / 10]; }
  toLPS(x, y, z, out, k) { const o = this.origin; out[k] = o[0] + x * 10; out[k + 1] = o[1] - z * 10; out[k + 2] = o[2] + y * 10; }
  world(s) { const P = this.lps(s), o = this.origin; for (let i = 0; i < P.length; i += 3) { const x = P[i], y = P[i + 1], z = P[i + 2]; P[i] = (x - o[0]) / 10; P[i + 1] = (z - o[2]) / 10; P[i + 2] = -(y - o[1]) / 10; } return P; }
  // 建立 THREE 網格；每個結構一個 Mesh，userData.s 指回結構資料
  build() {
    if (this.group) this.dispose();
    const G = this.group = new THREE.Group(); this.mesh = {};
    for (const s of this.S) {
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.world(s), 3)); g.setIndex(new THREE.BufferAttribute(this.tris(s), 1)); g.computeVertexNormals(); g.computeBoundingSphere();
      const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: s.color, roughness: s.cat === 'bone' ? 0.62 : 0.5, metalness: 0, side: THREE.DoubleSide, vertexColors: false }));
      m.userData.s = s; m.renderOrder = s.cat === 'skin' ? 12 : s.cat === 'lung' ? 10 : 1; G.add(m); this.mesh[s.name] = m;
    }
    return G;
  }
  dispose() { if (!this.group) return; this.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); }); this.group.parent?.remove(this.group); this.group = null; }
  // 依分類套用不透明度；hidden：個別隱藏的結構；solo：只顯示這些
  style(op, hidden = new Set(), solo = null) {
    for (const s of this.S) {
      const m = this.mesh[s.name], a = solo ? (solo.has(s.name) ? Math.max(0.9, op[s.cat] ?? 1) : 0) : (hidden.has(s.name) ? 0 : op[s.cat] ?? 1);
      m.visible = a > 0.01; const tr = a < 0.99; if (!m.material.vertexColors) m.material.color.set(s.color); m.material.transparent = tr; m.material.opacity = a; m.material.depthWrite = !tr;
      m.material.side = s.cat === 'skin' && tr ? THREE.FrontSide : THREE.DoubleSide; m.material.needsUpdate = true;
    }
  }
  box() { this.group?.updateMatrixWorld(true); const b = new THREE.Box3(); for (const k in this.mesh) { const m = this.mesh[k]; if (m.visible && m.userData.s.cat !== 'skin') b.expandByObject(m); } if (b.isEmpty()) for (const k in this.mesh) b.expandByObject(this.mesh[k]); return b; }
}

// ---------- 兩次檢查對齊：共同的中軸骨（椎體、胸骨、肋骨、薦骨、髖骨）質心做剛體對齊（Horn 四元數法）
const AXIAL = /^(vertebrae_|vertebrae$|sternum|rib_|sacrum|hip_)/;
export function register(A, B) {
  let P = [], Qp = [], names = [], by = 'bone';
  for (const n in B.hdr.centroids) if (AXIAL.test(n) && A.hdr.centroids[n]) { P.push(B.hdr.centroids[n]); Qp.push(A.hdr.centroids[n]); names.push(n); }
  if (P.length < 3) {      // 骨骼不夠（例如只涵蓋腹部的 MR）：改用所有共同結構的質心
    P = []; Qp = []; names = []; by = 'all';
    for (const n in B.hdr.centroids) if (A.hdr.centroids[n]) { P.push(B.hdr.centroids[n]); Qp.push(A.hdr.centroids[n]); names.push(n); }
  }
  if (P.length < 3) return null;
  // 剛體擬合後剔除殘差過大的配對再重擬（分割偶爾把肋骨編號標錯一根，同名骨其實不是同一根）
  let use = P.map(() => true), fit = null;
  for (let it = 0; it < 4; it++) {
    const idx = use.map((u, i) => u ? i : -1).filter(i => i >= 0); if (idx.length < 3) break;
    fit = horn(idx.map(i => P[i]), idx.map(i => Qp[i]));
    const res = P.map((p, i) => dist(fit, p, Qp[i])), med = [...idx.map(i => res[i])].sort((a, b) => a - b)[Math.floor(idx.length / 2)];
    const nu = res.map(r => r <= Math.max(3 * med, 3)); if (nu.every((u, i) => u === use[i])) break; use = nu;
  }
  const res = P.map((p, i) => dist(fit, p, Qp[i])), ok = res.filter((r, i) => use[i]);
  return { R: fit.R, t: fit.t, n: ok.length, total: P.length, rms: Math.sqrt(ok.reduce((a, r) => a + r * r, 0) / ok.length), max: Math.max(...ok), angle: fit.angle, shift: fit.shift,
    names, bad: names.filter((n, i) => !use[i]), by };
}
const dist = (f, p, q) => { const R = f.R, t = f.t; return Math.hypot(R[0] * p[0] + R[1] * p[1] + R[2] * p[2] + t[0] - q[0], R[3] * p[0] + R[4] * p[1] + R[5] * p[2] + t[1] - q[1], R[6] * p[0] + R[7] * p[1] + R[8] * p[2] + t[2] - q[2]); };
function horn(P, Qp) {      // Horn 四元數法：Qp ≈ R·P + t
  const mean = (X) => [0, 1, 2].map(k => X.reduce((a, p) => a + p[k], 0) / X.length), cp = mean(P), cq = mean(Qp);
  const S = Array.from({ length: 9 }, () => 0);
  P.forEach((p, i) => { const a = [p[0] - cp[0], p[1] - cp[1], p[2] - cp[2]], b = [Qp[i][0] - cq[0], Qp[i][1] - cq[1], Qp[i][2] - cq[2]]; for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) S[r * 3 + c] += a[r] * b[c]; });
  const [xx, xy, xz, yx, yy, yz, zx, zy, zz] = S;
  const N = [[xx + yy + zz, yz - zy, zx - xz, xy - yx], [yz - zy, xx - yy - zz, xy + yx, zx + xz], [zx - xz, xy + yx, -xx + yy - zz, yz + zy], [xy - yx, zx + xz, yz + zy, -xx - yy + zz]];
  const [w, x, y, z] = topEigen(N);
  const R = [w * w + x * x - y * y - z * z, 2 * (x * y - w * z), 2 * (x * z + w * y), 2 * (x * y + w * z), w * w - x * x + y * y - z * z, 2 * (y * z - w * x), 2 * (x * z - w * y), 2 * (y * z + w * x), w * w - x * x - y * y + z * z];
  const t = [cq[0] - (R[0] * cp[0] + R[1] * cp[1] + R[2] * cp[2]), cq[1] - (R[3] * cp[0] + R[4] * cp[1] + R[5] * cp[2]), cq[2] - (R[6] * cp[0] + R[7] * cp[1] + R[8] * cp[2])];
  return { R, t, angle: Math.acos(Math.min(1, Math.abs(w))) * 2 * 180 / Math.PI, shift: Math.hypot(cq[0] - cp[0], cq[1] - cp[1], cq[2] - cp[2]) };
}
function topEigen(N) {      // 4×4 對稱矩陣最大特徵值的特徵向量（Jacobi）
  const a = N.map(r => r.slice()), V = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
  for (let sweep = 0; sweep < 60; sweep++) {
    let off = 0; for (let p = 0; p < 4; p++) for (let q = p + 1; q < 4; q++) off += a[p][q] * a[p][q];
    if (off < 1e-18) break;
    for (let p = 0; p < 4; p++) for (let q = p + 1; q < 4; q++) {
      if (Math.abs(a[p][q]) < 1e-15) continue;
      const th = (a[q][q] - a[p][p]) / (2 * a[p][q]), t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1)), c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < 4; k++) { const akp = a[k][p], akq = a[k][q]; a[k][p] = c * akp - s * akq; a[k][q] = s * akp + c * akq; }
      for (let k = 0; k < 4; k++) { const apk = a[p][k], aqk = a[q][k]; a[p][k] = c * apk - s * aqk; a[q][k] = s * apk + c * aqk; }
      for (let k = 0; k < 4; k++) { const vkp = V[k][p], vkq = V[k][q]; V[k][p] = c * vkp - s * vkq; V[k][q] = s * vkp + c * vkq; }
    }
  }
  let best = 0; for (let k = 1; k < 4; k++) if (a[k][k] > a[best][best]) best = k;
  const v = [V[0][best], V[1][best], V[2][best], V[3][best]], l = Math.hypot(...v); return v.map(x => x / l);
}

// ---------- 表面變化量：B 的每個頂點到 A 同一結構表面的帶號距離（mm；正值 = 往外長，負值 = 往內縮）
export function surfaceChange(A, sA, B, sB) {
  const PA = A.lps(sA), FA = A.tris(sA), PB = B.lps(sB), nA = new Float32Array(PA.length);
  for (let t = 0; t < FA.length; t += 3) {
    const i = FA[t] * 3, j = FA[t + 1] * 3, k = FA[t + 2] * 3, ux = PA[j] - PA[i], uy = PA[j + 1] - PA[i + 1], uz = PA[j + 2] - PA[i + 2], vx = PA[k] - PA[i], vy = PA[k + 1] - PA[i + 1], vz = PA[k + 2] - PA[i + 2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    for (const q of [i, j, k]) { nA[q] += nx; nA[q + 1] += ny; nA[q + 2] += nz; }
  }
  const cell = 4, key = (x, y, z) => `${Math.floor(x / cell)},${Math.floor(y / cell)},${Math.floor(z / cell)}`, grid = new Map();
  for (let i = 0; i < PA.length; i += 3) { const k = key(PA[i], PA[i + 1], PA[i + 2]); let a = grid.get(k); if (!a) grid.set(k, a = []); a.push(i); }
  const out = new Float32Array(PB.length / 3);
  for (let v = 0; v < out.length; v++) {
    const x = PB[v * 3], y = PB[v * 3 + 1], z = PB[v * 3 + 2], cx = Math.floor(x / cell), cy = Math.floor(y / cell), cz = Math.floor(z / cell);
    let best = Infinity, bi = -1;
    for (let r = 1; r <= 6 && bi < 0; r++) {
      for (let a = cx - r; a <= cx + r; a++) for (let b = cy - r; b <= cy + r; b++) for (let c = cz - r; c <= cz + r; c++) {
        const L = grid.get(`${a},${b},${c}`); if (!L) continue;
        for (const i of L) { const d = (PA[i] - x) ** 2 + (PA[i + 1] - y) ** 2 + (PA[i + 2] - z) ** 2; if (d < best) { best = d; bi = i; } }
      }
    }
    if (bi < 0) { out[v] = NaN; continue; }
    const nl = Math.hypot(nA[bi], nA[bi + 1], nA[bi + 2]) || 1;
    out[v] = ((x - PA[bi]) * nA[bi] + (y - PA[bi + 1]) * nA[bi + 1] + (z - PA[bi + 2]) * nA[bi + 2]) / nl;
  }
  return out;
}
// 帶號距離 → 顏色：內縮藍、外長紅、±0.5 mm 內灰白
export function changeColors(d, range = 5) {
  const c = new Float32Array(d.length * 3), lo = [0.18, 0.45, 0.95], mid = [0.86, 0.86, 0.86], hi = [0.95, 0.25, 0.2];
  for (let i = 0; i < d.length; i++) {
    const v = d[i]; let t = isNaN(v) ? 0 : Math.max(-1, Math.min(1, v / range)); if (Math.abs(v) < 0.5) t = 0;
    const e = t < 0 ? lo : hi, a = Math.abs(t); for (let k = 0; k < 3; k++) c[i * 3 + k] = mid[k] * (1 - a) + e[k] * a;
  }
  return c;
}
