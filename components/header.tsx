"use client"

import { Sparkles } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useI18n } from "@/lib/i18n/context"

export function Header() {
  const { t } = useI18n()

  return (
    <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">StyleAI</span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              {t("nav.inspiration")}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t("nav.guide")}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t("nav.about")}
            </a>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
