import React from 'react';
import Link from 'next/link';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/personalInfo';
import { socialLinks } from '@/data/socialLinks';

export function Footer() {
  return (
    <footer className="relative bg-swiss-surface border-t border-swiss-border pt-20 pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-swiss-border">
          {/* Brand Presentation */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl tracking-tight text-swiss-text uppercase">
                ROHIT SEN<span className="text-swiss-orange">.</span>
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-swiss-orange font-bold">
              Lead Software Engineer
            </p>
            <p className="text-sm text-swiss-muted max-w-md leading-relaxed font-sans">
              Engineering Intelligent Digital Products. Architecting distributed systems, production AI pipelines, and enterprise-grade software applications.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-swiss-border flex items-center justify-center text-swiss-muted hover:text-swiss-orange hover:border-swiss-orange transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-swiss-border flex items-center justify-center text-swiss-muted hover:text-swiss-orange hover:border-swiss-orange transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 bg-white border border-swiss-border flex items-center justify-center text-swiss-muted hover:text-swiss-orange hover:border-swiss-orange transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-swiss-text font-bold mb-4">
              Directory
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-swiss-muted">
              <li>
                <a href="#about" className="hover:text-swiss-orange transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-swiss-orange transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-swiss-orange transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-swiss-orange transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-swiss-orange transition-colors">
                  Contact
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="/Rohit_Sen_Resume.pdf"
                  download="Rohit_Sen_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-swiss-orange font-semibold hover:underline transition-colors inline-flex items-center gap-1 font-mono text-xs uppercase"
                >
                  Resume (PDF) ↓
                </a>
              </li>
            </ul>
          </div>

          {/* Base & Qualifications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-swiss-text font-bold mb-4">
              Engineering Base
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-swiss-muted">
              <li>
                <a href="#education" className="hover:text-swiss-orange transition-colors">
                  B.Tech CSE (Data Science)
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-swiss-orange transition-colors">
                  Diploma in Mechanical Engg.
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-swiss-orange transition-colors">
                  NPTEL / Accenture / Tata
                </a>
              </li>
              <li className="pt-2 text-xs font-mono text-swiss-muted uppercase">
                📍 {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-swiss-muted">
          <p className="uppercase">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-swiss-text font-bold flex items-center gap-2 uppercase">
              <span className="inline-block w-2 h-2 bg-swiss-orange" />
              Modern Swiss Editorial Design
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-swiss-text hover:text-swiss-orange transition-colors uppercase font-bold"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
