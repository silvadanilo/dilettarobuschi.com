import { translations, Locale } from './translations';

export function useTranslation(locale: Locale) {
    return {
        t: translations[locale],
        locale,
    };
}
