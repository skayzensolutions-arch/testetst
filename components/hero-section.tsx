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

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      ;(window as any).gtag_report_conversion("tel:9044373853")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-patio.jpg"
          alt="Beautiful paver patio installation Jacksonville Florida"
          fill
          className="object-cover scale-110 transition-transform duration-[2s]"
          style={{
            filter: "brightness(0.4)",
          }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 text-white break-words ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          {t.heroTitle}
        </h1>
        <p
          className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90 transition-all duration-1000 delay-300 break-words ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {t.heroSubtitle}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-0 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <a href="#contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-7 font-semibold shadow-xl hover:shadow-primary/30 transition-all hover:scale-110 animate-glow-pulse"
            >
              {t.getFreeEstimate}
            </Button>
          </a>
          <a href="tel:9044373853" className="w-full sm:w-auto" onClick={handlePhoneClick}>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/5 text-white border-2 border-white/30 hover:bg-white/10 hover:border-primary hover:border-2 text-lg px-8 py-7 backdrop-blur-sm font-semibold transition-all hover:scale-110"
            >
              <Phone className="mr-2 h-5 w-5" />
              {t.callUsNow}
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-black/20">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
