import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { featuredProjects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Cloud,
  Workflow,
  Sparkles,
  ShieldCheck,
  Server,
  Terminal,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) {
    return { title: 'Project Not Found | Rohit Sen' };
  }

  return {
    title: `${project.title} | Architecture & Case Study | Rohit Sen`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isOngoing = project.status === 'In Active Development';

  return (
    <div className="min-h-screen bg-background text-neutral-100 selection:bg-emerald-500/30 selection:text-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Featured Projects</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-white/[0.08] shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-bl-full pointer-events-none blur-3xl" />

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Badge variant="emerald" size="sm">
              {project.category}
            </Badge>
            <Badge variant={isOngoing ? 'accent' : 'emerald'} dot size="sm">
              {project.status}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl font-mono text-emerald-400/90 mb-6 max-w-3xl">
            {project.tagline}
          </p>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
            {project.fullOverview}
          </p>

          <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono bg-surface-elevated text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Problem */}
          <div className="p-8 rounded-2xl bg-surface border border-white/[0.08]">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold block mb-2">
              Problem Context
            </span>
            <h2 className="text-xl font-bold text-white mb-3">
              The Engineering Challenge
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl bg-surface border border-emerald-500/30 bg-emerald-950/10">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
              Architectural Solution
            </span>
            <h2 className="text-xl font-bold text-white mb-3">
              Engineered Implementation
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Workflow Breakdown */}
        {project.architecture && (
          <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-white/[0.08] mb-12 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
                <Workflow className="w-4 h-4" />
                <span>System Architecture</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Technical Topology & Execution Flow
              </h2>
              <p className="text-sm text-neutral-400 mt-2">
                {project.architecture.summary}
              </p>
            </div>

            {project.architecture.workflow && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-neutral-400 font-semibold tracking-wider block">
                  Workflow Execution Stages:
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {project.architecture.workflow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-surface-elevated/80 border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-neutral-300"
                    >
                      <span className="w-6 h-6 rounded-md bg-brand-emerald/10 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Key Features Section */}
        <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-white/[0.08] mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Core Technical Capabilities & Capabilities Delivered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-surface-elevated/60 border border-white/5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next / Collaboration Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface-elevated border border-emerald-500/30 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Interested in Building or Scaling Similar Architecture?
          </h3>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Let's connect to discuss how modern software architecture and production AI/ML can be applied to solve your specific engineering bottlenecks.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="lg">
              Initiate Project Discussion
            </Button>
            <Button href="/#projects" variant="outline" size="lg">
              Explore More Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

