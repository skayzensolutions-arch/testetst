import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HomeValueProps } from "@/components/home-value-props"
import { ServicesSection } from "@/components/services-section"
import { PortfolioPreview } from "@/components/portfolio-preview"
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
      <HomeValueProps />
      <ServicesSection />
      <PortfolioPreview />
      <ReviewsSection />
      <ServiceAreasSection />
      <ContactSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
