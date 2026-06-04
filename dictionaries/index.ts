import type { Locale } from '@/i18n.config'

const dictionaries = {
  sr: () => import('./sr.json').then(m => m.default),
  en: () => import('./en.json').then(m => m.default),
}

export const getDictionary = (locale: Locale) => dictionaries[locale]()