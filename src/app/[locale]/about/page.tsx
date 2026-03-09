'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const values = ['precision', 'integrity', 'innovation', 'service'] as const;

const teamMembers = [
  { name: 'Colonel James Breaker (Ret.)', role: 'Founder & CEO' },
  { name: 'Dr. Sarah Kim', role: 'VP, Optics Division' },
  { name: 'Mike Torres', role: 'VP, Range & Training' },
  { name: 'Elena Vasquez', role: 'Director of Operations' },
];

export default function AboutPage() {
  const t = useTranslations('about_page');

  return (
    <section className="bg-black pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-brick-ember-500">///</p>
          <h1 className="text-5xl font-bold text-silver-50 md:text-6xl">{t('title')}</h1>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="mb-6 text-3xl font-bold text-silver-50">{t('story_title')}</h2>
          <div className="space-y-4 text-silver-400 leading-relaxed">
            <p>{t('story_p1')}</p>
            <p>{t('story_p2')}</p>
            <p>{t('story_p3')}</p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 border-l-2 border-brick-ember-500 bg-silver-950 p-8"
        >
          <h2 className="mb-4 text-2xl font-bold text-silver-50">{t('mission_title')}</h2>
          <p className="text-lg text-silver-300 italic leading-relaxed">{t('mission')}</p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-10 text-3xl font-bold text-silver-50">{t('values_title')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-silver-800 bg-silver-950 p-6"
              >
                <div className="mb-3 font-mono text-xs text-brick-ember-500">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mb-2 font-heading text-xl font-bold uppercase text-silver-50">{t(`value_${value}`)}</h3>
                <p className="text-sm text-silver-400 leading-relaxed">{t(`value_${value}_desc`)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-10 text-3xl font-bold text-silver-50">{t('team_title')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="border border-silver-800 bg-silver-950">
                <div className="flex h-56 items-center justify-center bg-alabaster-grey-950">
                  <svg className="h-20 w-20 text-silver-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold uppercase text-silver-50">{member.name}</h3>
                  <p className="mt-1 font-mono text-xs text-dark-walnut-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Breaker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-3xl font-bold text-silver-50">{t('why_title')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {(['why_1', 'why_2', 'why_3', 'why_4'] as const).map((key, i) => (
              <div key={key} className="flex items-start gap-4 border border-silver-800 bg-silver-950 p-5">
                <span className="font-mono text-sm text-brick-ember-500">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm text-silver-300">{t(key)}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
