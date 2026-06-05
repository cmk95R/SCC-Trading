import { useLang } from './useLang';
import { translations } from '../translations';

export function useT() {
  const { lang } = useLang();
  return translations[lang];
}
