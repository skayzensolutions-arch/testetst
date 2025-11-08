"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const portfolioProjects = [
  {
    title: "Modern Estate Driveway",
    location: "Jacksonville, FL",
    description: "Complete driveway transformation with premium travertine pavers and custom border design.",
    image: "/images/portfolio-driveway-1.jpg",
    query: "luxury modern estate driveway with travertine pavers border design Florida",
    category: "Driveways",
    year: "2024",
  },
  {
    title: "Waterfront Patio Oasis",
    location: "Ponte Vedra Beach, FL",
    description: "2,500 sq ft outdoor living space featuring multi-level patio with built-in seating.",
    image: "/images/portfolio-patio-1.jpg",
    query: "waterfront luxury patio with premium pavers outdoor furniture seating",
    category: "Patios",
    year: "2024",
  },
  {
    title: "Resort-Style Pool Deck",
    location: "St. Augustine, FL",
    description: "Cool-touch pavers around custom pool with integrated spa and sun shelf.",
    image: "/images/portfolio-pool-1.jpg",
    query: "resort style pool deck with premium pavers spa tropical landscaping",
    category: "Pool Areas",
    year: "2023",
  },
  {
    title: "Commercial Plaza Restoration",
    location: "Jacksonville Beach, FL",
    description: "15,000 sq ft plaza restoration including cleaning, releveling, and sealing.",
    image: "/images/portfolio-commercial-1.jpg",
    query: "commercial plaza restoration with paver stones outdoor seating",
    category: "Repairs",
    year: "2024",
  },
  {
    title: "Mediterranean Garden Walkway",
    location: "Nocatee, FL",
    description: "Curved walkway design with mixed paver patterns connecting front entrance to backyard.",
    image: "/images/portfolio-walkway-1.jpg",
    query: "curved mediterranean walkway path with mixed pattern pavers garden",
    category: "Walkways",
    year: "2023",
  },
  {
    title: "Chef's Outdoor Kitchen",
    location: "Jacksonville, FL",
    description: "Professional-grade outdoor kitchen with heat-resistant pavers and prep station area.",
    image: "/images/portfolio-kitchen-1.jpg",
    query: "professional outdoor kitchen with premium pavers grill bar counter",
    category: "Outdoor Kitchens",
    year: "2024",
  },
  {
    title: "Historic Home Courtyard",
    location: "St. Augustine, FL",
    description: "Period-appropriate paver selection for 1920s Spanish colonial home courtyard.",
    image: "/images/portfolio-courtyard-1.jpg",
    query: "historic spanish colonial courtyard with traditional paver stones fountain",
    category: "Patios",
    year: "2023",
  },
  {
    title: "Lakeside Entertainment Area",
    location: "Orange Park, FL",
    description: "Expansive patio with fire pit, outdoor bar, and lake views.",
    image: "/images/portfolio-entertainment-1.jpg",
    query: "lakeside entertainment patio with fire pit outdoor bar premium pavers",
    category: "Patios",
    year: "2024",
  },
  {
    title: "Contemporary Front Entry",
    location: "Jacksonville, FL",
    description: "Sleek modern design with geometric paver patterns and accent lighting.",
    image: "/images/portfolio-entry-1.jpg",
    query: "contemporary modern front entry with geometric paver pattern lighting",
    category: "Walkways",
    year: "2024",
  },
]

const categories = ["All", "Driveways", "Patios", "Pool Areas", "Walkways", "Outdoor Kitchens", "Repairs"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === selectedCategory)

  useEffect(() => {
    setVisibleProjects([])
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filteredProjects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...prev, index])
              }, index * 60)
            })
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
  }, [selectedCategory])

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-primary transition-colors flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <a href="tel:+19044373853">
            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,196,48,0.5)]">
              (904) 437-3853
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every project tells a story. Browse through our completed work and see the quality that sets us apart.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-black shadow-[0_0_30px_rgba(244,196,48,0.4)]"
                    : "bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-white hover:bg-card border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={sectionRef} className="pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleProjects.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      query={project.query}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-black px-4 py-2 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 flex items-center gap-2">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 z-10"
            onClick={() => setSelectedProject(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-6xl w-full">
            <div className="relative aspect-video mb-6">
              <Image
                src={filteredProjects[selectedProject].image || "/placeholder.svg"}
                alt={filteredProjects[selectedProject].title}
                fill
                className="object-contain"
                query={filteredProjects[selectedProject].query}
              />
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">{filteredProjects[selectedProject].title}</h2>
              <p className="text-muted-foreground mb-4">
                {filteredProjects[selectedProject].location} • {filteredProjects[selectedProject].year}
              </p>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                {filteredProjects[selectedProject].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's talk about transforming your outdoor space. Free estimates available.
          </p>
          <a href="tel:+19044373853">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(244,196,48,0.6)] hover:scale-105"
            >
              Call (904) 437-3853
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
