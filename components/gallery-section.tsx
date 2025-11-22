"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { X, ArrowRight, ChevronLeft, ChevronRight, Folder } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { createBrowserClient } from "@supabase/ssr"

interface PortfolioProject {
  id: number
  title: string
  image: string
  category: string
  imageCount: number
  allImages: string[]
}

export function GallerySection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const [galleryImages, setGalleryImages] = useState<PortfolioProject[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const fetchProjects = async () => {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      const { data: projects, error } = await supabase
        .from("portfolio_projects")
        .select("id, title, image, category")
        .order("position", { ascending: true })
        .limit(6)

      if (projects && !error) {
        // Fetch all images for each project
        const projectsWithImages = await Promise.all(
          projects.map(async (project) => {
            const { data: images } = await supabase
              .from("portfolio_images")
              .select("image_url")
              .eq("project_id", project.id)
              .order("position", { ascending: true })

            const allImages = images && images.length > 0 ? images.map((img) => img.image_url) : [project.image]

            return {
              ...project,
              imageCount: allImages.length,
              allImages,
            }
          }),
        )

        setGalleryImages(projectsWithImages)
      }
    }

    fetchProjects()
  }, [])

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
  }, [galleryImages])

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden"
      setCurrentImageIndex(0)
    } else {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  const handlePrevImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev === 0 ? galleryImages[selectedProject].allImages.length - 1 : prev - 1))
    }
  }

  const handleNextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev === galleryImages[selectedProject].allImages.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <section ref={sectionRef} className="py-24 bg-black" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See what we've built for homeowners across Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((project, index) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer overflow-hidden rounded-lg aspect-square transition-all duration-700 ${
                visibleImages.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              onClick={() => setSelectedProject(index)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {project.imageCount > 1 && (
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 z-10 border border-primary/30">
                  <Folder className="h-4 w-4 text-primary" />
                  <span className="text-white text-sm font-semibold">{project.imageCount} photos</span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{project.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/portfolio">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-full overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(244,196,48,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative flex items-center gap-3">
                <span className="text-lg font-semibold text-white">{t.viewPortfolio}</span>
                <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 z-10"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedProject(null)
            }}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation buttons for multiple images */}
          {galleryImages[selectedProject].allImages.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 bg-black/50 rounded-full z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevImage()
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 bg-black/50 rounded-full z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNextImage()
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold z-10">
                {currentImageIndex + 1} / {galleryImages[selectedProject].allImages.length}
              </div>
            </>
          )}

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedProject].allImages[currentImageIndex] || "/placeholder.svg"}
              alt={`${galleryImages[selectedProject].title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
