# 個案化肌骨模型（MSK Case Model）

兩種模式：

- **人形**（沒有影像時）：輸入身高、體重、三圍（女性另有下胸圍）與腿長比例，在瀏覽器即時重建皮膚、肌肉、肌腱、韌帶、骨骼分層的 3D 人體，並可量測。
- **影像**（有 CT 或 MR 時）：在地端伺服器自動分割，只重建影像範圍內的骨骼、肌肉、內臟與血管，位置就是影像中的真實位置；附量化摘要、切面對照，以及前後兩次檢查的比較。

- 線上版：https://weilee10334.github.io/MSK_CaseModel/ （影像模式：網址加 `#img`，或按上方「影像」）
- 版本：v0.6（2026-11-17）
- 供研究與教學參考，非醫療器材。

## 功能

- 個案輸入：性別、身高、體重、胸圍（女性為上胸圍與下胸圍）、腰圍、臀圍、體脂率（選填）。
- 體型比例：腿長（大轉子高佔身高）、臂長、肩寬。
- 肌肉發達程度：自動推估或手動，分十個部位調整。肌腹增粗，肌腱與起止點不動。
- 圖層：皮膚（勾選＋不透明度）、肌肉、肌腱與腱膜、深筋膜、韌帶、骨骼、軟骨、關節囊與滑液囊、肌肉起止點、眼球。皮膚不透明時不繪製內部結構；在皮膚不透明時切換內部圖層會自動移除皮膚。
- 點選任一結構顯示中英文名稱、體積、長度；可隱藏或單獨顯示。
- 量測：距離、任意高度的圍度，以及二十多項標準量測；可匯出 CSV、JSON、PNG。
- 影像模式（v0.6）：見下方「影像模式」。線上版可載入示範；上傳自己的影像需要在本機或院內伺服器執行 `server.py`。

## 專案結構

| 路徑 | 內容 |
| :-- | :-- |
| `docs/` | 部署到 GitHub Pages 的網頁：`index.html`、`app.js`、`model.js`（模型資料） |
| `src/` | 網頁原始碼：`model.js`（變形與求解）、`viewer.js`（three.js 繪圖）、`main.js`（介面） |
| `tools/` | 由 Z-Anatomy 產生模型資料的腳本 |
| `ctpipe/` | 影像流程：讀檔與去識別（`ctio.py`）、自動分割（`segment.py`）、3D 重建與量化（`recon.py`、結構表 `anatomy.py`）、輸出重建檔（`pipeline.py`） |
| `server.py` | 地端伺服器：提供網頁與影像上傳、處理、下載 API（只用 Python 標準函式庫） |
| `docs/demo-a*.js`、`docs/demo-b*.js` | 示範：公開胸腹部 CT 的重建與檢視用影像，以及用它人工模擬的追蹤檢查（`tools/make_demo_recon.py` 產生） |
| `src/recon.js`、`src/imgmode.js` | 影像模式：讀重建檔、3D 顯示、兩次檢查對齊與表面變化；摘要、結構、比較三個分頁 |
| `docs/patches.js` | 女性皮膚補片、胯下提升量、乳房位移向量、皮膚間隙（`tools/build_patches.py`、`tools/breast_makehuman.py`、`tools/clearance.py` 產生） |
| `src/ctview.js` | 影像檢視器（橫切面、矢狀面、冠狀面與 3D 切面同步；比較時並列第二次檢查的同一切面） |
| `tools/harness.mjs`、`tools/poke_check.py`、`tools/fold_check.py` | 在 Node 執行網頁變形程式，檢查結構穿出皮膚與皮膚翻折 |
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

## 女性模型

模板是一位成年男性。女性模式下：

- 外生殖器：原男性外生殖器的皮膚三角形不顯示，改用新網格（受限 Delaunay 品質網格、調和曲面基底），做出陰阜、大陰唇與中線裂隙；胯下周圍皮膚與其下 3 cm 內的淺層結構平滑上提到胯下高度。
- 乳房：形狀取自 MakeHuman（CC0）年輕女性的小、中、大罩杯（堅挺度取最高，避免大罩杯過度下垂）。先在 MakeHuman 上把乳房從胸壁分離（胸壁以對齊後的男性胸部估計），再依「離乳頭的水平、垂直距離」對應到本模型的胸前皮膚，存成三組位移向量；網頁依上、下胸圍求得的罩杯在三組間內插（比最小罩杯更小時逐漸收平）。乳頭位置依 MakeHuman 女性的比例（乳頭離中線 / 前胸半寬、乳頭高度 / 身高）換算。乳房區域另做細分網格；乳暈顏色依變形後離乳頭的距離即時計算（直徑約 3.6–4.6 cm），不隨皮膚拉伸變大。下胸圍量在乳房下緣的胸壁上（不含乳房），上胸圍量在乳頭高度。
- 骨盆、顱骨、臉部仍是男性形態。

重建補片與皮膚間隙（模型資料或變形程式改動後）：

```
python3 tools/build_patches.py docs/model.js docs/patches.js
python3 -I tools/breast_makehuman.py <MakeHuman 原始碼>/makehuman/data      # 乳房（會再呼叫 build_patches.py，並寫 tools/breast_site.json）
python3 tools/clearance.py 3
node tools/harness.mjs /tmp/h '[{"name":"F","sex":"F"},{"name":"M"}]' && python3 tools/poke_check.py /tmp/h && python3 tools/fold_check.py /tmp/h
```

## 影像模式（CT／MR）

### 流程

1. 讀取 DICOM 資料夾、zip、NIfTI 或 NRRD，轉成 LPS 方向。只保留需要的欄位（模態、切片厚度、kVp、重建核、性別），其餘中繼資料（含姓名、病歷號、日期）在讀入時即丟棄。影像類型以 DICOM 的 Modality 判斷；沒有時，有大量接近 −1000 的空氣即為 CT，否則為 MR（也可在網頁手動指定）。
2. 分割：CT 用 TotalSegmentator `total`（117 類），MR 用 `total_mr`（50 類），兩者皆不需授權；預設 3 mm 快速模型。
3. 重建：每個結構在原解析度取等值面（高斯平滑去掉體素階梯），再平滑、減面。CT 的骨骼在原解析度依 CT 值（> 180 HU）貼齊皮質骨，不受 3 mm 分割的粗邊界影響。體表另做，並去掉貼在皮膚上的細長物（心電圖導線、管路）。
4. 分割沒標到的骨骼肌（胸壁、腹壁、肩背、手臂）以 CT 值 −29～150 HU 估計：排除器官、血管、骨骼與腹腔器官凸包，並只取每個身體區塊從皮膚往內的第一段肌肉（腹部沒被分割的腸管與肌肉 CT 值相同，無法單憑 CT 值區分）。這一層僅供顯示，不納入量化。
5. 量化：各結構體積（由分割體素數計算）與平均 CT 值；L3 中間層的腰大肌、豎脊肌面積與 CT 值；L1（或 T12、L2）椎體中央的海綿骨 CT 值；肝、脾 CT 值。顯影劑以主動脈平均 CT 值（> 150 HU）判斷，有顯影時在摘要註明 HU 參考值不適用。
6. 品質：每個結構的 3D 表面到分割邊界的距離（平均、P95）、解析度、掃描範圍（最上與最下的椎體）、分割模型。
7. 輸出重建檔（gzip，胸腹部 CT 約 2–3 MB）與檢視用影像（約 1.5 × 1.5 × 2.5 mm）。

### 網頁

- **影像**分頁：上傳、示範、量化摘要（重點數字＋品質檢查）、開啟影像檢視器（可直接跳到某個椎體高度）、匯出結構體積 CSV。
- **結構**分頁：依分類（體表、骨骼、軟骨、肌肉、內臟、肺、血管、神經）開關與調整不透明度，結構清單附體積；點選結構顯示體積、CT 值、重建誤差，可聚焦、只看這個、隱藏。被影像上下緣截斷的結構會標示。
- **比較**分頁：載入第二次檢查（兩次都從頭分割與重建）。以共同的中軸骨（椎體、肋骨、胸骨、薦骨、髖骨）質心做剛體對齊（骨骼不足時改用所有共同結構），顯示殘差與擺位差異；並排或重疊顯示；指標與各結構體積變化表（被截斷的結構排在最後）；點選結構後，第二次的表面依到第一次表面的帶號距離上色（藍＝內縮、紅＝外長）。影像檢視器並列兩次檢查在同一切面（第二次已重新取樣到第一次的座標）的影像與輪廓。
- 上方的「體表／透視／肌肉／骨骼／內臟」切換常用的顯示組合。

### 地端安裝與執行

需要 Python 3.10 以上。CPU 即可執行（胸腹部 CT 約 3–4 分鐘、記憶體峰值約 5 GB）；有 NVIDIA GPU 時分割更快，也可用 `--full` 改用 1.5 mm 模型（邊界更準，建議院內正式使用）。

```
pip install TotalSegmentator SimpleITK pydicom nibabel scikit-image scipy numpy vtk
python3 server.py                  # 開啟 http://127.0.0.1:8765/#img ，在「影像」分頁上傳
python3 server.py --host 0.0.0.0   # 讓院內其他電腦連線
python3 ctpipe/pipeline.py <DICOM資料夾或zip> out.reco [--modality MR]   # 不開網頁，直接產生重建檔
```

第一次執行會下載 TotalSegmentator 的模型權重（CT、MR 各約 130 MB）；院內無對外網路時，請先在可連線的電腦下載後複製到 `~/.totalsegmentator/`。

隱私：影像只在執行 `server.py` 的電腦上處理，不會送到外部。原始上傳檔在處理完成或失敗後立即刪除；重建檔只保留在記憶體，預設 6 小時後或伺服器結束時清除。伺服器預設只接受本機連線。

### 示範

第一次檢查為 3D Slicer 範例資料 CTACardio（胸腹部 CT 血管攝影，C7–L4，一手上舉）。追蹤檢查是用它人工模擬的（非真實病人資料）：豎脊肌、髂腰肌外緣削去約 2 mm（肌肉萎縮），肝臟外緣增加約 1 mm，並加上約 2° 旋轉與 1 cm 內位移（擺位不同）；追蹤影像同樣從頭分割、重建。重新產生：`python3 -I tools/make_demo_recon.py <CTA-cardio.nrrd> <工作資料夾>`。

### 限制

- 3 mm 快速分割模型的器官邊界約 3 mm 等級；摘要中的「重建誤差」是 3D 表面相對分割的誤差，不是相對真實解剖。正式使用建議以 GPU 跑 1.5 mm 模型。
- 開放授權的分割只有腰大肌、豎脊肌、臀肌等少數肌肉；全部骨骼肌面積（SMA）、內臟與皮下脂肪需要組織分割模型（TotalSegmentator `tissue_types`，需授權），目前未計算。
- 兩次檢查的體積差包含兩次分割各自的誤差；小於 3% 的變化不上色。掃描範圍不同時，被截斷結構的體積差沒有意義。
- MR 的 `total_mr` 把所有椎體分成一類，沒有椎體高度；只涵蓋腹部的 MR 比較時改用器官質心對齊，精度較低。
- 顯影劑會讓器官與骨骼的 CT 值偏高；脂肪肝、骨質的 HU 參考值只適用於非顯影 CT。

## 部署

GitHub Pages：Source 為 Deploy from a branch，`main` 分支的 `/docs` 資料夾。推送到 `main` 後約一分鐘更新。

## 資料來源與授權

模型資料（`docs/model.js`）衍生自：

- “Z-Anatomy - The libre 3D atlas of anatomy - CC-BY-SA 4.0”（https://github.com/Z-Anatomy/Models-of-human-anatomy）
- “BodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan”

本專案對原始網格做了減面、分類、中文命名與參數化變形。`docs/model.js` 依 CC BY-SA 4.0 釋出，使用或再散布時請保留上述署名並以相同方式分享。詳見 `DATA_LICENSE.md`。

示範（`docs/demo-a*.js`、`docs/demo-b*.js`）衍生自 3D Slicer SampleData 的 CTACardio，含降解析度的影像（約 1.5 × 1.5 × 2.5 mm）；第二次檢查為人工模擬。

`src/`、`tools/`、`ctpipe/`、`server.py` 的程式碼尚未指定開源授權。使用 three.js（MIT）；影像分割使用 TotalSegmentator（Apache-2.0；`total`、`total_mr` 任務不需授權；`tissue_types` 等需授權的任務本專案未使用）；表面平滑與減面使用 VTK（BSD）。

## 已知限制

- 來源只有一位成年男性。女性是近似變形，骨盆、顱骨、臉部仍是男性形態。
- 體脂率與肌肉量是推估值；體脂約 15% 以下的精瘦體型無法完全表現。
- 解剖正確性尚未經醫師或物理治療師審閱。
