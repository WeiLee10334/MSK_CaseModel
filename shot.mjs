// 用法：node shot.mjs out.png W H dpr "<js to run after ready>" [more "name=js" ...]
import puppeteer from 'puppeteer-core';
import http from 'http'; import fs from 'fs'; import path from 'path';
const [out, W, H, dpr, ...steps] = process.argv.slice(2);
const root = path.resolve('docs'); const mime = { '.html': 'text/html', '.js': 'text/javascript' };
const srv = http.createServer((q, r) => { const f = path.join(root, q.url === '/' ? 'index.html' : q.url.split('?')[0]); if (!f.startsWith(root) || !fs.existsSync(f)) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'content-type': mime[path.extname(f)] || 'application/octet-stream', 'content-length': fs.statSync(f).size }); fs.createReadStream(f).pipe(r); }).listen(0);
const port = srv.address().port;
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--force-prefers-color-scheme=dark'] });
const p = await b.newPage(); await p.setViewport({ width: +W, height: +H, deviceScaleFactor: +dpr });
await p.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: process.env.SCHEME || 'dark' }]);
const logs = []; p.on('console', m => logs.push(m.type() + ': ' + m.text())); p.on('pageerror', e => logs.push('PAGEERROR: ' + e.message));
await p.goto(process.env.URL || `http://127.0.0.1:${port}/`, { waitUntil: "load" });
try { await p.waitForFunction('window.__app && window.__app.ready', { timeout: 120000 }); } catch (e) { logs.push('TIMEOUT waiting ready: ' + await p.evaluate(() => document.querySelector('#lmsg')?.textContent)); }
let i = 0;
for (const s of steps.length ? steps : ['']) {
  let r; try { r = await p.evaluate(`(async()=>{${s}; await new Promise(r=>setTimeout(r,700)); return window.__ret})()`); } catch (e) { logs.push('STEP ERROR: ' + e.message); }
  if (r !== undefined) console.log('ret', JSON.stringify(r));
  const name = steps.length > 1 ? out.replace('.png', `_${i}.png`) : out; await p.screenshot({ path: name }); i++;
}
console.log(logs.slice(0, 25).join('\n')); await b.close(); srv.close();
