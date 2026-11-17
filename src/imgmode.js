// 影像模式：CT／MR 上傳後的 3D 重建（只有影像範圍內的內容，位置即真實位置）、量化摘要、結構清單、前後兩次檢查比較。
import * as THREE from 'three';
import { Recon, register, surfaceChange, changeColors, CATS, CAT_ZH, STYLE } from './recon.js';

const fmt = (v, d = 1) => (v == null || Number.isNaN(+v) ? '—' : (+v).toFixed(d));
const sgn = (v, d = 1) => (v == null || Number.isNaN(+v) ? '—' : (v > 0 ? '+' : '') + (+v).toFixed(d));
async function gunzip(buf) { const u = new Uint8Array(buf); if (u[0] !== 0x1f || u[1] !== 0x8b) return buf; return new Response(new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer(); }
function script(src, name) {
  if (window[name]) return Promise.resolve();
  return new Promise((ok, no) => { const sc = document.createElement('script'); sc.src = src; sc.onload = ok; sc.onerror = () => no(new Error('找不到示範資料 ' + src)); document.head.appendChild(sc); });
}
async function chunks(src, name) { await script(src, name); const bin = window[name].map(atob).join(''), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u.buffer; }
function container(files) {
  const parts = [], enc = new TextEncoder();
  for (const f of files) {
    const name = enc.encode(f.webkitRelativePath || f.name), hd = new ArrayBuffer(4 + name.length + 8), dv = new DataView(hd);
    dv.setUint32(0, name.length, true); new Uint8Array(hd, 4, name.length).set(name); dv.setBigUint64(4 + name.length, BigInt(f.size), true);
    parts.push(hd, f);
  }
  return new Blob(parts);
}

export class ImageMode {
  constructor(V, CTV, ui) {
    this.V = V; this.CTV = CTV; this.h = ui.h; this.$ = ui.$; this.onInfo = ui.onInfo;
    this.A = null; this.B = null; this.vol = { A: null, B: null }; this.src = { A: null, B: null }; this.job = { A: null, B: null };
    this.preset = 'xray'; this.op = { ...STYLE.xray }; this.hidden = new Set(); this.solo = null; this.sel = null; this.cmp = 'side'; this.chg = null; this.active = false;
    this.buildImg(); this.buildStruct(); this.buildCmp();
  }
  // ---------- 分頁：影像
  buildImg() {
    const h = this.h, $ = this.$, t = $('#t-img');
    const pick = (which) => {
      const d = h('input', { type: 'file', webkitdirectory: '', multiple: '', hidden: true, onchange: (e) => this.upload([...e.target.files], which) });
      const f = h('input', { type: 'file', multiple: '', accept: '.zip,.nii,.gz,.nrrd,.dcm,.mha', hidden: true, onchange: (e) => this.upload([...e.target.files], which) });
      return [d, f];
    };
    const [dA, fA] = pick('A');
    t.append(
      h('p', { class: 'note' }, '上傳 CT 或 MR（DICOM 資料夾、zip、NIfTI、NRRD）。地端伺服器自動分割並重建影像範圍內的骨骼、肌肉、內臟與血管，位置就是影像中的真實位置；影像沒涵蓋的部位不會出現。'),
      h('div', { class: 'note warn', id: 'im-srv' }, '正在確認地端伺服器…'),
      h('div', { id: 'im-up', hidden: true },
        h('div', { class: 'row' }, h('label', {}, '影像類型'), h('select', { id: 'im-mod' }, h('option', { value: 'auto' }, '自動判斷'), h('option', { value: 'CT' }, 'CT'), h('option', { value: 'MR' }, 'MR'))),
        h('div', { class: 'row' }, dA, fA, h('button', { class: 'btn', onclick: () => dA.click() }, '選擇 DICOM 資料夾'), h('button', { class: 'btn ghost', onclick: () => fA.click() }, '選擇檔案'))),
      h('div', { id: 'im-prog-A', class: 'prog', hidden: true }, h('div', { class: 'track' }, h('div', { class: 'bar' })), h('div', { class: 'val step' }), h('pre', { class: 'log' })),
      h('div', { class: 'row' }, h('button', { class: 'btn ghost', id: 'im-demo', onclick: () => this.demo('A') }, '載入示範（公開胸腹部 CT）')),
      h('div', { id: 'im-res' }));
    this.probe();
  }
  async probe() {
    let ok = false;
    try { const r = await fetch('api/health', { cache: 'no-store' }); ok = r.ok && (await r.json()).ok; } catch (e) { ok = false; }
    this.server = ok; const s = this.$('#im-srv');
    s.textContent = ok ? '已連上地端伺服器。影像只在這台伺服器上處理，不會上傳到外部。' : '目前不是從地端伺服器開啟，無法上傳影像。在院內或公司電腦執行 server.py 後，用瀏覽器開 http://localhost:8765 即可上傳；這裡可以先看示範。';
    s.className = ok ? 'note' : 'note warn'; this.$('#im-up').hidden = !ok; const b = this.$('#cmp-up'); if (b) b.hidden = !ok;
  }
  prog(which, step, p, log) {
    const e = this.$('#im-prog-' + which); if (!e) return; e.hidden = false; e.querySelector('.step').textContent = step; e.querySelector('.bar').style.width = Math.round(p * 100) + '%';
    if (log) e.querySelector('.log').textContent = log.slice(-8).join('\n');
  }
  upload(files, which) {
    if (!files.length) return;
    const total = files.reduce((a, f) => a + f.size, 0); this.prog(which, `上傳 ${files.length} 個檔案（${(total / 1e6).toFixed(0)} MB）`, 0);
    const mod = this.$('#im-mod')?.value || 'auto', x = new XMLHttpRequest(); x.open('POST', 'api/ct?modality=' + encodeURIComponent(mod));
    x.upload.onprogress = (e) => { if (e.lengthComputable) this.prog(which, `上傳中 ${Math.round(e.loaded / e.total * 100)}%`, 0.1 * e.loaded / e.total); };
    x.onload = () => { if (x.status !== 200) { this.prog(which, '上傳失敗：' + x.responseText.slice(0, 200), 0); return; } this.job[which] = JSON.parse(x.responseText).id; this.poll(which); };
    x.onerror = () => this.prog(which, '上傳失敗：無法連線到伺服器', 0);
    x.send(container(files));
  }
  async poll(which) {
    try {
      const id = this.job[which], r = await (await fetch('api/ct/' + id, { cache: 'no-store' })).json();
      this.prog(which, r.state === 'error' ? '處理失敗：' + r.error : r.step, r.progress || 0, r.log);
      if (r.state === 'done') { const buf = await (await fetch('api/ct/' + id + '/case')).arrayBuffer(); await this.load(buf, which, 'api/ct/' + id + '/volume'); this.prog(which, '完成', 1, r.log); return; }
      if (r.state !== 'error') setTimeout(() => this.poll(which), 1500);
    } catch (e) { this.prog(which, '連線中斷：' + e.message, 0); }
  }
  async demo(which) {
    const b = this.$(which === 'A' ? '#im-demo' : '#cmp-demo'), txt = b.textContent; b.disabled = true; b.textContent = '載入中…';
    try {
      if (which === 'B' && !this.A?.hdr.demo) await this.demo('A');
      await this.load(await chunks(`demo-${which.toLowerCase()}.js`, `__DEMO_${which}`), which, 'demo');
    } catch (e) { this.note(e.message); console.error(e); }
    b.disabled = false; b.textContent = txt;
  }
  note(t) { const r = this.$('#im-res'); r.prepend(this.h('p', { class: 'note warn' }, t)); }
  async volume(which) {
    if (this.vol[which]) return this.vol[which];
    const s = this.src[which]; if (!s) throw new Error('這次檢查沒有影像資料');
    let buf;
    if (s === 'demo') buf = await chunks(`demo-${which.toLowerCase()}-vol.js`, `__DEMO_${which}_VOL`);
    else { const r = await fetch(s); if (!r.ok) throw new Error('伺服器沒有這筆影像（可能已逾時刪除）'); buf = await r.arrayBuffer(); }
    return this.vol[which] = await gunzip(buf);
  }
  async load(buf, which, volSrc) {
    const R = new Recon(await gunzip(buf));
    if (which === 'A') {
      this.A?.dispose(); this.B?.dispose(); this.A = R; this.B = null; this.vol = { A: null, B: null }; this.src = { A: volSrc, B: null }; this.reg = null; this.chg = null; this.cmp = 'side';
      this.hidden.clear(); this.solo = null; this.sel = null; R.build(); this.CTV.close(); this.CTV.vol = null;
    } else {
      if (!this.A) throw new Error('請先載入第一次檢查');
      this.B?.dispose(); this.reg = register(this.A, R);
      if (!this.reg) throw new Error('兩次檢查的共同結構不足三個，無法對齊');
      R.T = this.reg; R.origin = this.A.origin; this.B = R; this.vol.B = null; this.src.B = volSrc; this.chg = null; R.build();
    }
    this.apply(true); this.renderSummary(); this.renderStruct(); this.renderCmp();
    if (which === 'B') this.goTab('cmp');
  }
  goTab(t) { const b = this.$(`#tabs button[data-t="${t}"]`); if (b) b.click(); }
  // ---------- 3D 顯示
  activate(on) {
    this.active = on;
    if (!on) { this.V.setRecon(null); this.CTV.close(); return; }
    this.apply(true);
  }
  apply(frame) {
    if (!this.active) return;
    const A = this.A, B = this.B; if (!A) { this.V.setRecon(null); return; }
    const op = this.op, cmp = !!B;
    A.style(op, this.hidden, this.solo);
    if (B) {
      B.style(op, this.hidden, this.solo);
      if (this.cmp === 'side') { const bx = A.box(), w = bx.max.x - bx.min.x; B.group.position.set(w + 12, 0, 0); A.group.position.set(0, 0, 0); }
      else { B.group.position.set(0, 0, 0); for (const s of A.S) { const m = A.mesh[s.name]; if (m.visible) { m.material.transparent = true; m.material.opacity = Math.min(m.material.opacity, s.cat === 'skin' ? 0.06 : 0.22); m.material.depthWrite = false; m.material.needsUpdate = true; } } }
      this.paintChange();
    }
    A.group.updateMatrixWorld(true); if (B) B.group.updateMatrixWorld(true);
    this.V.setRecon(cmp ? [A.group, B.group] : [A.group]);
    if (frame) this.frame('front');
    this.status();
  }
  frame(dir) {
    const b = this.A.box(); if (this.B) b.union(this.B.box()); this.V.frameBox(b, dir);
  }
  setPreset(p) { this.preset = p; this.op = { ...STYLE[p] }; this.solo = null; this.apply(false); this.renderStruct(); for (const x of this.$('#ipreset').children) x.classList.toggle('on', x.dataset.v === p); }
  status() {
    const A = this.A; if (!A) { this.$('#status').textContent = '影像模式：尚未載入影像'; return; }
    const q = A.hdr.quality || {}, cov = q.coverage ? q.coverage.join('–') : '—';
    this.$('#status').textContent = `${q.modality || 'CT'} 重建　${A.hdr.label || ''}　涵蓋 ${cov}　${A.S.length} 個結構` + (this.B ? `　｜　比較：${this.B.hdr.label || '第二次'}` : '');
  }
  tap(x, y) {
    const hit = this.V.pickRecon(x, y); this.select(hit ? hit.mesh : null);
  }
  select(mesh) {
    if (this.sel) { this.sel.material.emissive?.setHex(0); }
    this.sel = mesh || null;
    if (!mesh) { this.$('#info').hidden = true; return; }
    mesh.material.emissive.setHex(0x553300); this.V.req();
    const s = mesh.userData.s, isB = this.B && this.B.mesh[s.name] === mesh, R = isB ? this.B : this.A, other = isB ? this.A : this.B;
    const kv = [['分類', CAT_ZH[s.cat] || s.cat], ['體積', s.vol_ml != null ? fmt(s.vol_ml, 1) + ' mL' : '—']];
    if (s.hu != null) kv.push([R.modality === 'MR' ? '平均訊號' : '平均 CT 值', fmt(s.hu, 0) + (R.modality === 'MR' ? '' : ' HU')]);
    if (s.err) kv.push(['重建誤差（相對分割）', `平均 ${fmt(s.err[0], 2)}、P95 ${fmt(s.err[1], 2)} mm`]);
    const o = other && other.byName[s.name]; if (o) kv.push([isB ? '第一次' : '第二次', fmt(o.vol_ml, 1) + ' mL'], ['變化', sgn((isB ? s.vol_ml - o.vol_ml : o.vol_ml - s.vol_ml), 1) + ' mL']);
    if (this.partial(R, s)) kv.push(['注意', '此結構被影像上下緣截斷，體積只算影像內的部分']);
    this.onInfo({ zh: s.zh, en: s.name + (isB ? '（第二次）' : this.B ? '（第一次）' : ''), sum: kv.slice(0, 2).map(x => x[1]).join('・'), kv, s });
  }
  focusSel() { if (!this.sel) return; const b = new THREE.Box3().setFromObject(this.sel); this.V.frameBox(b.expandByScalar(4)); }
  soloSel() { if (!this.sel) return; const n = this.sel.userData.s.name; this.solo = this.solo ? null : new Set([n]); this.apply(false); return !!this.solo; }
  hideSel() { if (!this.sel) return; this.hidden.add(this.sel.userData.s.name); this.select(null); this.apply(false); this.renderStruct(); }
  partial(R, s) {      // 結構的上下緣貼到影像上下緣（以體表範圍代表影像範圍）
    const z = (x) => { const P = R.lps(x); let lo = Infinity, hi = -Infinity; for (let i = 2; i < P.length; i += 3) { lo = Math.min(lo, P[i]); hi = Math.max(hi, P[i]); } return [lo, hi]; };
    const body = R.byName.body; if (!body || s === body) return false; R._zb = R._zb || z(body); const [a, b] = z(s); return a - R._zb[0] < 4 || R._zb[1] - b < 4;
  }
  // ---------- 摘要（一頁看完重點數字與品質檢查）
  renderSummary() {
    const h = this.h, A = this.A, r = this.$('#im-res'); if (!A) { r.replaceChildren(); return; }
    const hd = A.hdr, q = hd.quality || {}, m = hd.metrics || {}, CT = (q.modality || 'CT') === 'CT', con = q.contrast || {};
    const vol = (n) => A.byName[n]?.vol_ml, sum = (...ns) => { const v = ns.map(vol).filter(x => x != null); return v.length ? v.reduce((a, b) => a + b, 0) : null; };
    const lungs = sum(...A.S.filter(s => s.cat === 'lung').map(s => s.name));
    const tile = (label, value, unit, sub, warn) => h('div', { class: 'kpi' + (warn ? ' warn' : '') }, h('span', {}, label), h('b', {}, value, unit ? h('small', {}, ' ' + unit) : null), sub ? h('i', {}, sub) : null);
    const tiles = [
      tile('掃描範圍', q.coverage ? q.coverage.join('–') : '—', '', `${q.modality || 'CT'}・${A.S.length} 個結構`),
      vol('liver') != null && tile('肝臟體積', fmt(vol('liver'), 0), 'mL', CT && m.liver_hu != null ? `${fmt(m.liver_hu, 0)} HU` : ''),
      vol('spleen') != null && tile('脾臟體積', fmt(vol('spleen'), 0), 'mL', CT && m.spleen_hu != null ? `${fmt(m.spleen_hu, 0)} HU` : ''),
      (vol('kidney_left') != null || vol('kidney_right') != null) && tile('腎臟 左／右', `${fmt(vol('kidney_left'), 0)}／${fmt(vol('kidney_right'), 0)}`, 'mL'),
      lungs != null && tile('肺（合計）', fmt(lungs, 0), 'mL', A.S.some(s => s.cat === 'lung' && this.partial(A, s)) ? '部分在影像外' : ''),
      vol('heart') != null && tile('心臟', fmt(vol('heart'), 0), 'mL'),
      m.L3 && tile('L3 腰大肌面積', fmt(m.L3.psoas_cm2, 1), 'cm²', m.L3.psoas_hu != null ? `平均 ${fmt(m.L3.psoas_hu, 0)} HU` : ''),
      m.L3 && tile('L3 豎脊肌面積', fmt(m.L3.paraspinal_cm2, 1), 'cm²', m.L3.paraspinal_hu != null ? `平均 ${fmt(m.L3.paraspinal_hu, 0)} HU` : ''),
      m.vertebral_hu && tile(`${m.vertebral_hu.level} 椎體海綿骨`, fmt(m.vertebral_hu.hu, 0), 'HU', con.enhanced ? '有顯影劑，不適用骨質參考值' : '中央橢圓區中位數', con.enhanced),
    ].filter(Boolean);
    const ok = (good, text) => h('li', { class: good ? 'ok' : 'warn' }, text);
    const checks = [
      ok(true, `解析度 ${q.voxel_mm ? q.voxel_mm.join(' × ') : '—'} mm，${q.size ? q.size.join(' × ') : ''}`),
      CT && ok(!con.enhanced, con.enhanced ? `有顯影劑（主動脈 ${con.aorta_hu} HU）：器官與骨骼的 CT 值會偏高，脂肪肝、骨質的 HU 參考值不適用` : `未見顯影劑（主動脈 ${con.aorta_hu ?? '—'} HU）`),
      q.surface_error_mm && ok(q.surface_error_mm.p95_max < 1.5, `3D 表面相對分割邊界：平均 ${q.surface_error_mm.mean} mm，各結構 P95 最大 ${q.surface_error_mm.p95_max} mm`),
      ok(!/3 mm/.test(q.seg_model || ''), `分割模型：${q.seg_model || '—'}` + (/3 mm/.test(q.seg_model || '') ? '（快速模型，邊界約 3 mm 等級；院內有 GPU 時建議改用 1.5 mm 模型）' : '')),
      CT && ok(true, '骨骼表面已在原解析度依 CT 值（> 180 HU）貼齊皮質骨'),
    ].filter(Boolean);
    const lv = Object.keys(hd.levels || {}).sort((a, b) => (hd.levels[b] - hd.levels[a]));
    r.replaceChildren(...[
      h('h3', {}, hd.label || '影像重建'),
      hd.demo ? h('p', { class: 'note' }, '示範資料：' + (hd.demo_source || '公開資料')) : null,
      h('div', { class: 'kpis' }, ...tiles),
      h('h3', {}, '品質檢查'), h('ul', { class: 'checks' }, ...checks),
      h('div', { class: 'row' }, h('button', { class: 'btn', onclick: () => this.openViewer() }, '開啟影像檢視器'),
        lv.length ? h('select', { onchange: (e) => { if (e.target.value) this.openViewer(e.target.value); } }, h('option', { value: '' }, '跳到椎體高度'), ...lv.map(n => h('option', { value: n }, n.replace('vertebrae_', '')))) : null),
      h('div', { class: 'row' }, h('button', { class: 'btn ghost', onclick: () => this.exportCsv() }, '匯出結構體積 CSV'), h('button', { class: 'btn ghost', onclick: () => this.unload() }, '移除影像')),
      m.L3 ? h('p', { class: 'note' }, 'L3 面積取 L3 椎體中間那一層。腰大肌、豎脊肌為自動分割；全部骨骼肌面積（SMA）、內臟與皮下脂肪需要組織分割模型（TotalSegmentator tissue，需授權），目前未計算。') : null,
      h('p', { class: 'note' }, '自動量化供臨床參考，非診斷；判讀以原始影像為準。')].filter(Boolean));
  }
  unload() { this.A?.dispose(); this.B?.dispose(); this.A = this.B = null; this.vol = { A: null, B: null }; this.CTV.close(); this.CTV.vol = null; this.V.setRecon(null); this.$('#info').hidden = true; this.renderSummary(); this.renderStruct(); this.renderCmp(); this.status(); }
  async openViewer(level) {
    try {
      const a = await this.volume('A');
      if (this.CTV.R !== this.A || !this.CTV.vol) this.CTV.load(a, this.A);
      if (this.B && this.src.B) this.CTV.setCompare(await this.volume('B'), this.B); else this.CTV.setCompare(null);
      this.CTV.open(); if (level) this.CTV.goLevel(level);
      if (this.preset === 'surface') this.setPreset('xray');
    } catch (e) { this.note(e.message); }
  }
  exportCsv() {
    const A = this.A, B = this.B, rows = [['結構', '英文', '分類', '第一次 mL', ...(B ? ['第二次 mL', '變化 mL', '變化 %'] : []), '平均 CT 值', '被截斷']];
    for (const s of A.S) { const o = B && B.byName[s.name]; rows.push([s.zh, s.name, CAT_ZH[s.cat], s.vol_ml, ...(B ? [o ? o.vol_ml : '', o ? (o.vol_ml - s.vol_ml).toFixed(1) : '', o ? ((o.vol_ml / s.vol_ml - 1) * 100).toFixed(1) : ''] : []), s.hu ?? '', this.partial(A, s) ? '是' : '']); }
    const csv = '﻿' + rows.map(r => r.map(x => /[",\n]/.test(String(x)) ? `"${String(x).replace(/"/g, '""')}"` : x).join(',')).join('\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = 'recon_volumes.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  // ---------- 分頁：結構
  buildStruct() { this.$('#t-struct').append(this.h('div', { id: 'st-cats' }), this.h('div', { class: 'row' }, this.h('input', { type: 'search', id: 'st-q', placeholder: '搜尋，例：肝、L3、肋骨', oninput: () => this.renderStruct() })), this.h('div', { id: 'st-list' })); }
  renderStruct() {
    const h = this.h, A = this.A, cats = this.$('#st-cats'), list = this.$('#st-list');
    if (!A) { cats.replaceChildren(h('p', { class: 'note' }, '先在「影像」頁載入影像。')); list.replaceChildren(); return; }
    const present = CATS.filter(([k]) => A.S.some(s => s.cat === k));
    cats.replaceChildren(...present.map(([k, zh]) => {
      const v = this.op[k] ?? 1, n = A.S.filter(s => s.cat === k).length, val = h('span', { class: 'gv' }, Math.round(v * 100) + '%');
      return h('div', { class: 'row' }, h('label', { class: 'chk', style: 'width:96px;margin:0' }, h('input', { type: 'checkbox', checked: v > 0.01 ? '' : false, onchange: (e) => { this.op[k] = e.target.checked ? (k === 'skin' ? 0.14 : k === 'lung' ? 0.3 : 1) : 0; this.apply(false); this.renderStruct(); } }), `${zh}（${n}）`),
        h('input', { type: 'range', min: 0, max: 100, value: Math.round(v * 100), oninput: (e) => { this.op[k] = e.target.value / 100; val.textContent = e.target.value + '%'; this.apply(false); } }), val);
    }), h('div', { class: 'row' }, h('button', { class: 'btn ghost', onclick: () => { this.hidden.clear(); this.solo = null; this.apply(false); this.renderStruct(); } }, '顯示全部隱藏的結構')));
    const q = (this.$('#st-q').value || '').trim().toLowerCase();
    const items = A.S.filter(s => !q || s.zh.toLowerCase().includes(q) || s.name.toLowerCase().includes(q)).sort((a, b) => CATS.findIndex(c => c[0] === a.cat) - CATS.findIndex(c => c[0] === b.cat) || b.vol_ml - a.vol_ml);
    list.replaceChildren(...items.map(s => h('button', { class: 'li' + (this.hidden.has(s.name) ? ' off' : ''), onclick: () => { this.select(A.mesh[s.name]); this.focusSel(); } },
      h('b', {}, h('i', { class: 'sw', style: `background:${s.color};display:inline-block;margin-right:6px;vertical-align:-2px` }), s.zh), h('span', { class: 'dim' }, `${fmt(s.vol_ml, s.vol_ml < 10 ? 1 : 0)} mL`),
      h('span', { class: 'dim' }, `${CAT_ZH[s.cat]}・${s.name}` + (this.partial(A, s) ? '・被截斷' : '')))));
  }
  // ---------- 分頁：比較
  buildCmp() {
    const h = this.h, d = h('input', { type: 'file', webkitdirectory: '', multiple: '', hidden: true, onchange: (e) => this.upload([...e.target.files], 'B') });
    const f = h('input', { type: 'file', multiple: '', accept: '.zip,.nii,.gz,.nrrd,.dcm,.mha', hidden: true, onchange: (e) => this.upload([...e.target.files], 'B') });
    this.$('#t-cmp').append(
      h('p', { class: 'note' }, '前後兩次檢查（例如術前術後、間隔一段時間的追蹤）。兩次都從頭分割與重建，再以共同的中軸骨（椎體、肋骨、胸骨）對齊，比較各結構的體積與表面變化。'),
      h('div', { class: 'row', id: 'cmp-up', hidden: true }, d, f, h('button', { class: 'btn', onclick: () => d.click() }, '上傳第二次（資料夾）'), h('button', { class: 'btn ghost', onclick: () => f.click() }, '上傳第二次（檔案）')),
      h('div', { id: 'im-prog-B', class: 'prog', hidden: true }, h('div', { class: 'track' }, h('div', { class: 'bar' })), h('div', { class: 'val step' }), h('pre', { class: 'log' })),
      h('div', { class: 'row' }, h('button', { class: 'btn ghost', id: 'cmp-demo', onclick: () => this.demo('B') }, '載入示範追蹤（模擬資料）')),
      h('div', { id: 'cmp-res' }));
  }
  renderCmp() {
    const h = this.h, A = this.A, B = this.B, r = this.$('#cmp-res');
    if (!A || !B) { r.replaceChildren(h('p', { class: 'note' }, A ? '載入第二次檢查後，這裡會列出變化。' : '先在「影像」頁載入第一次檢查（或直接按上面的示範追蹤，會一併載入示範的第一次檢查）。')); return; }
    const g = this.reg, mA = A.hdr.metrics || {}, mB = B.hdr.metrics || {};
    // 兩次共同涵蓋的高度範圍（第一次的座標）：被截斷的結構只比較這段範圍內的體積（由每層截面積加總）
    const zB2A = (z, c) => { const R = g.R; return R[6] * c[0] + R[7] * c[1] + R[8] * z + g.t[2]; };
    const span = (R, s, toA) => { const zp = s.zp; if (!zp) return null; const c = R.hdr.centroids?.[s.name] || [0, 0, 0], n = zp.length - 2, z = (i) => toA(zp[0] + i * zp[1], c); return [Math.min(z(0), z(n - 1)), Math.max(z(0), z(n - 1))]; };
    const id = (z) => z, bA = A.byName.body && span(A, A.byName.body, id), bB = B.byName.body && span(B, B.byName.body, zB2A);
    const lo = bA && bB ? Math.max(bA[0], bB[0]) + 2 : -Infinity, hi = bA && bB ? Math.min(bA[1], bB[1]) - 2 : Infinity;
    const volIn = (R, s, toA) => { const zp = s.zp, c = R.hdr.centroids?.[s.name] || [0, 0, 0]; let v = 0; for (let i = 2; i < zp.length; i++) { const z = toA(zp[0] + (i - 2) * zp[1], c); if (z >= lo && z <= hi) v += zp[i] * Math.abs(zp[1]) / 10; } return v; };
    const rows = [];
    for (const s of A.S) {
      const o = B.byName[s.name]; if (!o || s.vol_ml < 3 || s.cat === 'skin') continue;
      let va = s.vol_ml, vb = o.vol_ml, common = false; const part = this.partial(A, s) || this.partial(B, o);
      if (part && s.zp && o.zp) { va = volIn(A, s, id); vb = volIn(B, o, zB2A); common = true; }
      if (va < 1) continue;
      rows.push({ s, o, va, vb, d: vb - va, p: (vb / va - 1) * 100, part: part && !common, common, bad: g.bad.includes(s.name) });
    }
    // 排序：同時考慮相對與絕對變化（小結構的分割誤差相對較大）：|變化| ÷（3% 體積 + 2 mL）
    const z = (x) => Math.abs(x.d) / (0.03 * x.va + 2);
    rows.sort((a, b) => ((a.part || a.bad) - (b.part || b.bad)) || z(b) - z(a));
    const met = [
      mA.L3 && ['L3 腰大肌面積 cm²', mA.L3.psoas_cm2, mB.L3?.psoas_cm2], mA.L3 && ['L3 豎脊肌面積 cm²', mA.L3.paraspinal_cm2, mB.L3?.paraspinal_cm2],
      mA.L3 && ['L3 腰大肌 HU', mA.L3.psoas_hu, mB.L3?.psoas_hu], mA.vertebral_hu && [`${mA.vertebral_hu.level} 椎體 HU`, mA.vertebral_hu.hu, mB.vertebral_hu?.hu],
      mA.liver_hu != null && ['肝臟 HU', mA.liver_hu, mB.liver_hu]].filter(Boolean);
    const td = (x, c) => h('td', { class: 'n' + (c ? ' ' + c : '') }, x);
    const cls = (p) => Math.abs(p) < 3 ? '' : p < 0 ? 'dn' : 'up';
    r.replaceChildren(...[
      B.hdr.simulated ? h('p', { class: 'note warn' }, B.hdr.simulated) : null,
      h('div', { class: 'kpis' },
        h('div', { class: 'kpi' + (g.by === 'all' ? ' warn' : '') }, h('span', {}, g.by === 'all' ? '對齊（共同結構，骨骼不足）' : '對齊（中軸骨）'), h('b', {}, fmt(g.rms, 1), h('small', {}, ' mm 殘差')), h('i', {}, `${g.n}／${g.total} 個${g.by === 'all' ? '結構' : '骨'}・最大 ${fmt(g.max, 1)} mm`)),
        h('div', { class: 'kpi' }, h('span', {}, '擺位差異'), h('b', {}, fmt(g.angle, 1), h('small', {}, '°')), h('i', {}, `中軸骨位移 ${fmt(g.shift, 1)} mm`))),
      h('div', { class: 'row' }, h('label', {}, '顯示'), h('div', { class: 'seg', id: 'cmp-view' }, ...[['side', '並排'], ['overlay', '重疊']].map(([k, t]) => h('button', { 'data-v': k, class: this.cmp === k ? 'on' : '', onclick: () => { this.cmp = k; this.apply(true); this.renderCmp(); } }, t))),
        h('button', { class: 'btn ghost', onclick: () => this.openViewer() }, '切面對照')),
      met.length ? h('table', {}, h('thead', {}, h('tr', {}, ...['指標', '第一次', '第二次', '變化'].map(x => h('th', {}, x)))),
        h('tbody', {}, ...met.map(([n, a, b]) => h('tr', {}, h('td', {}, n), td(fmt(a, 1)), td(fmt(b, 1)), td(a != null && b != null ? sgn(b - a, 1) + (a ? `（${sgn((b / a - 1) * 100, 0)}%）` : '') : '—', a != null && b != null ? cls((b / a - 1) * 100) : ''))))) : null,
      h('h3', {}, '各結構體積變化（依變化顯著程度排序，點選看表面變化）'),
      this.chg ? h('div', { class: 'legend' }, h('span', { class: 'lg' }), h('span', {}, `${this.chg.zh}：藍＝內縮、紅＝外長（±5 mm 滿色）；平均 ${sgn(this.chg.mean, 1)} mm，內縮最多 ${fmt(this.chg.min, 1)} mm、外長最多 ${fmt(this.chg.max, 1)} mm`), h('button', { class: 'btn ghost', onclick: () => { this.chg = null; this.solo = null; this.apply(false); this.renderCmp(); } }, '清除')) : null,
      h('table', { class: 'chg' }, h('thead', {}, h('tr', {}, ...['結構', '第一次 mL', '第二次 mL', '變化', '%'].map(x => h('th', {}, x)))),
        h('tbody', {}, ...rows.map(x => h('tr', { class: (this.chg?.name === x.s.name ? 'sel ' : '') + (x.part || x.bad ? 'part' : ''), onclick: () => this.showChange(x.s.name) },
          h('td', {}, x.s.zh + (x.bad ? '＊＊' : x.part ? '＊' : x.common ? '†' : '')), td(fmt(x.va, 1)), td(fmt(x.vb, 1)), td(sgn(x.d, 1)), td(sgn(x.p, 1), x.part || x.bad ? '' : cls(x.p)))))),
      g.bad.length ? h('p', { class: 'note warn' }, `＊＊兩次的同名骨位置差太多、未用於對齊（多半是分割把編號標錯一根）：${g.bad.map(n => A.byName[n]?.zh || n).join('、')}。這些結構的體積比較不可靠。`) : null,
      h('p', { class: 'note' }, `†被影像上下緣截斷的結構只比較兩次共同涵蓋的高度範圍（第一次座標 ${fmt(lo, 0)} 到 ${fmt(hi, 0)} mm），由每層截面積加總。`),
      h('p', { class: 'note' }, '＊被截斷但沒有逐層資料的結構：兩次的掃描範圍不同時，體積差主要來自範圍差異，排在最後。體積由各次的自動分割計算，兩次分割本身各有約 1–3 mm 的邊界差異，小於 3% 的變化不上色。')].filter(Boolean));
  }
  // 選一個結構：第二次的表面依到第一次表面的帶號距離上色，第一次以半透明對照
  showChange(name) {
    const sA = this.A.byName[name], sB = this.B.byName[name]; if (!sA || !sB) return;
    const d = surfaceChange(this.A, sA, this.B, sB);
    // 兩次掃描範圍的上下緣附近（6 mm 內）是被截斷的切面，不算變化
    const zr = (R) => { const P = R.lps(R.byName.body); let lo = Infinity, hi = -Infinity; for (let i = 2; i < P.length; i += 3) { lo = Math.min(lo, P[i]); hi = Math.max(hi, P[i]); } return [lo, hi]; };
    if (this.A.byName.body && this.B.byName.body) { const [a0, a1] = zr(this.A), [b0, b1] = zr(this.B), lo = Math.max(a0, b0) + 6, hi = Math.min(a1, b1) - 6, PB = this.B.lps(sB); for (let i = 0; i < d.length; i++) if (PB[i * 3 + 2] < lo || PB[i * 3 + 2] > hi) d[i] = NaN; }
    const ok = Array.from(d).filter(v => !Number.isNaN(v));
    this.chg = { name, zh: sA.zh, d, mean: ok.reduce((a, b) => a + b, 0) / ok.length, min: Math.min(...ok), max: Math.max(...ok) };
    this.cmp = 'overlay'; this.solo = new Set([name]); this.apply(false);
    const b = new THREE.Box3().setFromObject(this.B.mesh[name]); this.V.frameBox(b.expandByScalar(6));
    this.renderCmp();
  }
  paintChange() {
    for (const k in this.B.mesh) { const m = this.B.mesh[k]; if (m.material.vertexColors) { m.material.vertexColors = false; m.material.color.set(m.userData.s.color); m.material.needsUpdate = true; } }
    if (!this.chg) return;
    const m = this.B.mesh[this.chg.name]; m.geometry.setAttribute('color', new THREE.BufferAttribute(changeColors(this.chg.d), 3));
    m.material.vertexColors = true; m.material.color.set(0xffffff); m.material.opacity = 1; m.material.transparent = false; m.material.depthWrite = true; m.material.needsUpdate = true;
    const a = this.A.mesh[this.chg.name]; a.visible = true; a.material.color.set(0x9aa4ae); a.material.transparent = true; a.material.opacity = 0.18; a.material.depthWrite = false; a.material.needsUpdate = true;
  }
}
