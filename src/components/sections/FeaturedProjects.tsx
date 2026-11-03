'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredProjects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Code2,
  Cpu,
  Workflow,
  Radio,
} from 'lucide-react';

export function FeaturedProjects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = ['all', 'AI & Intelligence', 'Full-Stack & Mobility', 'Machine Learning & Predictive', 'Enterprise SaaS & Cloud'];

  const filteredProjects =
    selectedFilter === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Works"
          title="Engineered Products & Systems"
          subtitle="Real-world software systems, mobility dispatch engines, applied AI workflows, and data pipelines engineered for scalability and production performance."
        />

        {/* Project Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-brand-emerald text-neutral-950 font-bold'
                  : 'bg-surface border border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isOngoing = project.status === 'In Active Development';

            return (
              <div
                key={project.id}
                className="group p-7 md:p-8 rounded-2xl bg-surface border border-white/[0.08] hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Status & Category Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                      {project.category}
                    </span>
                    <Badge
                      variant={isOngoing ? 'accent' : 'emerald'}
                      dot
                      size="sm"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-1 mb-4">
                    {project.tagline}
                  </p>

                  {/* Narrative Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-surface-elevated/70 border border-white/[0.04]">
                    <span className="text-[11px] font-mono uppercase text-neutral-400 font-semibold tracking-wider block mb-1.5">
                      Architecture & Key Features:
                    </span>
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & Link */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono bg-surface-elevated text-neutral-300 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>Explore Case Study & Architecture</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <span className="text-[11px] font-mono text-neutral-500">
                      System Case Study
                    </span>
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

