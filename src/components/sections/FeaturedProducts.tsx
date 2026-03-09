'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data';

export default function FeaturedProducts() {
  const t = useTranslations('featured');
  const locale = useLocale();
  const featured = products.slice(0, 4);

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-brick-ember-500">///</p>
          <h2 className="text-4xl font-bold text-silver-50 md:text-5xl">{t('title')}</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
      </div>
    </section>
  );
}
