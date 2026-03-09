'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import ProductCard from '@/components/ui/ProductCard';
import FilterBar from '@/components/ui/FilterBar';
import CTABanner from '@/components/ui/CTABanner';
import { products } from '@/lib/data';

export default function OpticsPage() {
  const t = useTranslations('optics_page');
  const ct = useTranslations('cta_banner');
  const locale = useLocale();
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [marketFilter, setMarketFilter] = useState('all');

  const categoryFilters = [
    { label: t('filter_all'), value: 'all' },
    { label: t('night_vision'), value: 'night-vision' },
    { label: t('thermal'), value: 'thermal' },
  ];

  const marketFilters = [
    { label: t('filter_all'), value: 'all' },
    { label: t('filter_military'), value: 'MIL' },
    { label: t('filter_law_enforcement'), value: 'LE' },
    { label: t('filter_civilian'), value: 'CIV' },
  ];

  const filtered = products.filter((p) => {
    if (categoryFilter !== 'all' && p.category !== categoryFilter) return false;
    if (marketFilter !== 'all' && !p.markets.includes(marketFilter as 'MIL' | 'LE' | 'CIV')) return false;
    return true;
  });

  return (
    <>
      <section className="bg-black pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="mb-2 font-mono text-xs tracking-[0.3em] text-brick-ember-500">///</p>
            <h1 className="mb-4 text-5xl font-bold text-silver-50 md:text-6xl">{t('title')}</h1>
            <p className="max-w-2xl text-lg text-silver-400">{t('intro')}</p>
          </motion.div>

          {/* Filters */}
          <div className="mb-12 space-y-4">
            <div className="flex flex-wrap items-center gap-6">
              <FilterBar filters={categoryFilters} activeFilter={categoryFilter} onFilterChange={setCategoryFilter} />
              <div className="h-6 w-px bg-silver-800" />
              <FilterBar filters={marketFilters} activeFilter={marketFilter} onFilterChange={setMarketFilter} />
            </div>
          </div>

          {/* Product grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard
                  product={product}
                  viewDetailsText={t('view_details')}
                  requestQuoteText={t('request_quote')}
                  locale={locale}
                />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-mono text-silver-500">No products match the selected filters.</p>
            </div>
          )}
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
