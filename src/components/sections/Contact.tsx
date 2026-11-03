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
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

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
        throw new Error(resData.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Initiate Collaboration"
          title="Have an Idea? Let's Engineer Something Great."
          subtitle="Whether you need end-to-end full-stack development, software architecture consulting, or AI/ML integrations, let's discuss your technical goals."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-surface border border-white/[0.08] shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  Direct Inquiries & Connect
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Open for technical leadership roles, software architecture engagements, and enterprise engineering projects.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-elevated border border-white/5 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-all">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                      Professional Network
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      linkedin.com/in/rohit957
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-elevated border border-white/5 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-all">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                      Code Repositories
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      github.com/rohitsen0604-source
                    </span>
                  </div>
                </a>

                {/* Email (Configurable) */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-elevated border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                      Direct Email (Configurable)
                    </span>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-elevated border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                      Location Base
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Response Time: Typically within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-surface border border-white/[0.08] shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Structured Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Fill in the details below to discuss project scopes, engineering consultancies, or career opportunities.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Thank you for reaching out. Rohit Sen will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-mono text-emerald-400 underline hover:text-emerald-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-1.5">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-1.5">
                        Your Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project architecture / Engineering collaboration / Hiring"
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-1.5">
                      Message Details <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your project requirements, technology stack, timeline, or engineering opportunity..."
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'submitting'}
                    className="w-full font-semibold"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {status === 'submitting' ? 'Transmitting Inquiries...' : 'Send Message'}
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
