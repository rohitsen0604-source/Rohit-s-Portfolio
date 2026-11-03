import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AmbientLight } from '@/components/ui/AmbientLight';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { personalInfo } from '@/data/personalInfo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rohit Sen | Lead Software Engineer | Software Architect & AI/ML Engineer',
  description:
    'Personal portfolio of Rohit Sen — Lead Software Engineer, Full-Stack Developer, AI/ML Engineer, and Software Architect based in Indore, India. Building scalable software, production AI/ML systems, and robust backend architectures.',
  keywords: [
    'Rohit Sen',
    'Lead Software Engineer',
    'Software Architect',
    'Full-Stack Developer',
    'AI/ML Engineer',
    'Python',
    'FastAPI',
    'Next.js',
    'TypeScript',
    'Machine Learning',
    'RAG Architecture',
    'PostgreSQL',
    'Indore Developer',
  ],
  authors: [{ name: 'Rohit Sen' }],
  creator: 'Rohit Sen',
  metadataBase: new URL('https://rohitsen.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohitsen.dev',
    title: 'Rohit Sen | Lead Software Engineer & Software Architect',
    description:
      'Engineering Intelligent Digital Products. Building Scalable Software. Solving Real-World Problems.',
    siteName: 'Rohit Sen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Sen | Lead Software Engineer & Software Architect',
    description:
      'Engineering Intelligent Digital Products. Building Scalable Software. Solving Real-World Problems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#08090C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-background text-neutral-100 antialiased selection:bg-emerald-500/30 selection:text-white">
        <AmbientLight />
        <CustomCursor />
        <Navbar />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

