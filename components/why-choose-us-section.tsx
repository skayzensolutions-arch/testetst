"use client"

import { Shield, Award, Clock, Wrench, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

const features = [
  {
    icon: Shield,
    titleKey: "licensedTitle",
    descKey: "licensedDesc",
  },
  {
    icon: Clock,
    titleKey: "experiencedTitle",
    descKey: "experiencedDesc",
  },
  {
    icon: Award,
    titleKey: "qualityTitle",
    descKey: "qualityDesc",
  },
  {
    icon: Wrench,
    titleKey: "warrantyTitle",
    descKey: "warrantyDesc",
  },
]

export function WhyChooseUsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-black relative overflow-hidden" id="why-us">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f4c430' fillOpacity='0.4' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      
      {/* Decorative accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
              <Image
                src="/images/gallery-patio.jpg"
                alt="Skylight Paver Solutions team at work in Jacksonville"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Yellow accent border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-black rounded-xl p-6 shadow-2xl hidden md:block hover-lift">
              <div className="text-4xl font-bold">6+</div>
              <div className="text-sm font-semibold">Years Experience</div>
            </div>
            
            {/* Floating Projects Card */}
            <div className="absolute -top-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-2xl hidden md:block hover-lift">
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-xs text-gray-400">Projects Completed</div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-xl -z-10" />
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Trusted <span className="text-primary">Paver Experts</span> in Florida
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {t.whyChooseUsSubtitle}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{t[feature.titleKey as keyof typeof t]}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{t[feature.descKey as keyof typeof t]}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <a href="tel:9044373853" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-all hover:scale-105">
              <Phone className="w-5 h-5" />
              Call for Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
