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
    default: 'bg-canvas-card border border-canvas-border rounded-2xl',
    elevated: 'bg-canvas-elevated border border-canvas-border rounded-2xl shadow-card-dark',
    glass: 'glass-card rounded-2xl',
    interactive:
      'bg-canvas-card/90 hover:bg-canvas-card border border-canvas-border hover:border-accent/35 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-accent/20',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        variantStyles[variant],
        glowing && 'before:absolute before:inset-0 before:bg-radial-accent before:pointer-events-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
