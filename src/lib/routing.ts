import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'de', 'pt', 'ar', 'ja', 'ko', 'zh'] as const,
  defaultLocale: 'en',
  localePrefix: 'always',
});
