import { fetchModel, TISSUE_ZH, REGIONS } from './model.js';
import { Viewer, COL } from './viewer.js';

const $ = (s, r = document) => r.querySelector(s);
const h = (tag, attrs = {}, ...kids) => { const e = document.createElement(tag); for (const k in attrs) { if (k === 'class') e.className = attrs[k]; else if (k.startsWith('on')) e.addEventListener(k.slice(2), attrs[k]); else if (k === 'html') e.innerHTML = attrs[k]; else if (attrs[k] !== false && attrs[k] != null) e.setAttribute(k, attrs[k]); } for (const c of kids.flat()) if (c != null) e.append(c.nodeType ? c : document.createTextNode(c)); return e; };
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);
const state = { c: { id: '', sex: 'M', H: 171, W: 75, chest: 104, waist: 82, hip: 95, under: 0, bf: 0, leg: 0, arm: 1, shoulder: 1, auto: true, muscle: 0, off: new Array(11).fill(0) }, res: null, meas: null, tool: null, pts: [], last: null };
let M, V, timer = 0;
const LIM = { H: [140, 200, 0.5], W: [35, 160, 0.5], chest: [65, 150, 0.5], waist: [50, 150, 0.5], hip: [65, 150, 0.5] };
const LAYERS = [['muscle', '肌肉', COL.muscle], ['tendon', '肌腱、腱膜、支持帶', COL.tendon], ['fascia', '深筋膜（包覆肌肉，半透明）', COL.fascia], ['lig', '韌帶', COL.lig], ['bone', '骨骼', COL.bone], ['cart', '軟骨、椎間盤、半月板', COL.cart], ['bursa', '關節囊、滑液囊與腱鞘（半透明）', COL.capsule], ['ins', '肌肉起點（紅）與止點（藍）', COL.origin]];
const hex = (n) => '#' + n.toString(16).padStart(6, '0');

async function init() {
  const bar = $('#lbar'), msg = $('#lmsg');
  try {
    M = await fetchModel(() => { msg.textContent = '解壓縮模型資料…'; });
    msg.textContent = '建立模型…'; await new Promise(r => setTimeout(r, 30));
    V = new Viewer($('#cv'), M); theme();
    const L = M.lm; M.s = 1; M.setG(0); M.buildLUT(); M.deformSkin(M.spos, null, false); const v0 = M.skinVolume(M.spos), m0 = { M: 0.9007 * M.phi0 * v0 + 1.10 * (v0 * (1 - M.phi0) - M.air) };
    Object.assign(state.c, { H: Math.round(L.H0), W: Math.round(m0.M), chest: Math.round(L.girth0[0]), waist: Math.round(L.girth0[1]), hip: Math.round(L.girth0[2]) });
    state.c.leg = Math.round(M.r0 * 1000) / 10; state.base = { ...state.c };
    buildUI(); preset('surface'); update(); V.view('front'); $('#loading').hidden = true;
    window.__app = { M, V, state, update, setCase, preset, select, tap, setTool, ready: true };
  } catch (e) { msg.textContent = '載入失敗：' + (e && e.message ? e.message : e); console.error(e); }
}
function theme() { const dark = matchMedia('(prefers-color-scheme: dark)').matches; V.setBackground(dark ? 0x14171c : 0xe9edf2); }
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => V && theme());

function schedule(ms = 140) { clearTimeout(timer); $('#busy').hidden = false; timer = setTimeout(update, ms); }
function update() {
  const c = state.c, t0 = performance.now();
  const res = state.res = M.solve({ ...c, leg: c.leg / 100 }); const sig = [M.s, res.kf.C, res.kf.W, res.kf.H, c.sex, c.leg, c.arm, c.shoulder].join(',');
  if (state.sexShown !== c.sex) { state.sexShown = c.sex; V.rebuild(); }
  M.apply(sig !== state.last); state.last = sig; V.refresh(); state.meas = M.measure();
  state.ms = Math.round(performance.now() - t0); renderFit(); renderMeas(); renderRegions(); if (V.selected) showInfo(V.selected); $('#busy').hidden = true;
  if (c.auto) { const s = $('#f-muscle'); if (s) { s.value = Math.round(res.gG * 100); $('#v-muscle').textContent = lvl(res.gG); } }
}
const lvl = (g) => (g >= 0 ? '+' : '') + Math.round(g * 100) + '%　' + (g < -0.5 ? '明顯偏少' : g < -0.2 ? '偏少' : g < 0.2 ? '一般（模型基準）' : g < 0.6 ? '結實' : g < 1.0 ? '發達' : '非常發達');
function setCase(o) { Object.assign(state.c, o); syncInputs(); update(); }

// ---------- 介面 ----------
function buildUI() {
  const c = state.c;
  // 個案
  const num = (k, label, unit) => { const [a, b, st] = LIM[k]; const n = h('input', { type: 'number', id: 'n-' + k, min: a, max: b, step: st, value: c[k], inputmode: 'decimal' }); const r = h('input', { type: 'range', id: 'r-' + k, min: a, max: b, step: st, value: c[k] });
    const set = (v, src) => { v = Math.min(b, Math.max(a, +v || a)); c[k] = v; if (src !== n) n.value = v; if (src !== r) r.value = v; schedule(); };
    n.addEventListener('change', () => set(n.value, null)); r.addEventListener('input', () => set(r.value, r));
    return h('div', { class: 'row' }, h('label', { for: 'n-' + k }, label), r, h('span', { class: 'numw' }, n, h('i', {}, unit))); };
  const prop = (k, label, a, b, st, unit, mul) => { const get = () => mul ? Math.round(c[k] * mul) : c[k]; const o = h('span', { class: 'gv', id: 'pv-' + k }, get() + unit);
    return h('div', { class: 'row' }, h('label', {}, label), h('input', { type: 'range', id: 'p-' + k, min: a, max: b, step: st, value: get(), oninput: (e) => { c[k] = mul ? e.target.value / mul : +e.target.value; o.textContent = (+e.target.value).toFixed(st < 1 ? 1 : 0) + unit; schedule(40); } }), o); };
  $('#t-case').append(
    h('div', { class: 'row' }, h('label', {}, '個案代號'), h('input', { type: 'text', id: 'f-id', placeholder: '例：S-001', value: c.id, oninput: (e) => { c.id = e.target.value; } }),
      h('button', { class: 'btn', onclick: saveCase }, '儲存')),
    h('div', { class: 'row' }, h('label', {}, '已存個案'), h('select', { id: 'f-cases', onchange: loadCase }), h('button', { class: 'btn ghost', onclick: delCase }, '刪除')),
    h('div', { class: 'row' }, h('label', {}, '性別'), h('div', { class: 'seg', id: 'f-sex' }, h('button', { 'data-v': 'M', class: 'on' }, '男'), h('button', { 'data-v': 'F' }, '女'))),
    h('p', { class: 'note warn', id: 'femnote', hidden: true }, '女性體型為男性解剖資料的近似變形：肩與胸廓較窄、骨盆較寬；下胸圍決定胸廓大小，上胸圍決定乳房體積。骨盆與顱骨的性別差異尚未個別建模。'),
    num('H', '身高', 'cm'), num('W', '體重', 'kg'), num('chest', '胸圍', 'cm'), num('waist', '腰圍', 'cm'), num('hip', '臀圍', 'cm'),
    h('div', { class: 'row', id: 'row-under', hidden: true }, h('label', { for: 'n-under' }, '下胸圍'), h('span', { class: 'dim', style: 'flex:1' }, '選填。未填時由腰圍推估'), h('span', { class: 'numw' }, h('input', { type: 'number', id: 'n-under', min: 55, max: 140, step: 0.5, placeholder: '—', inputmode: 'decimal', onchange: (e) => { const v = +e.target.value; c.under = v >= 55 && v <= 140 ? v : 0; if (!c.under) e.target.value = ''; schedule(20); } }), h('i', {}, 'cm'))),
    h('div', { class: 'row' }, h('label', { for: 'n-bf' }, '體脂率'), h('span', { class: 'dim', style: 'flex:1' }, '選填。有 BIA 或 DXA 實測值時輸入'), h('span', { class: 'numw' }, h('input', { type: 'number', id: 'n-bf', min: 3, max: 60, step: 0.1, placeholder: '—', inputmode: 'decimal', onchange: (e) => { const v = +e.target.value; c.bf = v >= 3 && v <= 60 ? v : 0; if (!c.bf) e.target.value = ''; schedule(20); } }), h('i', {}, '%'))),
    h('h3', {}, '體型比例'),
    prop('leg', '腿長', 45, 57, 0.1, '%'), prop('arm', '臂長', 90, 110, 1, '%', 100), prop('shoulder', '肩寬', 88, 112, 1, '%', 100),
    h('p', { class: 'note' }, '腿長為大轉子高佔身高的比例，身高不變，腿與上身此消彼長。臂長、肩寬為相對基準的百分比。'),
    h('h3', {}, '肌肉發達程度'),
    h('label', { class: 'chk' }, h('input', { type: 'checkbox', id: 'f-auto', checked: c.auto ? '' : false, onchange: (e) => { c.auto = e.target.checked; $('#f-muscle').disabled = c.auto; if (!c.auto && state.res) c.muscle = Math.round(state.res.gG * 100) / 100; schedule(20); } }), '由體重與體脂率自動推估'),
    h('div', { class: 'row' }, h('label', {}, '整體'), h('input', { type: 'range', id: 'f-muscle', min: -80, max: 150, step: 1, value: 0, disabled: c.auto ? '' : false, oninput: (e) => { c.muscle = e.target.value / 100; $('#v-muscle').textContent = lvl(c.muscle); schedule(30); } })),
    h('div', { class: 'val', id: 'v-muscle' }, lvl(0)),
    h('p', { class: 'note' }, '自動模式：體脂率取實測值，未填時以腰圍身高比（RFM）推估，再由體重反推肌肉量。關閉後可自行拖動。各部位在「肌肉」頁分別調整；肌腹增粗，肌腱與起止點不動。'),
    h('h3', {}, '吻合結果'), h('div', { id: 'fit' }),
    h('div', { class: 'row' }, h('button', { class: 'btn ghost', onclick: () => { Object.assign(c, state.base, { id: c.id, off: c.off }); syncInputs(); schedule(10); } }, '回到基準體型')));
  $('#f-sex').addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; const was = c.sex; c.sex = b.dataset.v; if (was !== c.sex) { const d = c.sex === 'F' ? { H: 160, W: 55, chest: 86, waist: 70, hip: 93 } : { ...state.base }; Object.assign(c, { H: d.H, W: d.W, chest: d.chest, waist: d.waist, hip: d.hip, bf: 0, under: 0 }); } syncInputs(); schedule(10); });
  // 肌肉
  const reg = $('#t-muscle'); reg.append(h('p', { class: 'note' }, '以整體程度為基準，各部位再加減。右欄為該部位目前的肌肉體積（左右合計）。'));
  for (let r = 1; r <= 10; r++) reg.append(h('div', { class: 'row' }, h('label', {}, REGIONS[r]), h('input', { type: 'range', id: 'g-' + r, min: -50, max: 100, step: 1, value: 0, oninput: (e) => { c.off[r] = e.target.value / 100; $('#gv-' + r).textContent = (c.off[r] >= 0 ? '+' : '') + Math.round(c.off[r] * 100) + '%'; schedule(30); } }), h('span', { class: 'gv', id: 'gv-' + r }, '+0%'), h('span', { class: 'gl', id: 'gl-' + r }, '')));
  reg.append(h('div', { class: 'row' }, h('button', { class: 'btn ghost', onclick: () => { c.off.fill(0); syncInputs(); schedule(10); } }, '各部位歸零')));
  // 圖層
  const lay = $('#t-layer');
  lay.append(h('div', { class: 'row' }, h('label', {}, '皮膚'), h('input', { type: 'range', id: 'l-skin', min: 0, max: 100, step: 1, value: 0, oninput: (e) => { V.setSkin(e.target.value / 100); $('#lv-skin').textContent = e.target.value + '%'; markPreset(null); } }), h('span', { class: 'gv', id: 'lv-skin' }, '0%')));
  for (const [k, label, col] of LAYERS) lay.append(h('label', { class: 'chk' }, h('input', { type: 'checkbox', id: 'l-' + k, checked: V.layers[k] ? '' : false, onchange: (e) => { V.setLayer(k, e.target.checked); markPreset(null); } }), h('i', { class: 'sw', style: 'background:' + hex(col) }), label));
  lay.append(h('label', { class: 'chk' }, h('input', { type: 'checkbox', id: 'l-outline', checked: '', onchange: (e) => V.setOutline(e.target.checked) }), '肌肉與骨骼的分界線'),
    h('div', { class: 'row' }, h('label', {}, '顯示範圍'), h('div', { class: 'seg', id: 'l-side' }, h('button', { 'data-v': 'all', class: 'on' }, '全身'), h('button', { 'data-v': 'R' }, '右半'), h('button', { 'data-v': 'L' }, '左半'))),
    h('div', { class: 'row' }, h('button', { class: 'btn ghost', onclick: () => { V.hidden.clear(); V.isolate = null; V.rebuild(); } }, '恢復所有被隱藏的結構')),
    h('p', { class: 'note' }, '顏色：肌腹紅、肌腱與腱膜冷白、骨骼米色、關節軟骨藍、韌帶青綠、關節囊紫。肌腹與肌腱的分界、起止點位置皆取自來源模型，非推算。'),
    h('p', { class: 'note' }, '模型資料：“Z-Anatomy - The libre 3D atlas of anatomy - CC-BY-SA 4.0”；“BodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan”。本工具對原始網格做了減面與參數化變形，衍生的模型資料依相同授權釋出。供研究與教學參考，非醫療器材。'));
  $('#l-side').addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; for (const x of $('#l-side').children) x.classList.toggle('on', x === b); V.sideMode = b.dataset.v; V.rebuild(); });
  // 量測
  $('#t-meas').append(
    h('div', { class: 'row tools' }, h('button', { class: 'btn', id: 'tl-dist', onclick: () => setTool('dist') }, '量距離'), h('button', { class: 'btn', id: 'tl-girth', onclick: () => setTool('girth') }, '量圍度'), h('button', { class: 'btn ghost', onclick: () => { setTool(null); V.clearMarks(); $('#toolout').textContent = ''; } }, '清除')),
    h('div', { class: 'val', id: 'toolout' }), h('div', { id: 'mtable' }),
    h('p', { class: 'note' }, '等級 A：直接輸入或已吻合輸入值。B：在模型幾何上量得。C：由模型體積與密度假設推估。'),
    h('div', { class: 'row' }, h('button', { class: 'btn', onclick: exportCsv }, '匯出量測 CSV'), h('button', { class: 'btn', onclick: exportJson }, '匯出個案 JSON'), h('button', { class: 'btn', onclick: exportPng }, '匯出畫面 PNG')));
  // 結構
  $('#t-list').append(h('div', { class: 'row' }, h('input', { type: 'search', id: 's-q', placeholder: '搜尋中文或英文名稱，例：股直肌、ACL、patella', oninput: renderList }),
    h('select', { id: 's-t', onchange: renderList }, h('option', { value: '' }, '全部類別'), ...[0, 1, 2, 3, 5, 6, 7, 8].map(t => h('option', { value: t }, TISSUE_ZH[t])))), h('div', { id: 'slist' }));
  renderList(); refreshCases();
  // 分頁、視角、預設
  $('#tabs').addEventListener('click', (e) => { const b = e.target.closest('button[data-t]'); if (!b) return; for (const x of $('#tabs').querySelectorAll('button[data-t]')) x.classList.toggle('on', x === b); for (const t of document.querySelectorAll('.tab')) t.hidden = t.id !== 't-' + b.dataset.t; $('#panel').classList.remove('min'); });
  $('#collapse').addEventListener('click', () => $('#panel').classList.toggle('min'));
  $('#views').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) V.view(b.dataset.v); });
  $('#preset').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) preset(b.dataset.v); });
  const cv = $('#cv'); let down = null;
  cv.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId }; });
  cv.addEventListener('pointerup', (e) => { if (!down || down.id !== e.pointerId) return; const d = Math.hypot(e.clientX - down.x, e.clientY - down.y), dt = performance.now() - down.t; down = null; if (d < 7 && dt < 500) tap(e.clientX, e.clientY); });
  $('#i-hide').addEventListener('click', () => { const p = V.selected; if (!p) return; for (const q of mates(p)) V.hidden.add(q.i); select(null); V.rebuild(); });
  $('#i-solo').addEventListener('click', () => { const p = V.selected; if (!p) return; if (V.isolate) { V.isolate = null; $('#i-solo').textContent = '只看這個'; } else { V.isolate = new Set(mates(p).map(q => q.i)); $('#i-solo').textContent = '顯示其他'; } V.rebuild(); });
  $('#i-focus').addEventListener('click', () => V.selected && V.focus(V.selected));
  $('#i-close').addEventListener('click', () => select(null));
}
const mates = (p) => M.parts.filter(q => q.en === p.en && q.t === p.t);
function syncInputs() {
  const c = state.c; for (const k in LIM) { $('#n-' + k).value = c[k]; $('#r-' + k).value = c[k]; }
  for (const b of $('#f-sex').children) b.classList.toggle('on', b.dataset.v === c.sex); $('#femnote').hidden = c.sex !== 'F'; $('#row-under').hidden = c.sex !== 'F'; $('#n-under').value = c.under > 0 ? c.under : ''; document.querySelector('label[for=n-chest]').textContent = c.sex === 'F' ? '上胸圍' : '胸圍';
  $('#p-leg').value = c.leg; $('#pv-leg').textContent = (+c.leg).toFixed(1) + '%'; $('#p-arm').value = Math.round(c.arm * 100); $('#pv-arm').textContent = Math.round(c.arm * 100) + '%'; $('#p-shoulder').value = Math.round(c.shoulder * 100); $('#pv-shoulder').textContent = Math.round(c.shoulder * 100) + '%';
  $('#f-auto').checked = c.auto; $('#f-muscle').disabled = c.auto; $('#f-muscle').value = Math.round(c.muscle * 100); $('#v-muscle').textContent = lvl(c.muscle); $('#f-id').value = c.id || ''; $('#n-bf').value = c.bf > 0 ? c.bf : '';
  for (let r = 1; r <= 10; r++) { $('#g-' + r).value = Math.round(c.off[r] * 100); $('#gv-' + r).textContent = (c.off[r] >= 0 ? '+' : '') + Math.round(c.off[r] * 100) + '%'; }
}
function preset(v) {
  const set = { surface: [1, 1, 1, 1], xray: [0.38, 1, 1, 1], muscle: [0, 1, 1, 1], bone: [0, 0, 0, 1] }[v]; if (!set) return;
  V.layers.muscle = !!set[1]; V.layers.tendon = !!set[2]; V.layers.fascia = false; V.layers.bone = true; V.layers.cart = true; V.layers.lig = true; V.rebuild(); V.setSkin(set[0]);
  $('#l-skin').value = Math.round(set[0] * 100); $('#lv-skin').textContent = Math.round(set[0] * 100) + '%'; for (const [k] of LAYERS) $('#l-' + k).checked = !!V.layers[k]; markPreset(v);
}
function markPreset(v) { for (const b of $('#preset').children) b.classList.toggle('on', b.dataset.v === v); }
function renderFit() {
  const c = state.c, r = state.res, m = state.meas, bmi = c.W / (c.H / 100) ** 2;
  const row = (label, model, input, unit, src) => { const d = model - input, ok = Math.abs(d) <= (unit === 'kg' ? 0.3 : 0.4); return h('div', { class: 'fitrow' + (ok ? '' : ' off') }, h('span', {}, label), h('b', {}, f1(model) + ' ' + unit), h('span', { class: 'dim' }, (src || '輸入') + ' ' + f1(input)), h('span', { class: 'tag' }, ok ? '吻合' : (d > 0 ? '+' : '') + f1(d))); };
  const pc = (k) => { const v = Math.round((r.kf[k] / r.k0[k] - 1) * 100); return (v >= 0 ? '+' : '') + v + '%'; }; const notes = [];
  if (Math.abs(r.mass.M - c.W) > 0.3) notes.push(`模型體重 ${f1(r.mass.M)} kg，與輸入差 ${f1(r.mass.M - c.W)} kg：這組身高、三圍、體重與肌肉量的組合超出可調範圍，三圍優先吻合。`);
  if (r.note.g) notes.push(r.note.g < 0 ? '肌肉量推估已達下限。' : '肌肉量推估已達上限。'); if (r.note.f) notes.push(r.note.f < 0 ? '皮下脂肪層已達下限。' : '皮下脂肪層已達上限。');
  if (c.auto && r.bfPrior != null && Math.abs(r.mass.bf - r.bfPrior) > 1.5) notes.push(`目標體脂率 ${f1(r.bfPrior)}%（${r.bfSrc}）無法完全達成，模型為 ${f1(r.mass.bf)}%。`);
  $('#fit').replaceChildren(row(c.sex === 'F' ? '上胸圍' : '胸圍', m.chest, c.chest, 'cm'), ...(c.sex === 'F' ? [row('下胸圍', m.under, r.under, 'cm', c.under > 0 ? '輸入' : '推估')] : []), row('腰圍', m.waist, c.waist, 'cm'), row('臀圍', m.hip, c.hip, 'cm'), row('體重', r.mass.M, c.W, 'kg'),
    h('div', { class: 'fitrow' }, h('span', {}, 'BMI'), h('b', {}, f1(bmi)), h('span', { class: 'dim' }, '體脂率' + (c.auto ? `（${r.bfSrc}）` : '（由體重反推）')), h('b', {}, f1(r.mass.bf) + ' %')),
    h('p', { class: 'note' }, `皮下脂肪層為基準的 ${r.f.toFixed(2)} 倍；軀幹寬深相對基準：胸廓 ${pc('C')}、腹部 ${pc('W')}、骨盆 ${pc('H')}。` + (c.sex === 'F' ? `上下胸圍差 ${f1(m.chest - m.under)} cm` + (c.under > 0 ? '。' : '（下胸圍為推估值）。') : '') + `腿段 ×${r.legScale.toFixed(3)}、上身 ×${r.upScale.toFixed(3)}。`),
    ...notes.map(t => h('p', { class: 'note warn' }, t)));
  $('#status').textContent = `${c.sex === 'F' ? '女' : '男'}　${f1(c.H)} cm　${f1(c.W)} kg　胸 ${f1(m.chest)}　腰 ${f1(m.waist)}　臀 ${f1(m.hip)}`;
}
function measRows() {
  const c = state.c, m = state.meas, r = state.res;
  return [['身高', c.H, 'cm', 'A', '輸入值'], ['體重', r.mass.M, 'kg', Math.abs(r.mass.M - c.W) <= 0.3 ? 'A' : 'C', '模型體積 × 組織密度'], [c.sex === 'F' ? '上胸圍' : '胸圍', m.chest, 'cm', 'A', '乳頭高度，不含上肢'], ...(c.sex === 'F' ? [['下胸圍', m.under, 'cm', c.under > 0 ? 'A' : 'C', c.under > 0 ? '乳房下緣' : '由腰圍推估後建模']] : []), ['腰圍', m.waist, 'cm', 'A', '肋下緣與髂嵴之間最細處'], ['臀圍', m.hip, 'cm', 'A', '臀部最後凸處'],
    ['體脂率', r.mass.bf, '%', c.auto && c.bf > 0 ? 'A' : 'C', c.auto ? (c.bf > 0 ? '實測輸入' : '腰圍身高比 RFM 推估') : '由體重與肌肉量反推'], ['身體體積', r.mass.V, 'L', 'B', '皮膚網格體積'], ['肌肉總體積', m.muscleVol, 'L', 'B', '所有肌肉網格（含肌腱）'], ['骨骼肌量', m.muscleVol * 1.06, 'kg', 'C', '體積 × 1.06 kg/L'],
    ['上臂圍', m.upperArm, 'cm', 'B', '肩峰與肘中點'], ['前臂圍', m.forearm, 'cm', 'B', '最粗處'], ['大腿圍', m.thigh, 'cm', 'B', '會陰與膝中點'], ['小腿圍', m.calf, 'cm', 'B', '最粗處'],
    ['肩寬', m.biacromial, 'cm', 'B', '左右肩胛骨最外緣'], ['骨盆寬', m.biiliac, 'cm', 'B', '左右髖骨最外緣'], ['大轉子高', m.troch, 'cm', 'B', '腿長'], ['腿長佔身高', m.legRatio, '%', 'A', '大轉子高 ÷ 身高'], ['會陰高', m.crotch, 'cm', 'B', ''], ['上身長', m.sitting, 'cm', 'B', '頭頂至坐骨，近似坐高'],
    ['股骨長', m.femur, 'cm', 'B', '隨身高與腿長比例'], ['脛骨長', m.tibia, 'cm', 'B', '隨身高與腿長比例'], ['肱骨長', m.humerus, 'cm', 'B', '隨身高與臂長'], ['橈骨長', m.radius, 'cm', 'B', '隨身高與臂長']];
}
function renderMeas() {
  const t = h('table', {}, h('thead', {}, h('tr', {}, h('th', {}, '項目'), h('th', {}, '數值'), h('th', {}, '等級'), h('th', {}, '量法'))));
  const tb = h('tbody'); for (const [a, v, u, g, n] of measRows()) tb.append(h('tr', {}, h('td', {}, a), h('td', { class: 'n' }, f1(v) + ' ' + u), h('td', {}, h('span', { class: 'gr gr' + g }, g)), h('td', { class: 'dim' }, n)));
  t.append(tb); $('#mtable').replaceChildren(t);
}
function renderRegions() { const m = state.meas; for (let r = 1; r <= 10; r++) { const e = $('#gl-' + r); if (e) e.textContent = m.regVol[r].toFixed(2) + ' L'; } }
function renderList() {
  const q = ($('#s-q').value || '').trim().toLowerCase(), ft = $('#s-t').value; const seen = new Map();
  for (const p of M.parts) { if (p.t === 10 || p.t === 4 || p.t === 9 || p.t === 11) continue; if (ft !== '' && +ft !== p.t) continue; if (q && !(p.zh.toLowerCase().includes(q) || p.en.toLowerCase().includes(q))) continue; const k = p.t + '|' + p.en; if (!seen.has(k)) seen.set(k, []); seen.get(k).push(p); }
  const rank = { 0: 0, 2: 1, 5: 2, 3: 3, 1: 4, 6: 5, 7: 6, 8: 7 }; const items = [...seen.values()]; if (q) items.sort((a, b) => (rank[a[0].t] - rank[b[0].t]) || (a[0].zh.length - b[0].zh.length));
  const box = $('#slist'); box.replaceChildren(h('p', { class: 'note' }, `共 ${items.length} 項` + (items.length > 120 ? '，顯示前 120 項，請輸入關鍵字縮小範圍。' : '')));
  for (const ps of items.slice(0, 120)) { const p = ps[0]; box.append(h('button', { class: 'li', onclick: () => { const t = ps.find(x => x.side === 0) || ps[0]; if (!V.layers[t.layer]) { V.setLayer(t.layer, true); const cb = $('#l-' + t.layer); if (cb) cb.checked = true; } V.hidden.delete(t.i); V.rebuild(); select(t); V.focus(t); } }, h('b', {}, p.zh || p.en), h('span', { class: 'dim' }, p.en), h('span', { class: 'tag' }, TISSUE_ZH[p.t] + (ps.length > 1 ? '・左右' : '')))); }
}
function select(p) { V.select(p); if (p) showInfo(p); else { $('#info').hidden = true; if (V.isolate) { V.isolate = null; V.rebuild(); } $('#i-solo').textContent = '只看這個'; } }
function showInfo(p) {
  const side = ['左', '右', '正中'][p.side]; const kv = [];
  kv.push(['類別', TISSUE_ZH[p.t] + (p.t === 10 ? (p.kind === 1 ? '（起點）' : '（止點）') : '')], ['側別', side]);
  if (p.grp) kv.push(['所屬', p.grp]); if (p.rg) kv.push(['調整部位', REGIONS[p.rg]]);
  if ([0, 1, 2, 3].includes(p.t)) { const v = M.partVolume(p), v0 = p.vol0 * M.s ** 3; kv.push(['體積', f1(v) + ' cm³' + (p.t === 0 && Math.abs(v - v0) > 0.05 * v0 ? `（基準 ${f1(v0)}）` : '')]); kv.push(['長度', f1(p.len0 * M.s) + ' cm']); }
  $('#i-zh').textContent = p.zh || p.en; $('#i-en').textContent = p.en; $('#i-sum').textContent = [kv[0][1], side, p.rg ? REGIONS[p.rg] : ''].filter(Boolean).join('・'); $('#i-more').open = innerWidth >= 900; $('#i-kv').replaceChildren(...kv.map(([a, b]) => h('div', {}, h('span', {}, a), h('b', {}, b)))); $('#info').hidden = false;
}
function setTool(t) { state.tool = state.tool === t ? null : t; state.pts = []; $('#tl-dist').classList.toggle('on', state.tool === 'dist'); $('#tl-girth').classList.toggle('on', state.tool === 'girth');
  if (state.tool === 'girth' && V.layers.skin < 0.05) { V.setSkin(0.38); $('#l-skin').value = 38; $('#lv-skin').textContent = '38%'; markPreset('xray'); }
  $('#toolout').textContent = state.tool === 'dist' ? '在模型上點兩個位置。' : state.tool === 'girth' ? '點皮膚上要量的高度（軀幹、上肢或下肢）。' : ''; $('#hint').textContent = state.tool ? $('#toolout').textContent : ''; $('#hint').hidden = !state.tool; }
function tap(x, y) {
  if (state.tool === 'dist') { const hit = V.pick(x, y, true); if (!hit) return; if (state.pts.length >= 2) { state.pts = []; V.clearMarks(); } state.pts.push(hit.point); V.addDot(hit.point, 0xffd23f);
    if (state.pts.length === 2) { V.addLine(state.pts, 0xffd23f); const d = state.pts[0].distanceTo(state.pts[1]); $('#toolout').textContent = `直線距離 ${f1(d)} cm`; $('#hint').textContent = $('#toolout').textContent; } return; }
  if (state.tool === 'girth') { const hit = V.pick(x, y, 'only'); if (!hit) return; const st = M.stri, cl = M.scls, sb = M.sbase, v = st[hit.tri * 3], L = M.lm; let tris, name;
    const pick = (fn) => { const a = []; for (let t = 0; t < M.NTs; t++) if (fn(st[t * 3]) && fn(st[t * 3 + 1]) && fn(st[t * 3 + 2])) a.push(t); return Uint32Array.from(a); };
    const sg = sb[v * 3] >= 0 ? 1 : -1;
    if (cl[v] >= 16) { tris = pick(i => cl[i] >= 16 && sb[i * 3] * sg > 0); name = (sg > 0 ? '左' : '右') + '上肢'; }
    else if (sb[v * 3 + 1] < L.yCrotch - 0.5) { tris = pick(i => cl[i] < 16 && sb[i * 3] * sg > 0.3 && sb[i * 3 + 1] < L.yCrotch + 1); name = (sg > 0 ? '左' : '右') + '下肢'; }
    else { tris = M.bodyTris; name = '軀幹'; }
    const g = M.girthAt(M.spos, tris, hit.point.y, true); V.clearMarks(); if (g.pts.length) V.addLine(g.pts, 0xffd23f, true);
    $('#toolout').textContent = `${name}圍度 ${f1(g.len)} cm（離地 ${f1(hit.point.y)} cm，皮尺量法）`; $('#hint').textContent = $('#toolout').textContent; return; }
  const hit = V.pick(x, y, false); select(hit ? hit.part : null);
}
// ---------- 個案儲存與匯出 ----------
const KEY = 'msk2.cases';
const readCases = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } };
function refreshCases() { const cs = readCases(), s = $('#f-cases'); s.replaceChildren(h('option', { value: '' }, Object.keys(cs).length ? '選擇個案…' : '尚無'), ...Object.keys(cs).sort().map(k => h('option', { value: k }, k))); }
function saveCase() { const c = state.c; if (!c.id) { $('#f-id').focus(); return; } const cs = readCases(); cs[c.id] = { ...c, off: [...c.off] }; try { localStorage.setItem(KEY, JSON.stringify(cs)); } catch (e) { } refreshCases(); $('#f-cases').value = c.id; }
function loadCase() { const k = $('#f-cases').value, cs = readCases(); if (!k || !cs[k]) return; Object.assign(state.c, cs[k], { off: [...cs[k].off] }); syncInputs(); schedule(10); }
function delCase() { const k = $('#f-cases').value, cs = readCases(); if (!k) return; delete cs[k]; try { localStorage.setItem(KEY, JSON.stringify(cs)); } catch (e) { } refreshCases(); }
async function saveFile(filename, blob) {
  let dl = null; try { if (window.claude && window.claude.use) dl = await window.claude.use('downloads'); } catch (e) { dl = null; }
  if (dl) { try { await dl.save({ filename, data: blob }); } catch (e) { } return; }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
const fname = (ext) => ((state.c.id || 'case').replace(/[^\w\-]+/g, '_') || 'case') + '.' + ext;
function exportCsv() { const rows = [['項目', '數值', '單位', '等級', '量法'], ...measRows().map(([a, v, u, g, n]) => [a, f1(v), u, g, n])]; saveFile(fname('csv'), new Blob(['﻿' + rows.map(r => r.map(x => '"' + String(x).replace(/"/g, '""') + '"').join(',')).join('\r\n')], { type: 'text/csv' })); }
function exportJson() { const r = state.res; saveFile(fname('json'), new Blob([JSON.stringify({ tool: '個案化肌骨模型 v0.3', source: 'Z-Anatomy (CC BY-SA 4.0) / BodyParts3D', case: state.c, solution: { muscle: r.gG, subcutaneousFatFactor: r.f, trunkScale: r.kf, legScale: r.legScale, upperBodyScale: r.upScale, breastProjectionCm: r.A, underbustCm: r.under, bodyFatPrior: r.bfPrior, bodyFatSource: r.bfSrc, mass: r.mass }, measurements: Object.fromEntries(measRows().map(([a, v, u, g]) => [a, { value: +f1(v), unit: u, grade: g }])), regionMuscleVolumeL: Object.fromEntries(REGIONS.map((n, i) => [n, +state.meas.regVol[i].toFixed(3)]).slice(1)) }, null, 2)], { type: 'application/json' })); }
async function exportPng() { saveFile(fname('png'), await V.png()); }
init();
