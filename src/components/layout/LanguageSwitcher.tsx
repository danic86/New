'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { localeNames, type Locale } from '@/lib/i18n';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (locale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 text-silver-400 transition-colors hover:text-silver-50"
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <span className="hidden text-xs font-bold uppercase md:inline">{currentLocale}</span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-full z-50 mt-2 w-44 border border-silver-800 bg-alabaster-grey-950 py-1 shadow-xl"
        >
          {(Object.entries(localeNames) as [Locale, string][]).map(([locale, name]) => (
            <button
              key={locale}
              role="option"
              aria-selected={locale === currentLocale}
              onClick={() => switchLocale(locale)}
              className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${
                locale === currentLocale
                  ? 'bg-brick-ember-500/10 text-brick-ember-400'
                  : 'text-silver-400 hover:bg-silver-900 hover:text-silver-50'
              }`}
            >
              <span className="font-mono text-xs uppercase text-silver-600">{locale}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
