import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { professionalAchievements } from '@/data/achievements';
import { Trophy, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function ProfessionalAchievements() {
  return (
    <section className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Milestones & Excellence"
          title="Professional Achievements"
          subtitle="Key career milestones demonstrating accelerated leadership progression, technical excellence, and impactful engineering execution."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {professionalAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 md:p-7 rounded-2xl bg-surface border border-white/[0.08] hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:shadow-glow-emerald transition-all">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <Badge variant="emerald" size="sm">
                    {item.period}
                  </Badge>
                </div>

                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                  {item.organization}
                </span>

                <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed font-normal mb-5">
                  {item.summary}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
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
