"use client"

import { Shield, Award, Clock, Wrench } from "lucide-react"
import Link from "next/link"

const valueProps = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed contractor with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars by Jacksonville homeowners on Google Reviews.",
  },
  {
    icon: Clock,
    title: "6+ Years Experience",
    description: "Over 300 successful paver installations across Northeast Florida.",
  },
  {
    icon: Wrench,
    title: "Quality Materials",
    description: "We use only premium pavers from trusted manufacturers for lasting results.",
  },
]

export function HomeValueProps() {
  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(244,196,48,0.5) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-primary">Skylight Paver</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Jacksonville's trusted paver installation experts
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="bg-card/30 border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <prop.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-400 text-sm">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all"
          >
            View Our Services
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 hover:border-primary/50 transition-all"
          >
            See Our Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 hover:border-primary/50 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
