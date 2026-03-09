'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="border-t border-silver-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-brick-ember-500 bg-brick-ember-500/10">
                <span className="font-heading text-lg font-bold text-brick-ember-500">B</span>
              </div>
              <div>
                <span className="block font-heading text-sm font-bold uppercase tracking-widest text-silver-50">Breaker</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-silver-500">Tactical Solutions</span>
              </div>
            </div>
            <p className="text-sm text-silver-500 leading-relaxed">{t('company_desc')}</p>

            {/* Social placeholders */}
            <div className="mt-6 flex gap-4">
              {['facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                <span key={social} className="flex h-9 w-9 items-center justify-center border border-silver-800 text-silver-600 transition-colors hover:border-silver-600 hover:text-silver-400" aria-label={social}>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <rect width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          {/* Optics links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-silver-50">{t('optics_heading')}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/optics?category=night-vision`} className="text-sm text-silver-500 transition-colors hover:text-dark-walnut-400">{nav('night_vision')}</Link></li>
              <li><Link href={`/${locale}/optics?category=thermal`} className="text-sm text-silver-500 transition-colors hover:text-dark-walnut-400">{nav('thermal')}</Link></li>
              <li><Link href={`/${locale}/optics`} className="text-sm text-silver-500 transition-colors hover:text-dark-walnut-400">{nav('all_products')}</Link></li>
            </ul>
          </div>

          {/* Range & Training links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-silver-50">{t('range_heading')}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/range-solutions`} className="text-sm text-silver-500 transition-colors hover:text-dark-walnut-400">{nav('range_design')}</Link></li>
              <li><Link href={`/${locale}/training`} className="text-sm text-silver-500 transition-colors hover:text-dark-walnut-400">{nav('long_range')}</Link></li>
              <li><Link href={`/${locale}/training`} className="text-sm text-silver-500 transition-colors hover:text-dark-walnut-400">{nav('pistol')}</Link></li>
              <li><Link href={`/${locale}/training#schedule`} className="text-sm text-silver-500 transition-colors hover:text-dark-walnut-400">{nav('schedule')}</Link></li>
            </ul>
          </div>

          {/* Company links + newsletter */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-silver-50">{t('company_heading')}</h3>
            <ul className="mb-6 space-y-2">
              <li><Link href={`/${locale}/about`} className="text-sm text-silver-500 transition-colors hover:text-dark-walnut-400">{nav('about')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-sm text-silver-500 transition-colors hover:text-dark-walnut-400">{nav('contact')}</Link></li>
              <li><span className="text-sm text-silver-600">{t('privacy')}</span></li>
              <li><span className="text-sm text-silver-600">{t('terms')}</span></li>
            </ul>

            <div>
              <h4 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-silver-50">{t('newsletter_title')}</h4>
              <p className="mb-3 text-xs text-silver-500">{t('newsletter_desc')}</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex">
                <label htmlFor="newsletter-email" className="sr-only">{t('newsletter_placeholder')}</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder={t('newsletter_placeholder')}
                  className="w-full border border-silver-800 bg-silver-950 px-3 py-2 font-mono text-xs text-silver-200 placeholder:text-silver-700 focus:border-brick-ember-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-brick-ember-500 px-4 py-2 font-heading text-xs font-bold uppercase text-white transition-colors hover:bg-brick-ember-600"
                >
                  {t('newsletter_submit')}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-silver-800 pt-8 text-center">
          <p className="font-mono text-xs text-silver-600">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
