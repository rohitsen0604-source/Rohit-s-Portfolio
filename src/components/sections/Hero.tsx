'use client';

import React from 'react';
import { ArrowRight, Download, Terminal, MapPin, Sparkles, Code2, Server, Cpu } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Top Status & Role Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Badge variant="emerald" dot size="md">
              Lead Software Engineer
            </Badge>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 bg-surface-elevated/80 border border-white/10 px-3 py-1 rounded-full font-mono">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Main Editorial Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Engineering{' '}
              <span className="text-gradient-emerald">
                Intelligent
              </span>{' '}
              Digital Products.
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-300 tracking-tight">
              Building Scalable Software. Solving Real-World Problems.
            </p>
          </div>

          {/* Hero Narrative Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-400 font-normal leading-relaxed">
            {personalInfo.heroDescription}
          </p>

          {/* Professional Positioning Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {personalInfo.professionalPositioning.map((item, index) => (
              <span
                key={item}
                className="text-xs font-mono px-3 py-1 rounded-md bg-surface border border-white/10 text-neutral-300 flex items-center gap-1.5 shadow-sm"
              >
                {index === 0 && <Code2 className="w-3 h-3 text-emerald-400" />}
                {index === 1 && <Terminal className="w-3 h-3 text-emerald-400" />}
                {index === 2 && <Cpu className="w-3 h-3 text-emerald-400" />}
                {index === 3 && <Server className="w-3 h-3 text-emerald-400" />}
                {item}
              </span>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {personalInfo.primaryCTAs.work}
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
            >
              {personalInfo.primaryCTAs.contact}
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              icon={<Download className="w-4 h-4" />}
            >
              {personalInfo.secondaryCTA.resume}
            </Button>
          </div>

          {/* Architectural Pillars Summary Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-white/[0.08] text-left">
            <div className="p-4 rounded-xl bg-surface/60 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-1">
                Role
              </span>
              <p className="text-sm font-semibold text-white">Lead Software Dev</p>
              <p className="text-xs text-neutral-400">Black Grapes Softech</p>
            </div>
            <div className="p-4 rounded-xl bg-surface/60 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-1">
                Core Stack
              </span>
              <p className="text-sm font-semibold text-white">Python • Next.js • FastAPI</p>
              <p className="text-xs text-neutral-400">PostgreSQL • Node.js</p>
            </div>
            <div className="p-4 rounded-xl bg-surface/60 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-1">
                AI / ML Focus
              </span>
              <p className="text-sm font-semibold text-white">RAG • LangChain • LLMs</p>
              <p className="text-xs text-neutral-400">Deep Learning & NLP</p>
            </div>
            <div className="p-4 rounded-xl bg-surface/60 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-1">
                Education
              </span>
              <p className="text-sm font-semibold text-white">B.Tech CSE (Data Science)</p>
              <p className="text-xs text-neutral-400">Diploma Mechanical Engg.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
