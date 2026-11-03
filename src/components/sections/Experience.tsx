'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experienceCompanies } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2,
  Building2,
  TrendingUp,
} from 'lucide-react';

export function Experience() {
  // Allow toggling expanded state for each role
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
    <section id="experience" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Professional Experience"
          subtitle="A comprehensive vertical record of software engineering leadership, distributed systems development, and applied AI/ML engineering."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central timeline line */}
          <div
            className="absolute left-4 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500 via-neutral-700 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experienceCompanies.map((company) => {
              const isGrouped = company.displayGrouped && company.roles.length > 1;

              return (
                <div key={company.id} className="relative pl-12 md:pl-20 group">
                  {/* Timeline Company Node Icon */}
                  <div className="absolute left-1.5 md:left-5 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-elevated border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:shadow-glow-emerald transition-all z-10">
                    <span className="text-[11px] font-bold font-mono">
                      {company.companyLogoPlaceholder || 'EXP'}
                    </span>
                  </div>

                  {/* Company Box */}
                  <div className="p-6 md:p-8 rounded-2xl bg-surface border border-white/[0.08] shadow-xl hover:border-white/15 transition-all">
                    {/* Company Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                          {company.companyLogoPlaceholder}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                              {company.companyName}
                            </h3>
                            {isGrouped && (
                              <Badge variant="emerald" size="sm" className="hidden sm:inline-flex">
                                <TrendingUp className="w-3 h-3 mr-1" /> Career Progression
                              </Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-emerald-400" />
                              {company.location}
                            </span>
                            <span className="text-neutral-600">•</span>
                            <span className="font-mono text-neutral-400">
                              {company.workMode}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Role count or status badge */}
                      {isGrouped && (
                        <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
                          2 Chronological Positions
                        </div>
                      )}
                    </div>

                    {/* Roles under this company */}
                    <div className={`mt-6 ${isGrouped ? 'space-y-8 relative pl-4 md:pl-6 border-l border-white/10' : 'space-y-6'}`}>
                      {company.roles.map((role, rIndex) => {
                        const roleKey = `${company.id}-${rIndex}`;
                        const isExpanded = expandedRoles[roleKey] ?? false;

                        return (
                          <div
                            key={roleKey}
                            className={`relative ${
                              isGrouped
                                ? 'before:absolute before:-left-[21px] md:before:-left-[29px] before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-surface-elevated before:border-2 before:border-emerald-400'
                                : ''
                            }`}
                          >
                            {/* Role Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
                              <div>
                                <div className="flex flex-wrap items-center gap-2.5">
                                  <h4 className="text-lg font-bold text-white tracking-tight">
                                    {role.title}
                                  </h4>
                                  {role.isCurrent && (
                                    <Badge variant="emerald" dot size="sm">
                                      Present
                                    </Badge>
                                  )}
                                  <span className="text-xs font-mono text-neutral-400 bg-surface-elevated px-2 py-0.5 rounded border border-white/5">
                                    {role.employmentType}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mt-1">
                                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                                  <span>{role.duration}</span>
                                </div>
                              </div>

                              {/* Toggle description button */}
                              {(role.responsibilities || role.description) && (
                                <button
                                  onClick={() => toggleRole(roleKey)}
                                  className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-emerald-400 transition-colors self-start md:self-auto py-1 px-2 rounded hover:bg-white/[0.04]"
                                >
                                  <span>{isExpanded ? 'Collapse Details' : 'View Responsibilities'}</span>
                                  {isExpanded ? (
                                    <ChevronUp className="w-3.5 h-3.5" />
                                  ) : (
                                    <ChevronDown className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              )}
                            </div>

                            {/* Summary Description */}
                            {role.description && (
                              <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-normal">
                                {role.description}
                              </p>
                            )}

                            {/* Expandable Section: Key Responsibilities & Focus Areas */}
                            {isExpanded && (
                              <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-4 animate-in fade-in duration-200">
                                {role.responsibilities && role.responsibilities.length > 0 && (
                                  <div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2.5 block">
                                      Key Responsibilities & Deliverables
                                    </span>
                                    <ul className="space-y-2">
                                      {role.responsibilities.map((resp, i) => (
                                        <li
                                          key={i}
                                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                                        >
                                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                          <span>{resp}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {role.focusAreas && (
                                  <div className="pt-2">
                                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2 block">
                                      Focus Areas
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                      {role.focusAreas.map((area) => (
                                        <span
                                          key={area}
                                          className="text-xs font-mono bg-surface-elevated text-emerald-300/90 border border-emerald-500/20 px-2.5 py-1 rounded"
                                        >
                                          {area}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Skills tags */}
                            {role.skills && role.skills.length > 0 && (
                              <div className="mt-3.5 flex flex-wrap gap-1.5">
                                {role.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[11px] font-mono text-neutral-400 bg-surface-elevated/70 border border-white/[0.06] px-2 py-0.5 rounded"
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

