import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'outline' | 'neutral';
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
    default: 'bg-canvas-card text-editorial-primary border border-white/10',
    accent: 'bg-accent-muted text-accent border border-accent-border',
    outline: 'bg-transparent text-editorial-secondary border border-white/10',
    neutral: 'bg-canvas-secondary text-editorial-secondary border border-white/5',
  };

  const sizeStyles = {
    sm: 'text-[11px] font-mono px-2.5 py-0.5 tracking-wider uppercase',
    md: 'text-xs font-mono px-3 py-1 tracking-wider uppercase',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full font-medium transition-colors',
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
            variant === 'accent'
              ? 'bg-accent shadow-[0_0_8px_#D7FF72] animate-pulse'
              : 'bg-editorial-secondary'
          )}
        />
      )}
      {children}
    </span>
  );
}
