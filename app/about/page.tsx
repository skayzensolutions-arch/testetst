import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import Image from "next/image"
import Link from "next/link"
import { Shield, Award, Users, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Jacksonville Ground-Level Paver Experts Since 2018",
  description: "Skylight Paver Solutions - Jacksonville's trusted residential hardscaping contractor. We specialize in driveway pavers, patio pavers, pool deck pavers & landscape pavers. 6+ years experience, 300+ projects, 5-star Google rated. We do NOT offer roof pavers or skylight services. Licensed & insured.",
  keywords: "paver company Jacksonville, Jacksonville paver contractor, about Skylight Paver, driveway paver installation Florida, patio paver company, landscape pavers Jacksonville, residential hardscaping",
}

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "300+", label: "Projects Completed" },
  { value: "5.0", label: "Google Rating" },
  { value: "100%", label: "Satisfaction" },
]

const credentials = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed contractor with comprehensive liability and workers' compensation insurance.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "We stand behind our work with a satisfaction guarantee on every installation.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled craftsmen have years of experience in ground-level driveway, patio, and pool deck paver installation.",
  },
  {
    icon: MapPin,
    title: "Local Company",
    description: "Proudly serving Jacksonville and Northeast Florida communities since 2018.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-primary">Skylight Paver</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Jacksonville's trusted ground-level paver installation experts dedicated to transforming outdoor living spaces with driveway pavers, patio pavers, pool deck pavers, and landscape hardscaping.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery-patio.jpg"
                alt="Skylight Paver team at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Founded in 2018, Skylight Paver Solutions was born from a passion for creating beautiful outdoor living spaces that stand the test of time. We specialize in residential hardscaping for driveways, pools, and patios (we do not offer roof deck or skylight services).
                </p>
                <p>
                  What started as a small team with big dreams has grown into Jacksonville's premier ground-level paver installation company, serving homeowners across Northeast Florida. We install traditional sand-set interlocking concrete pavers - the kind you walk on in your yard, not on rooftops.
                </p>
                <p>
                  We take pride in our attention to detail, quality craftsmanship, and commitment to customer satisfaction. Every driveway paver, patio paver, and pool deck paver project we complete is a testament to our dedication to excellence in landscape hardscaping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Trust <span className="text-primary">Us</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="bg-card/30 border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cred.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-semibold mb-2">{cred.title}</h3>
                <p className="text-gray-400 text-sm">{cred.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
