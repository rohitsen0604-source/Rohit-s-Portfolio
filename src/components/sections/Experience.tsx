'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experienceCompanies } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    'black-grapes-softech-0': true,
    'zenvora-pvt-ltd-0': true,
    'zenvora-pvt-ltd-1': true,
    'unified-mentor-0': true,
  });

  const toggleRole = (key: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="experience" className="py-28 relative border-b border-swiss-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="02 // CAREER TIMELINE"
          title="PROFESSIONAL EXPERIENCE"
          subtitle="Verifiable track record in engineering leadership, backend microservices, software architecture, and production AI/ML systems."
        />

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Static Background Guideline in #D8D3C8 */}
          <div
            className="absolute left-4 md:left-8 top-6 bottom-6 w-px bg-swiss-border pointer-events-none"
            aria-hidden="true"
          />

          {/* Animated Progressive Timeline Draw in #E76F3C */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-4 md:left-8 top-6 bottom-6 w-px bg-swiss-orange pointer-events-none z-0"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experienceCompanies.map((company, cIndex) => {
              const isGrouped = company.displayGrouped && company.roles.length > 1;

              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: cIndex * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Subtle Orange Timeline Marker */}
                  <div className="absolute left-1.5 md:left-5 top-2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-swiss-border group-hover:border-swiss-orange flex items-center justify-center text-swiss-orange text-[11px] font-mono font-bold transition-all z-10 shadow-sm">
                    {company.companyLogoPlaceholder || 'EXP'}
                  </div>

                  {/* Company Box with Smooth Hover Scaling */}
                  <div className="p-6 md:p-8 bg-white border border-swiss-border hover:border-swiss-orange transition-all duration-300 shadow-swiss-card">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-swiss-border">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-xl md:text-2xl font-display font-bold text-swiss-text tracking-tight uppercase">
                            {company.companyName}
                          </h3>
                          {isGrouped && (
                            <Badge variant="accent" size="sm">
                              <TrendingUp className="w-3 h-3 mr-1" /> Career Progression
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-swiss-muted mt-1 font-mono">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-swiss-orange" />
                            {company.location}
                          </span>
                          <span className="text-swiss-border">•</span>
                          <span className="uppercase">{company.workMode}</span>
                        </div>
                      </div>

                      {isGrouped && (
                        <div className="text-xs font-mono text-swiss-orange bg-swiss-orange-light px-3 py-1 border border-swiss-orange-border self-start sm:self-auto font-bold uppercase">
                          2 Chronological Positions
                        </div>
                      )}
                    </div>

                    {/* Roles Under Company */}
                    <div className={`mt-6 ${isGrouped ? 'space-y-8 pl-4 md:pl-6 border-l border-swiss-border' : 'space-y-6'}`}>
                      {company.roles.map((role, rIndex) => {
                        const roleKey = `${company.id}-${rIndex}`;
                        const isExpanded = expandedRoles[roleKey] ?? false;

                        return (
                          <div
                            key={roleKey}
                            className={`relative ${
                              isGrouped
                                ? 'before:absolute before:-left-[21px] md:before:-left-[29px] before:top-2 before:w-3 before:h-3 before:bg-white before:border-2 before:border-swiss-orange'
                                : ''
                            }`}
                          >
                            {/* Role Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
                              <div>
                                <div className="flex flex-wrap items-center gap-2.5">
                                  <h4 className="text-lg font-display font-bold text-swiss-text uppercase">
                                    {role.title}
                                  </h4>
                                  {role.isCurrent && (
                                    <Badge variant="accent" dot size="sm">
                                      Present
                                    </Badge>
                                  )}
                                  <span className="text-[10px] font-mono text-swiss-muted bg-swiss-surface px-2.5 py-0.5 border border-swiss-border uppercase">
                                    {role.employmentType}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-swiss-muted font-mono mt-1">
                                  <Calendar className="w-3.5 h-3.5 text-swiss-orange" />
                                  <span>{role.duration}</span>
                                </div>
                              </div>

                              {(role.responsibilities || role.description) && (
                                <button
                                  onClick={() => toggleRole(roleKey)}
                                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-swiss-muted hover:text-swiss-orange transition-colors self-start md:self-auto py-1 px-2.5 bg-swiss-surface border border-swiss-border uppercase active:scale-95"
                                >
                                  <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                                  {isExpanded ? (
                                    <ChevronUp className="w-3.5 h-3.5" />
                                  ) : (
                                    <ChevronDown className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              )}
                            </div>

                            {/* Summary */}
                            {role.description && (
                              <p className="mt-3 text-sm text-swiss-muted leading-relaxed font-sans">
                                {role.description}
                              </p>
                            )}

                            {/* Expandable Key Responsibilities with Smooth Reveal */}
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-swiss-border space-y-4"
                              >
                                {role.responsibilities && role.responsibilities.length > 0 && (
                                  <div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-swiss-text font-bold mb-2.5 block">
                                      Key Responsibilities &amp; Deliverables
                                    </span>
                                    <ul className="space-y-2">
                                      {role.responsibilities.map((resp, i) => (
                                        <li
                                          key={i}
                                          className="flex items-start gap-2.5 text-xs sm:text-sm text-swiss-muted leading-relaxed"
                                        >
                                          <CheckCircle2 className="w-4 h-4 text-swiss-orange shrink-0 mt-0.5" />
                                          <span>{resp}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {role.focusAreas && (
                                  <div className="pt-2">
                                    <span className="text-xs font-mono uppercase tracking-wider text-swiss-muted mb-2 block font-bold">
                                      Focus Areas
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                      {role.focusAreas.map((area) => (
                                        <span
                                          key={area}
                                          className="text-xs font-mono bg-swiss-surface text-swiss-text border border-swiss-border px-2.5 py-1"
                                        >
                                          {area}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </motion.div>
                            )}

                            {/* Skills Tags */}
                            {role.skills && role.skills.length > 0 && (
                              <div className="mt-3.5 flex flex-wrap gap-1.5">
                                {role.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[11px] font-mono text-swiss-muted bg-swiss-surface px-2 py-0.5 border border-swiss-border uppercase"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
