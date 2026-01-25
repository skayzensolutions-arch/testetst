import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ground-Level Paver Services Jacksonville FL - Patio Pavers, Driveway Pavers & More",
  description: "Professional ground-level paver installation in Jacksonville FL. Driveway pavers, patio pavers, pool deck pavers, walkway pavers, outdoor kitchens & fire pits. Sand-set interlocking concrete pavers for residential properties. NO roof pavers or skylights. Free estimates: (904) 437-3853",
  keywords: "driveway paver services Jacksonville, patio pavers Jacksonville FL, landscape paver installation Jacksonville, pool deck pavers, outdoor kitchen pavers Jacksonville, residential hardscaping Florida, ground level pavers",
}

const services = [
  {
    title: "Patio Paver Installation",
    description: "Transform your backyard with beautiful ground-level patio pavers perfect for outdoor entertaining and relaxation. Sand-set interlocking concrete pavers built to last.",
    image: "/images/gallery-patio.jpg",
  },
  {
    title: "Driveway Paver Installation",
    description: "Enhance your home's curb appeal with durable, elegant driveway pavers. Traditional ground-level interlocking pavers built to withstand Florida weather.",
    image: "/images/driveway-service.jpg",
  },
  {
    title: "Pool Deck Pavers",
    description: "Create a stunning, slip-resistant pool deck with landscape pavers that complement your outdoor oasis. Ground-level installation around your pool area.",
    image: "/images/hero-patio.jpg",
  },
  {
    title: "Outdoor Kitchen Hardscaping",
    description: "Custom outdoor kitchen installations with paver foundations for the ultimate backyard cooking experience.",
    image: "/images/gallery-1.jpg",
  },
  {
    title: "Walkway Pavers",
    description: "Beautiful landscape paver walkways that add character and functionality to your yard. Ground-level pathways connecting your outdoor spaces.",
    image: "/images/gallery-2.jpg",
  },
  {
    title: "Fire Pit Pavers",
    description: "Custom fire pit installations surrounded by elegant landscape pavers for cozy outdoor gatherings.",
    image: "/images/firepit-service.jpg",
  },
  {
    title: "Retaining Walls",
    description: "Functional and attractive retaining walls that manage elevation changes and prevent erosion in your landscape.",
    image: "/images/retaining-wall-service.jpg",
  },
  {
    title: "Landscape Paver Repair",
    description: "Expert driveway paver, patio paver, and pool deck paver repair and restoration services to bring your existing hardscape back to life.",
    image: "/images/paver-repair-service.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Professional ground-level paver installation services for residential properties across Jacksonville and Northeast Florida. We install driveway pavers, patio pavers, pool deck pavers, and landscape hardscaping (no roof pavers or skylight services).
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card/30 border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
              >
                <div className="aspect-video relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
