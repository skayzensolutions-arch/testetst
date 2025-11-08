"use client"

import { Shield, Award, DollarSign, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

const features = [
  {
    icon: Shield,
    titleKey: "licensedTitle",
    descKey: "licensedDesc",
  },
  {
    icon: MapPin,
    titleKey: "experiencedTitle",
    descKey: "experiencedDesc",
  },
  {
    icon: Award,
    titleKey: "qualityTitle",
    descKey: "qualityDesc",
  },
  {
    icon: DollarSign,
    titleKey: "warrantyTitle",
    descKey: "warrantyDesc",
  },
]

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black via-secondary to-black relative" id="why-us">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">{t.whyChooseUsTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.whyChooseUsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-500 hover:transform hover:scale-105 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{t[feature.titleKey as keyof typeof t]}</h3>
                <p className="text-muted-foreground leading-relaxed">{t[feature.descKey as keyof typeof t]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
