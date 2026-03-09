import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export const locales = routing.locales;
export type Locale = (typeof locales)[number];
export const defaultLocale = routing.defaultLocale;
export const rtlLocales: Locale[] = ['ar'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ar: 'العربية',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
