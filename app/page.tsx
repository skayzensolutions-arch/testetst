import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HomeValueProps } from "@/components/home-value-props"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { ReviewsSection } from "@/components/reviews-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HomeValueProps />
      <PortfolioPreview />
      <ReviewsSection />
      <ServiceAreasSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
