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
    <section className="py-28 relative border-b border-swiss-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="09 // CODE REPOSITORIES"
          title="DEVELOPMENT ACTIVITY"
          subtitle="Continuous architectural prototypes, microservice engines, and machine learning pipelines hosted on GitHub."
        />

        {/* Development Metrics Overview */}
        <div className="max-w-4xl mx-auto mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-white border border-swiss-border shadow-swiss-card">
            <span className="text-[10px] font-mono uppercase text-swiss-orange block mb-1 font-bold">
              ACTIVE REPOSITORIES
            </span>
            <p className="text-2xl font-display font-bold text-swiss-text">
              {developmentStats.activeRepositories}
            </p>
          </div>
          <div className="p-6 bg-white border border-swiss-border shadow-swiss-card">
            <span className="text-[10px] font-mono uppercase text-swiss-orange block mb-1 font-bold">
              PRIMARY STACK
            </span>
            <p className="text-sm font-display font-bold text-swiss-text uppercase">
              Python &amp; TypeScript
            </p>
          </div>
          <div className="p-6 bg-white border border-swiss-border shadow-swiss-card">
            <span className="text-[10px] font-mono uppercase text-swiss-orange block mb-1 font-bold">
              ENGINEERING FOCUS
            </span>
            <p className="text-xs font-mono font-bold text-swiss-text uppercase">
              {developmentStats.weeklyCommitFocus}
            </p>
          </div>
          <div className="p-6 bg-white border border-swiss-border shadow-swiss-card">
            <span className="text-[10px] font-mono uppercase text-swiss-orange block mb-1 font-bold">
              CODE STANDARDS
            </span>
            <p className="text-xs font-mono text-swiss-text uppercase">
              CI/CD &amp; Strict Types
            </p>
          </div>
        </div>

        {/* GitHub Highlight Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {githubHighlights.map((item) => (
            <div
              key={item.title}
              className="p-7 bg-white border border-swiss-border hover:border-swiss-orange shadow-swiss-card transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-swiss-orange" />
                    <span className="font-mono text-xs text-swiss-muted group-hover:text-swiss-orange transition-colors">
                      {item.repo}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-swiss-muted uppercase">
                    {item.lastUpdated}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-swiss-text mb-2 group-hover:text-swiss-orange transition-colors uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-swiss-muted leading-relaxed font-sans mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono bg-swiss-surface text-swiss-muted px-2 py-0.5 border border-swiss-border uppercase"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-swiss-border text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 inline-block"
                      style={{ backgroundColor: item.languageColor }}
                    />
                    <span className="text-swiss-text font-bold uppercase">{item.language}</span>
                  </div>
                  <span className="text-swiss-muted text-[10px] uppercase">Source Code</span>
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
