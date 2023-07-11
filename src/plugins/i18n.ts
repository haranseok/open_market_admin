import type { App } from 'vue'
import { createI18n } from 'vue-i18n'


import en from '../locales/en'
import ko from '../locales/ko'

const messages = {
  en: {
    ...en
  },
  ko: {
    ...ko
  }
}

const getLocale = () => {
  const cookieLanguage = sessionStorage.getItem('language')
  if (cookieLanguage) {
    return cookieLanguage
  }
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return language
}

const i18n = createI18n({
  locale: getLocale(),
  fallbackLocale: getLocale(),
  messages,
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  legacy: false,
  globalInjection: true
})



// export default i18n
export default (app: App<Element>): void => {
  app.use(i18n)
}
