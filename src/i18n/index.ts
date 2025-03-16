import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

// Detectar el idioma del navegador
const locale = navigator.language.split('-')[0] || 'en'
const fallbackLocale = 'en'

export default createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: fallbackLocale,
  messages: {
    en,
    es
  }
})
