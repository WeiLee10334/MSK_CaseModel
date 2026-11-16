# 個案化肌骨模型（MSK Case Model）

輸入身高、體重、三圍（女性另有下胸圍）與腿長比例，在瀏覽器即時重建一個皮膚、肌肉、肌腱、韌帶、骨骼分層的 3D 人體，並可在模型上量測。

v0.4 起可上傳個案的 CT（例如胸部 CT）：在地端伺服器上自動分割骨骼、肌肉與皮下脂肪，把影像範圍內的骨骼形狀、肌肉層與脂肪層厚度換成這位個案的實際值，範圍外沿用參數化模板並平順銜接。

- 線上版：https://weilee10334.github.io/MSK_CaseModel/
- 版本：v0.5（2026-11-16）
- 供研究與教學參考，非醫療器材。

## 功能

- 個案輸入：性別、身高、體重、胸圍（女性為上胸圍與下胸圍）、腰圍、臀圍、體脂率（選填）。
- 體型比例：腿長（大轉子高佔身高）、臂長、肩寬。
- 肌肉發達程度：自動推估或手動，分十個部位調整。肌腹增粗，肌腱與起止點不動。
- 圖層：皮膚（勾選＋不透明度）、肌肉、肌腱與腱膜、深筋膜、韌帶、骨骼、軟骨、關節囊與滑液囊、肌肉起止點、眼球。皮膚不透明時不繪製內部結構；在皮膚不透明時切換內部圖層會自動移除皮膚。
- 點選任一結構顯示中英文名稱、體積、長度；可隱藏或單獨顯示。
- 量測：距離、任意高度的圍度，以及二十多項標準量測；可匯出 CSV、JSON、PNG。
- CT 個案（v0.4）：見下方「CT 個案化」。線上版可載入示範個案；上傳自己的 CT 需要在本機或院內伺服器執行 `server.py`。

## 專案結構

| 路徑 | 內容 |
| :-- | :-- |
| `docs/` | 部署到 GitHub Pages 的網頁：`index.html`、`app.js`、`model.js`（模型資料） |
| `src/` | 網頁原始碼：`model.js`（變形與求解）、`viewer.js`（three.js 繪圖）、`main.js`（介面） |
| `tools/` | 由 Z-Anatomy 產生模型資料的腳本 |
| `ctpipe/` | CT 個案流程：讀檔與去識別（`ctio.py`）、自動分割（`segment.py`）、擬合（`ctfit.py`）、輸出個案檔（`pipeline.py`） |
| `server.py` | 地端伺服器：提供網頁與 CT 上傳、處理、下載 API（只用 Python 標準函式庫） |
| `docs/ct-demo.js`、`docs/ct-demo-vol.js` | 示範個案（3D Slicer 範例 CTACardio）的個案檔與檢視用影像 |
| `docs/patches.js` | 女性皮膚補片、胯下提升量、乳房位移向量、皮膚間隙（`tools/build_patches.py`、`tools/breast_makehuman.py`、`tools/clearance.py` 產生） |
| `src/ctview.js` | CT 影像檢視器（橫切面、矢狀面、冠狀面與 3D 切面同步） |
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

## CT 個案化

### 流程

1. 讀取 DICOM 資料夾、zip、NIfTI 或 NRRD，轉成 LPS 方向。只保留重建需要的欄位（模態、切片厚度、kVp、重建核、性別），其餘中繼資料（含姓名、病歷號、日期）在讀入時即丟棄。
2. TotalSegmentator（`total` 任務，預設 3 mm 快速模型）分割椎骨、肋骨、胸骨、肋軟骨、鎖骨、肩胛骨、豎脊肌、肺與心臟；肌肉與脂肪另以 HU 判定（肌肉 −29～150，脂肪 −190～−30）。
3. 以完整落在影像內的椎骨、肋骨、胸骨質心做相似轉換，再逐塊骨骼做 ICP（相似 → 仿射 → 非剛性），得到這位個案的骨骼形狀；肋軟骨跟著肋骨走後再貼到 CT 的肋軟骨表面。
4. 以骨骼位移建立整體位移場，帶動肌肉與皮膚；再在每個橫切面沿 72 個方向比對「骨骼－肌肉外緣－皮膚」三層的半徑，把模板的肌肉層與皮下脂肪層厚度換成 CT 的值。
5. 皮膚必須蓋住底下所有組織：在 CT 形狀與「模板與 CT 混合後」的形狀各做一次間隙檢查，凸出處把皮膚沿法向推出。
6. 權重：影像範圍內完全採用 CT；上端 7 cm 淡出；下端以下沿用邊界那一圈的位移，往下 15 cm 漸減（避免仰躺腹部與站姿模板之間出現台階）；手臂上舉時肩帶與上臂沿用模板。同一位置的皮膚、肌肉、骨頭用同一個權重混合，避免互相穿出。
7. 輸出個案檔（gzip，約 3 MB）：每個頂點的權重與位移、擬合誤差、CT 實測值（T4／T8／T12／L1 的骨骼肌面積與 HU、豎脊肌、皮下脂肪面積、胸廓寬與前後徑、各方向皮下脂肪厚度），以及 CT 骨骼、體表、肺與心臟的疊圖網格。

### 影像檢視器

「CT」分頁的「開啟 CT 影像檢視器」：橫切面、矢狀面、冠狀面三視圖，滑鼠滾輪換層、點選跳位，軟組織／肺／骨三種窗。每個切面上疊加目前 3D 模型在該層的皮膚、肌肉、骨骼輪廓，可逐層對照模型與真人是否吻合；3D 視窗同步顯示目前橫切面的位置並貼上該層影像。影像來自地端伺服器（`/api/ct/<id>/volume`，約 1.5 mm），不經外部服務。

網頁載入個案檔後，身高依 CT 推估的骨架大小預設、體重依原 BMI 換算（請改成實測值），腿長比例由上身比例推算，CT 範圍內的圍度標示為「由 CT 決定」，範圍外的肌肉發達程度沿用 CT 推估值。

### 地端安裝與執行

需要 Python 3.10 以上。CPU 即可執行（胸部 CT 約 2–3 分鐘、記憶體峰值約 5 GB）；有 NVIDIA GPU 時分割更快，也可用 `--full` 改用 1.5 mm 模型。

```
pip install TotalSegmentator SimpleITK pydicom nibabel scikit-image scipy numpy
python3 server.py                  # 開啟 http://127.0.0.1:8765/ ，在「CT」分頁上傳
python3 server.py --host 0.0.0.0   # 讓院內其他電腦連線
python3 ctpipe/pipeline.py <DICOM資料夾或zip> out.ctcase   # 不開網頁，直接產生個案檔
```

第一次執行會下載 TotalSegmentator 的模型權重（約數百 MB）；院內無對外網路時，請先在可連線的電腦下載後複製到 `~/.totalsegmentator/`。

隱私：影像只在執行 `server.py` 的電腦上處理，不會送到外部。原始上傳檔在處理完成或失敗後立即刪除；個案檔只保留在記憶體，預設 6 小時後或伺服器結束時清除。伺服器預設只接受本機連線。

### 示範與準確度

示範個案為 3D Slicer 範例資料 CTACardio（胸腹部 CT 血管攝影，C7–L4，一手上舉），CPU 處理約 3 分鐘。v0.4 的示範（CTChest）是一位肝腫大的病人，上腹明顯隆起，不適合當一般體型示範，已更換。

### CT 個案化的限制

- 胸部 CT 多半雙臂上舉、仰臥。肩帶與上臂沿用模板；仰臥時腹部、乳房與軟組織受重力影響，形狀與站姿不同。
- 低劑量 CT 的肌肉邊界較模糊；以 HU 判定時，女性乳腺組織會有一部分落入肌肉範圍。
- 模板的深層背肌偏小，豎脊肌截面積只作參考，肌肉發達程度改以 T6–L1 的肌肉層厚度推估。
- 肌肉層有效射線比例偏低（示範個案 37%）的區域會較多沿用模板。
- 手臂上舉時肩胛位置與模板不同，背部上方與肩部皮膚會有皺摺。
- 極端體型（很胖或很瘦）時，耳朵與部分皮膚仍有細小翻折。

## 部署

GitHub Pages：Source 為 Deploy from a branch，`main` 分支的 `/docs` 資料夾。推送到 `main` 後約一分鐘更新。

## 資料來源與授權

模型資料（`docs/model.js`）衍生自：

- “Z-Anatomy - The libre 3D atlas of anatomy - CC-BY-SA 4.0”（https://github.com/Z-Anatomy/Models-of-human-anatomy）
- “BodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan”

本專案對原始網格做了減面、分類、中文命名與參數化變形。`docs/model.js` 依 CC BY-SA 4.0 釋出，使用或再散布時請保留上述署名並以相同方式分享。詳見 `DATA_LICENSE.md`。

示範個案（`docs/ct-demo.js`、`docs/ct-demo-vol.js`）衍生自 3D Slicer SampleData 的 CTACardio，含降解析度的影像（約 1.5 × 1.5 × 2.5 mm）。

`src/`、`tools/`、`ctpipe/`、`server.py` 的程式碼尚未指定開源授權。使用 three.js（MIT）；CT 分割使用 TotalSegmentator（Apache-2.0，`total` 任務的權重可商用；`tissue_types` 等需授權的任務本專案未使用）。

## 已知限制

- 來源只有一位成年男性。女性是近似變形，骨盆、顱骨、臉部仍是男性形態。
- 體脂率與肌肉量是推估值；體脂約 15% 以下的精瘦體型無法完全表現。
- 解剖正確性尚未經醫師或物理治療師審閱。
