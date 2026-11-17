# 影像重建用的結構表：TotalSegmentator（CT total、MR total_mr）類別 → 中文名稱、分類、顏色。
# 分類：skin 體表、bone 骨骼、cart 軟骨、muscle 肌肉、organ 內臟、lung 肺、vessel 血管、nerve 神經
import re

COL = dict(bone='#e6dcc3', cart='#9fd3d6', muscle='#c4474f', organ='#c98a5e', lung='#e8b4bc', artery='#d33a3a', vein='#4466cc',
           portal='#7a5fd0', nerve='#f0cf55', skin='#e8b89a')

FIXED = {
    'spleen': ('脾臟', 'organ', '#7b2e5c'), 'kidney_right': ('右腎', 'organ', '#a1522d'), 'kidney_left': ('左腎', 'organ', '#a1522d'),
    'gallbladder': ('膽囊', 'organ', '#4f8f3a'), 'liver': ('肝臟', 'organ', '#8c3b2a'), 'stomach': ('胃', 'organ', '#d9a066'),
    'pancreas': ('胰臟', 'organ', '#e6c07d'), 'adrenal_gland_right': ('右腎上腺', 'organ', '#e0b030'), 'adrenal_gland_left': ('左腎上腺', 'organ', '#e0b030'),
    'lung_upper_lobe_left': ('左肺上葉', 'lung', '#e8b4bc'), 'lung_lower_lobe_left': ('左肺下葉', 'lung', '#dca0aa'),
    'lung_upper_lobe_right': ('右肺上葉', 'lung', '#e8b4bc'), 'lung_middle_lobe_right': ('右肺中葉', 'lung', '#efc6cc'), 'lung_lower_lobe_right': ('右肺下葉', 'lung', '#dca0aa'),
    'lung_left': ('左肺', 'lung', '#e8b4bc'), 'lung_right': ('右肺', 'lung', '#e8b4bc'),
    'esophagus': ('食道', 'organ', '#d48b78'), 'trachea': ('氣管', 'organ', '#9fc4da'), 'thyroid_gland': ('甲狀腺', 'organ', '#b0603a'),
    'small_bowel': ('小腸', 'organ', '#e5b47c'), 'duodenum': ('十二指腸', 'organ', '#dca56e'), 'colon': ('大腸', 'organ', '#c79a6a'),
    'urinary_bladder': ('膀胱', 'organ', '#e3d27a'), 'prostate': ('攝護腺', 'organ', '#b98aa8'),
    'kidney_cyst_left': ('左腎囊腫', 'organ', '#d8e6f0'), 'kidney_cyst_right': ('右腎囊腫', 'organ', '#d8e6f0'),
    'heart': ('心臟', 'organ', '#b02a37'), 'atrial_appendage_left': ('左心耳', 'organ', '#c23a48'),
    'brain': ('腦', 'nerve', '#e9c9b8'), 'spinal_cord': ('脊髓', 'nerve', '#f0cf55'),
    'aorta': ('主動脈', 'artery', None), 'pulmonary_vein': ('肺靜脈', 'vein', '#b04a8a'), 'brachiocephalic_trunk': ('頭臂動脈幹', 'artery', None),
    'subclavian_artery_right': ('右鎖骨下動脈', 'artery', None), 'subclavian_artery_left': ('左鎖骨下動脈', 'artery', None),
    'common_carotid_artery_right': ('右頸總動脈', 'artery', None), 'common_carotid_artery_left': ('左頸總動脈', 'artery', None),
    'brachiocephalic_vein_left': ('左頭臂靜脈', 'vein', None), 'brachiocephalic_vein_right': ('右頭臂靜脈', 'vein', None),
    'superior_vena_cava': ('上腔靜脈', 'vein', None), 'inferior_vena_cava': ('下腔靜脈', 'vein', None),
    'portal_vein_and_splenic_vein': ('門靜脈與脾靜脈', 'portal', None),
    'iliac_artery_left': ('左髂總動脈', 'artery', None), 'iliac_artery_right': ('右髂總動脈', 'artery', None),
    'iliac_vena_left': ('左髂總靜脈', 'vein', None), 'iliac_vena_right': ('右髂總靜脈', 'vein', None),
    'humerus_left': ('左肱骨', 'bone', None), 'humerus_right': ('右肱骨', 'bone', None), 'scapula_left': ('左肩胛骨', 'bone', None), 'scapula_right': ('右肩胛骨', 'bone', None),
    'clavicula_left': ('左鎖骨', 'bone', None), 'clavicula_right': ('右鎖骨', 'bone', None), 'femur_left': ('左股骨', 'bone', None), 'femur_right': ('右股骨', 'bone', None),
    'hip_left': ('左髖骨', 'bone', None), 'hip_right': ('右髖骨', 'bone', None), 'sacrum': ('薦骨', 'bone', None), 'skull': ('顱骨', 'bone', None),
    'sternum': ('胸骨', 'bone', None), 'costal_cartilages': ('肋軟骨', 'cart', None), 'vertebrae': ('脊椎（全部）', 'bone', None),
    'intervertebral_discs': ('椎間盤', 'cart', None),
    'gluteus_maximus_left': ('左臀大肌', 'muscle', None), 'gluteus_maximus_right': ('右臀大肌', 'muscle', None),
    'gluteus_medius_left': ('左臀中肌', 'muscle', None), 'gluteus_medius_right': ('右臀中肌', 'muscle', None),
    'gluteus_minimus_left': ('左臀小肌', 'muscle', None), 'gluteus_minimus_right': ('右臀小肌', 'muscle', None),
    'autochthon_left': ('左豎脊肌', 'muscle', None), 'autochthon_right': ('右豎脊肌', 'muscle', None),
    'iliopsoas_left': ('左髂腰肌', 'muscle', None), 'iliopsoas_right': ('右髂腰肌', 'muscle', None),
}
REGION = {'C': '頸', 'T': '胸', 'L': '腰', 'S': '薦'}
GROUP_ZH = dict(skin='體表', bone='骨骼', cart='軟骨', muscle='肌肉', organ='內臟', lung='肺', vessel='血管', nerve='神經')


def describe(name):
    """回傳 (中文名稱, 分類, 顏色)。分類中 artery/vein/portal 歸到 vessel。"""
    if name in FIXED:
        zh, cat, col = FIXED[name]
    elif m := re.fullmatch(r'vertebrae_([CTLS])(\d+)', name):
        zh, cat, col = f'第 {m.group(2)} {REGION[m.group(1)]}椎', 'bone', None
    elif m := re.fullmatch(r'rib_(left|right)_(\d+)', name):
        zh, cat, col = f'{"左" if m.group(1) == "left" else "右"}第 {m.group(2)} 肋骨', 'bone', None
    else:
        zh, cat, col = name, 'organ', None
    group = 'vessel' if cat in ('artery', 'vein', 'portal') else cat
    return zh, group, col or COL.get(cat, '#bbbbbb')


def level_order(name):
    """椎體由上而下的序號（C1=1 … S1=25）；非椎體回傳 None。"""
    m = re.fullmatch(r'vertebrae_([CTLS])(\d+)', name)
    if not m: return None
    base = dict(C=0, T=7, L=19, S=24)[m.group(1)]
    return base + int(m.group(2))
