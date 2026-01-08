"use client"

import { ImageIcon, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

interface ResultPreviewProps {
  portraitImage: string | null
  resultImage: string | null
  isGenerating: boolean
}

export function ResultPreview({ portraitImage, resultImage, isGenerating }: ResultPreviewProps) {
  const { t } = useI18n()

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="px-4 sm:px-6 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-foreground">{t("preview.title")}</h3>
        {resultImage && (
          <span className="text-xs text-rose-500 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {t("preview.aiGenerated")}
          </span>
        )}
      </div>

      <div className="aspect-[3/4] relative">
        {isGenerating ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-rose-500/10 to-amber-500/10">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-rose-500/20 border-t-rose-500 animate-spin" />
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center px-4">{t("preview.generating")}</p>
            <p className="text-xs text-muted-foreground mt-1">{t("preview.generatingTime")}</p>
          </div>
        ) : resultImage ? (
          <div className="relative w-full h-full">
            <img
              src={resultImage || "/placeholder.svg"}
              alt="Generated result"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <p className="text-sm font-medium text-gray-900">{t("preview.complete")}</p>
                <p className="text-xs text-gray-500 mt-1">{t("preview.saveHint")}</p>
              </div>
            </div>
          </div>
        ) : portraitImage ? (
          <div className="relative w-full h-full">
            <img
              src={portraitImage || "/placeholder.svg"}
              alt="Portrait"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-rose-500" />
                </div>
                <p className="text-sm text-foreground font-medium">{t("preview.ready")}</p>
                <p className="text-xs text-muted-foreground mt-1">{t("preview.readyHint")}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/30">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">{t("preview.uploadHint")}</p>
          </div>
        )}
      </div>
    </div>
  )
}
