import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        swiss: {
          bg: '#F5F2EA',
          surface: '#EAE5DA',
          card: '#FFFFFF',
          text: '#171717',
          muted: '#77736B',
          border: '#D8D3C8',
          orange: '#E76F3C',
          'orange-hover': '#D35E2D',
          'orange-light': 'rgba(231, 111, 60, 0.10)',
          'orange-border': 'rgba(231, 111, 60, 0.35)',
        },
      },
      fontFamily: {
        display: [
          'var(--font-display)',
          'Space Grotesk',
          '-apple-system',
          'sans-serif',
        ],
        sans: [
          'var(--font-sans)',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'Fira Code',
          'monospace',
        ],
      },
      boxShadow: {
        'swiss-card': '0 2px 10px rgba(23, 23, 23, 0.04), 0 12px 30px rgba(23, 23, 23, 0.05)',
        'swiss-elevated': '0 20px 40px -15px rgba(23, 23, 23, 0.08)',
        'orange-glow': '0 8px 24px -4px rgba(231, 111, 60, 0.35)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        widest: '0.12em',
      },
    },
  },
  plugins: [],
};

export default config;
