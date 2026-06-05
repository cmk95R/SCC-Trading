import { useState, useCallback, type ReactNode } from 'react';
import { LanguageContext } from './LanguageContextValue';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
