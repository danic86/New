'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const t = useTranslations('nav');
  const locale = useLocale();

  const links = [
    { href: `/${locale}/optics`, label: t('optics') },
    { href: `/${locale}/range-solutions`, label: t('range_solutions') },
    { href: `/${locale}/training`, label: t('training') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-2 text-silver-400 hover:text-silver-50"
            aria-label="Close menu"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Nav links */}
          <nav className="flex h-full flex-col items-center justify-center gap-2" aria-label="Mobile navigation">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block px-6 py-4 font-heading text-3xl font-bold uppercase tracking-wider text-silver-50 transition-colors hover:text-brick-ember-400"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + links.length * 0.08, duration: 0.4 }}
              className="mt-6"
            >
              <Link
                href={`/${locale}/contact`}
                onClick={onClose}
                className="inline-block bg-brick-ember-500 px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white hover:bg-brick-ember-600"
              >
                {t('get_quote')}
              </Link>
            </motion.div>
          </nav>

          {/* Accent line */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brick-ember-500 via-dark-walnut-500 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
