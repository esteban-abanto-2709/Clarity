import { useContext } from 'react';
import { I18nContext } from "./I18nContext";
import type { I18nContextType } from './types';

// Hook personalizado para usar i18n
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Hook específico para obtener solo la función de traducción
export function useTranslation() {
  const { t } = useI18n();
  return { t };
}