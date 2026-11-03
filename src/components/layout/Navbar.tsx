'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
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
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between px-6 py-3 transition-all duration-300 ${
              isScrolled
                ? 'swiss-nav border border-swiss-border shadow-sm'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Left: Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-2 group cursor-pointer select-none"
              aria-label="Rohit Sen - Home"
            >
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-swiss-text group-hover:text-swiss-orange transition-colors uppercase">
                ROHIT SEN<span className="text-swiss-orange">.</span>
              </span>
              <span className="hidden xl:inline-block text-[10px] font-mono uppercase tracking-widest text-swiss-muted border-l border-swiss-border pl-3 ml-2">
                Lead Software Engineer
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const targetId = item.href.substring(1);
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                      isActive
                        ? 'text-swiss-orange bg-swiss-orange-light'
                        : 'text-swiss-muted hover:text-swiss-text hover:bg-swiss-surface'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="hidden md:flex items-center gap-3">
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
              className="p-2 border border-swiss-border text-swiss-text hover:text-swiss-orange hover:border-swiss-orange lg:hidden focus:outline-none bg-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Modern Swiss Fullscreen Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5F2EA] flex flex-col justify-between px-6 py-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-swiss-border pb-5">
            <span className="font-display font-bold text-2xl text-swiss-text tracking-tight uppercase">
              ROHIT SEN<span className="text-swiss-orange">.</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 border border-swiss-border text-swiss-text hover:text-swiss-orange bg-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 my-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-swiss-orange font-bold">
              [ DIRECTORY // SWISS 01 ]
            </span>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-3xl sm:text-4xl font-display font-bold text-swiss-text hover:text-swiss-orange transition-colors py-2 border-b border-swiss-border/60 uppercase"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-swiss-muted group-hover:text-swiss-orange font-normal">
                  /0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-swiss-border space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-swiss-muted mb-2">
              <span>LOCATION BASE</span>
              <span className="text-swiss-text font-bold">INDORE, INDIA</span>
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
