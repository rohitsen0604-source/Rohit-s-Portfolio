import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { featuredProjects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Cpu,
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
    title: `${project.title} — Architectural Case Study | Rohit Sen`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-swiss-bg text-swiss-text selection:bg-swiss-orange selection:text-white pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-swiss-muted hover:text-swiss-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Works</span>
          </Link>
        </div>

        {/* Master Case Study Header */}
        <div className="p-8 sm:p-12 bg-white border border-swiss-border shadow-swiss-card relative overflow-hidden mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="accent" size="sm">
              {project.category}
            </Badge>
            <Badge variant="outline" dot size="sm">
              {project.status}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-swiss-text uppercase mb-4 leading-[1.05]">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl font-mono text-swiss-orange font-bold uppercase mb-6 max-w-3xl">
            {project.tagline}
          </p>
          <p className="text-sm sm:text-base text-swiss-muted leading-relaxed max-w-3xl font-sans">
            {project.fullOverview}
          </p>

          <div className="mt-8 pt-8 border-t border-swiss-border flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono bg-swiss-surface text-swiss-text border border-swiss-border px-3 py-1 uppercase"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Problem */}
          <div className="p-8 bg-white border border-swiss-border shadow-swiss-card">
            <span className="text-xs font-mono uppercase tracking-widest text-swiss-orange font-bold block mb-2">
              CONTEXT &amp; BOTTLENECKS
            </span>
            <h2 className="text-xl font-display font-bold text-swiss-text uppercase mb-3">
              The Engineering Challenge
            </h2>
            <p className="text-sm text-swiss-muted leading-relaxed font-sans">
              {project.problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 bg-white border border-swiss-orange shadow-swiss-card">
            <span className="text-xs font-mono uppercase tracking-widest text-swiss-orange font-bold block mb-2">
              ENGINEERED RESOLUTION
            </span>
            <h2 className="text-xl font-display font-bold text-swiss-text uppercase mb-3">
              Architectural Solution
            </h2>
            <p className="text-sm text-swiss-muted leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Topology & Workflow Sequence */}
        {project.architecture && (
          <div className="p-8 sm:p-10 bg-white border border-swiss-border mb-12 space-y-8 shadow-swiss-card">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-swiss-orange font-bold uppercase tracking-widest mb-2">
                <Workflow className="w-4 h-4" />
                <span>System Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-swiss-text uppercase">
                Technical Topology &amp; Execution Pipeline
              </h2>
              <p className="text-sm text-swiss-muted mt-2 font-sans">
                {project.architecture.summary}
              </p>
            </div>

            {project.architecture.workflow && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-swiss-text font-bold tracking-wider block">
                  Workflow Execution Stages:
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {project.architecture.workflow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-swiss-surface border border-swiss-border flex items-start gap-3.5 text-xs sm:text-sm text-swiss-muted"
                    >
                      <span className="w-6 h-6 bg-swiss-orange text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed font-sans">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Key Features Delivered */}
        <div className="p-8 sm:p-10 bg-white border border-swiss-border mb-12 shadow-swiss-card">
          <h2 className="text-2xl font-display font-bold text-swiss-text uppercase mb-6">
            Core Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-4 bg-swiss-surface border border-swiss-border flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-swiss-orange shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-swiss-muted leading-relaxed font-sans">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 bg-white border border-swiss-border text-center space-y-4 shadow-swiss-card">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-swiss-text uppercase tracking-tight">
            Interested in Architecting or Scaling a Similar System?
          </h3>
          <p className="text-sm text-swiss-muted max-w-xl mx-auto leading-relaxed font-sans">
            Let&apos;s connect to discuss how modern software architecture, scalable APIs, and production AI/ML can be applied to your engineering challenges.
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
