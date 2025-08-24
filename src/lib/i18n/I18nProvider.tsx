import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { I18nContext } from "./I18nContext";
import type { Language, Translations, I18nConfig, I18nContextType } from './types';

// Importaciones dinámicas de las traducciones
const translations: Record<Language, () => Promise<{ default: Translations }>> = {
  es: () => import('../../data/translations/es.json'),
  en: () => import('../../data/translations/en.json'),
};

const config: I18nConfig = {
  fallbackLanguage: 'es',
  supportedLanguages: ['es', 'en'],
  autoDetect: true,
};

// Función helper para obtener valor anidado del objeto de traducciones
const getNestedValue = (obj: unknown, path: string): string => {
  return path.split('.').reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown) as string || path;
};

// Detectar idioma del navegador
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return config.fallbackLanguage;

  const browserLang = navigator.language.split('-')[0] as Language;
  return config.supportedLanguages.includes(browserLang)
    ? browserLang
    : config.fallbackLanguage;
};

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(config.fallbackLanguage);
  const [currentTranslations, setCurrentTranslations] = useState<Translations | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Función para cargar traducciones
  const loadTranslations = async (lang: Language): Promise<Translations> => {
    try {
      const module = await translations[lang]();
      return module.default;
    } catch (error) {
      console.warn(`Failed to load translations for ${lang}, falling back to ${config.fallbackLanguage}`);
      if (lang !== config.fallbackLanguage) {
        const fallbackModule = await translations[config.fallbackLanguage]();
        return fallbackModule.default;
      }
      throw error;
    }
  };

  // Función para cambiar idioma
  const changeLanguage = async (lang: Language) => {
    if (!config.supportedLanguages.includes(lang)) {
      console.warn(`Language ${lang} is not supported`);
      return;
    }

    setIsLoading(true);
    try {
      const newTranslations = await loadTranslations(lang);
      setLanguage(lang);
      setCurrentTranslations(newTranslations);
      localStorage.setItem('clarity-language', lang);

      // Actualizar el título del documento
      document.title = `Clarity - ${getNestedValue(newTranslations, 'landing.title')} ${getNestedValue(newTranslations, 'landing.titleHighlight')}`;

      // Actualizar el idioma del documento HTML
      document.documentElement.lang = lang;
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Función de traducción
  const t = (key: string): string => {
    if (!currentTranslations) return key;
    return getNestedValue(currentTranslations, key);
  };

  // Inicialización
  useEffect(() => {
    const initializeLanguage = async () => {
      let initialLanguage = config.fallbackLanguage;

      // 1. Verificar localStorage
      const savedLanguage = localStorage.getItem('clarity-language') as Language;
      if (savedLanguage && config.supportedLanguages.includes(savedLanguage)) {
        initialLanguage = savedLanguage;
      }
      // 2. Auto-detectar si está habilitado y no hay idioma guardado
      else if (config.autoDetect && !savedLanguage) {
        initialLanguage = detectBrowserLanguage();
      }

      await changeLanguage(initialLanguage);
    };

    initializeLanguage();
  }, []);

  const value: I18nContextType = {
    language,
    translations: currentTranslations,
    isLoading,
    changeLanguage,
    t,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}