'use client'

import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'

import { getOptions } from './settings'

// on client side the normal singleton is ok
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`))
  )
  // .use(LocizeBackend) // locize backend could be used on client side, but prefer to keep it in sync with server side
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
  })
  .then((r) => r)

export function useTranslation(lng, ns, options) {
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng).then((r) => r)
  return useTranslationOrg(ns, options)
}
