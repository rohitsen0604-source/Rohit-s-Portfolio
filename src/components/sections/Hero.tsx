'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personalInfo';

// Dynamic import for 3D Hero sculpture with fallback
const Hero3DVisual = dynamic(
  () => import('@/components/ui/Hero3DVisual').then((mod) => mod.Hero3DVisual),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[380px] sm:h-[460px] md:h-[540px] flex items-center justify-center">
        <div className="w-48 h-48 border border-swiss-border animate-pulse bg-swiss-surface/50" />
      </div>
    ),
  }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden border-b border-swiss-border"
    >
      {/* Background Swiss Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-swiss-grid opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Swiss Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7 z-10">
            {/* Label & Status Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-swiss-orange uppercase bg-swiss-orange-light px-3 py-1 border border-swiss-orange-border">
                <span className="w-2 h-2 bg-swiss-orange inline-block" />
                LEAD SOFTWARE ENGINEER
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-swiss-muted bg-white px-3 py-1 border border-swiss-border">
                <MapPin className="w-3.5 h-3.5 text-swiss-orange" />
                <span className="uppercase">{personalInfo.location}</span>
              </div>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-swiss-text uppercase leading-[1.02]">
              I BUILD DIGITAL <br />
              PRODUCTS THAT <br />
              <span className="text-swiss-orange underline decoration-swiss-orange/30 underline-offset-8">
                MOVE BUSINESSES
              </span>{' '}
              <br />
              FORWARD.
            </h1>

            {/* Short Professional Introduction */}
            <p className="max-w-xl text-base sm:text-lg md:text-xl text-swiss-muted font-sans leading-relaxed">
              I&apos;m <span className="text-swiss-text font-bold">Rohit Sen</span>, a Lead Software Engineer and Architect focused on engineering scalable applications, intelligent AI-powered systems, and modern digital products.
            </p>

            {/* CTAs */}
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
                Let&apos;s Work Together
              </Button>
            </div>

            {/* Editorial Status Strip */}
            <div className="pt-8 border-t border-swiss-border grid grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="text-swiss-muted uppercase tracking-wider block text-[10px]">
                  POST
                </span>
                <span className="text-swiss-text font-bold">Lead Developer</span>
                <span className="text-swiss-muted block text-[11px]">Black Grapes Softech</span>
              </div>
              <div>
                <span className="text-swiss-muted uppercase tracking-wider block text-[10px]">
                  DISCIPLINE
                </span>
                <span className="text-swiss-text font-bold">Full-Stack &amp; AI</span>
                <span className="text-swiss-muted block text-[11px]">Software Architecture</span>
              </div>
              <div>
                <span className="text-swiss-muted uppercase tracking-wider block text-[10px]">
                  AVAILABILITY
                </span>
                <span className="text-swiss-orange font-bold">Open for Q4</span>
                <span className="text-swiss-muted block text-[11px]">Engineering Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract 3D Architecture Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
