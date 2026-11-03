'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personalInfo';
import { socialLinks } from '@/data/socialLinks';
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || 'Failed to dispatch transmission.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-28 relative border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Communication"
          title="Have a Vision? Let's Engineer It."
          subtitle="Whether you are architecting a high-throughput platform, integrating production AI models, or seeking a technical leader, let's connect."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-9 rounded-2xl bg-canvas-card border border-canvas-border shadow-card-dark space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-editorial-primary tracking-tight mb-2">
                  Direct Inquiries &amp; Network
                </h3>
                <p className="text-xs sm:text-sm text-editorial-secondary leading-relaxed font-sans">
                  Available for engineering leadership roles, distributed architecture consulting, and high-impact digital ventures.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-canvas-secondary border border-white/5 hover:border-accent/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-canvas-card border border-white/10 flex items-center justify-center text-accent group-hover:scale-105 transition-all">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-editorial-muted block">
                        Professional Network
                      </span>
                      <span className="text-sm font-semibold text-editorial-primary group-hover:text-accent transition-colors">
                        linkedin.com/in/rohit957
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-editorial-muted group-hover:text-accent transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-canvas-secondary border border-white/5 hover:border-accent/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-canvas-card border border-white/10 flex items-center justify-center text-accent group-hover:scale-105 transition-all">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-editorial-muted block">
                        Code Repositories
                      </span>
                      <span className="text-sm font-semibold text-editorial-primary group-hover:text-accent transition-colors">
                        rohitsen0604-source
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-editorial-muted group-hover:text-accent transition-colors" />
                </a>

                {/* Email (Configurable) */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-canvas-secondary border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-canvas-card border border-white/10 flex items-center justify-center text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-editorial-muted block">
                      Direct Email (Configurable)
                    </span>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-sm font-semibold text-editorial-primary hover:text-accent transition-colors font-mono"
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-canvas-secondary border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-canvas-card border border-white/10 flex items-center justify-center text-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-editorial-muted block">
                      Base Location
                    </span>
                    <span className="text-sm font-semibold text-editorial-primary font-sans">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-editorial-secondary font-mono">
                <Clock className="w-4 h-4 text-accent" />
                <span>Response SLA: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-canvas-card border border-canvas-border shadow-card-dark">
              <h3 className="text-2xl font-display font-bold text-editorial-primary tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-editorial-secondary mb-7 font-sans">
                Fill in the details below to discuss project requirements, architecture consultancies, or engineering opportunities.
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-xl bg-accent/5 border border-accent/40 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                  <h4 className="text-lg font-display font-bold text-editorial-primary">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-editorial-secondary font-sans max-w-md mx-auto">
                    Thank you for reaching out. Rohit Sen will review your inquiry and get back to you promptly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-mono text-accent underline hover:text-accent-hover"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-editorial-secondary block mb-1.5">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-secondary border border-white/10 text-editorial-primary placeholder-editorial-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-editorial-secondary block mb-1.5">
                        Your Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="elena@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-secondary border border-white/10 text-editorial-primary placeholder-editorial-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-editorial-secondary block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="System Architecture / Lead Engineering Role / Consultation"
                      className="w-full px-4 py-3 rounded-xl bg-canvas-secondary border border-white/10 text-editorial-primary placeholder-editorial-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-editorial-secondary block mb-1.5">
                      Project Specifications <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail your requirements, technology stack, scope, and target timelines..."
                      className="w-full px-4 py-3 rounded-xl bg-canvas-secondary border border-white/10 text-editorial-primary placeholder-editorial-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'submitting'}
                    className="w-full justify-center"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {status === 'submitting' ? 'Transmitting Inquiries...' : 'Transmit Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
