import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesGridSection } from "@/components/services-grid-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { GallerySection } from "@/components/gallery-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesGridSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ReviewsSection />
      <ServiceAreasSection />
      <ContactSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
