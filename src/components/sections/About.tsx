'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personalInfo';
import { ArrowUpRight } from 'lucide-react';

export function About() {
  const focusAreas = [
    {
      num: '01',
      title: 'Full-Stack Development',
      desc: 'Building responsive, accessible web applications with Next.js, React, and TypeScript with strict type safety and fluid user interaction.',
    },
    {
      num: '02',
      title: 'Software Architecture',
      desc: 'Designing modular microservices, decoupled system topologies, asynchronous event queues, and clean API gateways built for resilience.',
    },
    {
      num: '03',
      title: 'AI/ML Engineering',
      desc: 'Operationalizing production Retrieval-Augmented Generation (RAG) pipelines, vector databases (ChromaDB), and practical machine learning models.',
    },
    {
      num: '04',
      title: 'Backend Engineering',
      desc: 'Engineering high-throughput RESTful services and asynchronous endpoints using Python, FastAPI, Node.js, and relational schema optimization.',
    },
    {
      num: '05',
      title: 'Scalable Digital Products',
      desc: 'Overseeing the lifecycle of digital platforms from initial requirements and database design through to automated CI/CD and production deployment.',
    },
  ];

  return (
    <section id="about" className="py-28 relative border-b border-swiss-border bg-swiss-surface/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="01 // PROFILE"
          title="ENGINEERING IDEAS INTO REAL-WORLD SOLUTIONS."
          subtitle="Combining architectural discipline, backend engineering rigor, and applied machine learning to deliver high-performance software systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Professional Introduction with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 sm:p-10 bg-white border border-swiss-border shadow-swiss-card space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-swiss-orange font-bold block">
                BACKGROUND
              </span>

              <h3 className="text-2xl font-display font-bold text-swiss-text tracking-tight uppercase">
                Lead Software Engineer &amp; Software Architect
              </h3>

              <div className="space-y-4 text-swiss-muted text-sm sm:text-base leading-relaxed font-sans">
                {personalInfo.bio.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-swiss-border grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-swiss-muted block uppercase text-[10px]">CURRENT ROLE</span>
                  <span className="text-swiss-text font-bold">Lead Software Developer</span>
                </div>
                <div>
                  <span className="text-swiss-muted block uppercase text-[10px]">HEADQUARTERS</span>
                  <span className="text-swiss-text font-bold">Indore, MP, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Focus Areas with Staggered Directional Reveal */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-swiss-muted font-bold">
                CORE DISCIPLINES
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={area.num}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -2 }}
                  className="group p-6 sm:p-7 bg-white border border-swiss-border hover:border-swiss-orange transition-colors duration-200 shadow-swiss-card cursor-default"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-mono text-swiss-orange font-bold px-2 py-0.5 bg-swiss-orange-light border border-swiss-orange-border">
                      {area.num}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-swiss-muted group-hover:text-swiss-orange transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h4 className="text-lg font-display font-bold text-swiss-text group-hover:text-swiss-orange transition-colors mt-3 mb-1.5 uppercase">
                    {area.title}
                  </h4>
                  <p className="text-sm text-swiss-muted leading-relaxed font-sans">
                    {area.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
