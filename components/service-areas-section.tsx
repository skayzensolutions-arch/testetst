"use client"

import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const primaryAreas = [
  "Jacksonville",
  "Ponte Vedra",
  "St. Augustine",
  "Atlantic Beach",
  "Jacksonville Beach",
]

const additionalAreas = [
  "Orange Park",
  "St. Johns",
  "Neptune Beach",
  "Fleming Island",
  "Mandarin",
  "San Marco",
  "Riverside",
]

export function ServiceAreasSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden" id="service-areas">
      {/* Stone texture background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="/images/hero-patio.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Map/Visual */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary/10" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary/20" />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary/30 animate-pulse" />
              </div>
              
              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-black rounded-full w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center shadow-2xl shadow-primary/30">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 mb-1" />
                  <span className="font-bold text-base md:text-lg">Jacksonville</span>
                  <span className="text-xs md:text-sm opacity-80">& Surroundings</span>
                </div>
              </div>

              {/* Floating location pins - positioned around the circle */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/80 border border-primary/30 rounded-full px-4 py-1.5 animate-float">
                <span className="text-primary text-sm font-medium">Ponte Vedra</span>
              </div>
              <div className="absolute top-1/4 right-0 bg-black/80 border border-primary/30 rounded-full px-4 py-1.5 animate-float" style={{ animationDelay: "0.5s" }}>
                <span className="text-primary text-sm font-medium">Atlantic Beach</span>
              </div>
              <div className="absolute bottom-1/4 left-0 bg-black/80 border border-primary/30 rounded-full px-4 py-1.5 animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-primary text-sm font-medium">Orange Park</span>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/80 border border-primary/30 rounded-full px-4 py-1.5 animate-float" style={{ animationDelay: "1.5s" }}>
                <span className="text-primary text-sm font-medium">St. Augustine</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">Service Areas</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Serving <span className="text-primary">Northeast Florida</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              From Jacksonville to St. Augustine, our expert team delivers premium paver installations to homeowners across the region.
            </p>

            {/* Primary Areas */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Primary Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {primaryAreas.map((area, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Areas - Simple inline list */}
            <div className="mb-10">
              <h3 className="text-gray-500 font-medium mb-3 text-sm">Also Serving</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {additionalAreas.join(" • ")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9044373853">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20">
                  <Phone className="w-5 h-5" />
                  (904) 437-3853
                </button>
              </a>
              <Link href="/paver-installation-jacksonville-fl" className="group">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 hover:border-primary/50 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
