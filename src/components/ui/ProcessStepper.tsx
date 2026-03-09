'use client';

import { motion } from 'framer-motion';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepperProps {
  steps: Step[];
}

export default function ProcessStepper({ steps }: ProcessStepperProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-brick-ember-500 via-dark-walnut-500 to-silver-800 md:left-8" />

      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative flex gap-6 pl-2 md:gap-8"
          >
            {/* Step number */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border-2 border-brick-ember-500 bg-alabaster-grey-950 font-mono text-sm font-bold text-brick-ember-400 md:h-14 md:w-14 md:text-lg">
              {String(step.number).padStart(2, '0')}
            </div>

            {/* Content */}
            <div className="pb-2">
              <h4 className="mb-2 font-heading text-xl font-bold uppercase text-silver-50">{step.title}</h4>
              <p className="text-sm text-silver-400 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
