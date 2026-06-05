import { createContext } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  toggleLang: () => {},
});
