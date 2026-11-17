// 影像檢視器（CT／MR）：橫切面、矢狀面、冠狀面，十字線同步；切面上疊加 3D 重建各分類的輪廓，
// 並在 3D 視窗顯示目前橫切面的位置（貼上該層影像）。比較模式另顯示第二次檢查在同一切面（已對齊）的影像與輪廓。
const WIN_CT = { soft: [400, 40, '軟組織'], lung: [1500, -600, '肺'], bone: [1800, 400, '骨'] };
const LAYERS = [['skin', '體表', '#ff9a3c', true], ['bone', '骨骼', '#ffe14d', true], ['muscle', '肌肉', '#ff4d6d', true], ['organ', '內臟', '#4dd2ff', true], ['vessel', '血管', '#c08cff', false]];

export class CTView {
  constructor(V, host) {
    this.V = V; this.host = host; this.vol = null; this.win = 'soft'; this.R = null; this.B = null;
    this.show = Object.fromEntries(LAYERS.map(l => [l[0], l[3]])); this.show.plane = true;
    this.el = document.createElement('div'); this.el.id = 'ctv'; this.el.hidden = true; host.appendChild(this.el);
    this.el.innerHTML = `<div class="ctv-h"><b class="ctv-t">影像</b><span class="ctv-i"></span><button class="ctv-x" title="關閉">×</button></div>
      <div class="ctv-top"><div class="ctv-cell"><canvas class="ctv-ax" width="420" height="420"></canvas><span class="ctv-lab ctv-la" hidden>第一次</span></div>
      <div class="ctv-cell ctv-bcell" hidden><canvas class="ctv-bx" width="420" height="420"></canvas><span class="ctv-lab">第二次（已對齊）</span></div></div>
      <div class="ctv-row"><canvas class="ctv-sa" width="206" height="206"></canvas><canvas class="ctv-co" width="206" height="206"></canvas></div>
      <input type="range" class="ctv-sl" min="0" max="0" value="0">
      <div class="ctv-c"><span class="seg ctv-w"></span></div>
      <div class="ctv-c ctv-ly">${LAYERS.map(([k, n, c]) => `<label><input type="checkbox" data-k="${k}"${this.show[k] ? ' checked' : ''}><i style="background:${c}"></i>${n}</label>`).join('')}<label><input type="checkbox" data-k="plane" checked>3D 切面</label></div>
      <p class="ctv-n">滑鼠滾輪換層；點矢狀面或冠狀面跳到該位置。彩色輪廓是 3D 重建在這一層的截面，可直接對照影像。</p>`;
    const $ = (s) => this.el.querySelector(s);
    this.cv = { ax: $('.ctv-ax'), sa: $('.ctv-sa'), co: $('.ctv-co'), bx: $('.ctv-bx') }; this.sl = $('.ctv-sl'); this.info = $('.ctv-i'); this.ttl = $('.ctv-t');
    $('.ctv-x').onclick = () => this.close();
    this.sl.oninput = () => { this.k = +this.sl.value; this.render(); };
    $('.ctv-w').onclick = (e) => { const b = e.target.closest('button'); if (b) { this.win = b.dataset.w; this.render(); } };
    for (const c of this.el.querySelectorAll('input[type=checkbox]')) c.onchange = () => { this.show[c.dataset.k] = c.checked; this.render(); };
    const wheel = (ax) => (e) => { e.preventDefault(); if (!this.vol) return; const d = e.deltaY > 0 ? -1 : 1; if (ax === 'ax' || ax === 'bx') this.k = clamp(this.k + d, 0, this.vol.nz - 1); else if (ax === 'sa') this.i = clamp(this.i + d, 0, this.vol.nx - 1); else this.j = clamp(this.j + d, 0, this.vol.ny - 1); this.render(); };
    for (const a of ['ax', 'sa', 'co', 'bx']) { this.cv[a].addEventListener('wheel', wheel(a), { passive: false }); this.cv[a].addEventListener('pointerdown', (e) => this.click(a === 'bx' ? 'ax' : a, e)); }
  }
  static parse(buf) {
    const dv = new DataView(buf), hl = dv.getUint32(0, true), h = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl)));
    const [nx, ny, nz] = h.size; return { nx, ny, nz, sp: h.spacing, o: h.origin, mod: h.modality || 'CT', win: h.window, a: new Int16Array(buf.slice(4 + hl, 4 + hl + nx * ny * nz * 2)) };
  }
  // 第一次檢查：影像體積與重建
  load(buf, R) {
    this.vol = CTView.parse(buf); this.R = R; this.B = null; this.cache = null; const v = this.vol;
    this.k = Math.round(v.nz / 2); this.i = Math.round(v.nx / 2); this.j = Math.round(v.ny / 2); this.sl.max = v.nz - 1;
    this.wins = v.mod === 'MR' ? { mr: [v.win ? v.win[0] : 800, v.win ? v.win[1] : 400, 'MR'] } : WIN_CT; this.win = Object.keys(this.wins)[0];
    this.el.querySelector('.ctv-w').innerHTML = Object.entries(this.wins).map(([k, w]) => `<button data-w="${k}">${w[2]}</button>`).join('');
    this.ttl.textContent = v.mod === 'MR' ? 'MR 影像' : 'CT 影像'; this.setCompare(null);
  }
  // 第二次檢查：影像體積、重建（已設定對齊 T：p_A = R p_B + t）
  setCompare(buf, RB) {
    if (!buf) { this.B = null; this.el.querySelector('.ctv-bcell').hidden = true; this.el.querySelector('.ctv-la').hidden = true; this.el.classList.remove('cmp'); this.cache = null; this.render(); return; }
    this.B = { vol: CTView.parse(buf), R: RB }; this.el.querySelector('.ctv-bcell').hidden = false; this.el.querySelector('.ctv-la').hidden = false; this.el.classList.add('cmp'); this.cache = null; this.render();
  }
  open() { if (!this.vol) return; this.el.hidden = false; this.render(); }
  close() { this.el.hidden = true; this.V.setSlicePlane(null); }
  get isOpen() { return !this.el.hidden; }
  invalidate() { this.cache = null; if (this.isOpen) this.render(); }
  // 各分類的頂點（LPS，mm）與三角形；第二次檢查的頂點已對齊到第一次
  meshes() {
    if (this.cache) return this.cache;
    const grp = (R) => { const out = {}; for (const [k] of LAYERS) { const ss = R.S.filter(s => (k === 'organ' ? ['organ', 'lung', 'nerve'] : [k]).includes(s.cat)); out[k] = ss.map(s => [R.lps(s), R.tris(s)]); } return out; };
    return this.cache = { A: grp(this.R), B: this.B ? grp(this.B.R) : null };
  }
  // 三角網格與「第 ax 軸 = v」平面的交線，回傳 [u1,w1,u2,w2,…]
  cut(P, T, ax, v) {
    const u = ax === 2 ? 0 : ax === 0 ? 1 : 0, w = ax === 2 ? 1 : 2, out = [];
    for (let t = 0; t < T.length; t += 3) {
      const i0 = T[t] * 3, i1 = T[t + 1] * 3, i2 = T[t + 2] * 3, d0 = P[i0 + ax] - v, d1 = P[i1 + ax] - v, d2 = P[i2 + ax] - v;
      if ((d0 > 0 && d1 > 0 && d2 > 0) || (d0 < 0 && d1 < 0 && d2 < 0)) continue;
      const pts = [], e = (ia, da, ib, db) => { if ((da > 0) !== (db > 0)) { const s = da / (da - db); pts.push(P[ia + u] + s * (P[ib + u] - P[ia + u]), P[ia + w] + s * (P[ib + w] - P[ia + w])); } };
      e(i0, d0, i1, d1); e(i1, d1, i2, d2); e(i2, d2, i0, d0);
      if (pts.length >= 4) out.push(pts[0], pts[1], pts[2], pts[3]);
    }
    return out;
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
  gray(val, ww, wl) { return Math.max(0, Math.min(255, (val - (wl - ww / 2)) / ww * 255)); }
  // 影像切片 → 離屏畫布（原始解析度），空氣設為透明，供 3D 切面貼圖
  slice(ax) {
    const v = this.vol, [ww, wl] = this.wins[this.win], a = v.a, ct = v.mod === 'CT';
    const W = ax === 'ax' ? v.nx : ax === 'sa' ? v.ny : v.nx, H = ax === 'ax' ? v.ny : v.nz;
    const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d'), im = g.createImageData(W, H), d = im.data;
    for (let r = 0; r < H; r++) for (let q = 0; q < W; q++) {
      let hu; if (ax === 'ax') hu = a[(this.k * v.ny + r) * v.nx + q]; else if (ax === 'sa') hu = a[((v.nz - 1 - r) * v.ny + q) * v.nx + this.i]; else hu = a[((v.nz - 1 - r) * v.ny + this.j) * v.nx + q];
      const g8 = this.gray(hu, ww, wl), o = (r * W + q) * 4; d[o] = d[o + 1] = d[o + 2] = g8; d[o + 3] = (ct ? hu <= -1000 : hu <= 0) ? 0 : 255;
    }
    g.putImageData(im, 0, 0); return c;
  }
  // 第二次檢查在「第一次的橫切面」上的影像：每個像素換到第二次的座標取值（p_B = Rᵀ(p_A − t)）
  sliceB() {
    const v = this.vol, B = this.B.vol, T = this.B.R.T, R = T.R, t = T.t, [ww, wl] = this.wins[this.win], ct = B.mod === 'CT';
    const c = document.createElement('canvas'); c.width = v.nx; c.height = v.ny; const g = c.getContext('2d'), im = g.createImageData(v.nx, v.ny), d = im.data;
    const z = v.o[2] + this.k * v.sp[2];
    for (let r = 0; r < v.ny; r++) for (let q = 0; q < v.nx; q++) {
      const x = v.o[0] + q * v.sp[0] - t[0], y = v.o[1] + r * v.sp[1] - t[1], zz = z - t[2];
      const bx = R[0] * x + R[3] * y + R[6] * zz, by = R[1] * x + R[4] * y + R[7] * zz, bz = R[2] * x + R[5] * y + R[8] * zz;
      const i = Math.round((bx - B.o[0]) / B.sp[0]), j = Math.round((by - B.o[1]) / B.sp[1]), k = Math.round((bz - B.o[2]) / B.sp[2]);
      const o = (r * v.nx + q) * 4;
      if (i < 0 || j < 0 || k < 0 || i >= B.nx || j >= B.ny || k >= B.nz) { d[o + 3] = 0; continue; }
      const val = B.a[(k * B.ny + j) * B.nx + i], g8 = this.gray(val, ww, wl); d[o] = d[o + 1] = d[o + 2] = g8; d[o + 3] = (ct ? val <= -1000 : val <= 0) ? 0 : 255;
    }
    g.putImageData(im, 0, 0); return c;
  }
  render() {
    if (!this.vol || this.el.hidden) return;
    for (const b of this.el.querySelectorAll('.ctv-w button')) b.classList.toggle('on', b.dataset.w === this.win);
    const v = this.vol, sp = v.sp, o = v.o; this.sl.value = this.k;
    const e0 = [o[0] - sp[0] / 2, o[1] - sp[1] / 2, o[2] - sp[2] / 2], ext = [v.nx * sp[0], v.ny * sp[1], v.nz * sp[2]], zTop = e0[2] + ext[2];
    const views = { ax: [e0[0], e0[1], ext[0], ext[1], false], sa: [e0[1], zTop, ext[1], ext[2], true], co: [e0[0], zTop, ext[0], ext[2], true] };
    if (this.B) views.bx = views.ax;
    this.map = {}; const ms = this.meshes();
    for (const [key, [u0, w0, eu, ew, flip]] of Object.entries(views)) {
      const cv = this.cv[key], g = cv.getContext('2d'), k = Math.min(cv.width / eu, cv.height / ew), ox = (cv.width - eu * k) / 2, oy = (cv.height - ew * k) / 2;
      const fwd = (U, W) => [ox + (U - u0) * k, oy + (flip ? (w0 - W) : (W - w0)) * k];
      this.map[key] = { inv: (px, py) => [u0 + (px - ox) / k, flip ? w0 - (py - oy) / k : w0 + (py - oy) / k] };
      g.fillStyle = '#000'; g.fillRect(0, 0, cv.width, cv.height); g.imageSmoothingEnabled = true;
      const img = key === 'bx' ? this.sliceB() : this.slice(key); g.drawImage(img, ox, oy, eu * k, ew * k); if (key === 'ax') this.axImg = img;
      const axis = key === 'ax' || key === 'bx' ? 2 : key === 'sa' ? 0 : 1, val = axis === 2 ? o[2] + this.k * sp[2] : key === 'sa' ? o[0] + this.i * sp[0] : o[1] + this.j * sp[1];
      const src = key === 'bx' ? ms.B : ms.A;
      for (const [nm, , col] of LAYERS) {
        if (!this.show[nm] || !src[nm]) continue;
        g.strokeStyle = col; g.lineWidth = axis === 2 ? 1.4 : 1; g.beginPath();
        for (const [P, T] of src[nm]) { const seg = this.cut(P, T, axis, val); for (let q = 0; q < seg.length; q += 4) { const [a1, b1] = fwd(seg[q], seg[q + 1]), [a2, b2] = fwd(seg[q + 2], seg[q + 3]); g.moveTo(a1, b1); g.lineTo(a2, b2); } }
        g.stroke();
      }
      g.strokeStyle = 'rgba(80,200,255,.85)'; g.lineWidth = 1; g.setLineDash([4, 3]); g.beginPath();
      const X = o[0] + this.i * sp[0], Y = o[1] + this.j * sp[1], Z = o[2] + this.k * sp[2];
      const line = (U1, W1, U2, W2) => { const [a1, b1] = fwd(U1, W1), [a2, b2] = fwd(U2, W2); g.moveTo(a1, b1); g.lineTo(a2, b2); };
      if (axis === 2) { line(X, e0[1], X, e0[1] + ext[1]); line(e0[0], Y, e0[0] + ext[0], Y); }
      else if (key === 'sa') { line(e0[1], Z, e0[1] + ext[1], Z); line(Y, e0[2], Y, zTop); }
      else { line(e0[0], Z, e0[0] + ext[0], Z); line(X, e0[2], X, zTop); }
      g.stroke(); g.setLineDash([]);
      g.fillStyle = 'rgba(80,200,255,.9)'; g.font = '11px system-ui';
      if (axis !== 2) g.fillText(key === 'sa' ? '矢狀面（左為前）' : '冠狀面（左為病人右側）', 6, 14);
      else { g.fillText('前', cv.width / 2 - 6, oy + 14); g.fillText('病人右', ox + 4, cv.height / 2); }
    }
    const Z = o[2] + this.k * sp[2], lv = this.level(Z);
    this.info.textContent = `第 ${this.k + 1} / ${v.nz} 層 · z ${Z.toFixed(1)} mm${lv ? ' · 約 ' + lv : ''} · ${this.wins[this.win][2]}窗`;
    if (this.show.plane && this.R) {
      const c = [[e0[0], e0[1], Z], [e0[0] + ext[0], e0[1], Z], [e0[0] + ext[0], e0[1] + ext[1], Z], [e0[0], e0[1] + ext[1], Z]].map(p => this.R.toWorld(p));
      this.V.setSlicePlane(c, this.axImg);
    } else this.V.setSlicePlane(null);
  }
  // 目前高度最接近的椎體（以椎體質心高度判斷）
  level(z) {
    const L = this.R?.hdr.levels; if (!L) return ''; let best = '', bd = 1e9;
    for (const n in L) { const d = Math.abs(L[n] - z); if (d < bd) { bd = d; best = n; } }
    return bd < 20 ? best.replace('vertebrae_', '') + ' 椎體' : '';
  }
  // 跳到某椎體高度
  goLevel(name) { const L = this.R?.hdr.levels; if (!L || L[name] == null || !this.vol) return; this.k = clamp(Math.round((L[name] - this.vol.o[2]) / this.vol.sp[2]), 0, this.vol.nz - 1); this.render(); }
}
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
