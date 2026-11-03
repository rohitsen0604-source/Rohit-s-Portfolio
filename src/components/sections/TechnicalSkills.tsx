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
  ArrowUpRight,
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
    <section id="skills" className="py-28 relative border-b border-canvas-border bg-canvas-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Matrix"
          title="Technical Expertise"
          subtitle="Systematic domain proficiencies across high-concurrency backends, production AI/ML architectures, resilient databases, and automated cloud deployments."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-accent text-canvas font-bold shadow-glow-accent'
                : 'bg-canvas-card border border-white/10 text-editorial-secondary hover:text-editorial-primary hover:border-white/20'
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
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-accent text-canvas font-bold shadow-glow-accent'
                    : 'bg-canvas-card border border-white/10 text-editorial-secondary hover:text-editorial-primary hover:border-white/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-canvas' : 'text-accent'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Capability Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Server;

            return (
              <div
                key={cat.id}
                className="group p-7 sm:p-8 rounded-2xl bg-canvas-card border border-canvas-border hover:border-accent/40 shadow-card-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-accent/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-canvas-secondary border border-white/10 flex items-center justify-center text-accent group-hover:scale-105 group-hover:border-accent/50 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-editorial-muted">
                      {cat.skills.length} Tools
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-editorial-primary tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-editorial-secondary leading-relaxed font-sans mb-6">
                    {cat.description}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-editorial-muted block mb-3 font-semibold">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs font-mono px-3 py-1 rounded-lg transition-colors ${
                          skill.highlight
                            ? 'bg-accent/10 text-accent border border-accent/30 font-medium'
                            : 'bg-canvas-secondary text-editorial-secondary border border-white/5 group-hover:border-white/10'
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
