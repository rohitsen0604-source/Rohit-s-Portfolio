import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'emerald' | 'outline' | 'neutral' | 'accent';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = 'default',
  size = 'md',
  dot = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-surface-elevated text-neutral-300 border border-white/10',
    emerald: 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30',
    accent: 'bg-brand-emerald/10 text-brand-emerald-light border border-brand-emerald/20',
    outline: 'bg-transparent text-neutral-400 border border-white/10',
    neutral: 'bg-neutral-900 text-neutral-400 border border-neutral-800',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-xs md:text-sm px-3.5 py-1 font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full tracking-wide transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'inline-block h-1.5 w-1.5 rounded-full',
            variant === 'emerald' || variant === 'accent'
              ? 'bg-emerald-400 animate-pulse'
              : 'bg-neutral-400'
          )}
        />
      )}
      {children}
    </span>
  );
}
