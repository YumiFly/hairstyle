export interface HairColor {
  id: string
  nameKey: string
  color: string
  category: "natural" | "gray" | "red" | "golden" | "fashion"
}

export const HAIR_COLORS: HairColor[] = [
  // Natural series
  { id: "black", nameKey: "color.black", color: "#1a1a1a", category: "natural" },
  { id: "dark-brown", nameKey: "color.darkBrown", color: "#3d2314", category: "natural" },
  { id: "chestnut", nameKey: "color.chestnut", color: "#5c3317", category: "natural" },
  { id: "caramel", nameKey: "color.caramel", color: "#8b5a2b", category: "natural" },
  { id: "honey", nameKey: "color.honey", color: "#c4a35a", category: "natural" },
  { id: "platinum", nameKey: "color.platinum", color: "#e8e4d9", category: "natural" },

  // Gray series
  { id: "ash-gray", nameKey: "color.ashGray", color: "#8e8e8e", category: "gray" },
  { id: "silver", nameKey: "color.silver", color: "#c0c0c0", category: "gray" },
  { id: "charcoal", nameKey: "color.charcoal", color: "#36454f", category: "gray" },
  { id: "steel-gray", nameKey: "color.steelGray", color: "#71797e", category: "gray" },

  // Red series
  { id: "burgundy", nameKey: "color.burgundy", color: "#722f37", category: "red" },
  { id: "copper", nameKey: "color.copper", color: "#b87333", category: "red" },
  { id: "auburn", nameKey: "color.auburn", color: "#a52a2a", category: "red" },
  { id: "mahogany", nameKey: "color.mahogany", color: "#c04000", category: "red" },

  // Golden series
  { id: "golden", nameKey: "color.golden", color: "#996515", category: "golden" },
  { id: "strawberry", nameKey: "color.strawberry", color: "#d4a373", category: "golden" },
  { id: "champagne", nameKey: "color.champagne", color: "#f7e7ce", category: "golden" },
  { id: "bronze", nameKey: "color.bronze", color: "#cd7f32", category: "golden" },

  // Fashion series
  { id: "rose-gold", nameKey: "color.roseGold", color: "#b76e79", category: "fashion" },
  { id: "blue-black", nameKey: "color.blueBlack", color: "#0d1b2a", category: "fashion" },
  { id: "purple", nameKey: "color.purple", color: "#5c4a72", category: "fashion" },
  { id: "pink", nameKey: "color.pink", color: "#ffb6c1", category: "fashion" },
  { id: "teal", nameKey: "color.teal", color: "#008080", category: "fashion" },
  { id: "violet", nameKey: "color.violet", color: "#8b008b", category: "fashion" },
]
