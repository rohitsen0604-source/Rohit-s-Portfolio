import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-4xl mb-14 md:mb-20',
        centered ? 'mx-auto text-center' : '',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-4', centered ? 'flex justify-center' : '')}>
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-swiss-orange">
            <span className="w-2 h-2 bg-swiss-orange inline-block" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-swiss-text uppercase leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg md:text-xl text-swiss-muted leading-relaxed font-sans max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
