import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialBar from '@/components/SocialBar';
import BackToTop from '@/components/BackToTop';

export const viewport: Viewport = {
  themeColor: '#FF4E2E',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://innovateria.in'),
  title: 'Innovateria | Always Innovation is Key to Stay Relevant',
  description: 'Innovateria offers high quality Android App Development, Enterprise Software Solutions, Custom Web Engineering, Logo & Graphic Design, and Digital Marketing Services.',
  keywords: ['Innovateria', 'Vivekajee', 'Vnj Vibhash', 'Software', 'Android', 'Mobile App', 'Web Development', 'Digital Marketing', 'Innovation'],
  authors: [{ name: 'Innovateria', url: 'https://github.com/Vnjvibhash/Innovateria' }],
  openGraph: {
    title: 'Innovateria - Digital Agency & Software Solutions',
    description: 'Always Innovation is the key to stay relevant. Partner with Innovateria for modern software, app development, and web solutions.',
    url: 'https://innovateria.in',
    siteName: 'Innovateria',
    images: [
      {
        url: '/assets/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Innovateria Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="w-full max-w-full overflow-x-hidden">
      <body className="bg-[#0B0F17] text-gray-100 min-h-screen w-full max-w-full overflow-x-hidden flex flex-col font-sans antialiased m-0 p-0">
        <Header />
        <SocialBar />
        <main className="flex-grow pt-24 min-h-[100dvh] w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
