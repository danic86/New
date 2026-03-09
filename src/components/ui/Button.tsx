'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick-ember-500';

  const variants = {
    primary: 'bg-brick-ember-500 text-white hover:bg-brick-ember-600 active:bg-brick-ember-700',
    secondary: 'bg-dark-walnut-500 text-white hover:bg-dark-walnut-400 active:bg-dark-walnut-600',
    outline: 'border-2 border-silver-700 text-silver-50 hover:border-brick-ember-500 hover:text-brick-ember-400',
    ghost: 'text-silver-400 hover:text-silver-50 hover:bg-silver-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
