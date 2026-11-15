# 把 model.bin（gzip）轉成 model.js（base64 分段），供發布平台以腳本檔載入
import base64, os, sys
src, dst = sys.argv[1], sys.argv[2]
raw = open(src, 'rb').read(); CH = 3 * 262144
parts = [base64.b64encode(raw[i:i + CH]).decode() for i in range(0, len(raw), CH)]
open(dst, 'w').write('window.__MODEL_B64=[\n' + ',\n'.join('"' + p + '"' for p in parts) + '\n];\n')
print('model.js MB', round(os.path.getsize(dst) / 1e6, 2), 'chunks', len(parts))
