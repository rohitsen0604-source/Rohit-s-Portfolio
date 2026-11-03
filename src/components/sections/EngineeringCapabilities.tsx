import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { engineeringCapabilities } from '@/data/capabilities';
import {
  Layers,
  Layout,
  Cpu,
  Database,
  Cloud,
  ShieldCheck,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Layout,
  Cpu,
  Database,
  Cloud,
  ShieldCheck,
};

export function EngineeringCapabilities() {
  return (
    <section id="capabilities" className="py-28 relative border-b border-canvas-border bg-canvas-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Architectural Discipline"
          title="Engineering Capabilities"
          subtitle="Systematic methodologies and architectural practices employed to build fault-tolerant, high-concurrency digital platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringCapabilities.map((capability, idx) => {
            const Icon = iconMap[capability.icon] || Layers;

            return (
              <div
                key={capability.id}
                className="group p-8 rounded-2xl bg-canvas-card border border-canvas-border hover:border-accent/40 shadow-card-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-accent/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-canvas-secondary border border-white/10 flex items-center justify-center text-accent group-hover:scale-105 group-hover:border-accent/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-editorial-muted">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-editorial-primary tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-xs font-mono text-accent mb-4">
                    {capability.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-editorial-secondary leading-relaxed font-sans mb-6">
                    {capability.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {capability.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono bg-canvas-secondary text-editorial-secondary px-2.5 py-0.5 rounded border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
