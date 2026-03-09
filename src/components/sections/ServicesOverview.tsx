'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const services = [
  {
    titleKey: 'optics_title',
    descKey: 'optics_desc',
    linkKey: 'optics_link',
    href: '/optics',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    titleKey: 'range_title',
    descKey: 'range_desc',
    linkKey: 'range_link',
    href: '/range-solutions',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    titleKey: 'training_title',
    descKey: 'training_desc',
    linkKey: 'training_link',
    href: '/training',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ServicesOverview() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <section className="bg-alabaster-grey-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-brick-ember-500">///</p>
          <h2 className="text-4xl font-bold text-silver-50 md:text-5xl">{t('title')}</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group border border-silver-800 bg-silver-950 p-8 transition-all duration-300 hover:border-brick-ember-700 hover:shadow-[0_0_30px_rgba(244,15,11,0.08)]"
            >
              <div className="mb-6 text-silver-600 transition-colors group-hover:text-brick-ember-500">
                {service.icon}
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold uppercase text-silver-50">{t(service.titleKey)}</h3>
              <p className="mb-6 text-sm text-silver-400 leading-relaxed">{t(service.descKey)}</p>
              <Link
                href={`/${locale}${service.href}`}
                className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-dark-walnut-500 transition-colors hover:text-dark-walnut-400"
              >
                {t(service.linkKey)}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
