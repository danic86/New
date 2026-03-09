'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

const categories = [
  {
    key: 'long_range',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    key: 'pistol',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    key: 'custom',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

export default function TrainingHighlight() {
  const t = useTranslations('training_highlight');
  const locale = useLocale();

  return (
    <section className="bg-alabaster-grey-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-xs tracking-[0.3em] text-dark-walnut-500">///</p>
            <h2 className="mb-6 text-4xl font-bold text-silver-50 md:text-5xl">{t('title')}</h2>
            <p className="mb-8 text-lg text-silver-400 leading-relaxed">{t('description')}</p>
            <Button href={`/${locale}/training#schedule`} variant="secondary" size="lg">
              {t('cta')}
            </Button>
          </motion.div>

          {/* Right: Category cards */}
          <div className="grid gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link
                  href={`/${locale}/training`}
                  className="group flex items-center gap-5 border border-silver-800 bg-silver-950 p-5 transition-all hover:border-dark-walnut-700"
                >
                  <div className="text-silver-600 transition-colors group-hover:text-dark-walnut-500">
                    {cat.icon}
                  </div>
                  <span className="font-heading text-lg font-bold uppercase text-silver-50">{t(cat.key)}</span>
                  <svg className="ml-auto h-5 w-5 text-silver-700 transition-all group-hover:translate-x-1 group-hover:text-dark-walnut-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
