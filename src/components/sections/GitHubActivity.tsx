'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { githubHighlights, developmentStats } from '@/data/githubActivity';
import { socialLinks } from '@/data/socialLinks';
import {
  GitBranch,
  Star,
  ExternalLink,
  Code2,
  Terminal,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';

export function GitHubActivity() {
  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Open Source & Repositories"
          title="Development Activity"
          subtitle="Continuous architectural iterations, system prototypes, microservices, and modern AI/ML pipelines."
        />

        {/* Development Metrics Overview */}
        <div className="max-w-4xl mx-auto mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-surface border border-white/[0.08]">
            <span className="text-[11px] font-mono uppercase text-emerald-400 block mb-1">
              Active Repositories
            </span>
            <p className="text-xl font-bold text-white">{developmentStats.activeRepositories}</p>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-white/[0.08]">
            <span className="text-[11px] font-mono uppercase text-emerald-400 block mb-1">
              Primary Stack
            </span>
            <p className="text-sm font-bold text-white">Python & TypeScript</p>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-white/[0.08]">
            <span className="text-[11px] font-mono uppercase text-emerald-400 block mb-1">
              Engineering Focus
            </span>
            <p className="text-xs font-bold text-white">{developmentStats.weeklyCommitFocus}</p>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-white/[0.08]">
            <span className="text-[11px] font-mono uppercase text-emerald-400 block mb-1">
              Code Standards
            </span>
            <p className="text-xs font-bold text-white">CI/CD & Strict Typing</p>
          </div>
        </div>

        {/* GitHub Highlight Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {githubHighlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-xs text-neutral-400 group-hover:text-emerald-300 transition-colors">
                      {item.repo}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">
                    {item.lastUpdated}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono bg-surface-elevated text-neutral-400 px-2 py-0.5 rounded border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: item.languageColor }}
                    />
                    <span className="text-neutral-300">{item.language}</span>
                  </div>
                  <span className="text-neutral-500 text-[11px]">Source Architecture</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to GitHub */}
        <div className="max-w-4xl mx-auto text-center">
          <Button
            href={socialLinks.github}
            isExternal
            variant="outline"
            size="md"
            icon={<GithubIcon className="w-4 h-4" />}
            iconPosition="left"
          >
            Visit GitHub Profile (@rohitsen0604-source)
          </Button>
        </div>
      </div>
    </section>
  );
}
