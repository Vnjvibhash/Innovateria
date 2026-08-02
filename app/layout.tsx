import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
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
  title: {
    default: 'Innovateria | App Development, Software, Web & SEO Services',
    template: '%s | Innovateria',
  },
  description: 'Innovateria is a results-driven digital agency in India offering Android app development, custom software, web development, logo design, SEO, and digital marketing services.',
  keywords: [
    'Innovateria',
    'Vivekajee',
    'Vnj Vibhash',
    'Android App Development',
    'Custom Software Development',
    'Web Development Company',
    'SEO Services',
    'Digital Marketing Agency',
    'Logo Design',
    'Software Solutions India',
  ],
  authors: [{ name: 'Innovateria', url: 'https://github.com/Vnjvibhash/Innovateria' }],
  alternates: {
    canonical: 'https://innovateria.in',
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
  openGraph: {
    title: 'Innovateria - Digital Agency for Apps, Software & Growth',
    description: 'Partner with Innovateria for scalable Android apps, custom software, modern web platforms, and SEO-driven digital growth.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Innovateria - Digital Agency for Apps, Software & Growth',
    description: 'Custom app, software, web, and marketing solutions for modern businesses.',
    images: ['/assets/img/logo.png'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Innovateria',
  url: 'https://innovateria.in',
  logo: 'https://innovateria.in/assets/img/logo.png',
  sameAs: [
    'https://github.com/VnjVibhash',
    'https://www.linkedin.com/in/Vivekajee',
    'https://facebook.com/Vivekajee',
    'https://twitter.com/Vnjvibhash',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-77629-74716',
      contactType: 'customer service',
      email: 'innovateria.in@gmail.com',
      areaServed: 'IN',
      availableLanguage: ['English'],
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Innovateria',
  url: 'https://innovateria.in',
  description: 'Innovateria provides app development, custom software, web development, logo design, SEO, and digital marketing services.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://innovateria.in/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const themeInitScript = `
  (function() {
    try {
      const stored = localStorage.getItem('innovateria-theme');
      const theme = stored === 'dark' || stored === 'light'
        ? stored
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.style.colorScheme = theme;
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className="w-full max-w-full overflow-x-hidden">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] min-h-screen w-full max-w-full overflow-x-hidden flex flex-col font-sans antialiased m-0 p-0">
        <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <Header />
        <SocialBar />
        <main className="flex-grow pt-20 sm:pt-24 min-h-[100dvh] w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
