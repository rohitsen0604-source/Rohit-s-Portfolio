import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'surface' | 'interactive';
}

export function Card({
  children,
  className,
  variant = 'default',
  ...props
}: CardProps) {
  const variantStyles = {
    default: 'bg-white border border-swiss-border shadow-swiss-card',
    elevated: 'bg-white border border-swiss-border shadow-swiss-elevated',
    surface: 'bg-swiss-surface border border-swiss-border',
    interactive:
      'bg-white border border-swiss-border hover:border-swiss-orange transition-all duration-300 shadow-swiss-card hover:shadow-swiss-elevated',
  };

  return (
    <div
      className={cn('relative overflow-hidden', variantStyles[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
