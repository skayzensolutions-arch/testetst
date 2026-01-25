import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Skylight Paver Solutions Jacksonville FL",
  description: "Contact Skylight Paver Solutions for a free paver installation quote. Call (904) 437-3853 or fill out our form. Serving Jacksonville and Northeast Florida.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Spacer for fixed nav */}
      <div className="pt-28 md:pt-36 bg-black" />
      
      <ContactSection />
      
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
