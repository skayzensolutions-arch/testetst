"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Modern paver driveway installation Jacksonville",
    query: "modern luxury paver driveway installation residential Florida",
    category: "Driveways",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Beautiful patio with paver stones",
    query: "luxury outdoor patio with premium paver stones furniture Florida",
    category: "Patios",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Pool deck paver installation",
    query: "pool deck area with premium paver stones around swimming pool",
    category: "Pool Areas",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Paver walkway through garden",
    query: "elegant paver walkway path through residential garden",
    category: "Walkways",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Outdoor kitchen with paver flooring",
    query: "luxury outdoor kitchen with premium paver stone flooring grill",
    category: "Outdoor Kitchens",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Before and after paver repair",
    query: "paver driveway restoration before and after comparison",
    category: "Repairs",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            galleryImages.forEach((_, index) => {
              setTimeout(() => {
                setVisibleImages((prev) => [...prev, index])
              }, index * 80)
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
  }, [])

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  return (
    <section ref={sectionRef} className="py-24 bg-black" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See what we've built for homeowners across Jacksonville
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-lg aspect-square transition-all duration-700 ${
                visibleImages.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                query={image.query}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{image.category}</p>
                </div>
              </div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              query={galleryImages[selectedImage].query}
            />
          </div>
        </div>
      )}
    </section>
  )
}
