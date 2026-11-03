'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, ArrowUpRight, Download, Sparkles, Terminal, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { personalInfo } from '@/data/personalInfo';

// Dynamic lazy import for 3D Hero component with lightweight fallback
const Hero3DVisual = dynamic(
  () => import('@/components/ui/Hero3DVisual').then((mod) => mod.Hero3DVisual),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[380px] sm:h-[460px] md:h-[540px] flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-accent/20 animate-pulse bg-accent/5" />
      </div>
    ),
  }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden border-b border-canvas-border"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-editorial-grid opacity-35 pointer-events-none" />

      {/* Atmospheric radial gradient spotlight */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[500px] bg-accent/[0.04] blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Asymmetric Editorial Typography & Presentation */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Availability Pill & Role */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent" dot size="md">
                Available for Engineering Leadership
              </Badge>
              <div className="flex items-center gap-1.5 text-xs font-mono text-editorial-secondary bg-canvas-card px-3 py-1 rounded-full border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Master Headline: Space Grotesk Editorial Typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-[-0.035em] text-editorial-primary leading-[1.03]">
              Engineering <br />
              Ideas Into <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8">
                Intelligent
              </span>{' '}
              <br />
              <span className="text-gradient-editorial">Digital Products.</span>
            </h1>

            {/* Supporting Description */}
            <p className="max-w-xl text-base sm:text-lg md:text-xl text-editorial-secondary font-sans leading-relaxed">
              I&apos;m <span className="text-editorial-primary font-semibold">Rohit Sen</span>, a Lead Software Engineer focused on architecting scalable applications, intelligent AI-powered systems, and modern digital products.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore My Work
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Let&apos;s Collaborate
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                icon={<Download className="w-4 h-4" />}
              >
                Download Resume
              </Button>
            </div>

            {/* Architectural Status Strip */}
            <div className="pt-8 border-t border-canvas-border grid grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="text-editorial-muted uppercase tracking-wider block text-[10px]">
                  Current Post
                </span>
                <span className="text-editorial-primary font-semibold">Lead Developer</span>
                <span className="text-editorial-secondary block text-[11px]">Black Grapes Softech</span>
              </div>
              <div>
                <span className="text-editorial-muted uppercase tracking-wider block text-[10px]">
                  Engineering Scope
                </span>
                <span className="text-editorial-primary font-semibold">Full-Stack & AI</span>
                <span className="text-editorial-secondary block text-[11px]">System Architecture</span>
              </div>
              <div>
                <span className="text-editorial-muted uppercase tracking-wider block text-[10px]">
                  Code Craft
                </span>
                <span className="text-accent font-semibold">TypeScript & Python</span>
                <span className="text-editorial-secondary block text-[11px]">Microservices & RAG</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic 3D Sculpture */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
