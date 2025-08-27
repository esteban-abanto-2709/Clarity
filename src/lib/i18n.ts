import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar las traducciones directamente
import en from '../data/translations/en.json';
import es from '../data/translations/es.json';

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
};

i18n
  .use(LanguageDetector) // Detecta idioma automáticamente
  .use(initReactI18next) // Integración con React
  .init({
    resources,

    // Idioma por defecto si no se detecta ninguno
    fallbackLng: 'en',

    // Idiomas soportados
    supportedLngs: ['es', 'en'],

    // Configuración del detector de idioma
    detection: {
      // Orden de detección: localStorage -> navegador -> fallback
      order: ['localStorage', 'navigator'],

      // Clave para guardar en localStorage
      lookupLocalStorage: 'clarity-language',

      // No usar cookies ni session storage
      excludeCacheFor: ['cimode'],

      // Cache del idioma seleccionado
      caches: ['localStorage']
    },

    interpolation: {
      // React ya escapa por defecto
      escapeValue: false
    },

    // Configuraciones adicionales
    debug: process.env.NODE_ENV === 'development',

    // Evitar warnings innecesarios
    saveMissing: false,

    // Namespace por defecto
    defaultNS: 'translation',

    // Separador para keys anidadas
    keySeparator: '.',

    // Separador para namespaces (no lo usamos)
    nsSeparator: false
  });

export default i18n;