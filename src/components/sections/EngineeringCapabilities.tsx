'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="capabilities" className="py-28 relative border-b border-swiss-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="05 // ARCHITECTURE"
          title="ENGINEERING CAPABILITIES"
          subtitle="Systematic methodologies and architectural practices employed to build fault-tolerant, high-concurrency digital platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringCapabilities.map((capability, idx) => {
            const Icon = iconMap[capability.icon] || Layers;

            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3 }}
                className="group p-8 bg-white border border-swiss-border hover:border-swiss-orange shadow-swiss-card hover:shadow-swiss-elevated transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-swiss-surface border border-swiss-border flex items-center justify-center text-swiss-orange group-hover:border-swiss-orange transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-swiss-muted">
                      /0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-swiss-text tracking-tight mb-2 group-hover:text-swiss-orange transition-colors uppercase">
                    {capability.title}
                  </h3>
                  <p className="text-xs font-mono text-swiss-orange mb-4 font-bold uppercase">
                    {capability.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-swiss-muted leading-relaxed font-sans mb-6">
                    {capability.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-swiss-border">
                  <div className="flex flex-wrap gap-1.5">
                    {capability.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono bg-swiss-surface text-swiss-muted px-2.5 py-0.5 border border-swiss-border uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
