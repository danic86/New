'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useLocale, useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="scan-lines grain relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brick-ember-950/40 via-black to-dark-walnut-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,15,11,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(241,97,14,0.06),transparent_50%)]" />

      {/* Reticle crosshair effect */}
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
        <div className="absolute left-1/2 top-0 h-full w-px bg-silver-400" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-silver-400" />
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-silver-400" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4 font-mono text-xs tracking-[0.3em] text-brick-ember-500"
        >
          BREAKER TACTICAL SOLUTIONS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-5xl font-bold text-silver-50 md:text-7xl lg:text-8xl"
        >
          {t('headline')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-silver-400 md:text-xl"
        >
          {t('subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href={`/${locale}/optics`} variant="primary" size="lg">
            {t('cta_optics')}
          </Button>
          <Button href={`/${locale}/range-solutions`} variant="secondary" size="lg">
            {t('cta_range')}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-silver-600">{t('scroll_indicator')}</span>
          <svg className="h-5 w-5 text-silver-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
