import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 組織配色：肌腹紅、肌腱與腱膜冷白、骨骼暖米、軟骨藍、韌帶青綠、關節囊紫、筋膜灰藍、滑液囊黃
export const COL = { muscle: 0xb23a32, tendonIn: 0xe3ebf0, tendon: 0xd9e3ea, bone: 0xdcc594, cartOn: 0x5fa8d3, cart: 0x5fa8d3, teeth: 0xf4f2ea, lig: 0x6fbfa8, capsule: 0xa58fd0, fascia: 0xb9c7d3, bursa: 0xf0b93a, origin: 0xe0483e, insertion: 0x2f7fe0, skin: 0xd9a98c, select: 0xffd23f, sclera: 0xf1eee6, iris: 0x4a3324, hair: 0x2a211c };
const OPAQUE = ['muscle', 'tendon', 'bone', 'cart', 'lig', 'eye', 'hair'];

export class Viewer {
  constructor(canvas, model) {
    this.m = model; this.canvas = canvas;
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(26, 1, 5, 3000); this.scene.add(this.camera);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x54504c, 1.15));
    const key = new THREE.DirectionalLight(0xffffff, 1.9); key.position.set(-0.55, 0.75, 1); this.camera.add(key);
    const fill = new THREE.DirectionalLight(0xdfe8ff, 0.55); fill.position.set(0.9, -0.2, 0.6); this.camera.add(fill);
    this.controls = new OrbitControls(this.camera, canvas); this.controls.enableDamping = true; this.controls.dampingFactor = 0.12; this.controls.rotateSpeed = 0.8; this.controls.zoomSpeed = 0.9;
    this.controls.addEventListener('change', () => this.req());
    this.layers = { skin: 0, muscle: true, tendon: true, fascia: false, lig: true, bone: true, cart: true, bursa: false, ins: false, eye: true, hair: false }; this.sideMode = 'all'; this.outline = true;
    this.hidden = new Set(); this.isolate = null; this.selected = null; this.uOutline = { value: 0.07 };
    this.build(); this.need = true; this.tick = this.tick.bind(this); requestAnimationFrame(this.tick);
    new ResizeObserver(() => this.resize()).observe(canvas.parentElement); this.resize();
  }
  req() { this.need = true; }
  tick() { requestAnimationFrame(this.tick); if (this.controls.update() || this.need) { this.need = false; this.renderer.render(this.scene, this.camera); } }
  resize() { const el = this.canvas.parentElement, w = el.clientWidth, h = el.clientHeight; if (!w || !h) return; this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); this.req(); }
  setBackground(hex) { this.scene.background = new THREE.Color(hex); this.req(); }
  build() {
    const m = this.m, NV = m.NV, c = new THREE.Color(), t = new THREE.Color();
    const col = this.col = new Uint8Array(NV * 3); const lin = (hex) => { c.setHex(hex); return [c.r, c.g, c.b]; };
    const P = { muscle: lin(COL.muscle), tin: lin(COL.tendonIn), tendon: lin(COL.tendon), bone: lin(COL.bone), cart: lin(COL.cart), teeth: lin(COL.teeth), lig: lin(COL.lig), capsule: lin(COL.capsule), fascia: lin(COL.fascia), bursa: lin(COL.bursa), origin: lin(COL.origin), insertion: lin(COL.insertion), sclera: lin(COL.sclera), iris: lin(COL.iris), hair: lin(COL.hair) };
    for (const p of m.parts) {
      const h = ((p.i * 2654435761) >>> 0) / 4294967296; const tint = p.t === 0 ? 0.86 + 0.26 * h : p.t === 2 ? 0.95 + 0.08 * h : (p.t === 9 || p.t === 11) ? 1 : 0.94 + 0.1 * h;
      const base = p.t === 0 ? P.muscle : p.t === 1 ? P.tendon : p.t === 2 ? P.bone : p.t === 3 ? P.cart : p.t === 4 ? P.teeth : p.t === 5 ? P.lig : p.t === 6 ? P.capsule : p.t === 7 ? P.fascia : p.t === 8 ? P.bursa : p.t === 9 ? (p.en === 'Iris' ? P.iris : P.sclera) : p.t === 11 ? P.hair : (p.kind === 1 ? P.origin : P.insertion);
      const mixTo = p.t === 0 ? P.tin : p.t === 2 ? P.cart : null;
      for (let i = p.v0; i < p.v0 + p.nv; i++) {
        const w = mixTo ? m.MIX[i] / 255 : 0;
        for (let k = 0; k < 3; k++) { const v = base[k] * tint * (1 - w) + (mixTo ? mixTo[k] * w : 0); col[i * 3 + k] = Math.min(255, Math.round(v * 255)); }
      }
    }
    this.col0 = col.slice();
    this.aPos = new THREE.BufferAttribute(m.pos, 3); this.aNrm = new THREE.BufferAttribute(m.nrm, 3); this.aCol = new THREE.BufferAttribute(col, 3, true);
    const geo = () => { const g = new THREE.BufferGeometry(); g.setAttribute('position', this.aPos); g.setAttribute('normal', this.aNrm); g.setAttribute('color', this.aCol); g.setIndex(new THREE.BufferAttribute(new Uint32Array(3), 1)); return g; };
    const shade = (mat, key) => { mat.customProgramCacheKey = () => key; mat.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <dithering_fragment>', 'float fr = pow(clamp(abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 0.55);\n gl_FragColor.rgb *= mix(0.5, 1.0, fr);\n#include <dithering_fragment>'); }; return mat; };
    this.G = {};
    const std = (o) => shade(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.58, metalness: 0.0, side: THREE.DoubleSide, ...o }), 'std' + JSON.stringify(o));
    this.G.opaque = new THREE.Mesh(geo(), std({}));
    const ol = new THREE.MeshBasicMaterial({ color: 0x1a0d0b, side: THREE.BackSide }); ol.customProgramCacheKey = () => 'outline';
    ol.onBeforeCompile = (sh) => { sh.uniforms.uOutline = this.uOutline; sh.vertexShader = 'uniform float uOutline;\n' + sh.vertexShader.replace('#include <begin_vertex>', 'vec3 transformed = vec3(position) + normal * uOutline;'); };
    this.G.outline = new THREE.Mesh(this.G.opaque.geometry, ol);
    this.G.ins = new THREE.Mesh(geo(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -8 }));
    this.G.fascia = new THREE.Mesh(geo(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, side: THREE.DoubleSide, transparent: true, opacity: 0.5, depthWrite: false })); this.G.fascia.renderOrder = 3;
    this.G.bursa = new THREE.Mesh(geo(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.4, side: THREE.DoubleSide, transparent: true, opacity: 0.7, depthWrite: false })); this.G.bursa.renderOrder = 4;
    for (const k in this.G) { this.G[k].frustumCulled = false; this.scene.add(this.G[k]); }
    const sg = new THREE.BufferGeometry(); this.sPos = new THREE.BufferAttribute(m.spos, 3); this.sNrm = new THREE.BufferAttribute(m.snrm, 3);
    sg.setAttribute('position', this.sPos); sg.setAttribute('normal', this.sNrm); sg.setIndex(new THREE.BufferAttribute(m.stri, 1));
    this.skinMat = shade(new THREE.MeshStandardMaterial({ color: COL.skin, roughness: 0.75, side: THREE.FrontSide }), 'skin');
    this.skin = new THREE.Mesh(sg, this.skinMat); this.skin.frustumCulled = false; this.skin.renderOrder = 6;
    this.skinPre = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ colorWrite: false, transparent: true })); this.skinPre.frustumCulled = false; this.skinPre.renderOrder = 5;
    this.scene.add(this.skinPre, this.skin);
    this.marks = new THREE.Group(); this.scene.add(this.marks);
    this.rebuild(); this.setSkin(0);
  }
  visible(p) {
    if (!this.layers[p.layer]) return false; if (this.hidden.has(p.i)) return false; if (this.m.sex === 'F' && p.male) return false;
    if (this.isolate && !this.isolate.has(p.i)) return false;
    if (this.sideMode === 'L' && p.side === 1) return false; if (this.sideMode === 'R' && p.side === 0) return false;
    return true;
  }
  rebuild() {
    const m = this.m, sets = { opaque: [], ins: [], fascia: [], bursa: [] }; this.vis = new Uint8Array(m.parts.length);
    for (const p of m.parts) { if (!this.visible(p)) continue; this.vis[p.i] = 1; sets[OPAQUE.includes(p.layer) ? 'opaque' : p.layer].push(p); }
    for (const k in sets) {
      let n = 0; for (const p of sets[k]) n += p.nt * 3; const a = new Uint32Array(Math.max(3, n)); let o = 0;
      for (const p of sets[k]) { a.set(m.idx.subarray(p.t0 * 3, (p.t0 + p.nt) * 3), o); o += p.nt * 3; }
      const g = this.G[k].geometry; g.setIndex(new THREE.BufferAttribute(a, 1)); g.setDrawRange(0, n); this.G[k].visible = n > 0;
    }
    this.G.outline.visible = this.outline && this.G.opaque.visible; this.req();
  }
  setLayer(k, v) { this.layers[k] = v; if (k === 'skin') this.setSkin(v); else this.rebuild(); }
  setSkin(op) {
    this.layers.skin = op; const on = op > 0.01, full = op > 0.985; const hair = op > 0.5; if (hair !== this.layers.hair) { this.layers.hair = hair; this.rebuild(); }
    this.skin.visible = on; this.skinPre.visible = on && !full;
    this.skinMat.transparent = !full; this.skinMat.opacity = full ? 1 : op; this.skinMat.depthWrite = full; this.skinMat.depthFunc = full ? THREE.LessEqualDepth : THREE.LessEqualDepth; this.skinMat.needsUpdate = true; this.req();
  }
  setOutline(v) { this.outline = v; this.G.outline.visible = v && this.G.opaque.visible; this.req(); }
  refresh() { this.aPos.needsUpdate = true; this.aNrm.needsUpdate = true; this.sPos.needsUpdate = true; this.sNrm.needsUpdate = true; this.uOutline.value = 0.07 * this.m.s; this.req(); }
  select(p) {
    const col = this.col, c0 = this.col0, c = new THREE.Color(COL.select);
    if (this.selected) { const q = this.selected; col.set(c0.subarray(q.v0 * 3, (q.v0 + q.nv) * 3), q.v0 * 3); }
    this.selected = p || null;
    if (p) for (let i = p.v0; i < p.v0 + p.nv; i++) { col[i * 3] = Math.round((c0[i * 3] / 255 * 0.3 + c.r * 0.7) * 255); col[i * 3 + 1] = Math.round((c0[i * 3 + 1] / 255 * 0.3 + c.g * 0.7) * 255); col[i * 3 + 2] = Math.round((c0[i * 3 + 2] / 255 * 0.3 + c.b * 0.7) * 255); }
    this.aCol.needsUpdate = true; this.req();
  }
  view(name) {
    const sc = this.m.s, H = this.m.lm.H0 * sc, tgt = new THREE.Vector3(0, H * 0.5, 0), tanH = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const side = name === 'left' || name === 'right'; const D = Math.max((H * 0.54) / tanH, ((side ? 20 : 37) * sc) / (tanH * this.camera.aspect));
    const d = { front: [0, 0, 1], back: [0, 0, -1], left: [1, 0, 0], right: [-1, 0, 0] }[name] || [0, 0, 1];
    this.controls.target.copy(tgt); this.camera.position.set(tgt.x + d[0] * D, tgt.y + d[1] * D, tgt.z + d[2] * D); this.controls.update(); this.req();
  }
  focus(p) {
    const b = this.m.box.subarray(p.i * 6, p.i * 6 + 6); const c = new THREE.Vector3((b[0] + b[3]) / 2, (b[1] + b[4]) / 2, (b[2] + b[5]) / 2); const r = Math.max(6, Math.hypot(b[3] - b[0], b[4] - b[1], b[5] - b[2]) / 2);
    const dir = this.camera.position.clone().sub(this.controls.target).normalize(); const D = r * 2.4 / Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    this.controls.target.copy(c); this.camera.position.copy(c).addScaledVector(dir, D); this.controls.update(); this.req();
  }
  ray(cx, cy) {
    const r = this.canvas.getBoundingClientRect(); const v = new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    const rc = new THREE.Raycaster(); rc.setFromCamera(v, this.camera); return rc.ray;
  }
  // 自訂射線檢測：先以各部件包圍盒篩選，再逐三角形求交
  pick(cx, cy, wantSkin) {
    const ray = this.ray(cx, cy), o = ray.origin, d = ray.direction, m = this.m; let best = Infinity, hit = null;
    const tri = (P, a, b, c) => {
      const e1x = P[b] - P[a], e1y = P[b + 1] - P[a + 1], e1z = P[b + 2] - P[a + 2], e2x = P[c] - P[a], e2y = P[c + 1] - P[a + 1], e2z = P[c + 2] - P[a + 2];
      const px = d.y * e2z - d.z * e2y, py = d.z * e2x - d.x * e2z, pz = d.x * e2y - d.y * e2x; const det = e1x * px + e1y * py + e1z * pz; if (det > -1e-9 && det < 1e-9) return Infinity;
      const inv = 1 / det, tx = o.x - P[a], ty = o.y - P[a + 1], tz = o.z - P[a + 2]; const u = (tx * px + ty * py + tz * pz) * inv; if (u < 0 || u > 1) return Infinity;
      const qx = ty * e1z - tz * e1y, qy = tz * e1x - tx * e1z, qz = tx * e1y - ty * e1x; const v = (d.x * qx + d.y * qy + d.z * qz) * inv; if (v < 0 || u + v > 1) return Infinity;
      const t = (e2x * qx + e2y * qy + e2z * qz) * inv; return t > 0.01 ? t : Infinity;
    };
    if (wantSkin !== 'only') {
      const cand = [];
      for (const p of m.parts) {
        if (!this.vis[p.i] || p.t === 11) continue; const b = m.box, k = p.i * 6; let t0 = 0, t1 = Infinity, ok = true;
        for (let ax = 0; ax < 3; ax++) { const oo = ax === 0 ? o.x : ax === 1 ? o.y : o.z, dd = ax === 0 ? d.x : ax === 1 ? d.y : d.z; const i1 = (b[k + ax] - oo) / dd, i2 = (b[k + 3 + ax] - oo) / dd; t0 = Math.max(t0, Math.min(i1, i2)); t1 = Math.min(t1, Math.max(i1, i2)); if (t0 > t1) { ok = false; break; } }
        if (ok) cand.push([t0, p]);
      }
      cand.sort((a, b) => a[0] - b[0]);
      for (const [t0, p] of cand) {
        if (t0 > best) break; const ix = m.idx, P = m.pos;
        for (let t = p.t0 * 3, e = (p.t0 + p.nt) * 3; t < e; t += 3) { const tt = tri(P, ix[t] * 3, ix[t + 1] * 3, ix[t + 2] * 3); if (tt < best) { best = tt; hit = { part: p }; } }
      }
    }
    if (wantSkin && this.layers.skin > 0.01) {
      const st = m.stri, P = m.spos; let sb = Infinity, st0 = -1;
      for (let t = 0, e = m.NTs * 3; t < e; t += 3) { const tt = tri(P, st[t] * 3, st[t + 1] * 3, st[t + 2] * 3); if (tt < sb) { sb = tt; st0 = t; } }
      if (sb < Infinity && (wantSkin === 'only' || sb < best || this.layers.skin > 0.6)) { best = sb; hit = { skin: true, tri: st0 / 3 }; }
    }
    if (hit) hit.point = new THREE.Vector3(o.x + d.x * best, o.y + d.y * best, o.z + d.z * best);
    return hit;
  }
  clearMarks() { for (const c of [...this.marks.children]) { this.marks.remove(c); c.geometry && c.geometry.dispose(); } this.req(); }
  addLine(pts, color, closed) {
    const g = new THREE.BufferGeometry().setFromPoints(pts.map(p => p.isVector3 ? p : new THREE.Vector3(p[0], p[1], p[2])));
    const mat = new THREE.LineBasicMaterial({ color, depthTest: false, transparent: true }); const l = closed ? new THREE.LineLoop(g, mat) : new THREE.Line(g, mat); l.renderOrder = 20; this.marks.add(l); this.req();
  }
  addDot(p, color) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.55 * this.m.s, 12, 10), new THREE.MeshBasicMaterial({ color, depthTest: false, transparent: true })); s.position.copy(p); s.renderOrder = 21; this.marks.add(s); this.req(); }
  png() { this.renderer.render(this.scene, this.camera); return new Promise(r => this.canvas.toBlob(r, 'image/png')); }
}
