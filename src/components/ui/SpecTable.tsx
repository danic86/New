'use client';

import { ProductSpec } from '@/types';

interface SpecTableProps {
  specs: ProductSpec[];
  title?: string;
}

export default function SpecTable({ specs, title }: SpecTableProps) {
  return (
    <div>
      {title && <h3 className="mb-4 font-heading text-xl font-bold uppercase text-silver-50">{title}</h3>}
      <div className="border border-silver-800">
        {specs.map((spec, i) => (
          <div
            key={spec.label}
            className={`flex justify-between px-4 py-3 ${i % 2 === 0 ? 'bg-silver-950' : 'bg-alabaster-grey-950'}`}
          >
            <span className="text-sm text-silver-400">{spec.label}</span>
            <span className="font-mono text-sm font-medium text-silver-100">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
