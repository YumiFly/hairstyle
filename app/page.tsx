"use client"

import { HairStyler } from "@/components/hair-styler"
import { Header } from "@/components/header"
import { PrivacyBanner } from "@/components/privacy-banner"
import { I18nProvider } from "@/lib/i18n/context"
import { useI18n } from "@/lib/i18n/context"

function HomeContent() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-foreground">{t("hero.title1")}</span>
            <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
              {" "}
              {t("hero.title2")}
            </span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            {t("hero.subtitle")}
          </p>
        </div>
        <HairStyler />
        <PrivacyBanner />
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  )
}
