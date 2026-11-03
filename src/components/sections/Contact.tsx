'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  FileDown,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';

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
        throw new Error(resData.error || 'Failed to dispatch inquiry.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-28 relative border-b border-swiss-border bg-swiss-surface/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="10 // COLLABORATE"
          title="LET'S BUILD SOMETHING MEANINGFUL."
          subtitle="Whether you are architecting a high-throughput platform, integrating production AI models, or seeking engineering leadership, let's discuss your vision."
        />

        {/* Minimal Swiss Expanding Orange Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] bg-swiss-orange w-24 mb-12 origin-left"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links with Staggered Directional Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 sm:p-9 bg-white border border-swiss-border shadow-swiss-card space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-swiss-text tracking-tight mb-2 uppercase">
                  Direct Inquiries &amp; Network
                </h3>
                <p className="text-xs sm:text-sm text-swiss-muted leading-relaxed font-sans">
                  Open for technical leadership roles, distributed software architecture consultancies, and high-impact digital ventures.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-swiss-surface border border-swiss-border hover:border-swiss-orange transition-all duration-200 group active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-white border border-swiss-border flex items-center justify-center text-swiss-orange group-hover:border-swiss-orange transition-all">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-swiss-muted block font-bold">
                        Professional Network
                      </span>
                      <span className="text-sm font-semibold text-swiss-text group-hover:text-swiss-orange transition-colors">
                        linkedin.com/in/rohit957
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-swiss-muted group-hover:text-swiss-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* GitHub */}
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-swiss-surface border border-swiss-border hover:border-swiss-orange transition-all duration-200 group active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-white border border-swiss-border flex items-center justify-center text-swiss-orange group-hover:border-swiss-orange transition-all">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-swiss-muted block font-bold">
                        Code Repositories
                      </span>
                      <span className="text-sm font-semibold text-swiss-text group-hover:text-swiss-orange transition-colors">
                        rohitsen0604-source
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-swiss-muted group-hover:text-swiss-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Direct Email */}
                <div className="flex items-center gap-3.5 p-4 bg-swiss-surface border border-swiss-border">
                  <div className="w-10 h-10 bg-white border border-swiss-border flex items-center justify-center text-swiss-orange">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-swiss-muted block font-bold">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-sm font-semibold text-swiss-text hover:text-swiss-orange transition-colors font-mono"
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>

                {/* Official Resume Download */}
                <a
                  href="/Rohit_Sen_Resume.pdf"
                  download="Rohit_Sen_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-swiss-surface border border-swiss-border hover:border-swiss-orange transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-white border border-swiss-border flex items-center justify-center text-swiss-orange group-hover:bg-swiss-orange group-hover:text-white transition-colors">
                      <FileDown className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-swiss-muted block font-bold">
                        Official Curriculum Vitae
                      </span>
                      <span className="text-sm font-semibold text-swiss-text group-hover:text-swiss-orange transition-colors font-mono">
                        Rohit_Sen_Resume.pdf
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-swiss-muted group-hover:text-swiss-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 bg-swiss-surface border border-swiss-border">
                  <div className="w-10 h-10 bg-white border border-swiss-border flex items-center justify-center text-swiss-orange">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-swiss-muted block font-bold">
                      Base Location
                    </span>
                    <span className="text-sm font-semibold text-swiss-text font-sans">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-swiss-border flex items-center gap-2 text-xs text-swiss-muted font-mono">
                <Clock className="w-4 h-4 text-swiss-orange" />
                <span>Response SLA: Within 24 business hours</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form with Directional Slide */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 bg-white border border-swiss-border shadow-swiss-card">
              <h3 className="text-2xl font-display font-bold text-swiss-text tracking-tight mb-2 uppercase">
                Send a Structured Message
              </h3>
              <p className="text-xs sm:text-sm text-swiss-muted mb-7 font-sans">
                Fill in the details below to discuss project requirements, architecture consultancies, or engineering opportunities.
              </p>

              {status === 'success' ? (
                <div className="p-8 bg-swiss-orange-light border border-swiss-orange text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-swiss-orange mx-auto" />
                  <h4 className="text-lg font-display font-bold text-swiss-text uppercase">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-swiss-muted font-sans max-w-md mx-auto">
                    Thank you for reaching out. Rohit Sen will review your inquiry and get back to you promptly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-mono text-swiss-orange underline hover:text-swiss-orange-hover font-bold uppercase"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-300 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-swiss-text font-bold block mb-1.5">
                        Your Name <span className="text-swiss-orange">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-3 bg-swiss-surface border border-swiss-border text-swiss-text placeholder-swiss-muted text-sm focus:outline-none focus:border-swiss-orange focus:bg-white transition-colors rounded-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-swiss-text font-bold block mb-1.5">
                        Your Email <span className="text-swiss-orange">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="elena@company.com"
                        className="w-full px-4 py-3 bg-swiss-surface border border-swiss-border text-swiss-text placeholder-swiss-muted text-sm focus:outline-none focus:border-swiss-orange focus:bg-white transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-swiss-text font-bold block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="System Architecture / Lead Engineering Role / Consultation"
                      className="w-full px-4 py-3 bg-swiss-surface border border-swiss-border text-swiss-text placeholder-swiss-muted text-sm focus:outline-none focus:border-swiss-orange focus:bg-white transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-swiss-text font-bold block mb-1.5">
                      Project Specifications <span className="text-swiss-orange">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail your requirements, technology stack, scope, and target timelines..."
                      className="w-full px-4 py-3 bg-swiss-surface border border-swiss-border text-swiss-text placeholder-swiss-muted text-sm focus:outline-none focus:border-swiss-orange focus:bg-white transition-colors resize-none rounded-none"
                    />
                  </div>

                  <Magnetic strength={0.2}>
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
                  </Magnetic>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
