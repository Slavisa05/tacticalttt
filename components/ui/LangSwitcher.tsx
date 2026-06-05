"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Locale } from "@/i18n.config"

type LangSwitcherProps = {
  label: string
}

export default function LangSwitcher({ label }: LangSwitcherProps) {
  const pathname = usePathname()
  const currentLang = pathname.split("/")[1] as Locale

  const switchLang = (lang: Locale) => {
    const segments = pathname.split('/')
    if (segments.length > 1 && segments[1]) {
      segments[1] = lang
    } else {
      segments.splice(1, 0, lang)
    }
    return segments.join('/')
  }

  const baseButtonClass =
    "flex min-w-12 items-center justify-center rounded-full px-3 py-1.5 text-sm font-bold tracking-[0.18em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"

  return (
    <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center md:gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary md:text-sm md:tracking-[0.22em]">
        {label}
      </p>
        <div className="inline-flex w-full rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur md:w-auto">
            <Link
                className={`${baseButtonClass} flex-1 ${currentLang === "sr" ? "bg-accent text-bg shadow-[0_10px_30px_rgba(215,255,64,0.18)]" : "text-text-primary hover:bg-white/10 hover:text-accent"}`}
                href={switchLang('sr')}
                aria-current={currentLang === "sr" ? "page" : undefined}
            >
                SR
            </Link>
            <Link
                className={`${baseButtonClass} flex-1 ${currentLang === "en" ? "bg-accent text-bg shadow-[0_10px_30px_rgba(215,255,64,0.18)]" : "text-text-primary hover:bg-white/10 hover:text-accent"}`}
                href={switchLang('en')}
                aria-current={currentLang === "en" ? "page" : undefined}
            >
                EN
            </Link>
        </div>
    </div>
  )
}