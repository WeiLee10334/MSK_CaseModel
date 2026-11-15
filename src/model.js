// 模型資料、分層變形、三圍與體重吻合、量測。不依賴繪圖函式庫。
export const TISSUE_ZH = { 0: '肌肉', 1: '肌腱／腱膜／支持帶', 7: '深筋膜', 2: '骨骼', 3: '軟骨', 4: '牙齒', 9: '眼球', 5: '韌帶', 6: '關節囊', 8: '滑液囊／腱鞘', 10: '肌肉附著區', 11: '毛髮' };
export const LAYER_OF = { 0: 'muscle', 1: 'tendon', 7: 'fascia', 2: 'bone', 3: 'cart', 4: 'bone', 9: 'eye', 5: 'lig', 6: 'bursa', 8: 'bursa', 10: 'ins', 11: 'hair' };
export const REGIONS = ['', '頸部', '肩部', '胸部', '背部', '腹部', '上臂', '前臂', '臀部', '大腿', '小腿'];
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const LSTEP = 4, LN = 760, CX = 2.2, CZ = 2.0;      // 高度查表 0.25 cm 一格；CX、CZ 為不隨寬深縮放的椎體範圍

export async function fetchModel(onProg) {
  // 模型資料以 gzip＋base64 放在 model.js（發布平台不提供二進位檔），本機測試時也可直接讀 model.bin
  if (!window.__MODEL_B64) await new Promise((ok) => { const sc = document.createElement('script'); sc.src = 'model.js'; sc.onload = ok; sc.onerror = ok; document.head.appendChild(sc); });
  let blob;
  if (window.__MODEL_B64) {
    const chunks = window.__MODEL_B64; let n = 0; const bins = chunks.map(c => { const b = atob(c); n += b.length; return b; }); const u = new Uint8Array(n); let o = 0;
    for (const b of bins) { for (let i = 0; i < b.length; i++) u[o + i] = b.charCodeAt(i); o += b.length; }
    window.__MODEL_B64 = null; blob = new Blob([u]); onProg && onProg(1);
  } else {
    const res = await fetch('model.bin'); if (!res.ok) throw new Error('模型資料下載失敗（' + res.status + '）');
    blob = await res.blob(); onProg && onProg(1);
  }
  const head = new Uint8Array(await blob.slice(0, 2).arrayBuffer());
  const buf = (head[0] === 0x1f && head[1] === 0x8b) ? await new Response(blob.stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer() : await blob.arrayBuffer();
  return new Model(buf);
}

export class Model {
  constructor(buf) {
    const dv = new DataView(buf); const jl = dv.getUint32(0, true);
    const meta = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, jl))); this.meta = meta; const L = this.lm = meta.lm;
    let o = 4 + jl; const take = (T, n) => { const a = new T(buf, o, n); o = (o + n * T.BYTES_PER_ELEMENT + 3) & ~3; return a; };
    const NV = this.NV = meta.NV, NT = this.NT = meta.NT, NVd = this.NVd = meta.NVd, NS = this.NS = meta.NS, NTs = this.NTs = meta.NTs;
    const qp = take(Uint16Array, NV * 3), tl = take(Uint16Array, NT * 3); this.F = take(Int8Array, NVd * 3); this.VRG = take(Uint8Array, NVd); this.MIX = take(Uint8Array, NV);
    const qs = take(Uint16Array, NS * 3), stl = take(Uint16Array, NTs * 3), sn8 = take(Int8Array, NS * 3), sf8 = take(Int8Array, NS * 3), sm8 = take(Int8Array, NS * 3), tb8 = take(Uint8Array, NS);
    this.scls = take(Uint8Array, NS); this.srg = take(Uint8Array, NS); const gp8 = take(Uint8Array, NS), ss8 = take(Int8Array, NS * 3), sa8 = take(Uint8Array, NS);
    this.VRG2 = take(Uint8Array, NVd); this.VFR = take(Uint8Array, NVd); this.srg2 = take(Uint8Array, NS); this.sfr = take(Uint8Array, NS);
    const bm = meta.bmin, bs = meta.bsz; const dq = (q, n) => { const a = new Float32Array(n * 3); for (let i = 0; i < n * 3; i++) a[i] = bm[i % 3] + q[i] / 65535 * bs[i % 3]; return a; };
    const f32 = (a, k) => { const r = new Float32Array(a.length); for (let i = 0; i < a.length; i++) r[i] = a[i] * k; return r; };
    this.base = dq(qp, NV); this.sbase = dq(qs, NS); this.fk = meta.inflScale / 127;
    this.sn = f32(sn8, 1 / 127); for (let i = 0; i < NS; i++) { const l = Math.hypot(this.sn[i * 3], this.sn[i * 3 + 1], this.sn[i * 3 + 2]) || 1; this.sn[i * 3] /= l; this.sn[i * 3 + 1] /= l; this.sn[i * 3 + 2] /= l; }
    this.sF = f32(sf8, this.fk); this.sFem = f32(sm8, meta.femScale / 127); this.tb = f32(tb8, meta.tbScale); this.sgap = f32(gp8, 0.02); this.sSm = f32(ss8, meta.smScale / 127);
    this.sSmN = new Float32Array(NS);      // 撫平位移拆成法向量（受皮下空間限制）與切向量
    for (let i = 0; i < NS; i++) { const i3 = i * 3, d = this.sSm[i3] * this.sn[i3] + this.sSm[i3 + 1] * this.sn[i3 + 1] + this.sSm[i3 + 2] * this.sn[i3 + 2]; this.sSmN[i] = d; this.sSm[i3] -= d * this.sn[i3]; this.sSm[i3 + 1] -= d * this.sn[i3 + 1]; this.sSm[i3 + 2] -= d * this.sn[i3 + 2]; }
    this.stri = new Uint32Array(NTs * 3); this.stri.set(stl);
    this.parts = meta.parts.map((p, i) => ({ i, t: p[0], side: p[1], v0: p[2], nv: p[3], t0: p[4], nt: p[5], rg: p[6], kind: p[7] & 3, seg: (p[7] >> 2) & 1, en: p[8], zh: p[9], grp: p[10], vol0: p[12], len0: p[13], layer: LAYER_OF[p[0]], male: (p[7] >> 3) & 1 }));
    this.idx = new Uint32Array(NT * 3);
    for (const p of this.parts) for (let k = p.t0 * 3, e = (p.t0 + p.nt) * 3; k < e; k++) this.idx[k] = tl[k] + p.v0;
    this.pos = new Float32Array(NV * 3); this.nrm = new Float32Array(NV * 3); this.spos = new Float32Array(NS * 3); this.snrm = new Float32Array(NS * 3); this.box = new Float32Array(this.parts.length * 6);
    const xS = L.shoulder[0], geoArm = (x, y) => smooth(xS - 1, xS + 2, Math.abs(x)) * smooth(L.yChest - 8, L.yChest - 2, y);
    this.armW = new Float32Array(NV);
    for (const p of this.parts) for (let i = p.v0; i < p.v0 + p.nv; i++) this.armW[i] = p.seg ? 1 : geoArm(this.base[i * 3], this.base[i * 3 + 1]);
    this.sarmW = f32(sa8, 1 / 255);
    const lut = (fn) => { const a = new Float32Array(LN + 1); for (let i = 0; i <= LN; i++) a[i] = fn(i / LSTEP); return a; };
    this.ZS = lut(y => interp(L.zs, y)); this.LEGW = lut(y => smooth(L.hipJ[1] - 2, L.hipJ[1] - 12, y)); this.SX = lut(() => 1); this.SZ = lut(() => 1); this.YM = lut(y => y);
    const d = [L.wrist3[0] - L.shoulder3[0], L.wrist3[1] - L.shoulder3[1], L.wrist3[2] - L.shoulder3[2]], dl = Math.hypot(d[0], d[1], d[2]); this.armU = d.map(v => v / dl);
    this.r0 = L.yTroch / L.H0; this.pr = { leg: this.r0, arm: 1, shoulder: 1 };
    this.g = new Float32Array(11); this.gSex = new Array(11).fill(0); this.s = 1; this.f = 1; this.A = 0; this.kf = { C: 1, W: 1, H: 1 }; this.sex = 'M';
    this.tbEff = new Float32Array(NS); this.bump = new Float32Array(NS * 3); this.wB = new Float32Array(NS); this.setSex('M');
    const body = []; for (let t = 0; t < NTs; t++) { const a = this.stri[t * 3], b = this.stri[t * 3 + 1], c = this.stri[t * 3 + 2]; if (this.scls[a] < 16 && this.scls[b] < 16 && this.scls[c] < 16) body.push(t); }
    this.bodyTris = Uint32Array.from(body); this.band = {};
    for (const [k, y] of [['C', L.yChest], ['U', L.yUnder], ['W', L.yWaist], ['H', L.yHip]]) this.band[k] = this.makeBand(this.bodyTris, y, 9);
    this.hull = new Float32Array(40000); this.buildLUT();
  }
  makeBand(tris, y, m) {
    const out = [], vs = new Set(), sb = this.sbase, st = this.stri;
    for (const t of tris) { const a = st[t * 3], b = st[t * 3 + 1], c = st[t * 3 + 2]; const y0 = Math.min(sb[a * 3 + 1], sb[b * 3 + 1], sb[c * 3 + 1]), y1 = Math.max(sb[a * 3 + 1], sb[b * 3 + 1], sb[c * 3 + 1]); if (y1 > y - m && y0 < y + m) { out.push(t); vs.add(a); vs.add(b); vs.add(c); } }
    return { tris: Uint32Array.from(out), verts: Uint32Array.from(vs), y };
  }
  setSex(sex) {
    this.sex = sex; const L = this.lm, F = sex === 'F', NS = this.NS, sb = this.sbase, sn = this.sn, np = L.nipple;
    const prof = [[L.yAnkle + 3, 0.2, 0.2], [L.yKnee - 8, 0.45, 0.55], [L.yKnee + 6, 0.6, 0.85], [L.yCrotch - 12, 0.8, 1.2], [L.yHip, 0.95, 1.3], [L.yWaist, 1.0, 0.95], [L.yChest - 6, 0.9, 0.9], [L.yChest + 4, 0.75, 0.85], [L.shoulder[1] + 4, 0.4, 0.4]];
    const tab = prof.map(p => [p[0], F ? p[2] : p[1]]);
    for (let i = 0; i < NS; i++) {
      const c = this.scls[i], y = sb[i * 3 + 1]; let pat;
      if (c & 8) pat = 0.1; else if ((c & 7) === 5) pat = 0.3;
      else if ((c & 7) === 1 || (c & 7) === 2) pat = y > L.yElbow ? 0.75 : 0.45;
      else { pat = interp(tab, y); const w = smooth(L.yHip - 4, L.yHip + 6, y) * (1 - smooth(L.yChest - 12, L.yChest - 4, y)); pat *= 1 + w * ((F ? 0.25 : 0.45) * Math.max(0, sn[i * 3 + 2]) + 0.2 * Math.abs(sn[i * 3])); }
      this.tbEff[i] = pat * (0.5 * Math.min(2.0, Math.max(0.3, this.tb[i])) + 0.4);
      this.bump[i * 3] = F ? this.sFem[i * 3] : 0; this.bump[i * 3 + 1] = F ? this.sFem[i * 3 + 1] : 0; this.bump[i * 3 + 2] = F ? this.sFem[i * 3 + 2] : 0;
      // 乳房候選頂點：只取前胸、朝前的皮膚；形狀在 deformSkin 依投影量 A 即時計算
      let w = 0;
      if (F && c === 0 && sn[i * 3 + 2] > 0) { const dx = Math.abs(sb[i * 3]) - (np[0] + 0.6), dy = y - np[1]; if (Math.abs(dx) < 13 && dy > -12 && dy < 16) w = Math.min(1, sn[i * 3 + 2] * 3); }
      this.wB[i] = w;
    }
    this.k0 = F ? { C: 0.88, W: 0.92, H: 1.05, S: 1.0 } : { C: 1, W: 1, H: 1, S: 1 };
    // 女性肌肉量的基準差：上半身差距大於下半身
    this.gSex = F ? [0, -0.3, -0.45, -0.5, -0.45, -0.3, -0.45, -0.4, -0.15, -0.25, -0.25] : new Array(11).fill(0);
    this.phi0 = F ? 0.33 : 0.25; this.air = F ? 1.9 : 2.4; this.kf = { C: this.k0.C, W: this.k0.W, H: this.k0.H }; this.A = 0;
  }
  // 比例：腿長（大轉子高）佔身高的比例、臂長、肩寬
  setProportions(pr) { this.pr = { leg: pr.leg || this.r0, arm: pr.arm || 1, shoulder: pr.shoulder || 1 }; }
  buildLUT() {
    const L = this.lm, k = this.kf, k0 = this.k0, yS = L.shoulder[1], kS = (1 + 0.7 * (k.C / k0.C - 1)) * k0.S * this.pr.shoulder;
    const nx = [[L.yHip, k.H], [L.yWaist, k.W], [L.yUnder, k.C], [L.yChest, k.C], [yS, kS], [yS + 9, 1]];
    const nz = [[L.yHip, 1 + (k.H - 1) * 0.6], [L.yWaist, 1 + (k.W - 1) * 1.15], [L.yUnder, 1 + (k.C - 1) * 0.9], [L.yChest, 1 + (k.C - 1) * 0.9], [yS, 1 + (kS - 1) * 0.4], [yS + 9, 1]];
    // 高度映射：腿段比例 a、上身比例 b，總身高不變
    const H0 = L.H0, yA = L.hipJ[1], wf = (y) => smooth(yA - 2, yA + 8, y); let I1 = 0, T1 = 0; const n = Math.round(H0 * LSTEP), nT = Math.round(L.yTroch * LSTEP);
    for (let i = 0; i < n; i++) { const w = wf((i + 0.5) / LSTEP) / LSTEP; I1 += w; if (i < nT) T1 += w; }
    const I0 = H0 - I1, T0 = L.yTroch - T1, a = (this.pr.leg * H0 - H0 * T1 / I1) / (T0 - I0 * T1 / I1), b = (H0 - a * I0) / I1; this.legScale = a; this.upScale = b; this.legK = { I0, I1, T0, T1 };
    let acc = 0; this.YM[0] = 0;
    for (let i = 0; i <= LN; i++) { const y = i / LSTEP; this.SX[i] = interpS(nx, y); this.SZ[i] = interpS(nz, y); if (i > 0) { const w = wf((i - 0.5) / LSTEP); acc += (a + (b - a) * w) / LSTEP; this.YM[i] = acc; } }
    this.sxHip = this.SX[Math.round(yA * LSTEP)]; this.sxSh = this.SX[Math.round(yS * LSTEP)]; this.yShM = this.ymap(L.shoulder3[1]);
  }
  ctOn() { return this.ct && this.ct.on ? this.ct : null; }
  // 胸椎中心點經過目前比例與寬深變形後的位置（未乘身高比例）；CT 形狀以它為原點貼上
  anchorWarp() {
    const L = this.lm, [x, y, z] = this.ct.anchor, t = y * LSTEP; let yi = t | 0; if (yi < 0) yi = 0; else if (yi >= LN) yi = LN - 1;
    const l = this.LEGW[yi], d = z - this.ZS[yi], ez = d > CZ ? d - CZ : (d < -CZ ? 0.3 * (d + CZ) : 0);
    return [x, this.YM[yi] + (t - yi) * (this.YM[yi + 1] - this.YM[yi]), z + (1 - l) * (this.SZ[yi] - 1) * ez];
  }
  // 載入 CT 個案檔（gzip 已解開的 ArrayBuffer）
  setCT(buf) {
    if (!buf) { this.ct = null; return null; }
    const dv = new DataView(buf), jl = dv.getUint32(0, true), hdr = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, jl)));
    if (hdr.NV !== this.NV || hdr.NS !== this.NS) throw new Error('個案檔與目前模型版本不符');
    let o = 4 + jl; const take = (T, n) => { const a = new T(buf, o, n); o = (o + n * T.BYTES_PER_ELEMENT + 3) & ~3; return a; };
    const f = (a, k) => { const r = new Float32Array(a.length); for (let i = 0; i < a.length; i++) r[i] = a[i] * k; return r; };
    const w = f(take(Uint8Array, this.NV), 1 / 255), u = f(take(Int16Array, this.NV * 3), 0.01), ws = f(take(Uint8Array, this.NS), 1 / 255), us = f(take(Int16Array, this.NS * 3), 0.01);
    const ov = hdr.overlays.map(g => ({ ...g, V: f(take(Int16Array, g.nv * 3), 0.01), F: new Uint32Array(take(Uint32Array, g.nt * 3)) }));
    const band = {}; for (const k in this.band) { let a = 0; const v = this.band[k].verts; for (const i of v) a += ws[i]; band[k] = a / v.length; }
    this.ct = { hdr, w, u, ws, us, ov, anchor: hdr.anchor, s_ct: hdr.s_ct, band, on: true };
    return this.ct;
  }
  ymap(y) { const t = y * LSTEP; let i = t | 0; if (i < 0) i = 0; else if (i >= LN) i = LN - 1; return this.YM[i] + (t - i) * (this.YM[i + 1] - this.YM[i]); }
  // 皮膚：脂肪層偏移（增厚時同時撫平肌肉線條）＋底下肌肉的增長＋乳房＋軀幹寬深＋比例。scale=false 留在基準身高（求解用）
  deformSkin(out, list, scale) {
    const L = this.lm, sb = this.sbase, sn = this.sn, sF = this.sF, g = this.g, SX = this.SX, SZ = this.SZ, ZS = this.ZS, YM = this.YM, LEGW = this.LEGW, tbE = this.tbEff, gap = this.sgap, aw = this.sarmW, srg = this.srg, srg2 = this.srg2, sfr = this.sfr, bump = this.bump, sSm = this.sSm, sSmN = this.sSmN, wB = this.wB;
    const xS = L.shoulder[0], xH = L.hipJ[0], dA = (this.sxSh - 1) * (xS - CX), dL = (this.sxHip - 1) * (xH - CX), s = scale ? this.s : 1, f1 = this.f - 1, sm = Math.max(this.sex === 'F' ? 0.6 : 0, f1 > 0 ? Math.min(1, f1 / 1.2) * 0.85 : 0), A = this.A;
    const S3 = L.shoulder3, u = this.armU, ca = this.pr.arm - 1, yShM = this.yShM, n = list ? list.length : this.NS, npx = L.nipple[0] + 0.6, npy = L.nipple[1];
    const sxSh = this.sxSh, axL = xS - 5, axH = xS - 0.5, ayL = L.yChest - 10, ayH = L.yChest - 3, lift = this.sex === 'F' ? 0.18 : 0;      // 女性各部位肌肉量差異較大，皮膚略為外移以免局部穿出
    const C = this.ctOn(), cw = C ? C.ws : null, cu = C ? C.us : null, is = 1 / this.s, [Ax, Ay, Az] = C ? this.anchorWarp() : [0, 0, 0];
    for (let j = 0; j < n; j++) {
      const i = list ? list[j] : j, i3 = i * 3; let x = sb[i3], y = sb[i3 + 1], z = sb[i3 + 2];
      let off = tbE[i] * f1 + sSmN[i] * sm; if (off < -gap[i]) off = -gap[i]; off += lift;
      const fr = sfr[i] / 255, gk = g[srg[i]] * fr + g[srg2[i]] * (1 - fr), tk = gap[i] > 0.6 ? sm : sm * gap[i] / 0.6;
      x += sn[i3] * off + sF[i3] * gk + bump[i3] + sSm[i3] * tk; y += sn[i3 + 1] * off + sF[i3 + 1] * gk + bump[i3 + 1] + sSm[i3 + 1] * tk; z += sn[i3 + 2] * off + sF[i3 + 2] * gk + bump[i3 + 2] + sSm[i3 + 2] * tk;
      const sg = x >= 0 ? 1 : -1;
      if (A > 0 && wB[i] > 0) {      // 乳房：下半圓弧、上半緩坡，越大越寬並略為下垂
        const dx = (x < 0 ? -sb[i3] : sb[i3]) - npx, dy = sb[i3 + 1] - npy + Math.min(0.6, 0.06 * A), rx = dx >= 0 ? dx / (7.0 + 0.4 * A) : -dx / (5.4 + 0.2 * A), ry = dy >= 0 ? dy / (8.5 + 0.35 * A) : -dy / Math.min(6.2, 4.6 + 0.2 * A), q = 1 - rx * rx - ry * ry;
        if (q > 0) { const up = dy <= -2 ? 0 : dy >= 3 ? 1 : (dy + 2) / 5, hgt = A * wB[i] * Math.pow(q, 0.8 + 0.9 * up); x += 0.16 * sg * hgt; y -= 0.03 * A * hgt / (1 + 0.1 * A); z += hgt; }
      }
      const t = y * LSTEP; let yi = t | 0; if (yi < 0) yi = 0; else if (yi >= LN) yi = LN - 1;
      const a = aw[i], l = LEGW[yi], ax = x * sg, ex = ax > CX ? ax - CX : 0, d = z - ZS[yi], ez = d > CZ ? d - CZ : (d < -CZ ? 0.3 * (d + CZ) : 0);
      let sxe = SX[yi]; if (ax > axL && y > ayL) sxe += (sxSh - sxe) * smooth(axL, axH, ax) * smooth(ayL, ayH, y);
        let xt = x + sg * (l * dL + (1 - l) * (sxe - 1) * ex), yt = YM[yi] + (t - yi) * (YM[yi + 1] - YM[yi]), zt = z + (1 - l) * (SZ[yi] - 1) * ez;
      if (a > 0) { const q = ((x - sg * S3[0]) * u[0] * sg + (y - S3[1]) * u[1] + (z - S3[2]) * u[2]) * ca; xt += a * (x + q * u[0] * sg + sg * dA - xt); yt += a * (yShM + (y - S3[1]) + q * u[1] - yt); zt += a * (z + q * u[2] - zt); }
      if (cw) { const w = cw[i]; if (w > 0) { xt += w * (Ax + cu[i3] * is - xt); yt += w * (Ay + cu[i3 + 1] * is - yt); zt += w * (Az + cu[i3 + 2] * is - zt); } }
      out[i3] = xt * s; out[i3 + 1] = yt * s; out[i3 + 2] = zt * s;
    }
  }
  deformStructure() {
    const L = this.lm, b = this.base, out = this.pos, F = this.F, VRG = this.VRG, VRG2 = this.VRG2, VFR = this.VFR, g = this.g, fk = this.fk, SX = this.SX, SZ = this.SZ, ZS = this.ZS, YM = this.YM, LEGW = this.LEGW, aw = this.armW, NVd = this.NVd, s = this.s, box = this.box;
    const xS = L.shoulder[0], xH = L.hipJ[0], dA = (this.sxSh - 1) * (xS - CX), dL = (this.sxHip - 1) * (xH - CX), S3 = L.shoulder3, u = this.armU, ca = this.pr.arm - 1, yShM = this.yShM;
    const sxSh = this.sxSh, axL = xS - 5, axH = xS - 0.5, ayL = L.yChest - 10, ayH = L.yChest - 3;
    const C = this.ctOn(), cw = C ? C.w : null, cu = C ? C.u : null, is = 1 / s, [Ax, Ay, Az] = C ? this.anchorWarp() : [0, 0, 0];
    for (const p of this.parts) {
      let x0 = 1e9, y0 = 1e9, z0 = 1e9, x1 = -1e9, y1 = -1e9, z1 = -1e9;
      for (let i = p.v0, e = p.v0 + p.nv; i < e; i++) {
        const i3 = i * 3; let x = b[i3], y = b[i3 + 1], z = b[i3 + 2];
        if (i < NVd) { const fr = VFR[i], k = (g[VRG[i]] * fr + g[VRG2[i]] * (255 - fr)) * fk / 255; if (k !== 0) { x += F[i3] * k; y += F[i3 + 1] * k; z += F[i3 + 2] * k; } }
        const t = y * LSTEP; let yi = t | 0; if (yi < 0) yi = 0; else if (yi >= LN) yi = LN - 1;
        const a = aw[i], l = LEGW[yi], sg = x >= 0 ? 1 : -1, ax = x * sg, ex = ax > CX ? ax - CX : 0, d = z - ZS[yi], ez = d > CZ ? d - CZ : (d < -CZ ? 0.3 * (d + CZ) : 0);
        let sxe = SX[yi]; if (ax > axL && y > ayL) sxe += (sxSh - sxe) * smooth(axL, axH, ax) * smooth(ayL, ayH, y);
        let xt = x + sg * (l * dL + (1 - l) * (sxe - 1) * ex), yt = YM[yi] + (t - yi) * (YM[yi + 1] - YM[yi]), zt = z + (1 - l) * (SZ[yi] - 1) * ez;
        if (a > 0) { const q = ((x - sg * S3[0]) * u[0] * sg + (y - S3[1]) * u[1] + (z - S3[2]) * u[2]) * ca; xt += a * (x + q * u[0] * sg + sg * dA - xt); yt += a * (yShM + (y - S3[1]) + q * u[1] - yt); zt += a * (z + q * u[2] - zt); }
        if (cw) { const w = cw[i]; if (w > 0) { xt += w * (Ax + cu[i3] * is - xt); yt += w * (Ay + cu[i3 + 1] * is - yt); zt += w * (Az + cu[i3 + 2] * is - zt); } }
        x = xt * s; y = yt * s; z = zt * s; out[i3] = x; out[i3 + 1] = y; out[i3 + 2] = z;
        if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; if (z < z0) z0 = z; if (z > z1) z1 = z;
      }
      box.set([x0, y0, z0, x1, y1, z1], p.i * 6);
    }
  }
  normals(pos, idx, nrm, t0, t1, v0, v1) {
    nrm.fill(0, v0 * 3, v1 * 3);
    for (let t = t0 * 3, e = t1 * 3; t < e; t += 3) {
      const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3;
      const ux = pos[b] - pos[a], uy = pos[b + 1] - pos[a + 1], uz = pos[b + 2] - pos[a + 2], vx = pos[c] - pos[a], vy = pos[c + 1] - pos[a + 1], vz = pos[c + 2] - pos[a + 2];
      const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      nrm[a] += nx; nrm[a + 1] += ny; nrm[a + 2] += nz; nrm[b] += nx; nrm[b + 1] += ny; nrm[b + 2] += nz; nrm[c] += nx; nrm[c + 1] += ny; nrm[c + 2] += nz;
    }
    for (let i = v0 * 3, e = v1 * 3; i < e; i += 3) { const l = Math.hypot(nrm[i], nrm[i + 1], nrm[i + 2]) || 1; nrm[i] /= l; nrm[i + 1] /= l; nrm[i + 2] /= l; }
  }
  // 於高度 Y 切過一組三角形，回傳凸包周長（皮尺量法）；keepPts 時一併回傳輪廓
  girthAt(P, tris, Y, keepPts) {
    const st = this.stri, h = this.hull; let n = 0;
    for (let j = 0; j < tris.length; j++) {
      const t = tris[j] * 3, a = st[t] * 3, b = st[t + 1] * 3, c = st[t + 2] * 3; const ya = P[a + 1] - Y, yb = P[b + 1] - Y, yc = P[c + 1] - Y;
      if ((ya < 0) === (yb < 0) && (yb < 0) === (yc < 0)) continue;
      if ((ya < 0) !== (yb < 0)) { const u = ya / (ya - yb); h[n++] = P[a] + u * (P[b] - P[a]); h[n++] = P[a + 2] + u * (P[b + 2] - P[a + 2]); }
      if ((yb < 0) !== (yc < 0)) { const u = yb / (yb - yc); h[n++] = P[b] + u * (P[c] - P[b]); h[n++] = P[b + 2] + u * (P[c + 2] - P[b + 2]); }
      if ((yc < 0) !== (ya < 0)) { const u = yc / (yc - ya); h[n++] = P[c] + u * (P[a] - P[c]); h[n++] = P[c + 2] + u * (P[a + 2] - P[c + 2]); }
      if (n > h.length - 8) break;
    }
    const m = n / 2; if (m < 3) return keepPts ? { len: 0, pts: [] } : 0;
    const ord = new Uint32Array(m); for (let i = 0; i < m; i++) ord[i] = i;
    ord.sort((p, q) => h[p * 2] - h[q * 2] || h[p * 2 + 1] - h[q * 2 + 1]);
    const H = []; const cross = (o, a, b) => (h[a * 2] - h[o * 2]) * (h[b * 2 + 1] - h[o * 2 + 1]) - (h[a * 2 + 1] - h[o * 2 + 1]) * (h[b * 2] - h[o * 2]);
    for (let i = 0; i < m; i++) { while (H.length >= 2 && cross(H[H.length - 2], H[H.length - 1], ord[i]) <= 0) H.pop(); H.push(ord[i]); }
    const lo = H.length + 1; for (let i = m - 2; i >= 0; i--) { while (H.length >= lo && cross(H[H.length - 2], H[H.length - 1], ord[i]) <= 0) H.pop(); H.push(ord[i]); }
    H.pop(); let len = 0; for (let i = 0; i < H.length; i++) { const a = H[i], b = H[(i + 1) % H.length]; len += Math.hypot(h[a * 2] - h[b * 2], h[a * 2 + 1] - h[b * 2 + 1]); }
    return keepPts ? { len, pts: H.map(i => [h[i * 2], Y, h[i * 2 + 1]]) } : len;
  }
  skinVolume(P) {
    const st = this.stri; let v = 0;
    for (let t = 0, e = this.NTs * 3; t < e; t += 3) { const a = st[t] * 3, b = st[t + 1] * 3, c = st[t + 2] * 3; v += P[a] * (P[b + 1] * P[c + 2] - P[b + 2] * P[c + 1]) - P[a + 1] * (P[b] * P[c + 2] - P[b + 2] * P[c]) + P[a + 2] * (P[b] * P[c + 1] - P[b + 1] * P[c]); }
    return Math.abs(v) / 6000;      // 公升
  }
  bandGirth(k) { const b = this.band[k]; this.deformSkin(this.spos, b.verts, false); return this.girthAt(this.spos, b.tris, this.ymap(b.y)); }
  setG(gG, off) { for (let r = 1; r <= 10; r++) this.g[r] = Math.min(2.0, Math.max(-0.95, (this.gCT ? this.gCT[r] : gG + this.gSex[r]) + (off ? off[r] || 0 : 0))); this.g[0] = 0; }
  // 依個案資料求解。c: {sex,H,W,chest,under,waist,hip,bf,auto,muscle,off[],leg,arm,shoulder}
  // 身高→等比例縮放；腿長比例→腿段與上身的高度分配；腰、臀圍→該高度的軀幹寬深；
  // 男性胸圍→胸廓寬深；女性下胸圍→胸廓、上胸圍→乳房體積；體重→皮下脂肪層倍率 f；
  // 自動模式以體脂率（實測，或由腰圍身高比 RFM 推估）決定肌肉量 g。
  solve(c) {
    if (c.sex !== this.sex) this.setSex(c.sex);
    const C = this.ctOn(), s0 = c.H / this.lm.H0;
    this.setProportions({ leg: c.leg, arm: c.arm, shoulder: C ? C.s_ct / s0 * (c.shoulder || 1) : c.shoulder });
    if (C && c.legAuto) { this.buildLUT(); const K = this.legK, b = C.s_ct / s0, a = (this.lm.H0 - b * K.I1) / K.I0; this.pr.leg = (a * K.T0 + b * K.T1) / this.lm.H0; }
    const ctBand = (k) => C && C.band[k] > 0.5;
    const s = this.s = c.H / this.lm.H0, s3 = s ** 3, k0 = this.k0, air = this.air, phi = this.phi0, F = c.sex === 'F';
    // 下胸圍未填時：由腰圍與上胸圍各半推估，並把上下胸圍差限制在 7–22 cm
    const under = F ? (c.under > 0 ? c.under : Math.min(c.chest - 7, Math.max(c.chest - 22, 0.5 * (0.75 * c.waist + 22) + 0.5 * (c.chest - 13)))) : 0;
    const tg = { C: c.chest / s, U: under / s, W: c.waist / s, H: c.hip / s }, Wb = c.W / s3, note = {};
    const skinVol = () => { this.deformSkin(this.spos, null, false); return this.skinVolume(this.spos); };
    const secant = (get, set, band, lo, hi) => {
      let k1 = get(), slope = NaN; this.buildLUT(); let g1 = this.bandGirth(band);
      for (let it = 0; it < 7 && Math.abs(g1 - tg[band]) > 0.02; it++) {
        let k2 = isFinite(slope) && Math.abs(slope) > 1e-6 ? k1 + (tg[band] - g1) / slope : k1 * (1 + 1.15 * (tg[band] / g1 - 1));
        k2 = Math.min(hi, Math.max(lo, k2)); if (k2 === k1) break;
        set(k2); this.buildLUT(); const g2 = this.bandGirth(band); slope = (g2 - g1) / (k2 - k1); k1 = k2; g1 = g2;
      }
    };
    const fitK = () => {
      for (const k of ['H', 'W']) if (!ctBand(k)) secant(() => this.kf[k], (v) => { this.kf[k] = v; }, k, 0.55 * k0[k], 1.9 * k0[k]);
      if (ctBand('C')) { this.A = 0; this.kf.C = k0.C; }
      else if (F) {
        this.A = 0; secant(() => this.kf.C, (v) => { this.kf.C = v; }, 'U', 0.55 * k0.C, 1.9 * k0.C);
        this.buildLUT(); const flat = this.bandGirth('C');
        if (tg.C > flat + 0.05) {
          let a1 = Math.max(0.5, this.Aprev || 3); this.A = a1; let g1 = this.bandGirth('C'), slope = (g1 - flat) / a1;
          for (let it = 0; it < 7 && Math.abs(g1 - tg.C) > 0.03 && slope > 1e-6; it++) { const a2 = Math.min(13, Math.max(0, a1 + (tg.C - g1) / slope)); if (a2 === a1) break; this.A = a2; const g2 = this.bandGirth('C'); slope = (g2 - g1) / (a2 - a1); a1 = a2; g1 = g2; }
          this.Aprev = this.A;
        } else if (tg.C < flat - 0.05) secant(() => this.kf.C, (v) => { this.kf.C = v; }, 'C', 0.55 * k0.C, 1.9 * k0.C);      // 上胸圍比胸廓還小：以上胸圍為準縮小胸廓
      } else { this.A = 0; secant(() => this.kf.C, (v) => { this.kf.C = v; }, 'C', 0.55 * k0.C, 1.9 * k0.C); }
      this.buildLUT();
    };
    let Vr0 = 0;
    const setMuscle = (g) => { this.setG(g, c.off); this.f = 1; this.A = 0; this.kf = { C: k0.C, W: k0.W, H: k0.H }; this.buildLUT(); Vr0 = skinVol(); };
    const massAt = (f) => {
      this.f = f; fitK(); const V = skinVol(), A = this.A; this.f = 1; this.A = 0; const Vk = skinVol(); this.f = f; this.A = A; const dF = Vk - Vr0;
      // 基準體型含 phi 的脂肪；軀幹寬深變大的體積多數算脂肪（內臟脂肪），變小則多數算去脂組織；皮下脂肪層與乳房的體積全算脂肪
      const Vfat = Math.max(0.03 * V, phi * Vr0 + (dF > 0 ? 0.75 : 0.3) * dF + (V - Vk)), M = 0.9007 * Vfat + 1.10 * (V - Vfat - air);
      return { M, V, Vfat, bf: 0.9007 * Vfat / M * 100 };
    };
    const root = (fn, lo, hi, target, tol, maxIt) => {
      let flo = fn(lo) - target; if (flo >= 0) return { x: lo, clamp: -1 }; let fhi = fn(hi) - target; if (fhi <= 0) return { x: hi, clamp: 1 }; let side = 0, x = lo;
      for (let i = 0; i < maxIt; i++) { x = (lo * fhi - hi * flo) / (fhi - flo); const fx = fn(x) - target; if (Math.abs(fx) < tol) break; if (fx < 0) { lo = x; flo = fx; if (side === -1) fhi /= 2; side = -1; } else { hi = x; fhi = fx; if (side === 1) flo /= 2; side = 1; } }
      return { x, clamp: 0 };
    };
    let last = null; const fatFor = (g) => { setMuscle(g); const r = root((f) => massAt(f).M, 0.3, 12, Wb, 0.03, 12); last = massAt(r.x); last.fclamp = r.clamp; last.f = r.x; return last; };
    let g = c.muscle, bfPrior = null, bfSrc = '';
    this.gCT = null;
    if (c.auto && C && C.hdr.g && C.hdr.g.all != null) {      // CT 模式：肌肉發達程度取自 CT，脂肪層由體重決定
      const G = C.hdr.g; g = G.all; this.gCT = [0, G.all, G.chest ?? G.all, G.chest ?? G.all, G.back ?? G.all, G.all, G.all, G.all, G.all, G.all, G.all]; bfSrc = 'CT 肌肉量＋體重';
    } else if (c.auto) {
      const rfm = (F ? 76 : 64) - 20 * c.H / c.waist;
      if (c.bf > 0) { bfPrior = c.bf; bfSrc = '實測輸入'; } else { bfPrior = Math.min(F ? 52 : 45, Math.max(F ? 14 : 6, rfm)); bfSrc = 'RFM 推估'; }
      // 體重優先：脂肪層到下限仍過重時視為肌肉過多，到上限仍過輕時視為肌肉不足
      const r = root((gg) => { const q = fatFor(gg); return q.fclamp < 0 ? 5 : q.fclamp > 0 ? -100 : -q.bf; }, -0.8, 1.5, -bfPrior, 0.12, 10); g = r.x; if (r.clamp) note.g = r.clamp;
    }
    const m = fatFor(g); if (m.fclamp) note.f = m.fclamp;
    return { gG: g, f: m.f, A: this.A, under, kf: { ...this.kf }, k0: { ...k0 }, bfPrior, bfSrc, note, legScale: this.legScale, upScale: this.upScale, leg: this.pr.leg, ct: C ? { band: C.band } : null, mass: { M: m.M * s3, V: m.V * s3, Vfat: m.Vfat * s3, bf: m.bf } };
  }
  apply(full) {
    this.buildLUT(); this.deformStructure(); this.deformSkin(this.spos, null, true);
    const P = this.parts, lastDef = P.findIndex(p => p.v0 >= this.NVd), pd = lastDef < 0 ? P.length : lastDef;
    if (full || this.ctOn()) this.normals(this.pos, this.idx, this.nrm, 0, this.NT, 0, this.NV);
    else this.normals(this.pos, this.idx, this.nrm, 0, P[pd - 1].t0 + P[pd - 1].nt, 0, this.NVd);
    this.normals(this.spos, this.stri, this.snrm, 0, this.NTs, 0, this.NS);
  }
  partVolume(p) {
    const P = this.pos, ix = this.idx; let v = 0;
    for (let t = p.t0 * 3, e = (p.t0 + p.nt) * 3; t < e; t += 3) { const a = ix[t] * 3, b = ix[t + 1] * 3, c = ix[t + 2] * 3; v += P[a] * (P[b + 1] * P[c + 2] - P[b + 2] * P[c + 1]) - P[a + 1] * (P[b] * P[c + 2] - P[b + 2] * P[c]) + P[a + 2] * (P[b] * P[c + 1] - P[b + 1] * P[c]); }
    return Math.abs(v) / 6;
  }
  findPart(en, side, t) { return this.parts.find(p => p.en === en && p.side === side && (t === undefined || p.t === t)); }
  // 模型上的標準量測（公分、公升）
  measure() {
    const L = this.lm, s = this.s, S = this.spos, st = this.stri, cl = this.scls, sb = this.sbase, out = {}, Y = (y) => this.ymap(y) * s;
    const g = k => this.girthAt(S, this.band[k].tris, Y(this.band[k].y));
    out.chest = g('C'); out.under = g('U'); out.waist = g('W'); out.hip = g('H');
    const sel = (fn) => { const a = []; for (let t = 0; t < this.NTs; t++) { const i = st[t * 3], j = st[t * 3 + 1], k = st[t * 3 + 2]; if (fn(i) && fn(j) && fn(k)) a.push(t); } return Uint32Array.from(a); };
    if (!this.mTris) this.mTris = { arm: sel(i => (cl[i] & 7) === 1), leg: sel(i => cl[i] < 16 && sb[i * 3] > 0.4 && sb[i * 3 + 1] < L.yCrotch - 1) };
    const armY = (y) => (this.yShM + (y - L.shoulder3[1]) * (1 + (this.pr.arm - 1) * this.armU[1] * this.armU[1])) * s;
    const maxG = (tris, y0, y1, f) => { let m = 0; for (let y = y0; y <= y1; y += 1) m = Math.max(m, this.girthAt(S, tris, f(y))); return m; };
    out.upperArm = this.girthAt(S, this.mTris.arm, armY((L.shoulder[1] + L.yElbow) / 2)); out.forearm = maxG(this.mTris.arm, L.yWrist + 6, L.yElbow - 2, armY);
    out.thigh = this.girthAt(S, this.mTris.leg, Y((L.yCrotch - 1 + L.yKnee) / 2)); out.calf = maxG(this.mTris.leg, L.yAnkle + 8, L.yKnee - 4, Y);
    const bx = (en, side) => { const p = this.findPart(en, side, 2); return p ? this.box.subarray(p.i * 6, p.i * 6 + 6) : null; };
    const span = (en) => { const a = bx(en, 0), b = bx(en, 1); return a && b ? a[3] - b[0] : 0; };
    out.biacromial = span('Scapula'); out.biiliac = span('Hip bone');
    const blen = (en, k) => { const p = this.findPart(en, 0, 2); return p ? p.len0 * k * s : 0; };
    out.femur = blen('Femur', this.legScale); out.tibia = blen('Tibia', this.legScale); out.humerus = blen('Humerus', this.pr.arm); out.radius = blen('Radius', this.pr.arm);
    out.troch = Y(L.yTroch); out.crotch = Y(L.yCrotch); out.legRatio = out.troch / (L.H0 * s) * 100; out.sitting = L.H0 * s - Y(L.yCrotch - 1.5);
    let mv = 0; const reg = new Float32Array(11);
    for (const p of this.parts) if (p.t === 0) { const v = this.partVolume(p); mv += v; reg[p.rg] += v; }
    out.muscleVol = mv / 1000; out.regVol = Array.from(reg, v => v / 1000);
    return out;
  }
}
function interp(tab, y) {
  if (y <= tab[0][0]) return tab[0][1]; const n = tab.length; if (y >= tab[n - 1][0]) return tab[n - 1][1];
  for (let i = 1; i < n; i++) if (y <= tab[i][0]) { const t = (y - tab[i - 1][0]) / (tab[i][0] - tab[i - 1][0]); return tab[i - 1][1] + t * (tab[i][1] - tab[i - 1][1]); }
  return tab[n - 1][1];
}
function interpS(tab, y) {
  if (y <= tab[0][0]) return tab[0][1]; const n = tab.length; if (y >= tab[n - 1][0]) return tab[n - 1][1];
  for (let i = 1; i < n; i++) if (y <= tab[i][0]) { const t = (y - tab[i - 1][0]) / (tab[i][0] - tab[i - 1][0]); const u = t * t * (3 - 2 * t); return tab[i - 1][1] + u * (tab[i][1] - tab[i - 1][1]); }
  return tab[n - 1][1];
}
