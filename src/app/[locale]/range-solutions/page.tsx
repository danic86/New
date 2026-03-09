'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import ProcessStepper from '@/components/ui/ProcessStepper';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import { rangeBuilds } from '@/lib/data';

export default function RangeSolutionsPage() {
  const t = useTranslations('range_page');
  const locale = useLocale();

  const steps = [
    { number: 1, title: t('step_consultation'), description: t('step_consultation_desc') },
    { number: 2, title: t('step_design'), description: t('step_design_desc') },
    { number: 3, title: t('step_construction'), description: t('step_construction_desc') },
    { number: 4, title: t('step_outfitting'), description: t('step_outfitting_desc') },
    { number: 5, title: t('step_launch'), description: t('step_launch_desc') },
  ];

  return (
    <>
      <section className="bg-black pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <p className="mb-2 font-mono text-xs tracking-[0.3em] text-brick-ember-500">///</p>
            <h1 className="mb-4 text-5xl font-bold text-silver-50 md:text-6xl">{t('title')}</h1>
            <p className="max-w-2xl text-lg text-silver-400">{t('intro')}</p>
          </motion.div>

          {/* Design & Construction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="mb-10 text-3xl font-bold text-silver-50">{t('design_title')}</h2>
            <ProcessStepper steps={steps} />
          </motion.div>

          {/* Range Programs */}
          <motion.div
            id="programs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 scroll-mt-24"
          >
            <h2 className="mb-6 text-3xl font-bold text-silver-50">{t('programs_title')}</h2>
            <div className="border-l-2 border-dark-walnut-500 pl-6">
              <p className="mb-4 text-lg text-silver-300 leading-relaxed">{t('programs_description')}</p>
              <p className="mb-6 text-silver-500">{t('programs_addon')}</p>
              <Button href={`/${locale}/training`} variant="secondary">
                {t('view_training')}
              </Button>
            </div>
          </motion.div>

          {/* Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-10 text-3xl font-bold text-silver-50">{t('portfolio_title')}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {rangeBuilds.map((build) => (
                <div key={build.id} className="border border-silver-800 bg-silver-950">
                  {/* Image placeholder */}
                  <div className="flex h-48 items-center justify-center bg-alabaster-grey-950">
                    <svg className="h-16 w-16 text-silver-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold uppercase text-silver-50">{build.name}</h3>
                    <div className="mt-2 space-y-1 font-mono text-xs text-silver-500">
                      <p>{build.location}</p>
                      <p>{build.type} &middot; {build.lanes} lanes &middot; {build.maxDistance} max</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title={t('cta_title')}
        description={t('intro')}
        buttonText={t('cta_button')}
        buttonHref={`/${locale}/contact`}
      />
    </>
  );
}
