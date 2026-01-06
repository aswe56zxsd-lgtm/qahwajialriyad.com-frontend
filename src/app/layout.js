import './globals.css';

export const metadata = {
  metadataBase: new URL('https://qahwajialriyad.com'),
  title: {
    default: 'قهوجي الرياض - لمسة فنية فريدة | قهوجيين الرياض',
    template: '%s | قهوجي الرياض',
  },
  description: 'قهوجيين وصبابين الرياض بخدمة ضيافة راقية لجميع المناسبات. نمزج بين عراقة الماضي وأناقة الحاضر في كل فنجان.',
  keywords: 'قهوجي الرياض, قهوجيين وصبابين الرياض, قهوجي وصباب, صبابين قهوة الرياض, قهوجيات الرياض, صبابات قهوة, مباشرين قهوة, قهوجيين الرياض',
  authors: [{ name: 'قهوجيين الرياض' }],
  creator: 'قهوجيين الرياض',
  publisher: 'قهوجيين الرياض',
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: 'https://qahwajialriyad.com',
  },
  openGraph: {
    title: 'قهوجي الرياض - قهوجيين الرياض',
    description: 'قهوجيين وصبابين الرياض بخدمة ضيافة راقية لجميع المناسبات.',
    url: 'https://qahwajialriyad.com',
    siteName: 'قهوجيين الرياض',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/1.webp',
        width: 1200,
        height: 630,
        alt: 'قهوجيين الرياض - ضيافة سعودية أصيلة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'قهوجي الرياض - قهوجيين الرياض',
    description: 'قهوجيين وصبابين الرياض بخدمة ضيافة راقية',
    images: ['/images/1.webp'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A5F44',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://qahwajialriyad.com/#business",
        "name": "قهوجيين الرياض",
        "alternateName": "قهوجي الرياض",
        "description": "قهوجيين وصبابين الرياض بخدمة ضيافة راقية لجميع المناسبات. نمزج بين عراقة الماضي وأناقة الحاضر في كل فنجان.",
        "url": "https://qahwajialriyad.com",
        "telephone": "+966 50 645 1744",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "الرياض",
          "addressRegion": "الرياض",
          "addressCountry": "SA"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": {
          "@type": "City",
          "name": "الرياض"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://qahwajialriyad.com/#website",
        "url": "https://qahwajialriyad.com",
        "name": "قهوجيين الرياض",
        "description": "قهوجيين وصبابين الرياض - ضيافة سعودية أصيلة",
        "inLanguage": "ar-SA"
      }
    ]
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="uLqsJZ3F95JiuJ_ddjhP3yJmnop_UfxweO4CApikyaI" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream-paper text-rich-black overflow-x-hidden selection:bg-antique-gold selection:text-white font-sans">
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
