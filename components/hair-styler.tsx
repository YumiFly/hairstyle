"use client"

import { useState } from "react"
import { ImageUploader } from "./image-uploader"
import { HairstyleSelector } from "./hairstyle-selector"
import { ColorPicker } from "./color-picker"
import { ResultPreview } from "./result-preview"
import { Button } from "@/components/ui/button"
import { Wand2, Loader2 } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { generateHairStyle } from "@/lib/api/hair-styling"

export function HairStyler() {
  const { t } = useI18n()
  const [portraitImage, setPortraitImage] = useState<string | null>(null)
  const [hairstyleImage, setHairstyleImage] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [resultImage, setResultImage] = useState<string | null>(null)

  const canGenerate = portraitImage && (hairstyleImage || selectedColor)

  const handleGenerate = async () => {
    if (!canGenerate || !portraitImage) return

    setIsGenerating(true)

    const response = await generateHairStyle({
      faceImage: portraitImage,
      hairstyleImage: hairstyleImage || undefined,
      hairColor: selectedColor || undefined,
    })

    if (response.success && response.resultImage) {
      setResultImage(response.resultImage)
    } else {
      // Fallback to original image on error
      setResultImage(portraitImage)
    }

    setIsGenerating(false)
  }

  const handleReset = () => {
    setPortraitImage(null)
    setHairstyleImage(null)
    setSelectedColor(null)
    setResultImage(null)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Panel - Inputs */}
        <div className="space-y-4 sm:space-y-6">
          {/* Portrait Upload */}
          <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 font-semibold text-xs sm:text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{t("upload.title")}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("upload.subtitle")}</p>
              </div>
            </div>
            <ImageUploader image={portraitImage} onImageChange={setPortraitImage} required />
          </div>

          {/* Hairstyle Selection */}
          <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-semibold text-xs sm:text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{t("hairstyle.title")}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("hairstyle.subtitle")}</p>
              </div>
            </div>
            <HairstyleSelector selectedImage={hairstyleImage} onSelect={setHairstyleImage} />
          </div>

          {/* Color Selection */}
          <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 font-semibold text-xs sm:text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{t("color.title")}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("color.subtitle")}</p>
              </div>
            </div>
            <ColorPicker selectedColor={selectedColor} onSelect={setSelectedColor} />
          </div>
        </div>

        {/* Right Panel - Preview & Result */}
        <div className="lg:sticky lg:top-24 h-fit">
          <ResultPreview portraitImage={portraitImage} resultImage={resultImage} isGenerating={isGenerating} />

          <div className="flex gap-3 mt-4 sm:mt-6">
            <Button
              variant="outline"
              className="flex-1 h-11 sm:h-12 bg-transparent text-sm"
              onClick={handleReset}
              disabled={isGenerating}
            >
              {t("btn.reset")}
            </Button>
            <Button
              className="flex-1 h-11 sm:h-12 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white border-0 text-sm"
              onClick={handleGenerate}
              disabled={!canGenerate || isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t("btn.generating")}
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 mr-2" />
                  {t("btn.generate")}
                </>
              )}
            </Button>
          </div>

          {!canGenerate && portraitImage && (
            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">{t("btn.selectHint")}</p>
          )}
        </div>
      </div>
    </div>
  )
}
