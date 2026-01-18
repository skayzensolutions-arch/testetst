"use client"

import { MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const serviceAreas = [
  "Jacksonville",
  "Orange Park",
  "Ponte Vedra",
  "St. Johns",
  "Atlantic Beach",
  "Neptune Beach",
  "Jacksonville Beach",
  "Fleming Island",
  "Mandarin",
  "San Marco",
]

export function ServiceAreasSection() {
  return (
    <section className="py-16 bg-secondary/30" id="service-areas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Serving Jacksonville and Surrounding Areas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We proudly install pavers for homeowners and businesses throughout Northeast Florida
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-card/50 border border-border rounded-full px-5 py-2 hover:border-primary/50 transition-colors"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-white">{area}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/paver-installation-jacksonville-fl">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold transition-all"
            >
              Learn More About Our Jacksonville Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
