import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "#1 Paver Contractor Jacksonville FL | Free Estimates",
  description:
    "Top-rated paver installation in Jacksonville FL. Driveways, patios, pool decks & walkways. Serving Orange Park, Ponte Vedra, St. Johns, Atlantic Beach. Call (904) 437-3853",
  keywords:
    "paver installation Jacksonville FL, paver contractor Jacksonville, driveway pavers Jacksonville FL, patio pavers Jacksonville, pool deck installation Jacksonville, walkway pavers Jacksonville, Orange Park pavers, Ponte Vedra paver company, St Johns paver installation, Atlantic Beach hardscaping, Duval County paver contractor, brick pavers Jacksonville",
  openGraph: {
    title: "Paver Installation Jacksonville FL | Premium Pavers",
    description:
      "Top paver installation company in Jacksonville FL. Durable driveways, patios, walkways & pool decks. Free quotes available.",
    url: "https://skylightpaver.com/paver-installation-jacksonville-fl",
    type: "website",
  },
  alternates: {
    canonical: "https://skylightpaver.com/paver-installation-jacksonville-fl",
  },
}

const services = [
  {
    title: "Driveway Paver Installation",
    description:
      "Your driveway is the first thing people see when they visit your Jacksonville home. We install beautiful, durable paver driveways that boost curb appeal and last for decades. Choose from classic brick pavers, modern interlocking designs, or natural stone options. Our driveways are built to handle Florida's heat, rain, and heavy vehicles without cracking or shifting.",
    benefits: ["Increases home value", "Lasts 25+ years", "Low maintenance", "Multiple design options"],
  },
  {
    title: "Patio Paver Installation",
    description:
      "Create the perfect outdoor living space for your Jacksonville home. Our custom patio installations transform backyards into beautiful gathering spots for family and friends. We design patios that complement your home's style while providing a durable surface for outdoor furniture, grills, and entertaining.",
    benefits: ["Expands living space", "Custom designs", "Weather resistant", "Easy to clean"],
  },
  {
    title: "Walkway & Pathway Pavers",
    description:
      "Safe, attractive walkways connect your outdoor spaces beautifully. We design and install pathways that guide guests from your driveway to your front door, or through your garden and backyard. Our walkways are built with proper drainage to prevent puddles and stay safe during Florida's rainy season.",
    benefits: ["Improved safety", "Better drainage", "Curb appeal", "Durable construction"],
  },
  {
    title: "Pool Deck Pavers",
    description:
      "Nothing beats relaxing by the pool on a hot Jacksonville day. Our pool deck pavers are specially selected to stay cool underfoot and provide slip-resistant surfaces around your pool. We handle all the drainage and grading to keep water flowing away from your pool and home.",
    benefits: ["Cool to the touch", "Slip-resistant", "Proper drainage", "Beautiful finishes"],
  },
  {
    title: "Outdoor Kitchen Pavers",
    description:
      "Turn your backyard into the ultimate entertainment space with a custom outdoor kitchen. We build solid paver foundations that support grills, counters, pizza ovens, and outdoor bars. Perfect for Jacksonville's year-round outdoor living weather.",
    benefits: ["Solid foundation", "Heat resistant", "Custom layouts", "Adds home value"],
  },
]

const serviceAreas = [
  "Jacksonville",
  "Orange Park",
  "Ponte Vedra",
  "St. Johns",
  "Atlantic Beach",
  "Neptune Beach",
  "Jacksonville Beach",
  "Fleming Island",
  "Mandarin",
  "San Marco",
]

export default function PaverInstallationJacksonvillePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-black via-secondary to-black">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/driveway-service.jpg"
            alt="Paver installation Jacksonville FL"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            Paver Installation Jacksonville FL
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-8">
            Jacksonville's trusted paver contractor since 2018. We install premium driveways, patios, walkways, pool
            decks, and outdoor kitchens for homeowners and businesses throughout Northeast Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-7 font-semibold"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:9044373853">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-7"
              >
                <Phone className="mr-2 h-5 w-5" />
                (904) 437-3853
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional Paver Installation in Jacksonville, Florida
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                When it comes to transforming your outdoor spaces, Skylight Paver Solutions is Jacksonville's go-to
                paver installation company. Based right here in Northeast Florida, we understand the unique challenges
                that Jacksonville's climate presents — from intense summer heat to heavy afternoon rains. That's why we
                use only premium materials and proven installation techniques that stand up to Florida weather year
                after year.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Whether you're looking to replace a worn-out concrete driveway, create a stunning backyard patio, or
                install a cool pool deck for those hot Jacksonville summers, our experienced team delivers quality
                craftsmanship on every project. We serve homeowners and businesses throughout Jacksonville, Orange Park,
                Ponte Vedra, St. Johns, Atlantic Beach, and surrounding areas.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every project starts with a free consultation where we discuss your vision, assess your property, and
                provide a detailed quote with no surprises. We're fully licensed and insured, and we stand behind our
                work with comprehensive warranties. From the first phone call to the final walkthrough, you'll
                experience the Skylight difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Our Paver Services</h2>
          <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
            We offer a full range of paver installation services to transform your Jacksonville property
          </p>

          <div className="space-y-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Why Jacksonville Homeowners Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Local Experience Since 2018</h3>
                  <p className="text-muted-foreground">
                    We know Jacksonville. From Mandarin to the Beaches, we've installed pavers in neighborhoods across
                    Duval County. We understand local soil conditions, drainage requirements, and what materials perform
                    best in our climate.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Premium Materials Only</h3>
                  <p className="text-muted-foreground">
                    We never cut corners. Every project uses top-quality pavers and proper base materials. Your
                    investment is built to last 25+ years with minimal maintenance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Licensed & Insured</h3>
                  <p className="text-muted-foreground">
                    Fully licensed, bonded, and insured for your protection. We pull all necessary permits and follow
                    local building codes to ensure your project is done right.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h3>
                  <p className="text-muted-foreground">
                    No hidden fees or surprise charges. We provide detailed written quotes before starting any work, so
                    you know exactly what to expect.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Warranty Protection</h3>
                  <p className="text-muted-foreground">
                    We stand behind our work with comprehensive warranties. If something's not right, we'll fix it. Your
                    satisfaction is our priority.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Clean & Professional</h3>
                  <p className="text-muted-foreground">
                    Our crews show up on time, keep your property clean, and treat your home with respect. We're not
                    done until you're completely satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Serving Jacksonville and Surrounding Areas
          </h2>
          <p className="text-muted-foreground text-lg text-center mb-8 max-w-2xl mx-auto">
            We proudly serve homeowners and businesses throughout Northeast Florida
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card/50 border border-border rounded-full px-5 py-2"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-white">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your paver installation project. We'll visit your Jacksonville property,
            discuss your vision, and provide a detailed estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-7 font-semibold"
              >
                Get Your Free Quote Today
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-7"
              >
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
