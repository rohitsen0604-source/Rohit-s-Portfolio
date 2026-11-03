'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';
import {
  Server,
  Cpu,
  Layout,
  Database,
  Cloud,
  BarChart3,
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
    <section id="skills" className="py-28 relative border-b border-swiss-border bg-swiss-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="04 // EXPERTISE MATRIX"
          title="SKILLS &amp; EXPERTISE"
          subtitle="Systematic domain proficiencies across high-concurrency backends, production AI/ML architectures, resilient databases, and automated cloud deployments."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 border ${
              activeTab === 'all'
                ? 'bg-swiss-orange text-white border-swiss-orange shadow-sm'
                : 'bg-white border-swiss-border text-swiss-muted hover:text-swiss-text hover:border-swiss-text'
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
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-swiss-orange text-white border-swiss-orange shadow-sm'
                    : 'bg-white border-swiss-border text-swiss-muted hover:text-swiss-text hover:border-swiss-text'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-swiss-orange'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Typographical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Server;

            return (
              <div
                key={cat.id}
                className="group p-8 bg-white border border-swiss-border hover:border-swiss-orange shadow-swiss-card hover:shadow-swiss-elevated transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 bg-swiss-surface border border-swiss-border flex items-center justify-center text-swiss-orange group-hover:border-swiss-orange transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-swiss-muted font-bold">
                      {cat.skills.length} TOOLS
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-swiss-text tracking-tight mb-2 group-hover:text-swiss-orange transition-colors uppercase">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-swiss-muted leading-relaxed font-sans mb-6">
                    {cat.description}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-swiss-muted block mb-3 font-bold">
                    TOOLKIT &amp; FRAMEWORKS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs font-mono px-3 py-1 border transition-colors uppercase ${
                          skill.highlight
                            ? 'bg-swiss-orange-light text-swiss-orange border-swiss-orange-border font-bold'
                            : 'bg-swiss-surface text-swiss-muted border-swiss-border'
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
