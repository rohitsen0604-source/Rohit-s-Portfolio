import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personalInfo';
import { ArrowUpRight } from 'lucide-react';

export function About() {
  const principles = [
    {
      num: '01',
      title: 'Architectural Scalability & System Resiliency',
      desc: 'Designing asynchronous microservices, event loops, and database architectures optimized for low-latency throughput and zero single points of failure.',
    },
    {
      num: '02',
      title: 'Applied AI & Production RAG Pipelines',
      desc: 'Operationalizing large language models, semantic vector indexing with ChromaDB, and LangChain orchestration to deliver grounded, measurable enterprise utility.',
    },
    {
      num: '03',
      title: 'Full-Stack Precision & Design Fidelity',
      desc: 'Bridging modern frontends (Next.js, TypeScript) with robust backend endpoints (FastAPI, Node.js), ensuring type safety, strict input validation, and fluid interactions.',
    },
    {
      num: '04',
      title: 'Technical Leadership & Engineering Rigor',
      desc: 'Mentoring engineering teams, setting code quality benchmarks, designing continuous delivery pipelines, and translating business goals into robust software specs.',
    },
  ];

  return (
    <section id="about" className="py-28 relative border-b border-canvas-border bg-canvas-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About The Engineer"
          title="Beyond Code. Building What Matters."
          subtitle="Engineering resilient distributed systems, production AI intelligence, and modern digital products by combining deep technical rigor with practical product sense."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Professional Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-canvas-card border border-canvas-border space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />

              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block">
                Professional Positioning
              </span>

              <h3 className="text-2xl font-display font-bold text-editorial-primary tracking-tight">
                Software Engineer • Full-Stack Developer • AI/ML Engineer • Software Architect
              </h3>

              <div className="space-y-4 text-editorial-secondary text-sm sm:text-base leading-relaxed font-sans">
                {personalInfo.bio.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-editorial-muted block uppercase text-[10px]">Current Post</span>
                  <span className="text-editorial-primary font-medium">Lead Software Developer</span>
                </div>
                <div>
                  <span className="text-editorial-muted block uppercase text-[10px]">Headquarters</span>
                  <span className="text-editorial-primary font-medium">Indore, MP, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Engineering Principles (Not generic icons) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-editorial-muted">
                Core Engineering Pillars
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {principles.map((p) => (
                <div
                  key={p.num}
                  className="group p-6 sm:p-7 rounded-2xl bg-canvas-card border border-canvas-border hover:border-accent/35 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-mono text-accent font-bold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                      {p.num}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-editorial-muted group-hover:text-accent transition-colors" />
                  </div>

                  <h4 className="text-lg font-display font-bold text-editorial-primary group-hover:text-accent transition-colors mt-3 mb-2">
                    {p.title}
                  </h4>
                  <p className="text-sm text-editorial-secondary leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
