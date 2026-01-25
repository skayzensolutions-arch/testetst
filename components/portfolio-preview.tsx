"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Eye } from "lucide-react"
import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase-client"

// Fallback items in case no featured projects are in the database
const fallbackItems = [
  {
    image: "/images/gallery-patio.jpg",
    title: "Luxury Patio",
    location: "Ponte Vedra, FL",
  },
  {
    image: "/images/gallery-1.jpg",
    title: "Driveway Installation",
    location: "Jacksonville, FL",
  },
  {
    image: "/images/gallery-2.jpg",
    title: "Pool Deck",
    location: "Atlantic Beach, FL",
  },
  {
    image: "/images/gallery-3.jpg",
    title: "Outdoor Kitchen",
    location: "St. Augustine, FL",
  },
]

export function PortfolioPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [portfolioItems, setPortfolioItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFeaturedProjects() {
      const supabase = getSupabaseBrowserClient()
      
      // First try to get featured projects
      const { data: featuredData, error: featuredError } = await supabase
        .from("portfolio_projects")
        .select("*")
        .eq("featured", true)
        .order("position", { ascending: true })
        .limit(4)
      
      if (featuredError) {
        console.error("Error loading featured projects:", featuredError)
        setPortfolioItems(fallbackItems)
        setLoading(false)
        return
      }
      
      // If we have featured projects, use them
      if (featuredData && featuredData.length > 0) {
        const items = featuredData.map(project => ({
          image: project.image,
          title: project.title,
          location: project.location,
        }))
        setPortfolioItems(items)
      } else {
        // Otherwise, get the first 4 projects by position
        const { data: allData, error: allError } = await supabase
          .from("portfolio_projects")
          .select("*")
          .order("position", { ascending: true })
          .limit(4)
        
        if (allError || !allData || allData.length === 0) {
          setPortfolioItems(fallbackItems)
        } else {
          const items = allData.map(project => ({
            image: project.image,
            title: project.title,
            location: project.location,
          }))
          setPortfolioItems(items)
        }
      }
      
      setLoading(false)
    }
    
    loadFeaturedProjects()
  }, [])

  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(244,196,48,0.4) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">Our Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our latest paver installations across Jacksonville and Northeast Florida
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {loading ? (
            // Loading skeleton
            [...Array(4)].map((_, index) => (
              <div key={index} className="aspect-[4/5] rounded-xl bg-card/50 animate-pulse" />
            ))
          ) : portfolioItems.map((item, index) => (
            <Link
              key={index}
              href="/portfolio"
              className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? "opacity-90" : "opacity-60"}`} />
              
              {/* Border on hover */}
              <div className={`absolute inset-0 border-2 rounded-xl transition-colors duration-300 ${hoveredIndex === index ? "border-primary" : "border-transparent"}`} />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{item.location}</p>
              </div>
              
              {/* View icon on hover */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                <div className="bg-primary text-black rounded-full p-3">
                  <Eye className="w-6 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 bg-primary text-black font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20 group"
          >
            View Full Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
