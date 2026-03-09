'use client';

import { motion } from 'framer-motion';
import { Instructor } from '@/types';

interface InstructorCardProps {
  instructor: Instructor;
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-silver-800 bg-silver-950 p-6"
    >
      {/* Photo placeholder */}
      <div className="mb-4 flex h-48 items-center justify-center bg-alabaster-grey-950">
        <svg className="h-20 w-20 text-silver-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h3 className="font-heading text-xl font-bold uppercase text-silver-50">{instructor.name}</h3>
      <p className="mt-1 font-mono text-xs text-brick-ember-400">{instructor.specialty}</p>
      <p className="mt-1 text-xs text-silver-500">{instructor.credentials}</p>
      <p className="mt-3 text-sm text-silver-400 leading-relaxed">{instructor.bio}</p>
    </motion.div>
  );
}
