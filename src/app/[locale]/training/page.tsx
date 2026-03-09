'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import TrainingCard from '@/components/ui/TrainingCard';
import FilterBar from '@/components/ui/FilterBar';
import InstructorCard from '@/components/ui/InstructorCard';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import { courses, instructors } from '@/lib/data';

export default function TrainingPage() {
  const t = useTranslations('training_page');
  const ct = useTranslations('cta_banner');
  const locale = useLocale();
  const [typeFilter, setTypeFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');

  const typeFilters = [
    { label: t('filter_all'), value: 'all' },
    { label: t('long_range_title'), value: 'long-range' },
    { label: t('pistol_title'), value: 'pistol' },
  ];

  const levelFilters = [
    { label: t('filter_all'), value: 'all' },
    { label: t('beginner'), value: 'beginner' },
    { label: t('intermediate'), value: 'intermediate' },
    { label: t('advanced'), value: 'advanced' },
  ];

  const filteredCourses = courses.filter((c) => {
    if (c.category === 'custom') return false;
    if (typeFilter !== 'all' && c.category !== typeFilter) return false;
    if (levelFilter !== 'all' && c.skillLevel !== levelFilter) return false;
    return true;
  });

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

          {/* Long Range Section */}
          <motion.div
            id="long-range"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <h2 className="mb-4 text-3xl font-bold text-silver-50">{t('long_range_title')}</h2>
            <p className="mb-4 max-w-3xl text-silver-400 leading-relaxed">{t('long_range_desc')}</p>
            <div className="mb-2 flex flex-wrap gap-2">
              {['beginner', 'intermediate', 'advanced', 'professional'].map((level) => (
                <span key={level} className="border border-silver-800 px-3 py-1 font-mono text-xs text-silver-500">{t(level)}</span>
              ))}
            </div>
          </motion.div>

          {/* Pistol Section */}
          <motion.div
            id="pistol"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <h2 className="mb-4 text-3xl font-bold text-silver-50">{t('pistol_title')}</h2>
            <p className="mb-4 max-w-3xl text-silver-400 leading-relaxed">{t('pistol_desc')}</p>
            <div className="flex flex-wrap gap-2">
              {['beginner', 'intermediate', 'advanced', 'tactical'].map((level) => (
                <span key={level} className="border border-silver-800 px-3 py-1 font-mono text-xs text-silver-500">{t(level)}</span>
              ))}
            </div>
          </motion.div>

          {/* Custom Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 border-l-2 border-dark-walnut-500 bg-silver-950 p-8"
          >
            <h2 className="mb-4 text-3xl font-bold text-silver-50">{t('custom_title')}</h2>
            <p className="mb-6 max-w-3xl text-silver-400 leading-relaxed">{t('custom_desc')}</p>
            <Button href={`/${locale}/contact`} variant="secondary">
              {t('custom_cta')}
            </Button>
          </motion.div>

          {/* Schedule */}
          <motion.div
            id="schedule"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 scroll-mt-24"
          >
            <h2 className="mb-8 text-3xl font-bold text-silver-50">{t('schedule_title')}</h2>

            <div className="mb-8 flex flex-wrap items-center gap-6">
              <FilterBar filters={typeFilters} activeFilter={typeFilter} onFilterChange={setTypeFilter} />
              <div className="h-6 w-px bg-silver-800" />
              <FilterBar filters={levelFilters} activeFilter={levelFilter} onFilterChange={setLevelFilter} />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {filteredCourses.map((course) => (
                <TrainingCard
                  key={course.id}
                  course={course}
                  registerText={t('register')}
                  spotsRemainingText={t('spots_remaining')}
                  locale={locale}
                />
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="py-12 text-center">
                <p className="font-mono text-silver-500">No courses match the selected filters.</p>
              </div>
            )}
          </motion.div>

          {/* Instructors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-3xl font-bold text-silver-50">{t('instructors_title')}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {instructors.map((instructor) => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title={ct('title')}
        description={ct('description')}
        buttonText={ct('button')}
        buttonHref={`/${locale}/contact`}
      />
    </>
  );
}
