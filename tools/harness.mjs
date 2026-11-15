// 在 Node 裡執行網頁的變形程式（不需要瀏覽器），輸出變形後的頂點，供穿出檢查與回歸測試。
// 用法：node tools/harness.mjs out_dir '[{"name":"F_default","sex":"F"}, {"name":"M_big","W":95}]'
// 每個個案輸出 <name>.pos.f32（結構頂點）、<name>.spos.f32（皮膚頂點）、<name>.json（求解結果與可見性）。
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
globalThis.window = globalThis;
const { Model } = await import(path.join(here, '..', 'src', 'model.js'));

const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(here, '..', 'docs', 'model.js'), 'utf8'), ctx);
const raw = Buffer.concat(ctx.window.__MODEL_B64.map((c) => Buffer.from(c, 'base64')));
const bin = raw[0] === 0x1f && raw[1] === 0x8b ? zlib.gunzipSync(raw) : raw;
const pctx = { window: {} }; vm.createContext(pctx); const pf = path.join(here, '..', 'docs', 'patches.js'); if (fs.existsSync(pf)) vm.runInContext(fs.readFileSync(pf, 'utf8'), pctx);
const M = new Model(bin.buffer.slice(bin.byteOffset, bin.byteOffset + bin.byteLength), pctx.window.__PATCH || null);

// 與 main.js init() 相同的起始狀態
const L = M.lm; M.s = 1; M.setG(0); M.buildLUT(); M.deformSkin(M.spos, null, false);
const v0 = M.skinVolume(M.spos), m0 = 0.9007 * M.phi0 * v0 + 1.10 * (v0 * (1 - M.phi0) - M.air);
const base = { sex: 'M', H: Math.round(L.H0), W: Math.round(m0), chest: Math.round(L.girth0[0]), waist: Math.round(L.girth0[1]), hip: Math.round(L.girth0[2]), under: 0, bf: 0, auto: true, muscle: 0, off: new Array(11).fill(0), leg: Math.round(M.r0 * 1000) / 10, arm: 1, shoulder: 1 };
const FEM = { H: 160, W: 55, chest: 86, waist: 70, hip: 93 };

const out = process.argv[2] || '/tmp/harness'; fs.mkdirSync(out, { recursive: true });
const cases = JSON.parse(process.argv[3] || '[{"name":"M_default"},{"name":"F_default","sex":"F"}]');
for (const cs of cases) {
  const c = { ...base, ...(cs.sex === 'F' ? FEM : {}), ...cs };
  const t0 = Date.now(); const res = M.solve({ ...c, leg: c.leg / 100 }); M.apply(true);
  fs.writeFileSync(path.join(out, cs.name + '.pos.f32'), Buffer.from(M.pos.buffer, M.pos.byteOffset, M.pos.byteLength));
  fs.writeFileSync(path.join(out, cs.name + '.spos.f32'), Buffer.from(M.spos.buffer, M.spos.byteOffset, M.spos.byteLength));
  fs.writeFileSync(path.join(out, 'sbase.f32'), Buffer.from(M.sbase.buffer, M.sbase.byteOffset, M.sbase.byteLength));
  const hiddenMale = M.parts.filter((p) => c.sex === 'F' && p.male).map((p) => p.i);
  const meas = M.measure();
  fs.writeFileSync(path.join(out, cs.name + '.json'), JSON.stringify({ case: c, A: res.A, f: res.f, g: res.gG, under: res.under, hiddenMale, skinTri: Array.from(M.skinTris()), NSall: M.NSall, meas: { chest: meas.chest, under: meas.under, waist: meas.waist, hip: meas.hip }, ms: Date.now() - t0 }));
  console.log(cs.name, 'A', res.A.toFixed(2), 'f', res.f.toFixed(2), 'g', res.gG.toFixed(2), 'chest', meas.chest.toFixed(1), 'under', meas.under.toFixed(1), Date.now() - t0, 'ms');
}
