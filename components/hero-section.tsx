"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Star, Shield, Award } from "lucide-react"
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-40 lg:pt-44">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-patio.jpg"
          alt="Beautiful ground-level patio paver installation Jacksonville Florida - residential hardscaping"
          fill
          className="object-cover"
          style={{
            filter: "brightness(0.3)",
          }}
          priority
        />
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        
        {/* Subtle diagonal lines texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #f4c430 0, #f4c430 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        
        {/* Animated gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            {/* Badge */}
            <div className={`inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full pl-3 pr-5 py-2 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <div className="flex items-center gap-0.5 bg-primary/20 rounded-full px-2 py-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-white font-medium text-sm">Jacksonville's Top-Rated Residential Paver Contractor</span>
            </div>
            
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-primary">Premium Driveway &</span>
              <br />
              Patio Paver Installation
            </h1>
            
            <p
              className={`text-lg md:text-xl mb-8 max-w-xl leading-relaxed text-gray-300 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.heroSubtitle}
            </p>

            {/* Trust Badges */}
            <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-white text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-white text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-white text-sm font-medium">Since 2018</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a href="tel:9044373853" onClick={handlePhoneClick}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-7 font-bold shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (904) 437-3853
                </Button>
              </a>
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white text-lg px-8 py-7 font-semibold transition-all hover:scale-105"
                >
                  View Our Services
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Quick Estimate Form */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="bg-black/80 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="text-center mb-6">
                <p className="text-gray-300 text-base md:text-lg uppercase tracking-wider mb-1">Get a</p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Free Estimate</h2>
                <p className="text-gray-500 mt-2 text-sm">No-obligation quote for your project</p>
              </div>

              <form
                action="https://formsubmit.co/lopes@skylightpaver.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Quick Estimate Request - Skylight Paver Solutions" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://skylightpaver.com/?submitted=true" />

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <select
                    name="service"
                    className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                  >
                    <option value="" className="bg-black text-white">Select Service</option>
                    <option value="driveway" className="bg-black text-white">Driveway Pavers</option>
                    <option value="patio" className="bg-black text-white">Patio Installation</option>
                    <option value="pool-deck" className="bg-black text-white">Pool Deck</option>
                    <option value="walkway" className="bg-black text-white">Walkways</option>
                    <option value="outdoor-kitchen" className="bg-black text-white">Outdoor Kitchen</option>
                    <option value="firepit" className="bg-black text-white">Fire Pit</option>
                    <option value="retaining-wall" className="bg-black text-white">Retaining Wall</option>
                    <option value="repair" className="bg-black text-white">Paver Repair</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="details"
                    placeholder="Project Details (Optional)"
                    rows={3}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold text-lg py-4 rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg hover:shadow-primary/30"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-black/20">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
