import React from 'react';
import Link from 'next/link';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/personalInfo';
import { socialLinks } from '@/data/socialLinks';

export function Footer() {
  return (
    <footer className="relative bg-canvas-secondary border-t border-canvas-border pt-20 pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Brand Presentation */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl tracking-tight text-editorial-primary">
                ROHIT SEN<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              Lead Software Engineer
            </p>
            <p className="text-sm text-editorial-secondary max-w-md leading-relaxed font-sans">
              Engineering Intelligent Digital Products. Architecting distributed systems, production AI pipelines, and enterprise-grade software applications.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-canvas-card border border-white/10 flex items-center justify-center text-editorial-secondary hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-canvas-card border border-white/10 flex items-center justify-center text-editorial-secondary hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-xl bg-canvas-card border border-white/10 flex items-center justify-center text-editorial-secondary hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-editorial-primary font-semibold mb-4">
              Directory
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-editorial-secondary">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent transition-colors">
                  Career Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition-colors">
                  Technical Expertise
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Featured Works
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-accent transition-colors">
                  Architecture Capabilities
                </a>
              </li>
            </ul>
          </div>

          {/* Base & Qualifications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-editorial-primary font-semibold mb-4">
              Engineering Base
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-editorial-secondary">
              <li>
                <a href="#education" className="hover:text-accent transition-colors">
                  B.Tech CSE (Data Science)
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-accent transition-colors">
                  Diploma in Mechanical Engg.
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-accent transition-colors">
                  NPTEL / Accenture / Tata
                </a>
              </li>
              <li className="pt-2 text-xs font-mono text-editorial-muted">
                📍 {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-editorial-muted">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-editorial-secondary flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
              Next.js 15 &bull; Three.js &bull; TypeScript
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-editorial-primary hover:text-accent transition-colors"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
