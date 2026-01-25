import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Paver Portfolio Jacksonville FL - Our Work",
  description: "Browse our paver installation portfolio. Driveways, patios, pool decks & more in Jacksonville, Ponte Vedra, Orange Park. See 300+ completed projects.",
  keywords: "paver portfolio Jacksonville, paver photos Jacksonville FL, driveway paver gallery, patio installation photos, pool deck pavers gallery, Jacksonville hardscape projects",
  openGraph: {
    title: "Paver Portfolio Jacksonville FL - Our Work",
    description: "Browse our paver installation portfolio. Driveways, patios, pool decks & more in Jacksonville FL.",
    url: "https://skylightpaver.com/portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://skylightpaver.com/portfolio",
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
