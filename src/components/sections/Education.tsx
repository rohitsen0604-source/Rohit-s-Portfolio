'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { educationList } from '@/data/education';
import { GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function Education() {
  return (
    <section id="education" className="py-28 relative border-b border-swiss-border bg-swiss-surface/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="06 // ACADEMICS"
          title="EDUCATION"
          subtitle="Foundational engineering qualifications bridging computer science theory, predictive data science, and analytical mechanical principles."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3 }}
              className="p-8 bg-white border border-swiss-border hover:border-swiss-orange shadow-swiss-card transition-colors duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-swiss-surface border border-swiss-border flex items-center justify-center text-swiss-orange group-hover:border-swiss-orange transition-all">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {edu.highlight && (
                    <Badge variant="accent" size="sm">
                      Core Degree
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-swiss-text tracking-tight mb-1.5 group-hover:text-swiss-orange transition-colors uppercase">
                  {edu.degree}
                </h3>
                <p className="text-sm font-bold text-swiss-orange font-mono mb-4 uppercase">
                  {edu.field}
                </p>
                <p className="text-xs sm:text-sm text-swiss-muted leading-relaxed font-sans">
                  {edu.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-swiss-border flex items-center justify-between text-xs font-mono text-swiss-muted uppercase">
                <span>ACADEMIC QUALIFICATION</span>
                <span className="text-swiss-text font-bold">{edu.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
