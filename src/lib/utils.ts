import { type Locale, rtlLocales } from './i18n';

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function formatCurrency(amount: number, locale: string = 'en-US', currency: string = 'USD'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number, locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(num);
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
