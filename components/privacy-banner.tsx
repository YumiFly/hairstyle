"use client"

import { Shield, Lock, Trash2 } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function PrivacyBanner() {
  const { t } = useI18n()

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold">{t("privacy.title")}</h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <Lock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">{t("privacy.encryption")}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{t("privacy.encryptionDesc")}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Trash2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">{t("privacy.delete")}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{t("privacy.deleteDesc")}</p>
            </div>
          </div>

          <div className="flex gap-3 sm:col-span-2 md:col-span-1">
            <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">{t("privacy.noSave")}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{t("privacy.noSaveDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
