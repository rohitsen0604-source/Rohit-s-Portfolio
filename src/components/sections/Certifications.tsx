import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certificationsList } from '@/data/certifications';
import { Award, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function Certifications() {
  return (
    <section id="certifications" className="py-28 relative border-b border-canvas-border bg-canvas-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Qualifications"
          title="Certifications"
          subtitle="Industry qualifications across engineering data science, exploratory analytics, and executive business intelligence."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="p-7 rounded-2xl bg-canvas-card border border-canvas-border hover:border-accent/40 shadow-card-dark transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-canvas-secondary border border-white/10 flex items-center justify-center text-accent group-hover:scale-105 transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <Badge variant="accent" size="sm">
                    {cert.issuer}
                  </Badge>
                </div>

                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent block mb-2">
                  {cert.issuer}
                </span>

                <h3 className="text-base font-display font-bold text-editorial-primary tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-mono text-editorial-muted block uppercase">
                    Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono bg-canvas-secondary text-editorial-secondary px-2 py-0.5 rounded border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-editorial-muted">
                <span className="flex items-center gap-1.5 text-editorial-secondary">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Completed Credential
                </span>
                <span className="text-[11px] text-editorial-muted">
                  Official Curriculum
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
