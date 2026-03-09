'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import MobileNav from './MobileNav';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: t('optics'),
      href: `/${locale}/optics`,
      children: [
        { label: t('night_vision'), href: `/${locale}/optics?category=night-vision` },
        { label: t('thermal'), href: `/${locale}/optics?category=thermal` },
        { label: t('all_products'), href: `/${locale}/optics` },
      ],
    },
    {
      label: t('range_solutions'),
      href: `/${locale}/range-solutions`,
      children: [
        { label: t('range_design'), href: `/${locale}/range-solutions` },
        { label: t('range_programs'), href: `/${locale}/range-solutions#programs` },
      ],
    },
    {
      label: t('training'),
      href: `/${locale}/training`,
      children: [
        { label: t('long_range'), href: `/${locale}/training#long-range` },
        { label: t('pistol'), href: `/${locale}/training#pistol` },
        { label: t('all_programs'), href: `/${locale}/training` },
        { label: t('schedule'), href: `/${locale}/training#schedule` },
      ],
    },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Breaker Tactical Solutions home">
            <div className="flex h-10 w-10 items-center justify-center border-2 border-brick-ember-500 bg-brick-ember-500/10">
              <span className="font-heading text-lg font-bold text-brick-ember-500">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="block font-heading text-sm font-bold uppercase tracking-widest text-silver-50">Breaker</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-silver-500">Tactical Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 font-heading text-xs font-bold uppercase tracking-wider text-silver-400 transition-colors hover:text-silver-50"
                >
                  {item.label}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-48 border border-silver-800 bg-alabaster-grey-950 py-1 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-silver-400 transition-colors hover:bg-silver-900 hover:text-silver-50"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href={`/${locale}/contact`}
              className="hidden bg-brick-ember-500 px-5 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brick-ember-600 lg:inline-block"
            >
              {t('get_quote')}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-silver-400 hover:text-silver-50 lg:hidden"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className={`h-px transition-opacity duration-300 ${scrolled ? 'bg-silver-800 opacity-100' : 'opacity-0'}`} />
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
