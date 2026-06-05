import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContextValue';

export function useLang() {
  return useContext(LanguageContext);
}
