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
        canvas: {
          DEFAULT: '#0B0C0B',
          secondary: '#121512',
          card: '#171A18',
          elevated: '#1D211E',
          border: 'rgba(255, 255, 255, 0.10)',
        },
        editorial: {
          primary: '#F1F0E9',
          secondary: '#92958F',
          muted: '#636660',
        },
        accent: {
          DEFAULT: '#D7FF72',
          hover: '#C8F55C',
          dark: '#9BB849',
          muted: 'rgba(215, 255, 114, 0.12)',
          border: 'rgba(215, 255, 114, 0.25)',
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
          'Manrope',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-accent': '0 0 30px -5px rgba(215, 255, 114, 0.25)',
        'glow-accent-lg': '0 0 50px -10px rgba(215, 255, 114, 0.35)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'subtle-inner': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
