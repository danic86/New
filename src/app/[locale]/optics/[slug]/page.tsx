'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import SpecTable from '@/components/ui/SpecTable';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data';

export default function ProductDetailPage() {
  const params = useParams();
  const t = useTranslations('optics_page');
  const locale = useLocale();
  const slug = params.slug as string;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black pt-24">
        <p className="font-mono text-silver-500">Product not found.</p>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const applications = product.markets.map((m) => {
    switch (m) {
      case 'MIL': return 'Military Operations';
      case 'LE': return 'Law Enforcement';
      case 'CIV': return 'Civilian / Hunting';
    }
  });

  return (
    <section className="bg-black pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back link */}
        <Link
          href={`/${locale}/optics`}
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-silver-500 transition-colors hover:text-silver-300"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('back_to_optics')}
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image gallery placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex aspect-square items-center justify-center border border-silver-800 bg-alabaster-grey-950">
              <div className="flex flex-col items-center gap-3 text-silver-700">
                <svg className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="font-mono text-xs">{product.model}</span>
              </div>
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="mb-2 font-mono text-sm text-brick-ember-500">{product.model}</p>
            <h1 className="mb-4 text-4xl font-bold text-silver-50 md:text-5xl">{product.name}</h1>

            <div className="mb-4 flex gap-2">
              {product.markets.map((m) => (
                <span key={m} className="border border-silver-700 px-2 py-0.5 font-mono text-xs text-silver-400">{m}</span>
              ))}
            </div>

            <p className="mb-8 text-silver-400 leading-relaxed">{product.description}</p>

            <div className="mb-8 flex flex-wrap gap-4">
              <Button href={`/${locale}/contact`} variant="primary" size="lg">
                {t('request_quote')}
              </Button>
              <Button variant="outline" size="lg" ariaLabel={t('download_spec_sheet')}>
                {t('download_spec_sheet')}
              </Button>
            </div>

            <SpecTable specs={product.specs} title={t('specifications')} />
          </motion.div>
        </div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-silver-50">{t('applications')}</h2>
          <div className="flex flex-wrap gap-3">
            {applications.map((app) => (
              <span key={app} className="border border-silver-800 bg-silver-950 px-4 py-2 font-mono text-sm text-silver-300">
                {app}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related products */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="mb-8 text-2xl font-bold text-silver-50">{t('related_products')}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  viewDetailsText={t('view_details')}
                  requestQuoteText={t('request_quote')}
                  locale={locale}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
