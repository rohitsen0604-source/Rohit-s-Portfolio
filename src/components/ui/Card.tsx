import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass' | 'interactive';
  glowing?: boolean;
}

export function Card({
  children,
  className,
  variant = 'default',
  glowing = false,
  ...props
}: CardProps) {
  const variantStyles = {
    default: 'bg-surface border border-white/5 rounded-2xl',
    elevated: 'bg-surface-elevated border border-white/10 rounded-2xl shadow-xl',
    glass: 'glass-panel rounded-2xl',
    interactive:
      'bg-surface/90 hover:bg-surface-elevated border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-emerald',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        variantStyles[variant],
        glowing && 'before:absolute before:inset-0 before:bg-radial-gradient before:pointer-events-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

