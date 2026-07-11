import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ContactModal } from "@/components/ui/ContactModal";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { Suspense } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://clienses.com'),
  title: "Clienses | Firma de Consultoría Estratégica en República Dominicana",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  description: "Clienses es la firma élite de consultoría estratégica, estructuración y diseño organizacional en República Dominicana. Aceleramos el crecimiento, escalamiento y posicionamiento de empresas líderes mediante arquitectura de negocios sostenible.",
  keywords: [
    "Consultoría estratégica República Dominicana",
    "Diseño organizacional Santo Domingo",
    "Firma de consultoría DR",
    "Escalamiento empresarial",
    "Consultoría de negocios RD",
    "Arquitectura corporativa",
    "Estrategia de crecimiento orgánico",
    "Transformación empresarial",
    "Optimización de operaciones",
    "Dirección estructurada",
    "Desarrollo de negocios internacionales",
    "Business architecture Dominican Republic"
  ],
  authors: [{ name: "Clienses Strategic", url: "https://clienses.com" }],
  creator: "Clienses",
  openGraph: {
    title: "Clienses | Arquitectura y Escalabilidad Empresarial",
    description: "Firma de consultoría estratégica exclusiva para la República Dominicana. Transformamos la improvisación en arquitectura de negocios sólida para líderes corporativos y escalamiento de mercado.",
    type: "website",
    url: "https://clienses.com",
    locale: "es_DO",
    siteName: "Clienses Strategic",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clienses Strategic - Consultoría Estratégica",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Clienses | Arquitectura y Escalabilidad Empresarial",
    description: "Firma de consultoría estratégica exclusiva para la República Dominicana. Transformamos la improvisación en arquitectura corporativa sólida.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://clienses.com",
    languages: {
      'es-DO': 'https://clienses.com',
      'en-US': 'https://clienses.com',
      'fr-FR': 'https://clienses.com',
      'ht-HT': 'https://clienses.com',
    },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Clienses",
    "image": "https://clienses.com/clienses-logo-black.svg",
    "url": "https://clienses.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santo Domingo",
      "addressRegion": "Distrito Nacional",
      "addressCountry": "DO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4861,
      "longitude": -69.9312
    },
    "description": "Firma de consultoría estratégica exclusiva para la República Dominicana. Transformamos la improvisación en arquitectura de negocios sólida para líderes corporativos y escalamiento de mercado.",
    "priceRange": "$$$"
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased bg-bg-light text-structure selection:bg-primary/20 selection:text-primary`}
      >
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-7WR3C0WRTS" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-7WR3C0WRTS');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <LanguageProvider>
          {children}
          <Suspense fallback={null}>
            <ContactModal />
          </Suspense>
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
