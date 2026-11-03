import React from 'react';

export function AmbientLight() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top emerald ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-emerald-500/10 blur-[140px] rounded-full" />
      {/* Subtle mid-page ambient glow */}
      <div className="absolute top-[40%] -left-48 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full" />
      {/* Lower right ambient glow */}
      <div className="absolute top-[75%] -right-48 w-[600px] h-[600px] bg-emerald-600/5 blur-[180px] rounded-full" />
    </div>
  );
}

