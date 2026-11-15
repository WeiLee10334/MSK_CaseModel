// CT 影像檢視器：橫切面、矢狀面、冠狀面，十字線同步；切面上疊加目前 3D 模型的皮膚、肌肉、骨骼輪廓，
// 並在 3D 視窗顯示目前橫切面的位置（貼上該層影像）。不依賴外部函式庫。
const WIN = { soft: [400, 40, '軟組織'], lung: [1500, -600, '肺'], bone: [1800, 400, '骨'] };

export class CTView {
  constructor(M, V, host) {
    this.M = M; this.V = V; this.host = host; this.vol = null; this.win = 'soft'; this.cache = null;
    this.show = { skin: true, bone: true, muscle: false, plane: true };
    this.el = document.createElement('div'); this.el.id = 'ctv'; this.el.hidden = true; host.appendChild(this.el);
    this.el.innerHTML = `<div class="ctv-h"><b>CT 影像</b><span class="ctv-i" id="ctv-i"></span><button class="ctv-x" title="關閉">×</button></div>
      <canvas class="ctv-ax" width="420" height="420"></canvas>
      <div class="ctv-row"><canvas class="ctv-sa" width="206" height="206"></canvas><canvas class="ctv-co" width="206" height="206"></canvas></div>
      <input type="range" class="ctv-sl" min="0" max="0" value="0">
      <div class="ctv-c"><span class="seg ctv-w">${Object.entries(WIN).map(([k, v]) => `<button data-w="${k}">${v[2]}</button>`).join('')}</span></div>
      <div class="ctv-c"><label><input type="checkbox" data-k="skin" checked><i style="background:#ff9a3c"></i>模型皮膚</label><label><input type="checkbox" data-k="muscle"><i style="background:#ff4d6d"></i>模型肌肉</label><label><input type="checkbox" data-k="bone" checked><i style="background:#ffe14d"></i>模型骨骼</label><label><input type="checkbox" data-k="plane" checked>3D 切面</label></div>
      <p class="ctv-n">滑鼠滾輪換層；點矢狀面或冠狀面跳到該位置。輪廓是目前 3D 模型在這一層的截面，可直接對照影像判斷是否吻合。</p>`;
    const $ = (s) => this.el.querySelector(s);
    this.cv = { ax: $('.ctv-ax'), sa: $('.ctv-sa'), co: $('.ctv-co') }; this.sl = $('.ctv-sl'); this.info = $('#ctv-i');
    $('.ctv-x').onclick = () => this.close();
    this.sl.oninput = () => { this.k = +this.sl.value; this.render(); };
    $('.ctv-w').onclick = (e) => { const b = e.target.closest('button'); if (b) { this.win = b.dataset.w; this.render(true); } };
    for (const c of this.el.querySelectorAll('input[type=checkbox]')) c.onchange = () => { this.show[c.dataset.k] = c.checked; this.render(); };
    const wheel = (ax) => (e) => { e.preventDefault(); const d = e.deltaY > 0 ? -1 : 1; if (ax === 'ax') this.k = clamp(this.k + d, 0, this.vol.nz - 1); else if (ax === 'sa') this.i = clamp(this.i + d, 0, this.vol.nx - 1); else this.j = clamp(this.j + d, 0, this.vol.ny - 1); this.render(); };
    for (const a of ['ax', 'sa', 'co']) { this.cv[a].addEventListener('wheel', wheel(a), { passive: false }); this.cv[a].addEventListener('pointerdown', (e) => this.click(a, e)); }
  }
  // buf：解壓後的影像體積（[u32 標頭長度][標頭 JSON][int16 z,y,x]）
  load(buf) {
    const dv = new DataView(buf), hl = dv.getUint32(0, true), h = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl)));
    const [nx, ny, nz] = h.size; this.vol = { nx, ny, nz, sp: h.spacing, o: h.origin, a: new Int16Array(buf.slice(4 + hl, 4 + hl + nx * ny * nz * 2)) };
    this.k = Math.round(nz / 2); this.i = Math.round(nx / 2); this.j = Math.round(ny / 2); this.sl.max = nz - 1; this.cache = null;
  }
  open() { if (!this.vol) return; this.el.hidden = false; this.render(true); }
  close() { this.el.hidden = true; this.V.setSlicePlane(null); }
  get isOpen() { return !this.el.hidden; }
  invalidate() { this.cache = null; if (this.isOpen) this.render(); }
  // 世界座標（3D 視窗，cm）↔ CT 的 LPS 物理座標（mm）
  xf() {
    const C = this.M.ct, T = C.hdr.ct2rel, s = this.M.s, A = this.M.anchorWarp(), M = T.M, b = T.b;
    const det = M[0] * (M[4] * M[8] - M[5] * M[7]) - M[1] * (M[3] * M[8] - M[5] * M[6]) + M[2] * (M[3] * M[7] - M[4] * M[6]);
    const inv = [(M[4] * M[8] - M[5] * M[7]) / det, (M[2] * M[7] - M[1] * M[8]) / det, (M[1] * M[5] - M[2] * M[4]) / det, (M[5] * M[6] - M[3] * M[8]) / det, (M[0] * M[8] - M[2] * M[6]) / det, (M[2] * M[3] - M[0] * M[5]) / det, (M[3] * M[7] - M[4] * M[6]) / det, (M[1] * M[6] - M[0] * M[7]) / det, (M[0] * M[4] - M[1] * M[3]) / det];
    const off = [b[0] + s * A[0], b[1] + s * A[1], b[2] + s * A[2]];
    return { toLPS: (x, y, z, out, o) => { const rx = x - off[0], ry = y - off[1], rz = z - off[2]; out[o] = inv[0] * rx + inv[1] * ry + inv[2] * rz; out[o + 1] = inv[3] * rx + inv[4] * ry + inv[5] * rz; out[o + 2] = inv[6] * rx + inv[7] * ry + inv[8] * rz; },
      toWorld: (p) => [M[0] * p[0] + M[1] * p[1] + M[2] * p[2] + off[0], M[3] * p[0] + M[4] * p[1] + M[5] * p[2] + off[1], M[6] * p[0] + M[7] * p[1] + M[8] * p[2] + off[2]] };
  }
  // 目前模型的頂點換到 LPS（模型更新後重算）
  meshes() {
    if (this.cache) return this.cache;
    const M = this.M, f = this.xf(), sk = M.skinTris(), NS = M.NSall || M.NS;
    const sp = new Float32Array(NS * 3); for (let i = 0; i < NS; i++) f.toLPS(M.spos[i * 3], M.spos[i * 3 + 1], M.spos[i * 3 + 2], sp, i * 3);
    const pick = (fn) => { let n = 0; for (const p of M.parts) if (fn(p)) n += p.nt; const t = new Uint32Array(n * 3); let o = 0; for (const p of M.parts) if (fn(p)) { t.set(M.idx.subarray(p.t0 * 3, (p.t0 + p.nt) * 3), o); o += p.nt * 3; } return t; };
    const bt = pick((p) => p.t === 2 && !(M.sex === 'F' && p.male)), mt = pick((p) => p.t === 0 && !(M.sex === 'F' && p.male));
    const P = new Float32Array(M.NV * 3); for (let i = 0; i < M.NV; i++) f.toLPS(M.pos[i * 3], M.pos[i * 3 + 1], M.pos[i * 3 + 2], P, i * 3);
    return this.cache = { skin: [sp, sk], bone: [P, bt], muscle: [P, mt], f };
  }
  // 三角網格與「第 ax 軸 = v」平面的交線，回傳 [u1,v1,u2,v2,…]（另外兩軸的 LPS 座標）
  cut(P, T, ax, v) {
    const a = (ax + 1) % 3, b = (ax + 2) % 3, out = [];
    const u = ax === 2 ? 0 : ax === 0 ? 1 : 0, w = ax === 2 ? 1 : 2;      // 顯示用：橫切面 (x,y)、矢狀面 (y,z)、冠狀面 (x,z)
    for (let t = 0; t < T.length; t += 3) {
      const i0 = T[t] * 3, i1 = T[t + 1] * 3, i2 = T[t + 2] * 3, d0 = P[i0 + ax] - v, d1 = P[i1 + ax] - v, d2 = P[i2 + ax] - v;
      if ((d0 > 0 && d1 > 0 && d2 > 0) || (d0 < 0 && d1 < 0 && d2 < 0)) continue;
      const pts = [];
      const e = (ia, da, ib, db) => { if ((da > 0) !== (db > 0)) { const s = da / (da - db); pts.push(P[ia + u] + s * (P[ib + u] - P[ia + u]), P[ia + w] + s * (P[ib + w] - P[ia + w])); } };
      e(i0, d0, i1, d1); e(i1, d1, i2, d2); e(i2, d2, i0, d0);
      if (pts.length >= 4) out.push(pts[0], pts[1], pts[2], pts[3]);
    }
    void a; void b; return out;
  }
  click(ax, e) {
    const r = e.target.getBoundingClientRect(), m = this.map[ax]; if (!m) return;
    const px = (e.clientX - r.left) * e.target.width / r.width, py = (e.clientY - r.top) * e.target.height / r.height;
    const [U, W] = m.inv(px, py), v = this.vol;
    if (ax === 'ax') { this.i = clamp(Math.round((U - v.o[0]) / v.sp[0]), 0, v.nx - 1); this.j = clamp(Math.round((W - v.o[1]) / v.sp[1]), 0, v.ny - 1); }
    else if (ax === 'sa') { this.j = clamp(Math.round((U - v.o[1]) / v.sp[1]), 0, v.ny - 1); this.k = clamp(Math.round((W - v.o[2]) / v.sp[2]), 0, v.nz - 1); }
    else { this.i = clamp(Math.round((U - v.o[0]) / v.sp[0]), 0, v.nx - 1); this.k = clamp(Math.round((W - v.o[2]) / v.sp[2]), 0, v.nz - 1); }
    this.render();
  }
  // 影像切片 → 離屏畫布（原始解析度），空氣設為透明，供 3D 切面貼圖
  slice(ax) {
    const v = this.vol, [ww, wl] = WIN[this.win], lo = wl - ww / 2, a = v.a;
    const W = ax === 'ax' ? v.nx : ax === 'sa' ? v.ny : v.nx, H = ax === 'ax' ? v.ny : v.nz;
    const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d'), im = g.createImageData(W, H), d = im.data;
    for (let r = 0; r < H; r++) for (let q = 0; q < W; q++) {
      let hu; if (ax === 'ax') hu = a[(this.k * v.ny + r) * v.nx + q]; else if (ax === 'sa') hu = a[((v.nz - 1 - r) * v.ny + q) * v.nx + this.i]; else hu = a[((v.nz - 1 - r) * v.ny + this.j) * v.nx + q];
      const g8 = Math.max(0, Math.min(255, (hu - lo) / ww * 255)), o = (r * W + q) * 4; d[o] = d[o + 1] = d[o + 2] = g8; d[o + 3] = hu <= -1000 ? 0 : 255;
    }
    g.putImageData(im, 0, 0); return c;
  }
  render() {
    if (!this.vol || this.el.hidden) return;
    const v = this.vol, sp = v.sp, o = v.o; this.sl.value = this.k;
    const e0 = [o[0] - sp[0] / 2, o[1] - sp[1] / 2, o[2] - sp[2] / 2], ext = [v.nx * sp[0], v.ny * sp[1], v.nz * sp[2]];
    const zTop = e0[2] + ext[2];
    const views = { ax: [0, 1, e0[0], e0[1], ext[0], ext[1], false], sa: [1, 2, e0[1], zTop, ext[1], ext[2], true], co: [0, 2, e0[0], zTop, ext[0], ext[2], true] };
    this.map = {}; const ms = this.meshes();
    for (const [key, [ua, wa, u0, w0, eu, ew, flip]] of Object.entries(views)) {
      const cv = this.cv[key], g = cv.getContext('2d'), k = Math.min(cv.width / eu, cv.height / ew), ox = (cv.width - eu * k) / 2, oy = (cv.height - ew * k) / 2;
      const fwd = (U, W) => [ox + (U - u0) * k, oy + (flip ? (w0 - W) : (W - w0)) * k];
      this.map[key] = { inv: (px, py) => [u0 + (px - ox) / k, flip ? w0 - (py - oy) / k : w0 + (py - oy) / k] };
      g.fillStyle = '#000'; g.fillRect(0, 0, cv.width, cv.height); g.imageSmoothingEnabled = true;
      const img = this.slice(key); g.drawImage(img, ox, oy, eu * k, ew * k); if (key === 'ax') this.axImg = img;
      // 模型輪廓
      const axis = key === 'ax' ? 2 : key === 'sa' ? 0 : 1, val = key === 'ax' ? o[2] + this.k * sp[2] : key === 'sa' ? o[0] + this.i * sp[0] : o[1] + this.j * sp[1];
      for (const [nm, col] of [['muscle', '#ff4d6d'], ['bone', '#ffe14d'], ['skin', '#ff9a3c']]) {
        if (!this.show[nm]) continue; const [P, T] = ms[nm], seg = this.cut(P, T, axis, val);
        g.strokeStyle = col; g.lineWidth = key === 'ax' ? 1.4 : 1; g.beginPath();
        for (let q = 0; q < seg.length; q += 4) { const [a1, b1] = fwd(seg[q], seg[q + 1]), [a2, b2] = fwd(seg[q + 2], seg[q + 3]); g.moveTo(a1, b1); g.lineTo(a2, b2); }
        g.stroke();
      }
      // 十字線
      g.strokeStyle = 'rgba(80,200,255,.85)'; g.lineWidth = 1; g.setLineDash([4, 3]); g.beginPath();
      const X = o[0] + this.i * sp[0], Y = o[1] + this.j * sp[1], Z = o[2] + this.k * sp[2];
      const line = (U1, W1, U2, W2) => { const [a1, b1] = fwd(U1, W1), [a2, b2] = fwd(U2, W2); g.moveTo(a1, b1); g.lineTo(a2, b2); };
      if (key === 'ax') { line(X, e0[1], X, e0[1] + ext[1]); line(e0[0], Y, e0[0] + ext[0], Y); }
      else if (key === 'sa') { line(e0[1], Z, e0[1] + ext[1], Z); line(Y, e0[2], Y, zTop); }
      else { line(e0[0], Z, e0[0] + ext[0], Z); line(X, e0[2], X, zTop); }
      g.stroke(); g.setLineDash([]);
      if (key !== 'ax') { g.fillStyle = 'rgba(80,200,255,.9)'; g.font = '11px system-ui'; g.fillText(key === 'sa' ? '矢狀面（左為前）' : '冠狀面（左為病人右側）', 6, 14); }
      else { g.fillStyle = 'rgba(80,200,255,.9)'; g.font = '11px system-ui'; g.fillText('前', cv.width / 2 - 6, oy + 14); g.fillText('病人右', ox + 4, cv.height / 2); }
    }
    const Z = o[2] + this.k * sp[2], C = this.M.ct, yl = C.hdr.ylim_rel;
    this.info.textContent = `第 ${this.k + 1} / ${v.nz} 層 · z ${Z.toFixed(1)} mm · ${WIN[this.win][2]}窗`;
    // 3D 切面：目前橫切面的四角換到世界座標，貼上影像
    if (this.show.plane) {
      const f = ms.f, c = [[e0[0], e0[1], Z], [e0[0] + ext[0], e0[1], Z], [e0[0] + ext[0], e0[1] + ext[1], Z], [e0[0], e0[1] + ext[1], Z]].map(f.toWorld);
      this.V.setSlicePlane(c, this.axImg);
    } else this.V.setSlicePlane(null);
    void yl;
  }
}
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
