'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-3.5' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-[#121512]/85 backdrop-blur-xl border border-white/10 shadow-card-dark'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Left: Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-2 group cursor-pointer select-none"
              aria-label="Rohit Sen - Home"
            >
              <span className="font-display font-bold text-base md:text-lg tracking-tight text-editorial-primary group-hover:text-accent transition-colors">
                ROHIT SEN<span className="text-accent">.</span>
              </span>
              <span className="hidden xl:inline-block text-[10px] font-mono uppercase tracking-widest text-editorial-secondary border-l border-white/10 pl-2.5 ml-1">
                Lead Software Engineer
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#171A18]/80 border border-white/10 px-2 py-1 rounded-full backdrop-blur-md">
              {navItems.map((item) => {
                const targetId = item.href.substring(1);
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 rounded-full ${
                      isActive
                        ? 'text-accent bg-accent/10 font-medium'
                        : 'text-editorial-secondary hover:text-editorial-primary hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              <Button
                href="#contact"
                variant="outline"
                size="sm"
                icon={<FileText className="w-3.5 h-3.5" />}
              >
                Resume
              </Button>
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-canvas-card border border-white/10 text-editorial-primary hover:text-accent lg:hidden focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Elegant Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0C0B]/98 backdrop-blur-2xl flex flex-col justify-between px-6 py-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span className="font-display font-bold text-xl text-editorial-primary">
              ROHIT SEN<span className="text-accent">.</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border border-white/10 text-editorial-primary hover:text-accent"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 my-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-editorial-muted">
              Directory
            </span>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-2xl sm:text-3xl font-display font-bold text-editorial-primary hover:text-accent transition-colors py-1"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-editorial-muted group-hover:text-accent">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-editorial-secondary mb-2">
              <span>Location</span>
              <span className="text-editorial-primary">Indore, India</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button
                href="#contact"
                variant="outline"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </Button>
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
