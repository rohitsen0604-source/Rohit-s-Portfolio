import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AmbientLight } from '@/components/ui/AmbientLight';
import { CustomCursor } from '@/components/ui/CustomCursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Rohit Sen — Lead Software Engineer | Architecture & Intelligent Systems',
  description:
    'Award-caliber portfolio of Rohit Sen — Lead Software Engineer & Architect. Engineering ideas into intelligent digital products, distributed scalable systems, and production AI/ML architectures.',
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
    'Distributed Systems',
    'RAG Architecture',
    'Indore Developer',
  ],
  authors: [{ name: 'Rohit Sen' }],
  creator: 'Rohit Sen',
  metadataBase: new URL('https://rohit-sen-portfolio-eta.vercel.app/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohit-sen-portfolio-eta.vercel.app/',
    title: 'Rohit Sen — Lead Software Engineer | Architecture & Intelligent Systems',
    description:
      'Engineering Ideas Into Intelligent Digital Products. Building Scalable Software. Solving Real-World Problems.',
    siteName: 'Rohit Sen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Sen — Lead Software Engineer',
    description:
      'Engineering Ideas Into Intelligent Digital Products. Building Scalable Software.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0C0B',
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-canvas text-editorial-primary font-sans antialiased selection:bg-accent selection:text-canvas">
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
