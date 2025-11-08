import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Skylight Paver Solutions | Expert Paver Installation in Jacksonville, FL",
  description:
    "Transform your outdoor spaces with expert paver solutions. Driveways, patios, pool areas, outdoor kitchens, and more. Licensed & insured. Serving Jacksonville & surrounding Florida areas. Call (904) 437-3853 for a free estimate.",
  keywords:
    "Jacksonville paver installation, Florida driveway pavers, patio pavers Jacksonville, pool deck pavers, outdoor kitchen pavers, paver repair Jacksonville, pressure washing pavers Florida",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
