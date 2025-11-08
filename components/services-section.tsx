"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    titleKey: "driveways",
    descKey: "drivewaysDesc",
    image: "/images/driveway-service.jpg",
  },
  {
    titleKey: "patios",
    descKey: "patiosDesc",
    image: "/images/patio-service.jpg",
  },
  {
    titleKey: "walkways",
    descKey: "walkwaysDesc",
    image: "/images/walkway-service.jpg",
  },
  {
    titleKey: "poolDecks",
    descKey: "poolDecksDesc",
    image: "/images/pool-service.jpg",
  },
  {
    titleKey: "outdoorKitchens",
    descKey: "outdoorKitchensDesc",
    image: "/images/outdoor-kitchen-service.jpg",
  },
]

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="services">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/diagonal-stripes-pattern.jpg')", backgroundSize: "50px 50px" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">{t.servicesTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.servicesSubtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons */}
          <Button
            onClick={goToPrev}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-black/80 backdrop-blur-sm border-2 border-primary/50 hover:border-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-8 w-8 text-primary" />
          </Button>

          <Button
            onClick={goToNext}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-black/80 backdrop-blur-sm border-2 border-primary/50 hover:border-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-8 w-8 text-primary" />
          </Button>

          {/* Service Card Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-2 border-border overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-80 md:h-auto overflow-hidden">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={t[service.titleKey as keyof typeof t] as string}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent" />
                        </div>

                        {/* Content Side */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300">
                            {t[service.titleKey as keyof typeof t]}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            {t[service.descKey as keyof typeof t]}
                          </p>

                          <Link href="/quote">
                            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold w-fit transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,196,48,0.5)] hover:scale-105">
                              {t.getQuote}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-12 bg-primary shadow-[0_0_20px_rgba(244,196,48,0.6)]"
                    : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,196,48,0.5)] hover:scale-105"
              >
                {t.viewPortfolio}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
