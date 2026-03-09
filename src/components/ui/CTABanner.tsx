'use client';

import { motion } from 'framer-motion';
import Button from './Button';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABanner({ title, description, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-alabaster-grey-950 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-brick-ember-900/30 to-dark-walnut-900/20" />
      <div className="absolute inset-0 grain" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold text-silver-50 md:text-5xl">{title}</h2>
        <p className="mb-8 text-lg text-silver-400">{description}</p>
        <Button href={buttonHref} variant="primary" size="lg">
          {buttonText}
        </Button>
      </motion.div>
    </section>
  );
}
