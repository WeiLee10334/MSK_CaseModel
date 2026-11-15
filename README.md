# 個案化肌骨模型（MSK Case Model）

輸入身高、體重、三圍（女性另有下胸圍）與腿長比例，在瀏覽器即時重建一個皮膚、肌肉、肌腱、韌帶、骨骼分層的 3D 人體，並可在模型上量測。

- 線上版：https://weilee10334.github.io/MSK_CaseModel/
- 版本：v0.3（2026-11-15）
- 供研究與教學參考，非醫療器材。

## 功能

- 個案輸入：性別、身高、體重、胸圍（女性為上胸圍與下胸圍）、腰圍、臀圍、體脂率（選填）。
- 體型比例：腿長（大轉子高佔身高）、臂長、肩寬。
- 肌肉發達程度：自動推估或手動，分十個部位調整。肌腹增粗，肌腱與起止點不動。
- 圖層：皮膚、肌肉、肌腱與腱膜、深筋膜、韌帶、骨骼、軟骨、關節囊與滑液囊、肌肉起止點。
- 點選任一結構顯示中英文名稱、體積、長度；可隱藏或單獨顯示。
- 量測：距離、任意高度的圍度，以及二十多項標準量測；可匯出 CSV、JSON、PNG。

## 專案結構

| 路徑 | 內容 |
| :-- | :-- |
| `docs/` | 部署到 GitHub Pages 的網頁：`index.html`、`app.js`、`model.js`（模型資料） |
| `src/` | 網頁原始碼：`model.js`（變形與求解）、`viewer.js`（three.js 繪圖）、`main.js`（介面） |
| `tools/` | 由 Z-Anatomy 產生模型資料的腳本 |
| `build.mjs` | 用 esbuild 把 `src/` 打包到 `docs/` |
| `shot.mjs` | 用無頭 Chrome 截圖與執行檢查 |

## 建置

```
npm install
node build.mjs                 # src/ → docs/app.js、docs/index.html
npx serve docs                 # 本機預覽
```

重新產生模型資料（需要 Z-Anatomy 的 `Startup.blend`）：

```
pip install bpy scipy numpy
python3 tools/za_export.py -- <Z-Anatomy/Startup.blend> stage
python3 tools/build_assets2.py stage docs stage/zh.json        # 第一次先不帶 zh.json 跑一遍，產生 docs/names_en.json
python3 tools/zh_names.py docs/names_en.json stage/zh.json
python3 tools/build_assets2.py stage docs stage/zh.json
python3 tools/pack_model.py docs/model.bin docs/model.js
```

## 部署

GitHub Pages：Source 為 Deploy from a branch，`main` 分支的 `/docs` 資料夾。推送到 `main` 後約一分鐘更新。

## 資料來源與授權

模型資料（`docs/model.js`）衍生自：

- “Z-Anatomy - The libre 3D atlas of anatomy - CC-BY-SA 4.0”（https://github.com/Z-Anatomy/Models-of-human-anatomy）
- “BodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan”

本專案對原始網格做了減面、分類、中文命名與參數化變形。`docs/model.js` 依 CC BY-SA 4.0 釋出，使用或再散布時請保留上述署名並以相同方式分享。詳見 `DATA_LICENSE.md`。

`src/`、`tools/` 的程式碼尚未指定開源授權。使用 three.js（MIT）。

## 已知限制

- 來源只有一位成年男性。女性是近似變形，骨盆、顱骨、臉部仍是男性形態。
- 體脂率與肌肉量是推估值；體脂約 15% 以下的精瘦體型無法完全表現。
- 解剖正確性尚未經醫師或物理治療師審閱。
