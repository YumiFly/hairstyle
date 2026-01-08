"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/context"
import { HAIR_COLORS } from "@/lib/data/hair-colors"

interface ColorPickerProps {
  selectedColor: string | null
  onSelect: (color: string | null) => void
}

export function ColorPicker({ selectedColor, onSelect }: ColorPickerProps) {
  const { t } = useI18n()
  const [showAll, setShowAll] = useState(false)
  const displayedColors = showAll ? HAIR_COLORS : HAIR_COLORS.slice(0, 12)

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3">
        {displayedColors.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(selectedColor === item.color ? null : item.color)}
            className="group flex flex-col items-center gap-1.5 sm:gap-2"
          >
            <div
              className={cn(
                "w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all flex items-center justify-center",
                selectedColor === item.color
                  ? "border-rose-500 ring-2 ring-rose-500/20 scale-110"
                  : "border-transparent hover:scale-105",
              )}
              style={{ backgroundColor: item.color }}
            >
              {selectedColor === item.color && (
                <Check
                  className={cn(
                    "w-3 h-3 sm:w-4 sm:h-4",
                    ["#e8e4d9", "#c4a35a", "#c0c0c0", "#f7e7ce", "#ffb6c1", "#d4a373"].includes(item.color)
                      ? "text-black"
                      : "text-white",
                  )}
                />
              )}
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center line-clamp-1">
              {t(item.nameKey)}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
      >
        {showAll ? (
          <>
            <ChevronUp className="w-4 h-4" />
            {t("color.collapse")}
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" />
            {t("color.showAll")}
          </>
        )}
      </button>
    </div>
  )
}
