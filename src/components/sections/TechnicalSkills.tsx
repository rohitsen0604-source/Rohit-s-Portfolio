'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';
import { Badge } from '@/components/ui/Badge';
import {
  Server,
  Cpu,
  Layout,
  Database,
  Cloud,
  BarChart3,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  backend: Server,
  aiml: Cpu,
  frontend: Layout,
  database: Database,
  devops: Cloud,
  analytics: BarChart3,
};

export function TechnicalSkills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06] bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Competencies"
          title="Technical Expertise"
          subtitle="Organized domain proficiencies spanning backend microservices, production AI/ML architectures, resilient databases, and cloud systems."
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-brand-emerald text-neutral-950 font-semibold shadow-glow-emerald'
                : 'bg-surface border border-white/10 text-neutral-400 hover:text-white hover:bg-surface-elevated'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Server;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-emerald text-neutral-950 font-semibold shadow-glow-emerald'
                    : 'bg-surface border border-white/10 text-neutral-400 hover:text-white hover:bg-surface-elevated'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-neutral-950' : 'text-emerald-400'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Server;
            return (
              <div
                key={cat.id}
                className="p-6 md:p-7 rounded-2xl bg-surface border border-white/[0.08] hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center text-emerald-400 group-hover:shadow-glow-emerald group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                      {cat.skills.length} Technologies
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 font-semibold mb-2.5">
                    Stack & Frameworks
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs px-2.5 py-1 rounded-lg font-mono transition-colors ${
                          skill.highlight
                            ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 font-medium'
                            : 'bg-surface-elevated text-neutral-300 border border-white/5 hover:border-white/15'
                        }`}
                      >
                        {skill.name}
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

