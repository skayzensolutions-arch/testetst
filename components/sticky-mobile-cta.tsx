"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 100px
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/95 backdrop-blur-sm border-t border-primary/20 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a href="tel:9044373853" className="block">
        <Button
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-6 shadow-xl animate-pulse-glow"
        >
          <Phone className="mr-2 h-5 w-5" />
          Call Us Now: (904) 437-3853
        </Button>
      </a>
    </div>
  )
}
