import React from 'react';
import Link from 'next/link';
import { Terminal, ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/personalInfo';
import { socialLinks } from '@/data/socialLinks';

export function Footer() {
  return (
    <footer className="relative bg-neutral-950 border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-brand-emerald">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-normal">
              {personalInfo.headline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              Sections
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">
                  Career Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">
                  Technical Expertise
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-emerald-400 transition-colors">
                  Engineering Capabilities
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Credentials */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              Credentials & Base
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#education" className="hover:text-emerald-400 transition-colors">
                  B.Tech CSE (Data Science)
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-emerald-400 transition-colors">
                  Diploma in Mechanical Engg.
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-emerald-400 transition-colors">
                  NPTEL / Accenture / Tata
                </a>
              </li>
              <li className="pt-2 text-xs text-neutral-500 font-mono">
                📍 {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-neutral-400 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Engineered with Next.js & TypeScript
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
