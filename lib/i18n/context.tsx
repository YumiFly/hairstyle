"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, locales, getTranslation } from "./translations"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0] as Locale
    if (locales.includes(browserLang)) {
      setLocaleState(browserLang)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    document.documentElement.lang = newLocale === "zh" ? "zh-CN" : newLocale
  }

  const t = (key: string) => getTranslation(locale, key)

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
