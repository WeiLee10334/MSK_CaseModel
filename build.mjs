import { build } from 'esbuild';
import fs from 'fs';
await build({ entryPoints: ['src/main.js'], bundle: true, format: 'iife', minify: true, target: 'es2020', outfile: 'docs/app.js', legalComments: 'none' });
fs.copyFileSync('src/index.html', 'docs/index.html');
console.log('app.js', fs.statSync('docs/app.js').size, 'model.js', fs.existsSync('docs/model.js') ? fs.statSync('docs/model.js').size : 'missing');
