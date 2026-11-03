import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { PageIntro } from '@/components/ui/PageIntro';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'ROHIT SEN — Lead Software Engineer & Architect | Swiss Editorial',
  description:
    'Portfolio of Rohit Sen — Lead Software Engineer. Engineering scalable digital products, distributed software architectures, and production AI/ML systems.',
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
    'Swiss Design',
  ],
  authors: [{ name: 'Rohit Sen' }],
  creator: 'Rohit Sen',
  metadataBase: new URL('https://rohit-sen-portfolio-eta.vercel.app/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohit-sen-portfolio-eta.vercel.app/',
    title: 'ROHIT SEN — Lead Software Engineer & Architect',
    description:
      'I build digital products that move businesses forward. Lead Software Engineer & Architect.',
    siteName: 'Rohit Sen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROHIT SEN — Lead Software Engineer',
    description: 'I build digital products that move businesses forward.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#F5F2EA',
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-swiss-bg text-swiss-text font-sans antialiased selection:bg-swiss-orange selection:text-white overflow-x-hidden">
        <SmoothScrollProvider>
          <PageIntro />
          <CustomCursor />
          <Navbar />
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
