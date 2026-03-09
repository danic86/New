'use client';

import { motion } from 'framer-motion';
import { Course } from '@/types';
import Button from './Button';

interface TrainingCardProps {
  course: Course;
  registerText: string;
  spotsRemainingText: string;
  locale: string;
}

const levelColors = {
  beginner: 'text-green-400 border-green-800',
  intermediate: 'text-dark-walnut-400 border-dark-walnut-800',
  advanced: 'text-brick-ember-400 border-brick-ember-800',
  professional: 'text-pitch-black-500 border-pitch-black-800',
  tactical: 'text-brick-ember-300 border-brick-ember-700',
};

export default function TrainingCard({ course, registerText, spotsRemainingText, locale }: TrainingCardProps) {
  const displayPrice = course.price
    ? new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(course.price)
    : 'Custom Quote';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col border border-silver-800 bg-silver-950 p-5 transition-all hover:border-dark-walnut-700"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg font-bold uppercase text-silver-50">{course.name}</h3>
          <p className="mt-1 font-mono text-xs text-silver-500">{course.duration} &middot; {course.format}</p>
        </div>
        <span className={`shrink-0 border px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${levelColors[course.skillLevel]}`}>
          {course.skillLevel}
        </span>
      </div>

      <p className="mb-4 text-sm text-silver-400">{course.description}</p>

      <div className="mb-4 flex items-center gap-4 border-t border-silver-800 pt-3 font-mono text-xs text-silver-500">
        <span>{course.date}</span>
        <span>&middot;</span>
        <span>{course.location}</span>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <div>
          <span className="font-mono text-lg font-bold text-dark-walnut-400">{displayPrice}</span>
          {course.spotsRemaining > 0 && (
            <p className="text-xs text-silver-500">
              {course.spotsRemaining} {spotsRemainingText}
            </p>
          )}
        </div>
        <Button href={`/${locale}/contact`} variant="primary" size="sm">
          {registerText}
        </Button>
      </div>
    </motion.div>
  );
}
