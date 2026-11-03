import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { educationList } from '@/data/education';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Foundational engineering education bridging computer science theory, predictive data science, and analytical mechanical principles."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="p-7 md:p-8 rounded-2xl bg-surface border border-white/[0.08] hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:shadow-glow-emerald transition-all">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {edu.highlight && (
                    <Badge variant="emerald" size="sm">
                      Core Degree
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-emerald-400 font-mono mb-4">
                  {edu.field}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {edu.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Verified Academic Qualification</span>
                <span className="text-neutral-400">{edu.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

