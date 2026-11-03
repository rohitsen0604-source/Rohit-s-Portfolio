'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { personalInfo } from '@/data/personalInfo';

// Dynamic import for Interactive 3D Developer Workspace with fallback
const Hero3DVisual = dynamic(
  () => import('@/components/ui/Hero3DVisual').then((mod) => mod.Hero3DVisual),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[440px] sm:h-[500px] md:h-[540px] lg:h-[570px] flex items-center justify-center border border-swiss-border bg-swiss-surface/40 p-6">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-swiss-orange border-t-transparent animate-spin" />
          <span className="font-mono text-xs text-swiss-muted tracking-wider uppercase">
            INITIALIZING 3D DEVELOPER WORKSPACE...
          </span>
        </div>
      </div>
    ),
  }
);

export function Hero() {
  const lineVariants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.2 + i * 0.12,
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center pt-28 pb-16 overflow-hidden border-b border-swiss-border"
    >
      {/* Background Swiss Architectural Grid Pattern with subtle parallax */}
      <div className="absolute inset-0 bg-swiss-grid opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Swiss Editorial Typography & Staggered Elements */}
          <div className="lg:col-span-7 space-y-7 z-10">
            {/* Label & Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-swiss-orange uppercase bg-swiss-orange-light px-3 py-1 border border-swiss-orange-border">
                <span className="w-2 h-2 bg-swiss-orange inline-block animate-pulse" />
                LEAD SOFTWARE ENGINEER
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-swiss-muted bg-white px-3 py-1 border border-swiss-border">
                <MapPin className="w-3.5 h-3.5 text-swiss-orange" />
                <span className="uppercase">{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Signature Headline Animation with Word/Line Blur-to-Sharp Stagger */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-swiss-text uppercase leading-[1.02] overflow-hidden">
              <motion.span
                custom={0}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                I BUILD DIGITAL
              </motion.span>
              <motion.span
                custom={1}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                PRODUCTS THAT
              </motion.span>
              <motion.span
                custom={2}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block text-swiss-orange underline decoration-swiss-orange/30 underline-offset-8"
              >
                MOVE BUSINESSES
              </motion.span>
              <motion.span
                custom={3}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                FORWARD.
              </motion.span>
            </h1>

            {/* Short Professional Introduction with Fade-In */}
            <motion.p
              initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="max-w-xl text-base sm:text-lg md:text-xl text-swiss-muted font-sans leading-relaxed"
            >
              I&apos;m <span className="text-swiss-text font-bold">Rohit Sen</span>, a Lead Software Engineer and Architect focused on engineering scalable applications, intelligent AI-powered systems, and modern digital products.
            </motion.p>

            {/* Magnetic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <Magnetic strength={0.25}>
                <Button
                  href="#projects"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore My Work
                </Button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Let&apos;s Work Together
                </Button>
              </Magnetic>
            </motion.div>

            {/* Editorial Status Strip with Staggered Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="pt-8 border-t border-swiss-border grid grid-cols-3 gap-4 font-mono text-xs"
            >
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
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Developer Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
          >
            <Hero3DVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
