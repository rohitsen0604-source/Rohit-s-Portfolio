import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const baseStyles =
    'group relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:opacity-50 disabled:pointer-events-none select-none tracking-tight';

  const variantStyles = {
    primary:
      'bg-accent text-canvas font-semibold hover:bg-accent-hover hover:shadow-glow-accent border border-accent/40 active:scale-[0.98]',
    secondary:
      'bg-canvas-card text-editorial-primary hover:text-white hover:bg-canvas-elevated border border-white/10 hover:border-accent/40 active:scale-[0.98]',
    outline:
      'bg-transparent text-editorial-primary hover:text-accent hover:bg-white/[0.03] border border-white/15 hover:border-accent/50 active:scale-[0.98]',
    ghost:
      'bg-transparent text-editorial-secondary hover:text-editorial-primary hover:bg-white/[0.04]',
    accent:
      'bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 hover:border-accent/60',
  };

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm md:text-base px-7 py-3.5 gap-2.5',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0 transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  const combinedClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
