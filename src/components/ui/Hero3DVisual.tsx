'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Code2,
  Globe,
  Database,
  Cpu,
  Play,
  CheckCircle2,
  Activity,
  RefreshCw,
  Sparkles,
  Layers,
  ChevronRight,
  Zap,
} from 'lucide-react';

type WorkspaceFocus = 'all' | 'editor' | 'browser' | 'terminal' | 'database';

interface CodeFile {
  name: string;
  lang: string;
  icon: string;
  lines: { num: string; text: string; highlight?: boolean }[];
}

const CODE_FILES: Record<string, CodeFile> = {
  'inference_pipeline.py': {
    name: 'inference_pipeline.py',
    lang: 'Python (FastAPI + PyTorch)',
    icon: '🐍',
    lines: [
      { num: '01', text: 'from fastapi import APIRouter, Depends' },
      { num: '02', text: 'from core.neural import NeuralInferenceEngine' },
      { num: '03', text: 'from core.db import get_vector_session' },
      { num: '04', text: '' },
      { num: '05', text: '@router.post("/api/v1/predict", response_model=Output)' },
      { num: '06', text: 'async def run_pipeline(req: Payload, db=Depends(get_db)):' },
      { num: '07', text: '    # 1. Cosine similarity search in pgvector', highlight: true },
      { num: '08', text: '    embeddings = await db.similarity_search(req.vector)' },
      { num: '09', text: '    # 2. Low-latency neural inference execution' },
      { num: '10', text: '    tokens = await engine.generate(embeddings, temp=0.2)' },
      { num: '11', text: '    return {"tokens": tokens, "latency_ms": 12.4, "status": "200"}' },
    ],
  },
  'neural_worker.ts': {
    name: 'neural_worker.ts',
    lang: 'TypeScript (Next.js 15)',
    icon: '⚡',
    lines: [
      { num: '01', text: 'import { NextRequest, NextResponse } from "next/server";' },
      { num: '02', text: 'import { RedisPool } from "@/lib/cache";' },
      { num: '03', text: '' },
      { num: '04', text: 'export async function POST(req: NextRequest) {' },
      { num: '05', text: '  const session = await RedisPool.acquire();' },
      { num: '06', text: '  const payload = await req.json();', highlight: true },
      { num: '07', text: '  // Streaming response with sub-15ms edge dispatch' },
      { num: '08', text: '  const stream = await dispatchNeuralStream(payload);' },
      { num: '09', text: '  return new Response(stream, { headers: { "x-latency": "12ms" } });' },
      { num: '10', text: '}' },
    ],
  },
  'schema.sql': {
    name: 'schema.sql',
    lang: 'PostgreSQL + pgvector',
    icon: '🗄️',
    lines: [
      { num: '01', text: 'CREATE EXTENSION IF NOT EXISTS vector;' },
      { num: '02', text: '' },
      { num: '03', text: 'CREATE TABLE production_models (' },
      { num: '04', text: '    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),' },
      { num: '05', text: '    model_tag VARCHAR(64) NOT NULL,' },
      { num: '06', text: '    embedding vector(1536) NOT NULL,', highlight: true },
      { num: '07', text: '    p99_latency NUMERIC(5,2) DEFAULT 14.20,' },
      { num: '08', text: '    is_active BOOLEAN DEFAULT true' },
      { num: '09', text: ');' },
    ],
  },
};

const INITIAL_LOGS = [
  { id: 1, time: '14:32:01', type: 'INFO', text: 'Uvicorn running on http://127.0.0.1:8000 (Production)' },
  { id: 2, time: '14:32:02', type: 'INFO', text: 'PyTorch CUDA runtime initialized: model_v4 (weights: 1.2GB)' },
  { id: 3, time: '14:32:03', type: 'INFO', text: 'PostgreSQL connection pool verified (10/10 active)' },
  { id: 4, time: '14:32:05', type: 'OK', text: 'POST /api/v1/predict 200 OK — 12.4ms (128 tokens)' },
  { id: 5, time: '14:32:08', type: 'OK', text: 'GET /metrics/prometheus 200 OK — 0.8ms' },
];

export function Hero3DVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Workspace Focus and Tab states
  const [focus, setFocus] = useState<WorkspaceFocus>('all');
  const [activeFile, setActiveFile] = useState<string>('inference_pipeline.py');
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [reqCount, setReqCount] = useState(142850);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isLiveTelemetry, setIsLiveTelemetry] = useState(true);

  // Mouse Parallax 3D Spring coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Parallax Event Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Live Terminal Log Stream Simulation
  useEffect(() => {
    if (!isLiveTelemetry) return;
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const latencies = ['11.8ms', '12.4ms', '14.1ms', '9.6ms', '13.2ms'];
      const randomLatency = latencies[Math.floor(Math.random() * latencies.length)];

      const newLog = {
        id: Date.now(),
        time: timeStr,
        type: 'OK',
        text: `POST /api/v1/predict 200 OK — ${randomLatency} (tokens: 128)`,
      };

      setLogs((prev) => [...prev.slice(-4), newLog]);
      setReqCount((c) => c + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [isLiveTelemetry]);

  // Trigger manual API benchmark test
  const triggerBenchmark = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];

    setTimeout(() => {
      setLogs((prev) => [
        ...prev.slice(-4),
        {
          id: Date.now(),
          time: timeStr,
          type: 'BENCHMARK',
          text: `⚡ BENCHMARK: 1,000 req burst completed (Avg latency: 11.2ms, 0 errors)`,
        },
      ]);
      setReqCount((c) => c + 1000);
      setIsSimulating(false);
    }, 600);
  };

  // 3D rotation angles based on mouse offset
  const rotateX = isHovered ? -mousePos.y * 14 : 3;
  const rotateY = isHovered ? mousePos.x * 18 : -6;

  const currentCode = CODE_FILES[activeFile] || CODE_FILES['inference_pipeline.py'];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col items-center select-none"
    >
      {/* 3D Perspective Workspace Viewport */}
      <div
        className="relative w-full h-[440px] sm:h-[500px] md:h-[540px] lg:h-[570px] flex items-center justify-center overflow-hidden py-4"
        style={{ perspective: '1300px' }}
      >
        {/* Subtle Ambient Studio Ground Shadow */}
        <div
          className="absolute inset-x-8 bottom-3 h-16 bg-black/10 rounded-full blur-2xl pointer-events-none transition-transform duration-500"
          style={{
            transform: `scale(${isHovered ? 1.05 : 0.95}) translateY(${mousePos.y * 10}px)`,
          }}
        />

        {/* Master 3D Workspace Stage with Smooth Inertia */}
        <motion.div
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
            z: isHovered ? 15 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 22,
            mass: 0.8,
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full max-w-[530px] h-[400px] sm:h-[460px] md:h-[480px] flex items-center justify-center"
        >
          {/* ========================================================= */}
          {/* 1. PRIMARY WINDOW: THE CODE EDITOR (VS Code Studio Screen) */}
          {/* ========================================================= */}
          <motion.div
            animate={{
              z: focus === 'editor' ? 70 : focus === 'all' ? 20 : 0,
              scale: focus === 'editor' ? 1.03 : 1,
              opacity: focus === 'all' || focus === 'editor' ? 1 : 0.45,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setFocus('editor')}
            className={`absolute left-0 top-2 w-[82%] sm:w-[78%] h-[280px] sm:h-[310px] bg-[#141614] border rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 z-10 ${
              focus === 'editor'
                ? 'border-swiss-orange ring-1 ring-swiss-orange/40 shadow-swiss-orange/10'
                : 'border-[#2c302c] hover:border-swiss-orange/60'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Monitor Top Chrome Bar with Swiss Dots */}
            <div className="h-7 bg-[#0d0e0d] border-b border-[#242724] px-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-swiss-orange/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f3a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#2a2d2a]" />
                <span className="ml-2 font-mono text-[10px] text-zinc-400 hidden sm:inline">
                  rohit-sen-workspace — {currentCode.lang}
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-400">
                <Code2 className="w-3 h-3 text-swiss-orange" />
                <span>VS CODE</span>
              </div>
            </div>

            {/* Editor Tab Bar */}
            <div className="flex items-center bg-[#111311] border-b border-[#222522] overflow-x-auto text-[11px] font-mono">
              {Object.keys(CODE_FILES).map((fileName) => {
                const isActive = activeFile === fileName;
                return (
                  <button
                    key={fileName}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveFile(fileName);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 border-r border-[#222522] transition-colors ${
                      isActive
                        ? 'bg-[#181a18] text-white border-t-2 border-t-swiss-orange'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#141614]'
                    }`}
                  >
                    <span>{CODE_FILES[fileName].icon}</span>
                    <span className="truncate max-w-[120px]">{fileName}</span>
                  </button>
                );
              })}
            </div>

            {/* Code Body with Real Syntax Highlighting */}
            <div className="p-3 font-mono text-[11px] sm:text-xs leading-[1.45] overflow-hidden text-zinc-300">
              {currentCode.lines.map((line, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-1 rounded transition-colors ${
                    line.highlight
                      ? 'bg-swiss-orange/15 text-white font-medium border-l-2 border-swiss-orange'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <span className="text-[#555a55] select-none text-[10px] w-4 text-right">
                    {line.num}
                  </span>
                  <span className="truncate font-mono">
                    {/* Syntax Tokens formatting */}
                    {line.text.startsWith('from ') || line.text.startsWith('import ') ? (
                      <span className="text-swiss-orange font-semibold">{line.text}</span>
                    ) : line.text.startsWith('@') ? (
                      <span className="text-amber-300">{line.text}</span>
                    ) : line.text.includes('#') || line.text.includes('//') ? (
                      <span className="text-zinc-400 italic">{line.text}</span>
                    ) : line.text.includes('return') || line.text.includes('export') ? (
                      <span className="text-swiss-orange">{line.text}</span>
                    ) : line.text.includes('await') ? (
                      <span>
                        {line.text.split('await')[0]}
                        <span className="text-swiss-orange font-semibold">await</span>
                        {line.text.split('await')[1]}
                      </span>
                    ) : (
                      line.text
                    )}
                    {/* Blinking Cursor on active line */}
                    {line.highlight && (
                      <span className="inline-block w-1.5 h-3.5 ml-1 bg-swiss-orange align-middle animate-pulse" />
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Editor Bottom Status Bar */}
            <div className="absolute bottom-0 inset-x-0 h-5 bg-[#0e100e] border-t border-[#202320] px-2.5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-swiss-orange">● git: main*</span>
                <span>UTF-8</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{currentCode.lang.split(' ')[0]}</span>
                <span className="text-emerald-400">✓ 0 errors</span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* 2. SECONDARY WINDOW: LIVE BROWSER PREVIEW (Top Right)    */}
          {/* ========================================================= */}
          <motion.div
            animate={{
              z: focus === 'browser' ? 80 : focus === 'all' ? 55 : 10,
              scale: focus === 'browser' ? 1.04 : 1,
              opacity: focus === 'all' || focus === 'browser' ? 1 : 0.45,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setFocus('browser')}
            className={`absolute right-0 top-0 w-[58%] sm:w-[55%] h-[210px] sm:h-[230px] bg-white border rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 z-20 ${
              focus === 'browser'
                ? 'border-swiss-orange ring-1 ring-swiss-orange/40 shadow-swiss-orange/15'
                : 'border-swiss-border hover:border-swiss-orange/70'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Browser Header Bar */}
            <div className="h-7 bg-swiss-surface border-b border-swiss-border px-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              {/* URL Bar */}
              <div className="flex-1 max-w-[190px] mx-2 px-2 py-0.5 bg-white border border-swiss-border rounded text-[10px] font-mono text-swiss-muted truncate flex items-center justify-between">
                <span className="truncate">https://app.rohitsen.dev</span>
                <Globe className="w-2.5 h-2.5 text-swiss-orange shrink-0 ml-1" />
              </div>
              <RefreshCw
                onClick={(e) => {
                  e.stopPropagation();
                  triggerBenchmark();
                }}
                className={`w-3 h-3 text-swiss-muted hover:text-swiss-orange transition-transform ${
                  isSimulating ? 'animate-spin text-swiss-orange' : ''
                }`}
              />
            </div>

            {/* Browser App Content: Real-time UI Dashboard */}
            <div className="p-3 bg-white space-y-2 text-swiss-text">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-swiss-muted block">
                    NEUROHR AI // PRODUCTION
                  </span>
                  <span className="font-bold text-xs">Live System Analytics</span>
                </div>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  HEALTHY
                </span>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-1.5">
                <div className="p-2 border border-swiss-border bg-swiss-surface/60">
                  <span className="font-mono text-[9px] text-swiss-muted uppercase block">
                    TOTAL REQUESTS
                  </span>
                  <span className="font-mono font-bold text-xs text-swiss-text">
                    {reqCount.toLocaleString()}
                  </span>
                </div>
                <div className="p-2 border border-swiss-border bg-swiss-surface/60">
                  <span className="font-mono text-[9px] text-swiss-muted uppercase block">
                    P99 LATENCY
                  </span>
                  <span className="font-mono font-bold text-xs text-swiss-orange">12.4ms</span>
                </div>
              </div>

              {/* Throughput SVG Mini Sparkline */}
              <div className="pt-1">
                <div className="flex items-center justify-between font-mono text-[9px] text-swiss-muted pb-1">
                  <span>THROUGHPUT</span>
                  <span className="text-swiss-orange font-bold">99.98% UP</span>
                </div>
                <div className="w-full h-8 bg-swiss-surface/40 border border-swiss-border relative overflow-hidden flex items-end px-1 gap-1">
                  {[35, 55, 45, 75, 60, 85, 70, 95, 80, 100, 85, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-swiss-orange/70 hover:bg-swiss-orange transition-all"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  triggerBenchmark();
                }}
                disabled={isSimulating}
                className="w-full py-1 bg-swiss-text text-white hover:bg-swiss-orange transition-colors font-mono text-[10px] uppercase font-bold flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3 h-3 text-swiss-orange" />
                <span>{isSimulating ? 'BENCHMARKING...' : 'RUN BENCHMARK'}</span>
              </button>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* 3. TERTIARY WINDOW: BACKEND SERVER TERMINAL (Bottom Right) */}
          {/* ========================================================= */}
          <motion.div
            animate={{
              z: focus === 'terminal' ? 85 : focus === 'all' ? 65 : 15,
              scale: focus === 'terminal' ? 1.04 : 1,
              opacity: focus === 'all' || focus === 'terminal' ? 1 : 0.45,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setFocus('terminal')}
            className={`absolute right-1 bottom-1 w-[64%] sm:w-[60%] h-[180px] sm:h-[195px] bg-[#0c0d0c] border rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 z-30 ${
              focus === 'terminal'
                ? 'border-swiss-orange ring-1 ring-swiss-orange/40 shadow-swiss-orange/15'
                : 'border-[#262926] hover:border-swiss-orange/70'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Terminal Title Bar */}
            <div className="h-6 bg-[#121412] border-b border-[#222522] px-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-400">
                <Terminal className="w-3 h-3 text-swiss-orange" />
                <span>zsh — uvicorn worker:8000 (prod)</span>
              </div>
              <span className="font-mono text-[9px] text-emerald-400">● ACTIVE</span>
            </div>

            {/* Streaming Logs Body */}
            <div className="p-2.5 font-mono text-[10px] sm:text-[11px] leading-relaxed text-zinc-300 space-y-1 overflow-hidden">
              {logs.map((log) => (
                <div key={log.id} className="flex items-start gap-1.5 truncate">
                  <span className="text-zinc-400 text-[9px] select-none">[{log.time}]</span>
                  {log.type === 'OK' ? (
                    <span className="text-emerald-400 font-bold">OK:</span>
                  ) : log.type === 'BENCHMARK' ? (
                    <span className="text-amber-400 font-bold">⚡ BENCH:</span>
                  ) : (
                    <span className="text-swiss-orange font-bold">INFO:</span>
                  )}
                  <span className="truncate">{log.text}</span>
                </div>
              ))}
              {/* Terminal Prompt with Blinking Block Cursor */}
              <div className="flex items-center gap-1 text-zinc-300 pt-1">
                <span className="text-swiss-orange font-bold">rsen95759@gmail:~$</span>
                <span className="w-2 h-3.5 bg-swiss-orange animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* 4. DOCKED WINDOW: STRUCTURED DATABASE PREVIEW (Bottom Left)*/}
          {/* ========================================================= */}
          <motion.div
            animate={{
              z: focus === 'database' ? 75 : focus === 'all' ? 40 : 5,
              scale: focus === 'database' ? 1.04 : 1,
              opacity: focus === 'all' || focus === 'database' ? 1 : 0.45,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setFocus('database')}
            className={`absolute left-2 bottom-3 w-[52%] sm:w-[48%] h-[145px] sm:h-[155px] bg-[#161816] border rounded-lg shadow-xl overflow-hidden cursor-pointer transition-all duration-300 z-25 ${
              focus === 'database'
                ? 'border-swiss-orange ring-1 ring-swiss-orange/40'
                : 'border-[#2d302d] hover:border-swiss-orange/60'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Database Header */}
            <div className="h-6 bg-[#0f110f] border-b border-[#242724] px-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-300">
                <Database className="w-3 h-3 text-swiss-orange" />
                <span>PostgreSQL (pgvector)</span>
              </div>
              <span className="font-mono text-[9px] text-zinc-400">1.2ms QUERY</span>
            </div>

            {/* SQL Query Snippet & Table Rows */}
            <div className="p-2 font-mono text-[9px] sm:text-[10px] text-zinc-300 space-y-1">
              <div className="text-[9px] text-zinc-400 truncate">
                <span className="text-swiss-orange">SELECT</span> id, model, latency_ms{' '}
                <span className="text-swiss-orange">FROM</span> models;
              </div>

              {/* Table Rows */}
              <div className="border border-[#282b28] bg-[#111311] rounded overflow-hidden">
                <div className="grid grid-cols-4 bg-[#1a1d1a] text-zinc-400 font-bold p-1 text-[8px] sm:text-[9px] uppercase border-b border-[#282b28]">
                  <span>ID</span>
                  <span>MODEL</span>
                  <span>LATENCY</span>
                  <span>STATUS</span>
                </div>
                <div className="grid grid-cols-4 p-1 text-[8px] sm:text-[9px] text-zinc-300 border-b border-[#202220]">
                  <span className="text-zinc-400">0x01</span>
                  <span className="font-bold text-white truncate">NeuroHR</span>
                  <span className="text-swiss-orange">12.4ms</span>
                  <span className="text-emerald-400 font-bold">ACTIVE</span>
                </div>
                <div className="grid grid-cols-4 p-1 text-[8px] sm:text-[9px] text-zinc-300">
                  <span className="text-zinc-400">0x02</span>
                  <span className="font-bold text-white truncate">GoRush</span>
                  <span className="text-swiss-orange">8.1ms</span>
                  <span className="text-emerald-400 font-bold">ACTIVE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* 5. AI / NEURAL INFERENCE MICRO-MONITOR (Floating Badge)   */}
          {/* ========================================================= */}
          <motion.div
            animate={{
              z: 90,
              y: [0, -4, 0],
            }}
            transition={{
              y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute right-3 top-10 pointer-events-none hidden sm:flex items-center gap-2 px-2.5 py-1 bg-black/90 border border-swiss-orange/70 rounded shadow-xl text-white font-mono text-[9px] z-40"
          >
            <Cpu className="w-3 h-3 text-swiss-orange animate-spin" />
            <div className="flex flex-col">
              <span className="text-[8px] text-zinc-400 leading-tight">NEURAL TOKENS</span>
              <span className="text-swiss-orange font-bold leading-tight">124 tok/sec</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Workspace Navigation Tabs */}
      <div className="w-full pt-3 border-t border-swiss-border space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Window Focus Selector Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: 'FULL WORKSPACE', icon: Layers },
              { id: 'editor', label: 'CODE EDITOR', icon: Code2 },
              { id: 'browser', label: 'BROWSER APP', icon: Globe },
              { id: 'terminal', label: 'TERMINAL', icon: Terminal },
              { id: 'database', label: 'DATABASE', icon: Database },
            ].map((tab) => {
              const isSelected = focus === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFocus(tab.id as WorkspaceFocus)}
                  className={`px-2.5 py-1 text-xs font-mono border flex items-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-swiss-text text-white border-swiss-text font-bold shadow-sm'
                      : 'bg-white text-swiss-muted border-swiss-border hover:border-swiss-orange hover:text-swiss-orange'
                  }`}
                >
                  <Icon
                    className={`w-3 h-3 ${isSelected ? 'text-swiss-orange' : 'text-swiss-muted'}`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="font-mono text-[10px] text-swiss-orange uppercase tracking-wider">
            [ LEAD SOFTWARE ENGINEER ]
          </div>
        </div>

        {/* Dynamic Capability Context Banner */}
        <div className="p-3 border border-swiss-border bg-white text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-swiss-orange inline-block" />
            <span className="text-swiss-text font-bold uppercase">
              {focus === 'editor'
                ? 'VS CODE // PRODUCTION PIPELINE'
                : focus === 'browser'
                ? 'CLIENT APPLICATION // LIVE DASHBOARD'
                : focus === 'terminal'
                ? 'BACKEND SERVER // FASTAPI & PYTHON'
                : focus === 'database'
                ? 'POSTGRESQL // STRUCTURED & VECTOR DATA'
                : 'END-TO-END SOFTWARE DEVELOPMENT ENVIRONMENT'}
            </span>
          </div>
          <span className="text-swiss-muted text-[11px]">
            {focus === 'editor'
              ? 'FastAPI + Next.js 15 + PostgreSQL Code'
              : focus === 'browser'
              ? '12.4ms Latency • Real-time UI'
              : focus === 'terminal'
              ? 'Async Microservices • Zero Downtime'
              : focus === 'database'
              ? 'ACID Transactions • Vector Search'
              : 'Interactive 3D Workspace with Depth & Parallax'}
          </span>
        </div>
      </div>
    </div>
  );
}
