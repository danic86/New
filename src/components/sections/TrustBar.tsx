'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { key: 'optics_deployed', value: 500, suffix: '+' },
  { key: 'ranges_built', value: 50, suffix: '+' },
  { key: 'shooters_trained', value: 10000, suffix: '+' },
  { key: 'years_experience', value: 15, suffix: '+' },
];

export default function TrustBar() {
  const t = useTranslations('trust');

  return (
    <section className="border-y border-silver-800 bg-silver-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <p className="font-mono text-3xl font-bold text-brick-ember-500 md:text-4xl">
                <AnimatedCounter target={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-2 font-heading text-xs font-bold uppercase tracking-wider text-silver-500">
                {t(stat.key)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
