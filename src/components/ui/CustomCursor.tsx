'use client';

import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    if (!mediaQuery.matches) return;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
    >
      {/* Outer subtle halo ring */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ${
          isPointer
            ? 'w-10 h-10 border-emerald-400 bg-emerald-400/10 scale-125'
            : 'w-6 h-6 border-emerald-500/40 bg-transparent'
        }`}
      />
      {/* Inner tiny dot */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#10B981]" />
    </div>
  );
}

