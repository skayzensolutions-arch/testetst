import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HomeValueProps } from "@/components/home-value-props"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HomeValueProps />
      <ReviewsSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
