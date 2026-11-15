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

## 示範個案（`docs/ct-demo.js`、`docs/ct-demo-vol.js`）

由 3D Slicer SampleData 的 CTACardio（`CTA-cardio.nrrd`，https://github.com/Slicer/SlicerTestingData ）經本專案的 CT 流程產生。依 3D Slicer 社群說明，隨 Slicer 釋出的範例資料適用 3D Slicer License（BSD 風格）：
https://github.com/Slicer/Slicer/blob/main/License.txt

`ct-demo.js` 只有模型頂點的位移與權重、擬合誤差、CT 實測摘要與疊圖網格；`ct-demo-vol.js` 為降解析度（約 1.5 × 1.5 × 2.5 mm）的影像體積，供網頁檢視器使用。兩者皆不含任何個人資料。
