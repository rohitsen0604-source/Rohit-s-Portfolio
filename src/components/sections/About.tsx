import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personalInfo';
import { Layers, Cpu, Server, ShieldCheck, Database, Cloud, Terminal, CheckCircle2 } from 'lucide-react';

export function About() {
  const pillars = [
    {
      title: 'Full-Stack Software Development',
      desc: 'Crafting responsive, high-performance web applications with Next.js, React, and modern TypeScript frameworks.',
      icon: Layers,
    },
    {
      title: 'AI & Machine Learning Engineering',
      desc: 'Integrating practical machine learning, deep learning, NLP, and RAG architectures into production software.',
      icon: Cpu,
    },
    {
      title: 'Backend Engineering & APIs',
      desc: 'Architecting resilient backend microservices, high-concurrency RESTful APIs, and asynchronous message queues.',
      icon: Server,
    },
    {
      title: 'Software & Data Architecture',
      desc: 'Designing normalized SQL schemas, NoSQL document stores, caching layers, and decoupled system topologies.',
      icon: Database,
    },
    {
      title: 'Cloud & DevOps Infrastructure',
      desc: 'Implementing containerized Docker workloads, automated CI/CD deployment pipelines, and cloud environments.',
      icon: Cloud,
    },
    {
      title: 'Technical Problem Solving & Leadership',
      desc: 'Translating business requirements into structured engineering specifications, code reviews, and dependable delivery.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06] bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Bridging Algorithmic Intelligence & Scalable Engineering"
          subtitle="A disciplined software engineer focused on building durable digital products, production AI systems, and high-performance backend architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-surface border border-white/[0.08] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
                <Terminal className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </div>
              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-neutral-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block">Current Focus</span>
                  <span className="text-white font-medium">Distributed Systems & AI RAG</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Primary Location</span>
                  <span className="text-white font-medium">Indore, MP, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Competency Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-surface-elevated/60 border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-emerald-400 mb-3.5 group-hover:scale-105 group-hover:shadow-glow-emerald transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-tight mb-1.5 group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

