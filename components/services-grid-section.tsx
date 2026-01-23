"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    title: "Pool Decks",
    description: "Beautiful, slip-resistant pool deck pavers that transform your backyard into a resort-style retreat.",
    image: "/images/pool-service.jpg",
  },
  {
    title: "Patios",
    description: "Custom patio designs that extend your living space and create the perfect outdoor entertainment area.",
    image: "/images/patio-service.jpg",
  },
  {
    title: "Driveways",
    description: "Durable, elegant driveway pavers that boost your curb appeal and withstand Florida's climate.",
    image: "/images/driveway-service.jpg",
  },
  {
    title: "Outdoor Kitchens",
    description: "Complete outdoor kitchen installations with premium pavers, perfect for hosting and cooking outdoors.",
    image: "/images/outdoor-kitchen-service.jpg",
  },
  {
    title: "Walkways",
    description: "Beautifully designed walkway pavers that guide guests through your property with style.",
    image: "/images/walkway-service.jpg",
  },
  {
    title: "Fire Pits",
    description: "Custom fire pit installations surrounded by elegant pavers for cozy outdoor gatherings.",
    image: "/images/firepit-service.jpg",
  },
  {
    title: "Retaining Walls",
    description: "Functional and attractive retaining walls that manage elevation changes and prevent erosion.",
    image: "/images/retaining-wall-service.jpg",
  },
  {
    title: "Paver Repair",
    description: "Expert paver repair and restoration services to bring your existing hardscape back to life.",
    image: "/images/paver-repair-service.jpg",
  },
]

export function ServicesGridSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="services">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f4c430' fillOpacity='0.3' fillRule='evenodd'/%3E%3C/svg%3E\")",
        }}
      />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4 animate-fade-in">Our Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elevate Your <span className="text-primary">Outdoor Living</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            As Jacksonville's premier paver contractor, we transform outdoor spaces into stunning, functional living areas that last for decades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              href="/quote"
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {service.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl transition-colors duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Outdoors?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your outdoor space into a masterpiece that reflects your style and enhances your lifestyle. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <button className="bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-primary/30">
                  Request a Free Quote
                </button>
              </Link>
              <a href="tel:9044373853">
                <button className="bg-transparent border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white transition-all hover:scale-105">
                  Call (904) 437-3853
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
