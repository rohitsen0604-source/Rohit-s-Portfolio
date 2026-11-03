'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { githubHighlights, developmentStats } from '@/data/githubActivity';
import { socialLinks } from '@/data/socialLinks';
import { GithubIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

export function GitHubActivity() {
  return (
    <section className="py-28 relative border-b border-canvas-border bg-canvas-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Open Repositories"
          title="Development Activity"
          subtitle="Continuous architectural prototypes, microservice engines, and machine learning pipelines hosted on GitHub."
        />

        {/* Development Metrics Overview */}
        <div className="max-w-4xl mx-auto mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-canvas-card border border-canvas-border">
            <span className="text-[10px] font-mono uppercase text-accent block mb-1">
              Active Repositories
            </span>
            <p className="text-xl font-display font-bold text-editorial-primary">
              {developmentStats.activeRepositories}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-canvas-card border border-canvas-border">
            <span className="text-[10px] font-mono uppercase text-accent block mb-1">
              Primary Stack
            </span>
            <p className="text-sm font-display font-bold text-editorial-primary">
              Python &amp; TypeScript
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-canvas-card border border-canvas-border">
            <span className="text-[10px] font-mono uppercase text-accent block mb-1">
              Engineering Focus
            </span>
            <p className="text-xs font-mono font-semibold text-editorial-primary">
              {developmentStats.weeklyCommitFocus}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-canvas-card border border-canvas-border">
            <span className="text-[10px] font-mono uppercase text-accent block mb-1">
              Code Standards
            </span>
            <p className="text-xs font-mono text-editorial-primary">
              CI/CD &amp; Strict Types
            </p>
          </div>
        </div>

        {/* GitHub Highlight Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {githubHighlights.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl bg-canvas-card border border-canvas-border hover:border-accent/40 shadow-card-dark transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs text-editorial-secondary group-hover:text-accent transition-colors">
                      {item.repo}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-editorial-muted">
                    {item.lastUpdated}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-editorial-primary mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-editorial-secondary leading-relaxed font-sans mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono bg-canvas-secondary text-editorial-secondary px-2 py-0.5 rounded border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: item.languageColor }}
                    />
                    <span className="text-editorial-primary">{item.language}</span>
                  </div>
                  <span className="text-editorial-muted text-[11px]">Source Architecture</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to GitHub */}
        <div className="max-w-4xl mx-auto text-center">
          <Button
            href={socialLinks.github}
            isExternal
            variant="outline"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Explore Repositories on GitHub (@rohitsen0604-source)
          </Button>
        </div>
      </div>
    </section>
  );
}
