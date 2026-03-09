'use client';

import { useLocale, useTranslations } from 'next-intl';
import CTABanner from '@/components/ui/CTABanner';

export default function CTABannerSection() {
  const t = useTranslations('cta_banner');
  const locale = useLocale();

  return (
    <CTABanner
      title={t('title')}
      description={t('description')}
      buttonText={t('button')}
      buttonHref={`/${locale}/contact`}
    />
  );
}
