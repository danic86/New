'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  viewDetailsText: string;
  requestQuoteText: string;
  locale: string;
}

const marketColors = {
  MIL: 'bg-brick-ember-900 text-brick-ember-300 border border-brick-ember-700',
  LE: 'bg-dark-walnut-900 text-dark-walnut-300 border border-dark-walnut-700',
  CIV: 'bg-alabaster-grey-900 text-alabaster-grey-300 border border-alabaster-grey-700',
};

export default function ProductCard({ product, viewDetailsText, requestQuoteText, locale }: ProductCardProps) {
  const displayPrice = product.price
    ? new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(product.price)
    : null;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative flex flex-col overflow-hidden border border-silver-800 bg-silver-950 transition-all duration-300 hover:border-brick-ember-700 hover:shadow-[0_0_20px_rgba(244,15,11,0.1)]"
    >
      {/* Image placeholder */}
      <div className="relative flex h-56 items-center justify-center bg-alabaster-grey-950">
        <div className="flex flex-col items-center gap-2 text-silver-700">
          <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <div className="absolute top-3 right-3 flex gap-1">
          {product.markets.map((market) => (
            <span key={market} className={`px-2 py-0.5 text-[10px] font-mono font-bold ${marketColors[market]}`}>
              {market}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1 font-mono text-xs text-brick-ember-500">{product.model}</p>
        <h3 className="mb-3 font-heading text-lg font-bold uppercase text-silver-50">{product.name}</h3>

        {/* Mini spec table */}
        <div className="mb-4 space-y-1 border-t border-silver-800 pt-3">
          {product.specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="flex justify-between text-xs">
              <span className="text-silver-500">{spec.label}</span>
              <span className="font-mono text-silver-200">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          {displayPrice ? (
            <span className="font-mono text-sm font-bold text-dark-walnut-400">{displayPrice}</span>
          ) : (
            <Button href={`/${locale}/contact`} variant="ghost" size="sm">
              {requestQuoteText}
            </Button>
          )}
          <Button href={`/${locale}/optics/${product.slug}`} variant="outline" size="sm">
            {viewDetailsText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
