import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { educationList } from '@/data/education';
import { GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function Education() {
  return (
    <section id="education" className="py-28 relative border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Foundational engineering qualifications bridging computer science theory, predictive data science, and analytical mechanical principles."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="p-8 rounded-2xl bg-canvas-card border border-canvas-border hover:border-accent/40 shadow-card-dark transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-canvas-secondary border border-white/10 flex items-center justify-center text-accent group-hover:scale-105 transition-all">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {edu.highlight && (
                    <Badge variant="accent" size="sm">
                      Core Degree
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-editorial-primary tracking-tight mb-1.5 group-hover:text-accent transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-accent font-mono mb-4">
                  {edu.field}
                </p>
                <p className="text-xs sm:text-sm text-editorial-secondary leading-relaxed font-sans">
                  {edu.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-editorial-muted">
                <span>Academic Qualification</span>
                <span className="text-editorial-secondary">{edu.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
