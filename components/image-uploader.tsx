"use client"

import type React from "react"
import { useCallback } from "react"
import { Upload, X, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/context"

interface ImageUploaderProps {
  image: string | null
  onImageChange: (image: string | null) => void
  required?: boolean
}

export function ImageUploader({ image, onImageChange, required }: ImageUploaderProps) {
  const { t } = useI18n()

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          onImageChange(e.target?.result as string)
        }
        reader.readAsDataURL(file)
      }
    },
    [onImageChange],
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          onImageChange(e.target?.result as string)
        }
        reader.readAsDataURL(file)
      }
    },
    [onImageChange],
  )

  if (image) {
    return (
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden group">
        <img src={image || "/placeholder.svg"} alt="Uploaded" className="w-full h-full object-cover" />
        <button
          onClick={() => onImageChange(null)}
          className="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    )
  }

  return (
    <label
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={cn(
        "flex flex-col items-center justify-center aspect-[3/4] rounded-xl border-2 border-dashed cursor-pointer transition-all",
        "border-border hover:border-rose-500/50 hover:bg-rose-500/5",
      )}
    >
      <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <User className="w-7 h-7 sm:w-8 sm:h-8 text-muted-foreground" />
      </div>
      <div className="flex items-center gap-2 text-muted-foreground mb-2 px-4 text-center">
        <Upload className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm font-medium">{t("upload.placeholder")}</span>
      </div>
      {required && <span className="text-xs text-rose-500">{t("upload.required")}</span>}
    </label>
  )
}
