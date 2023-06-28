// _app.tsx
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Navbar/>
      <Component {...pageProps} />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Analytics/>
      <Footer/>
    </LanguageProvider>
  );
}
