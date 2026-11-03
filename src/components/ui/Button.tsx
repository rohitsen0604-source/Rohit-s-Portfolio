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
    'group relative inline-flex items-center justify-center font-display font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-swiss-orange/40 disabled:opacity-50 disabled:pointer-events-none select-none tracking-tight rounded-none';

  const variantStyles = {
    primary:
      'bg-swiss-orange text-white hover:bg-swiss-orange-hover border border-swiss-orange shadow-sm active:translate-y-px',
    secondary:
      'bg-swiss-surface text-swiss-text hover:bg-white hover:border-swiss-text border border-swiss-border active:translate-y-px',
    outline:
      'bg-transparent text-swiss-text hover:border-swiss-orange hover:text-swiss-orange border border-swiss-border active:translate-y-px',
    ghost:
      'bg-transparent text-swiss-muted hover:text-swiss-text',
    accent:
      'bg-swiss-orange-light text-swiss-orange border border-swiss-orange-border hover:bg-swiss-orange hover:text-white',
  };

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 uppercase tracking-wider',
    md: 'text-xs md:text-sm px-6 py-3 gap-2 uppercase tracking-wider',
    lg: 'text-sm md:text-base px-8 py-3.5 gap-2.5 uppercase tracking-wider',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="inline-flex shrink-0 transition-transform group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
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
