export interface Hairstyle {
  id: string
  nameKey: string
  query: string
  category: "long" | "medium" | "short" | "updo" | "bangs" | "trendy"
  imagePath:string // 新增图片路径字段
}

export const HAIRSTYLES: Hairstyle[] = [
  // Long hair series
  { id: "1", nameKey: "style.longWavy", query: "long wavy hair woman hairstyle glamour", category: "long", imagePath: "/hairstyle/long/longWavy.png"},
  { id: "2", nameKey: "style.straight", query: "straight long hair woman sleek elegant", category: "long",imagePath: "/hairstyle/long/straight.png"},
  { id: "3", nameKey: "style.frenchBangs", query: "french bangs long hair woman chic", category: "long",imagePath: "/hairstyle/long/frenchBangs.png"},
  { id: "4", nameKey: "style.airBangs", query: "korean air bangs woman natural beauty", category: "long",imagePath: "/hairstyle/long/airBangs.png"},
  { id: "5", nameKey: "style.himeCut", query: "hime cut japanese princess hairstyle", category: "long",imagePath: "/hairstyle/long/himeCut.png"},
  { id: "6", nameKey: "style.bigWave", query: "big wave curly long hair glamorous", category: "long",imagePath: "/hairstyle/long/bigWave.png"},
  { id: "7", nameKey: "style.waterWave", query: "water wave curls long hair soft", category: "long",imagePath: "/hairstyle/long/waterWave.png"},
  { id: "8", nameKey: "style.eggRoll", query: "egg roll curls hairstyle cute korean", category: "long",imagePath: "/hairstyle/long/eggRoll.png"},

  // Medium hair series
  { id: "9", nameKey: "style.collarbone", query: "collarbone length hair woman trendy", category: "medium",imagePath: "/hairstyle/medium/collarbone.png"},
  { id: "10", nameKey: "style.lob", query: "lob haircut woman modern stylish", category: "medium",imagePath: "/hairstyle/medium/lob.png"},
  { id: "11", nameKey: "style.outwardCurls", query: "outward curls medium hair bouncy", category: "medium",imagePath: "/hairstyle/medium/outwardCurls.png"},
  { id: "12", nameKey: "style.inwardCurls", query: "inward curls bob woman elegant", category: "medium", imagePath: "/hairstyle/medium/inwardCurls.png"},
  { id: "13", nameKey: "style.layeredMedium", query: "layered medium hair volume texture", category: "medium", imagePath: "/hairstyle/medium/layeredMedium.png"},
  { id: "14", nameKey: "style.woolCurls", query: "wool curls hairstyle voluminous cute", category: "medium", imagePath: "/hairstyle/medium/woolCurls.png"},
  { id: "15", nameKey: "style.lazyCurls", query: "lazy curls medium hair relaxed", category: "medium", imagePath: "/hairstyle/medium/lazyCurls.png"},
  { id: "16", nameKey: "style.frenchCurls", query: "french curls medium hair romantic", category: "medium", imagePath: "/hairstyle/medium/frenchCurls.png"},

  // Short hair series
  { id: "17", nameKey: "style.bob", query: "bob short hair woman classic chic", category: "short", imagePath: "/hairstyle/short/bob.png"},
  { id: "18", nameKey: "style.layeredShort", query: "layered short hair woman modern", category: "short", imagePath: "/hairstyle/short/layeredShort.png"},
  { id: "19", nameKey: "style.pixie", query: "pixie cut woman edgy stylish", category: "short", imagePath: "/hairstyle/short/pixie.png"},
  { id: "20", nameKey: "style.wolfCut", query: "wolf cut hairstyle woman trendy", category: "short", imagePath: "/hairstyle/short/wolfCut.png"},
  { id: "21", nameKey: "style.texturedShort", query: "textured short hair woman messy", category: "short", imagePath: "/hairstyle/short/texturedShort.png"},
  { id: "22", nameKey: "style.ultraShort", query: "ultra short hair woman bold brave", category: "short", imagePath: "/hairstyle/short/ultraShort.png"},
  { id: "23", nameKey: "style.vintageShort", query: "vintage short hair woman retro", category: "short", imagePath: "/hairstyle/short/vintageShort.png"},
  { id: "24", nameKey: "style.japaneseShort", query: "japanese short hair woman cute kawaii", category: "short", imagePath: "/hairstyle/short/japaneseShort.png"},

  // Updo series
  { id: "25", nameKey: "style.bun", query: "messy bun updo hairstyle casual", category: "updo", imagePath: "/hairstyle/updo/bun.png"},
  { id: "26", nameKey: "style.highPonytail", query: "high ponytail hairstyle sleek sporty", category: "updo", imagePath: "/hairstyle/updo/highPonytail.png"},
  { id: "27", nameKey: "style.lowPonytail", query: "low ponytail elegant sophisticated", category: "updo" ,imagePath: "/hairstyle/updo/lowPonytail.png"},
  { id: "28", nameKey: "style.twinTails", query: "twin tails hairstyle cute playful", category: "updo", imagePath: "/hairstyle/updo/twinTails.png"},
  { id: "29", nameKey: "style.braidedUpdo", query: "braided updo hairstyle elegant wedding", category: "updo", imagePath: "/hairstyle/updo/braidedUpdo.png"},
  { id: "30", nameKey: "style.halfUp", query: "half up half down hairstyle romantic", category: "updo", imagePath: "/hairstyle/updo/halfUp.png"},
  { id: "31", nameKey: "style.fishtail", query: "fishtail braid hairstyle intricate", category: "updo", imagePath: "/hairstyle/updo/fishtail.png"},
  { id: "32", nameKey: "style.frenchBraid", query: "french braid hairstyle classic elegant", category: "updo", imagePath: "/hairstyle/updo/frenchBraid.png"},

  // Bangs series
  { id: "33", nameKey: "style.bluntBangs", query: "blunt bangs hairstyle bold statement", category: "bangs", imagePath: "/hairstyle/bangs/bluntBangs.png"},
  { id: "34", nameKey: "style.sideBangs", query: "side swept bangs face framing", category: "bangs", imagePath: "/hairstyle/bangs/sideBangs.png"},
  { id: "35", nameKey: "style.curtainBangs", query: "curtain bangs hairstyle trendy modern", category: "bangs", imagePath: "/hairstyle/bangs/curtainBangs.png"},
  { id: "36", nameKey: "style.dragonBangs", query: "dragon whisker bangs korean style", category: "bangs", imagePath: "/hairstyle/bangs/dragonBangs.png"},
  { id: "37", nameKey: "style.babyBangs", query: "baby hair bangs korean natural", category: "bangs", imagePath: "/hairstyle/bangs/babyBangs.png"},
  { id: "38", nameKey: "style.noBangs", query: "no bangs hairstyle slicked back elegant", category: "bangs", imagePath: "/hairstyle/bangs/noBangs.png"},
  { id: "39", nameKey: "style.wispyBangs", query: "wispy bangs hairstyle soft delicate", category: "bangs", imagePath: "/hairstyle/bangs/wispyBangs.png"},
  { id: "40", nameKey: "style.thickBangs", query: "thick full bangs statement bold", category: "bangs", imagePath: "/hairstyle/bangs/thickBangs.png" },

  // Trendy series
  { id: "41", nameKey: "style.retroGlamour", query: "retro glamour waves old hollywood", category: "trendy", imagePath: "/hairstyle/trendy/retroGlamour.png"},
  { id: "42", nameKey: "style.wetLook", query: "wet look hairstyle sleek editorial", category: "trendy", imagePath: "/hairstyle/trendy/wetLook.png"},
  { id: "43", nameKey: "style.voluminous", query: "voluminous hair blowout big hair", category: "trendy", imagePath: "/hairstyle/trendy/voluminous.png"},
  { id: "44", nameKey: "style.dreadlocks", query: "dreadlocks hairstyle natural bold", category: "trendy", imagePath: "/hairstyle/trendy/dreadlocks.png"},
  { id: "45", nameKey: "style.afro", query: "afro hairstyle natural curls volume", category: "trendy", imagePath: "/hairstyle/trendy/afro.png"},
  { id: "46", nameKey: "style.highlights", query: "highlights streaks hairstyle dimension", category: "trendy", imagePath: "/hairstyle/trendy/highlights.png"},
  { id: "47", nameKey: "style.ombre", query: "ombre hair gradient color trendy", category: "trendy", imagePath: "/hairstyle/trendy/ombre.png"},
  { id: "48", nameKey: "style.rainbow", query: "rainbow hair colorful unicorn fantasy", category: "trendy", imagePath: "/hairstyle/trendy/rainbow.png"},
]
