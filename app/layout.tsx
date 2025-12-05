import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"], display: "swap" })
const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#F4C430",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://skylightpaver.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  title: {
    default: "Skylight Paver Solutions | #1 Paver Contractor in Jacksonville, FL",
    template: "%s | Skylight Paver Solutions Jacksonville",
  },
  description:
    "Top-rated paver installation in Jacksonville, FL. Expert driveway pavers, patio pavers, pool decks & outdoor living spaces. Licensed, insured & 5-star rated. Serving Jacksonville Beach, St. Augustine, Ponte Vedra & all Duval County. Free estimates: (904) 437-3853",
  keywords:
    "Jacksonville paver installation, paver contractor Jacksonville FL, driveway pavers Jacksonville, patio pavers Jacksonville Beach, pool deck pavers Jacksonville, Jacksonville paver repair, outdoor kitchen Jacksonville, paver sealing Jacksonville, Jacksonville Beach pavers, St Augustine pavers, Ponte Vedra paver contractor, Duval County pavers, Jacksonville driveway installation, paver companies near me Jacksonville",
  authors: [{ name: "Skylight Paver Solutions", url: "https://skylightpaver.com" }],
  generator: "Next.js",
  applicationName: "Skylight Paver Solutions",
  referrer: "origin-when-cross-origin",
  creator: "Skylight Paver Solutions",
  publisher: "Skylight Paver Solutions",
  category: "Home Improvement",
  classification: "Paver Installation & Hardscaping",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skylightpaver.com",
    siteName: "Skylight Paver Solutions",
    title: "Skylight Paver Solutions | #1 Paver Contractor in Jacksonville, FL",
    description:
      "Top-rated paver installation in Jacksonville. Expert driveways, patios, pool decks. Licensed, insured & 5-star rated. Serving Jacksonville Beach, St. Augustine, Ponte Vedra. Free estimates: (904) 437-3853",
    images: [
      {
        url: "https://skylightpaver.com/og-image.jpg",
        secureUrl: "https://skylightpaver.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skylight Paver Solutions - #1 Paver Contractor in Jacksonville, FL",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@skylightpaver",
    creator: "@skylightpaver",
    title: "Skylight Paver Solutions | #1 Paver Contractor Jacksonville",
    description:
      "Top-rated paver installation in Jacksonville. Licensed, insured & 5-star rated. Free estimates: (904) 437-3853",
    images: ["https://skylightpaver.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://skylightpaver.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://skylightpaver.com/#organization",
        name: "Skylight Paver Solutions",
        image: "https://skylightpaver.com/logo.png",
        logo: "https://skylightpaver.com/logo.png",
        url: "https://skylightpaver.com",
        telephone: "(904) 437-3853",
        email: "lopes@skylightpaver.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Jacksonville",
          addressRegion: "FL",
          postalCode: "",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 30.3322,
          longitude: -81.6557,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Jacksonville",
            containedIn: {
              "@type": "State",
              name: "Florida",
            },
          },
          {
            "@type": "City",
            name: "Jacksonville Beach",
          },
          {
            "@type": "City",
            name: "St. Augustine",
          },
          {
            "@type": "City",
            name: "Ponte Vedra",
          },
          {
            "@type": "AdministrativeArea",
            name: "Duval County",
          },
        ],
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "16:00",
          },
        ],
        sameAs: ["https://www.facebook.com/skylightpaver", "https://www.instagram.com/skylightpaver"],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://skylightpaver.com/#service",
        name: "Skylight Paver Solutions",
        description:
          "Expert paver installation and hardscaping services in Jacksonville, FL. Specializing in driveways, patios, pool decks, and outdoor living spaces.",
        provider: {
          "@id": "https://skylightpaver.com/#organization",
        },
        areaServed: "Jacksonville, FL",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Paver Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Driveway Paver Installation",
                description: "Professional driveway paver installation in Jacksonville",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Patio Paver Installation",
                description: "Custom patio paver design and installation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pool Deck Pavers",
                description: "Beautiful pool deck paver installation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Paver Repair & Restoration",
                description: "Expert paver repair and restoration services",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://skylightpaver.com/#website",
        url: "https://skylightpaver.com",
        name: "Skylight Paver Solutions",
        description: "Top-rated paver contractor in Jacksonville, FL",
        publisher: {
          "@id": "https://skylightpaver.com/#organization",
        },
        inLanguage: "en-US",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#F4C430" />
        <meta name="theme-color" content="#F4C430" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)" />
        <meta property="og:image" content="https://skylightpaver.com/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://skylightpaver.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Jacksonville" />
        <meta name="geo.position" content="30.3322;-81.6557" />
        <meta name="ICBM" content="30.3322, -81.6557" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicon-144x144.png" sizes="144x144" />
        <link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17688076133" strategy="afterInteractive" />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17688076133');
          `}
        </Script>
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17688076133/sU6ACMqGycwbEOW-qvJB',
                'value': 1.0,
                'currency': 'EUR',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
