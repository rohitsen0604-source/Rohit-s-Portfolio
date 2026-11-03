
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-white/10 flex items-center justify-center text-emerald-400 mx-auto">
          <Terminal className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            Error 404
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed">
            The requested architecture case study or route does not exist in this deployment.
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
