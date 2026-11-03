import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 bg-canvas text-editorial-primary">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-canvas-card border border-white/10 flex items-center justify-center text-accent mx-auto shadow-card-dark">
          <Terminal className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            Status 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-editorial-primary tracking-tight">
            Case Study Not Found
          </h1>
          <p className="text-sm text-editorial-secondary leading-relaxed font-sans">
            The requested architecture dossier or system route does not exist in this deployment.
          </p>
        </div>
        <div className="pt-2">
          <Button href="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Return to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
