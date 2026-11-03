'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredProjects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Magnetic } from '@/components/ui/Magnetic';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  MapPin,
  Activity,
  ScanBarcode,
} from 'lucide-react';

export function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'AI & Intelligence',
    'Full-Stack & Mobility',
    'Machine Learning & Predictive',
    'Enterprise SaaS & Cloud',
  ];

  const filtered =
    selectedCategory === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 relative border-b border-swiss-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="03 // PORTFOLIO"
          title="FEATURED PROJECTS"
          subtitle="Real-world distributed systems, mobility dispatch engines, applied AI workflows, and data pipelines engineered for enterprise scalability."
        />

        {/* Filter Bar with Magnetic Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-swiss-orange text-white border-swiss-orange shadow-sm'
                  : 'bg-white border-swiss-border text-swiss-muted hover:text-swiss-text hover:border-swiss-text'
              }`}
            >
              {cat === 'all' ? 'All Works' : cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Project Cards Grid with Directional Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((project, index) => {
            const isOngoing = project.status === 'In Active Development';
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-7 sm:p-9 bg-white border border-swiss-border hover:border-swiss-orange transition-colors duration-300 shadow-swiss-card hover:shadow-swiss-elevated flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Large Visual Area / Clip-Path Mask Schematic Header */}
                  <div className="relative w-full h-56 sm:h-64 bg-swiss-surface border border-swiss-border mb-7 overflow-hidden flex flex-col justify-between p-5 group-hover:border-swiss-orange/40 transition-colors">
                    {/* Architectural Grid Lines */}
                    <div className="absolute inset-0 bg-swiss-grid opacity-40 pointer-events-none" />

                    {/* Top Ribbon */}
                    <div className="relative flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono font-bold text-swiss-muted uppercase tracking-widest">
                        SPEC // {project.slug}.sys
                      </span>
                      <Badge variant="accent" dot size="sm">
                        {project.status}
                      </Badge>
                    </div>

                    {/* Application-Specific Schematic Blueprint with Smooth Zoom */}
                    <div className="relative my-auto py-2 z-10 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                      {project.id === 'neurohr-ai' && (
                        <div className="p-4 bg-white border border-swiss-border shadow-sm space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono text-swiss-orange font-bold">
                            <span className="flex items-center gap-1.5 uppercase">
                              <Cpu className="w-3.5 h-3.5 text-swiss-orange" /> ChromaDB RAG Pipeline
                            </span>
                            <span className="text-swiss-muted text-[10px]">Gemini API</span>
                          </div>
                          <div className="h-1.5 w-full bg-swiss-surface overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '80%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-swiss-orange"
                            />
                          </div>
                          <div className="flex justify-between text-[10px] font-mono text-swiss-muted uppercase">
                            <span>Vector Similarity: 0.942</span>
                            <span>Latency: 48ms</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'gorush' && (
                        <div className="p-4 bg-white border border-swiss-border shadow-sm space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono text-swiss-orange font-bold">
                            <span className="flex items-center gap-1.5 uppercase">
                              <MapPin className="w-3.5 h-3.5 text-swiss-orange" /> Dispatch Stream
                            </span>
                            <span className="text-swiss-muted text-[10px]">WebSocket Node</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                            <div className="p-1.5 bg-swiss-surface border border-swiss-border">
                              <span className="text-swiss-muted block">ACTIVE FLEET</span>
                              <span className="text-swiss-text font-bold">120+ Drivers</span>
                            </div>
                            <div className="p-1.5 bg-swiss-surface border border-swiss-border">
                              <span className="text-swiss-muted block">DISPATCH ETA</span>
                              <span className="text-swiss-orange font-bold">&lt; 3.2 min</span>
                            </div>
                            <div className="p-1.5 bg-swiss-surface border border-swiss-border">
                              <span className="text-swiss-muted block">SURGE INDEX</span>
                              <span className="text-swiss-text font-bold">1.2x Peak</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'climate-change-agricultural-modeling' && (
                        <div className="p-4 bg-white border border-swiss-border shadow-sm space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono text-swiss-orange font-bold">
                            <span className="flex items-center gap-1.5 uppercase">
                              <Activity className="w-3.5 h-3.5 text-swiss-orange" /> Agro-Climatic Regression
                            </span>
                            <span className="text-swiss-muted text-[10px]">Random Forest</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] font-mono text-swiss-muted pt-1">
                            <span>Precipitation Deficit: -14.2%</span>
                            <span className="text-swiss-orange font-bold">R²: 0.891</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'return-order-verification-saas' && (
                        <div className="p-4 bg-white border border-swiss-border shadow-sm space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono text-swiss-orange font-bold">
                            <span className="flex items-center gap-1.5 uppercase">
                              <ScanBarcode className="w-3.5 h-3.5 text-swiss-orange" /> Reverse Logistics API
                            </span>
                            <span className="text-swiss-muted text-[10px]">JWT Guarded</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] font-mono text-swiss-muted uppercase">
                            <span>Manifest Intake: Verified</span>
                            <span className="text-swiss-orange font-bold">SKU Match: 100%</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Blueprint Marker */}
                    <div className="relative flex items-center justify-between text-[10px] font-mono text-swiss-muted z-10 pt-2 border-t border-swiss-border">
                      <span className="uppercase">CATEGORY // {project.category}</span>
                      <span className="text-swiss-orange font-bold flex items-center gap-1 uppercase">
                        View System Specs <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline with Smooth Shift */}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-swiss-text tracking-tight group-hover:text-swiss-orange transition-all duration-300 uppercase group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-swiss-orange mt-1 mb-3.5 font-bold uppercase">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-swiss-muted leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-2 mb-6 p-4 bg-swiss-surface border border-swiss-border">
                    <span className="text-[10px] font-mono uppercase text-swiss-text font-bold tracking-wider block mb-1">
                      Engineered Capabilities:
                    </span>
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-swiss-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-swiss-orange shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & Case Study Link */}
                <div className="pt-4 border-t border-swiss-border">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono bg-swiss-surface text-swiss-muted px-2.5 py-0.5 border border-swiss-border uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Magnetic strength={0.3}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-bold text-swiss-orange hover:text-swiss-orange-hover transition-colors uppercase tracking-wider py-1"
                      >
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Magnetic>

                    <span className="text-[10px] font-mono text-swiss-muted uppercase">
                      Architecture Dossier
                    </span>
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
