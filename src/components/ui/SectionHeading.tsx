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
        'max-w-3xl mb-12 md:mb-16',
        centered ? 'mx-auto text-center' : '',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-3.5', centered ? 'flex justify-center' : '')}>
          <Badge variant="emerald" dot size="sm">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-neutral-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}

