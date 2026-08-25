import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Ubuntu } from 'next/font/google';

import PersonSchema from '@/components/seo/PersonSchema';
import { SITE, SITE_KEYWORDS, SITE_URL } from '@/lib/site';

import AosProvider from '@/components/AosProvider';
import SplashScreen from '@/components/ui/SplashScreen';
import Footer from '@/components/main/Footer/Footer';

import './globals.css';
import Navbar from '@/components/topbar/navbar';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE.fullName, url: SITE_URL }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_US',
    url: SITE_URL,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE.fullName} — ${SITE.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    creator: SITE.socials.twitterHandle,
    images: ['/og-image.png'],
  },
  category: 'technology',
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={`${ubuntu.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className='bg-main text-pry font-sans text-base overflow-x-hidden'>
        <PersonSchema />
        <AosProvider />
        <SplashScreen />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
