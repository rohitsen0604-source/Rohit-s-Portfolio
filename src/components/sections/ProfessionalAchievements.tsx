'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { professionalAchievements } from '@/data/achievements';
import { Trophy, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function ProfessionalAchievements() {
  return (
    <section className="py-28 relative border-b border-swiss-border bg-swiss-surface/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="08 // MILESTONES"
          title="CAREER PROGRESSION"
          subtitle="Verifiable career milestones demonstrating accelerated leadership progression, technical execution, and engineering responsibilities."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {professionalAchievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3 }}
              className="p-8 bg-white border border-swiss-border hover:border-swiss-orange shadow-swiss-card transition-colors duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 bg-swiss-surface border border-swiss-border flex items-center justify-center text-swiss-orange group-hover:border-swiss-orange transition-all">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <Badge variant="accent" size="sm">
                    {item.period}
                  </Badge>
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-wider text-swiss-orange block mb-2">
                  {item.organization}
                </span>

                <h3 className="text-lg font-display font-bold text-swiss-text tracking-tight mb-3 group-hover:text-swiss-orange transition-colors uppercase">
                  {item.title}
                </h3>

                <p className="text-xs text-swiss-muted leading-relaxed font-sans mb-5">
                  {item.summary}
                </p>

                <div className="space-y-2 pt-3 border-t border-swiss-border">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-swiss-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-swiss-orange shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
