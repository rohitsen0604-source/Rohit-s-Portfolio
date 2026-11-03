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
  CheckCircle2,
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
    <section id="capabilities" className="py-24 relative border-t border-white/[0.06] bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Architecture & Engineering"
          title="Engineering Capabilities"
          subtitle="Systematic methodologies and architectural practices employed to build fault-tolerant, high-concurrency digital platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringCapabilities.map((capability) => {
            const Icon = iconMap[capability.icon] || Layers;

            return (
              <div
                key={capability.id}
                className="p-7 rounded-2xl bg-surface border border-white/[0.08] hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 group-hover:shadow-glow-emerald transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-1.5 group-hover:text-emerald-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90 mb-3.5">
                    {capability.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal mb-6">
                    {capability.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {capability.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono bg-surface-elevated text-neutral-300 px-2 py-0.5 rounded border border-white/5"
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
