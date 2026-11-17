# 模型資料授權

`docs/model.js` 內的人體網格資料為衍生著作，依 Creative Commons Attribution-ShareAlike 4.0 International（CC BY-SA 4.0）釋出：
https://creativecommons.org/licenses/by-sa/4.0/

## 署名

- “Z-Anatomy - The libre 3D atlas of anatomy - CC-BY-SA 4.0”
  https://github.com/Z-Anatomy/Models-of-human-anatomy
- “BodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan”
  https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html

Z-Anatomy 另列出其參考或納入的模型來源，完整清單見其 Readme。本專案只使用骨骼、關節、肌肉、體表區域四個集合，以及眼球的鞏膜與虹膜。

## 本專案所做的修改

- 依面積減面，總計約 55 萬頂點。
- 依材質把結構分為肌肉、肌腱、筋膜、骨骼、軟骨、韌帶、關節囊、滑液囊、起止點。
- 加上臺灣慣用的中文名稱。
- 計算肌肉增長位移場、皮下空間、皮膚平滑目標等參數化變形所需的資料。
- 補上會陰處的皮膚開口，並產生女性體型用的皮膚修正量。

## 女性乳房形狀（`docs/patches.js` 的 breast 欄位）

取自 MakeHuman 1.x 的基礎網格與乳房 target（female-young-averagemuscle-averageweight 的罩杯×堅挺度組合）。MakeHuman 的網格與 target 資料自 2020 年 9 月起以 CC0 1.0 釋出：
https://github.com/makehumancommunity/makehuman （網格、target 等資產的授權見該專案 LICENSE.md、LICENSE.ASSETS.md）
本專案把乳房相對胸壁的位移向量換算到本模型的皮膚頂點上；CC0 不要求署名，此處列出來源以便查證。

## 示範（`docs/demo-a.js`、`demo-a-vol.js`、`demo-b.js`、`demo-b-vol.js`）

由 3D Slicer SampleData 的 CTACardio（`CTA-cardio.nrrd`，https://github.com/Slicer/SlicerTestingData ）經本專案的影像流程產生。依 3D Slicer 社群說明，隨 Slicer 釋出的範例資料適用 3D Slicer License（BSD 風格）：
https://github.com/Slicer/Slicer/blob/main/License.txt

`demo-a.js` 是各結構的 3D 表面、體積與量化摘要；`demo-a-vol.js` 為降解析度（約 1.5 × 1.5 × 2.5 mm）的影像體積，供網頁檢視器使用。`demo-b*.js` 是以同一份影像人工模擬的追蹤檢查（肌肉外緣削去、肝臟外緣增加、加上旋轉與位移），不是真實病人的追蹤資料。皆不含任何個人資料。
