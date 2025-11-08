"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-patio.jpg"
          alt="Beautiful paver patio installation Jacksonville Florida"
          fill
          className="object-cover scale-105"
          style={{
            filter: "brightness(0.4)",
          }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight transition-all duration-1000 text-white ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          {t.heroTitle}
        </h1>
        <p
          className={`text-xl md:text-2xl mb-10 text-balance max-w-3xl mx-auto leading-relaxed text-white/90 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {t.heroSubtitle}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <a href="#contact">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-7 font-semibold shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 animate-pulse-glow"
            >
              {t.getFreeEstimate}
            </Button>
          </a>
          <a href="tel:9044373853">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 text-white border-2 border-white/30 hover:bg-white/10 hover:border-white text-lg px-8 py-7 backdrop-blur-sm font-semibold transition-all hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              {t.callUsNow}
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
