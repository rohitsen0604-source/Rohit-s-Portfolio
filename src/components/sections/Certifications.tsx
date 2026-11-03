import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certificationsList } from '@/data/certifications';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative border-t border-white/[0.06] bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications"
          subtitle="Specialized credentialing in data science algorithms, enterprise data analytics, and executive business intelligence."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:shadow-glow-emerald transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <Badge variant="emerald" size="sm">
                    Verified
                  </Badge>
                </div>

                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                  {cert.issuer}
                </span>

                <h3 className="text-base font-bold text-white tracking-tight mb-4 group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-mono text-neutral-500 block uppercase">
                    Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono bg-surface-elevated text-neutral-300 px-2 py-0.5 rounded border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> {cert.issueDate}
                </span>
                <span className="text-[11px] text-neutral-400 hover:text-white cursor-default">
                  Verified Issuer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
