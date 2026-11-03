import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { professionalAchievements } from '@/data/achievements';
import { Trophy, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function ProfessionalAchievements() {
  return (
    <section className="py-28 relative border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Milestones"
          title="Career Progression"
          subtitle="Verifiable career achievements demonstrating accelerated leadership progression, technical execution, and engineering responsibilities."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {professionalAchievements.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-canvas-card border border-canvas-border hover:border-accent/40 shadow-card-dark transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-canvas-secondary border border-white/10 flex items-center justify-center text-accent group-hover:scale-105 transition-all">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <Badge variant="accent" size="sm">
                    {item.period}
                  </Badge>
                </div>

                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent block mb-2">
                  {item.organization}
                </span>

                <h3 className="text-lg font-display font-bold text-editorial-primary tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-editorial-secondary leading-relaxed font-sans mb-5">
                  {item.summary}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-editorial-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
