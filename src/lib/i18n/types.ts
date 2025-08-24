export type Language = 'es' | 'en';

export interface Translations {
  common: {
    loading: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    create: string;
    close: string;
  };
  navigation: {
    workspace: string;
    home: string;
    boards: string;
  };
  landing: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    hero: {
      createBoard: string;
    };
    features: {
      visual: {
        title: string;
        description: string;
      };
      noRegister: {
        title: string;
        description: string;
      };
      subBoards: {
        title: string;
        description: string;
      };
    };
    footer: {
      madeWith: string;
      openSource: string;
    };
  };
  workspace: {
    title: string;
    createNewBoard: string;
    myBoards: string;
    recentBoards: string;
  };
  board: {
    untitled: string;
    addCard: string;
    addText: string;
    addImage: string;
    addNote: string;
  };
  settings: {
    title: string;
    language: string;
    theme: string;
    dark: string;
    light: string;
    auto: string;
  };
}

export interface I18nConfig {
  fallbackLanguage: Language;
  supportedLanguages: Language[];
  autoDetect: boolean;
}

export interface I18nContextType {
  language: Language;
  translations: Translations | null;
  isLoading: boolean;
  changeLanguage: (lang: Language) => Promise<void>;
  t: (key: string) => string;
}