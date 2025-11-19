import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"], display: 'swap' })
const _geistMono = Geist_Mono({ subsets: ["latin"], display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#F4C430',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://skylightpaver.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  title: "Skylight Paver Solutions | Expert Paver Installation in Jacksonville, FL",
  description:
    "Transform your outdoor spaces with expert paver solutions. Driveways, patios, pool areas, outdoor kitchens, and more. Licensed & insured. Serving Jacksonville & surrounding Florida areas. Call (904) 437-3853 for a free estimate.",
  keywords:
    "Jacksonville paver installation, Florida driveway pavers, patio pavers Jacksonville, pool deck pavers, outdoor kitchen pavers, paver repair Jacksonville, pressure washing pavers Florida, paver contractors Jacksonville",
  authors: [{ name: "Skylight Paver Solutions", url: "https://skylightpaver.com" }],
  generator: "v0.app",
  applicationName: "Skylight Paver Solutions",
  referrer: 'origin-when-cross-origin',
  creator: "Skayzen",
  publisher: "Skylight Paver Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skylightpaver.com',
    siteName: 'Skylight Paver Solutions',
    title: 'Skylight Paver Solutions | Expert Paver Installation in Jacksonville, FL',
    description: 'Transform your outdoor spaces with expert paver solutions. Licensed & insured paver contractors serving Jacksonville & surrounding Florida areas.',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Skylight Paver Solutions Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@skylightpaver',
    creator: '@skylightpaver',
    title: 'Skylight Paver Solutions | Expert Paver Installation in Jacksonville, FL',
    description: 'Transform your outdoor spaces with expert paver solutions. Licensed & insured.',
    images: ['/logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
      </head>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
