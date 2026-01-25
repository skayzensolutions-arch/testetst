import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Paver Quote Jacksonville FL | Get Estimate",
  description: "Request a free paver installation quote in Jacksonville FL. No obligation estimates for driveways, patios, pool decks. Call (904) 437-3853 or fill out our form.",
  keywords: "free paver quote Jacksonville, paver estimate Jacksonville FL, paver installation cost, driveway paver quote, patio installation estimate Jacksonville",
  openGraph: {
    title: "Free Paver Quote Jacksonville FL | Get Estimate",
    description: "Request a free paver installation quote in Jacksonville FL. No obligation estimates.",
    url: "https://skylightpaver.com/quote",
    type: "website",
  },
  alternates: {
    canonical: "https://skylightpaver.com/quote",
  },
}

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
