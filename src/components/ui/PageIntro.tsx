'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageIntro() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsComplete(true);
      return;
    }

    // Smooth counting interval over ~1.1s
    const startTime = performance.now();
    const duration = 1100;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsComplete(true);
        }, 250);
      }
    };

    const rafId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 bg-[#F5F2EA] flex flex-col justify-between p-8 sm:p-12 pointer-events-auto"
        >
          {/* Top Info */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-swiss-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-swiss-orange inline-block animate-pulse" />
              SYSTEM // ARCHITECTURE
            </span>
            <span>EDITION 2026</span>
          </div>

          {/* Center Brand & Expanding Orange Line */}
          <div className="max-w-2xl mx-auto w-full text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-swiss-text uppercase"
            >
              ROHIT SEN<span className="text-swiss-orange">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-widest text-swiss-muted"
            >
              Lead Software Engineer &amp; Software Architect
            </motion.p>

            {/* Expanding Minimal Swiss Orange Line */}
            <div className="relative w-full h-[2px] bg-swiss-border/60 mx-auto overflow-hidden mt-6">
              <motion.div
                className="absolute inset-y-0 left-0 bg-swiss-orange"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>

          {/* Bottom Telemetry Counter */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-swiss-muted">
            <span>INDORE, INDIA</span>
            <div className="flex items-center gap-2 font-bold text-swiss-text">
              <span className="text-swiss-orange font-mono text-sm sm:text-base">
                {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

