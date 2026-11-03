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
    default: 'bg-swiss-surface text-swiss-text border border-swiss-border',
    accent: 'bg-swiss-orange-light text-swiss-orange border border-swiss-orange-border',
    outline: 'bg-white text-swiss-text border border-swiss-border',
    neutral: 'bg-swiss-surface text-swiss-muted border border-swiss-border',
  };

  const sizeStyles = {
    sm: 'text-[10px] font-mono px-2.5 py-0.5 tracking-wider uppercase',
    md: 'text-xs font-mono px-3 py-1 tracking-wider uppercase',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-medium transition-colors select-none',
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
              ? 'bg-swiss-orange'
              : 'bg-swiss-text'
          )}
        />
      )}
      {children}
    </span>
  );
}
