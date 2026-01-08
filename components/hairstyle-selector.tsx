"use client"

import type React from "react"
import { useState } from "react"
import { Check, Upload, X, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useI18n } from "@/lib/i18n/context"
import { HAIRSTYLES } from "@/lib/data/hairstyles"

interface HairstyleSelectorProps {
  selectedImage: string | null
  onSelect: (image: string | null) => void
}

export function HairstyleSelector({ selectedImage, onSelect }: HairstyleSelectorProps) {
  const { t } = useI18n()
  const [customImage, setCustomImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("preset")
  const [showAll, setShowAll] = useState(false)

  const displayedStyles = showAll ? HAIRSTYLES : HAIRSTYLES.slice(0, 12)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = e.target?.result as string
        setCustomImage(img)
        onSelect(img)
      }
      reader.readAsDataURL(file)
    }
  }

  // const handlePresetSelect = (styleId: string) => {
  //   setCustomImage(null)
  //   const style = HAIRSTYLES.find((s) => s.id === styleId)
  //   if (style) {
  //     const imageUrl = `/.jpg?height=200&width=200&query=${encodeURIComponent(style.query)}`
  //     onSelect(selectedImage === imageUrl ? null : imageUrl)
  //   }
  // }
  // 修改handlePresetSelect函数
const handlePresetSelect = (styleId: string) => {
  setCustomImage(null)
  const style = HAIRSTYLES.find((s) => s.id === styleId)
  if (style) {
    // 使用静态图片路径
    const imageUrl = style.imagePath
    onSelect(selectedImage === imageUrl ? null : imageUrl)
  }
}

  const clearCustomImage = () => {
    setCustomImage(null)
    onSelect(null)
  }

  // const isSelected = (styleId: string) => {
  //   const style = HAIRSTYLES.find((s) => s.id === styleId)
  //   if (style) {
  //     const imageUrl = `/.jpg?height=200&width=200&query=${encodeURIComponent(style.query)}`
  //     return selectedImage === imageUrl
  //   }
  //   return false
  // }
  // 修改isSelected函数
const isSelected = (styleId: string) => {
  const style = HAIRSTYLES.find((s) => s.id === styleId)
  if (style) {
    // 使用静态图片路径
    const imageUrl = style.imagePath
    return selectedImage === imageUrl
  }
  return false
}

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="preset">{t("hairstyle.preset")}</TabsTrigger>
        <TabsTrigger value="custom">{t("hairstyle.custom")}</TabsTrigger>
      </TabsList>

      <TabsContent value="preset" className="mt-0 space-y-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
          {displayedStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => handlePresetSelect(style.id)}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden border-2 transition-all",
                isSelected(style.id)
                  ? "border-rose-500 ring-2 ring-rose-500/20"
                  : "border-transparent hover:border-border",
              )}
            >
              <img
                src={style.imagePath} // 使用静态图片路径
                alt={t(style.nameKey)}
                // className="w-full h-full object-cover"
                className="hairstyle-image"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-1.5 sm:p-2">
                <span className="text-[10px] sm:text-xs text-white font-medium line-clamp-1">{t(style.nameKey)}</span>
              </div>
              {isSelected(style.id) && (
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 bg-rose-500 rounded-full flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
              )}
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
              {t("hairstyle.collapse")}
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              {t("hairstyle.showAll")}
            </>
          )}
        </button>
      </TabsContent>

      <TabsContent value="custom" className="mt-0">
        {customImage ? (
          <div className="relative aspect-video rounded-xl overflow-hidden group">
            <img
              src={customImage || "/placeholder.svg"}
              alt="Custom hairstyle"
              className="w-full h-full object-cover"
            />
            <button
              onClick={clearCustomImage}
              className="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute top-3 left-3 px-2 py-1 bg-rose-500 rounded-full">
              <span className="text-xs text-white font-medium">{t("hairstyle.selected")}</span>
            </div>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center aspect-video rounded-xl border-2 border-dashed border-border hover:border-rose-500/50 hover:bg-rose-500/5 cursor-pointer transition-all">
            <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
            <span className="text-sm text-muted-foreground">{t("hairstyle.uploadRef")}</span>
          </label>
        )}
      </TabsContent>
    </Tabs>
  )
}
