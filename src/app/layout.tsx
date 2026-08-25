import type { ReactNode } from 'react';
import { Ubuntu } from 'next/font/google';

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

export const metadata = {
  metadataBase: new URL('https://sodeeqawoyemi.netlify.app'),
  title: 'Sodeeq Awoyemi Portfolio website',
  description:
    'Personal portfolio website of Sodeeq Awoyemi, a frontend web developer and software engineer.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  openGraph: {
    title: 'Sodeeq Awoyemi portfolio website',
    description:
      'Personal portfolio website of Sodeeq Awoyemi, a frontend web developer and software engineer.',
    url: 'https://sodeeqawoyemi.netlify.app/',
    images: [{ url: '/logo512.png', width: 1200, height: 630 }],
  },
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
        <AosProvider />
        <SplashScreen />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
