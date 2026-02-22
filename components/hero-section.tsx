"use client"

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-patio.jpg"
          alt="Beautiful paver patio installation"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.45) contrast(1.1) saturate(1.15)",
          }}
        />
        {/* Subtle diagonal stripe pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(244,196,48,1) 14px, rgba(244,196,48,1) 15px)",
          }}
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          
          {/* Left Side - Content (3 cols) */}
          <div className="lg:col-span-3 text-white">
            {/* Badge */}
            <div className={`inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full pl-3 pr-5 py-1.5 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <div className="flex items-center gap-0.5 bg-primary/20 rounded-full px-2 py-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-white/90 font-medium text-xs uppercase tracking-wide">{"Jacksonville's Top-Rated Paver Contractor"}</span>
            </div>
            
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight transition-all duration-700 delay-100 text-balance ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-primary">Premium Driveway &</span>
              <br />
              Patio Paver Installation
            </h1>
            
            <p
              className={`text-base md:text-lg mb-10 max-w-lg leading-relaxed text-white/70 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a href="tel:9044373853" onClick={handlePhoneClick}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (904) 437-3853
                </Button>
              </a>
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/40 text-base px-8 py-6 font-medium backdrop-blur-sm transition-all hover:scale-[1.02]"
                >
                  View Our Services
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className={`flex flex-wrap gap-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-white/60 text-sm">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-white/60 text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-white/60 text-sm">Since 2018</span>
              </div>
            </div>
          </div>

          {/* Right Side - Quick Estimate Form (2 cols) */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Get a <span className="text-primary">Free Estimate</span>
                </h2>
                <p className="text-white/40 mt-1.5 text-sm">No-obligation quote for your project</p>
              </div>

              <form
                action="https://formsubmit.co/lopes@skylightpaver.com"
                method="POST"
                className="space-y-3"
              >
                <input type="hidden" name="_subject" value="Quick Estimate Request - Skylight Paver Solutions" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://skylightpaver.com/?submitted=true" />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:bg-white/[0.08] transition-all outline-none"
                  required
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:bg-white/[0.08] transition-all outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                    className="w-full bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:bg-white/[0.08] transition-all outline-none"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:bg-white/[0.08] transition-all outline-none"
                  required
                />
                <select
                  name="service"
                  className="w-full bg-white/[0.06] border border-white/10 text-white/50 rounded-xl px-4 py-3 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:bg-white/[0.08] transition-all outline-none"
                  required
                >
                  <option value="" className="bg-black/90 text-white">Select Service</option>
                  <option value="driveway" className="bg-black/90 text-white">Driveway Pavers</option>
                  <option value="patio" className="bg-black/90 text-white">Patio Installation</option>
                  <option value="pool-deck" className="bg-black/90 text-white">Pool Deck</option>
                  <option value="walkway" className="bg-black/90 text-white">Walkways</option>
                  <option value="outdoor-kitchen" className="bg-black/90 text-white">Outdoor Kitchen</option>
                  <option value="firepit" className="bg-black/90 text-white">Fire Pit</option>
                  <option value="retaining-wall" className="bg-black/90 text-white">Retaining Wall</option>
                  <option value="repair" className="bg-black/90 text-white">Paver Repair</option>
                </select>
                <textarea
                  name="details"
                  placeholder="Project Details (Optional)"
                  rows={2}
                  className="w-full bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:bg-white/[0.08] transition-all resize-none outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider py-4 rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.01] shadow-lg shadow-primary/20 mt-1"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-0.5 h-2 bg-primary/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
