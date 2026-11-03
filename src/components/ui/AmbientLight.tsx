import React from 'react';

export function AmbientLight() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top subtle lime ambient warmth */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-accent/5 blur-[160px] rounded-full" />
      {/* Mid subtle mood light */}
      <div className="absolute top-[35%] -left-64 w-[600px] h-[600px] bg-canvas-card/80 blur-[180px] rounded-full" />
      {/* Lower right subtle illumination */}
      <div className="absolute top-[70%] -right-52 w-[650px] h-[650px] bg-accent/[0.03] blur-[200px] rounded-full" />
    </div>
  );
}
