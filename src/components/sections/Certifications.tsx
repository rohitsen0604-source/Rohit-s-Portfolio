import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certificationsList } from '@/data/certifications';
import { Award, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function Certifications() {
  return (
    <section id="certifications" className="py-28 relative border-b border-swiss-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="07 // CREDENTIALS"
          title="CERTIFICATIONS"
          subtitle="Specialized qualifications across engineering data science, exploratory analytics, and executive business intelligence."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="p-7 bg-white border border-swiss-border hover:border-swiss-orange shadow-swiss-card transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 bg-swiss-surface border border-swiss-border flex items-center justify-center text-swiss-orange group-hover:border-swiss-orange transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <Badge variant="accent" size="sm">
                    {cert.issuer}
                  </Badge>
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-wider text-swiss-orange block mb-2">
                  {cert.issuer}
                </span>

                <h3 className="text-base font-display font-bold text-swiss-text tracking-tight mb-4 group-hover:text-swiss-orange transition-colors uppercase">
                  {cert.title}
                </h3>

                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-mono text-swiss-muted block uppercase font-bold">
                    Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono bg-swiss-surface text-swiss-muted px-2 py-0.5 border border-swiss-border uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-swiss-border flex items-center justify-between text-xs font-mono text-swiss-muted uppercase">
                <span className="flex items-center gap-1.5 text-swiss-text font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-swiss-orange" /> Completed
                </span>
                <span className="text-[10px] text-swiss-muted">
                  Curriculum
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
