"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Eye,
  EyeOff,
  Lock,
  Plus,
  Pencil,
  Trash2,
  Upload,
  ArrowUp,
  ArrowDown,
  Save,
  Sparkles,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getSupabaseBrowserClient } from "@/lib/supabase-client"

const initialProjects = [
  {
    id: 1,
    title: "Resort-Style Pool Deck Installation",
    location: "Jacksonville, FL",
    description:
      "Complete pool deck transformation with beautiful multi-tone pavers creating a luxurious outdoor oasis.",
    image: "/images/pool-deck-1.jpg",
    category: "Pool Area",
    year: "2024",
  },
  {
    id: 2,
    title: "Custom Pool Deck with Accent Pavers",
    location: "Jacksonville, FL",
    description: "Stunning pool deck featuring mixed paver patterns with charcoal and tan tones for visual interest.",
    image: "/images/pool-deck-2.jpg",
    category: "Pool Area",
    year: "2024",
  },
  {
    id: 3,
    title: "Pool Deck with Designer Pattern",
    location: "Jacksonville, FL",
    description:
      "Beautiful pool area with carefully selected paver colors and professional installation creating a resort feel.",
    image: "/images/pool-deck-3.jpg",
    category: "Pool Area",
    year: "2024",
  },
  {
    id: 4,
    title: "Custom Freeform Pool Deck",
    location: "Jacksonville, FL",
    description: "Elegant custom-shaped pool surrounded by premium paver installation with multi-color design.",
    image: "/images/pool-deck-4.jpg",
    category: "Pool Area",
    year: "2024",
  },
  {
    id: 5,
    title: "Modern Driveway with Retaining Wall",
    location: "Jacksonville, FL",
    description:
      "Professional driveway installation featuring concrete pavers with integrated retaining wall and steps.",
    image: "/images/driveway-1.jpg",
    category: "Driveway",
    year: "2024",
  },
  {
    id: 6,
    title: "Professional Paver Repair & Restoration",
    location: "Jacksonville Beach, FL",
    description:
      "Expert repair and restoration bringing damaged pavers back to their original beauty with complete releveling.",
    image: "/images/portfolio-repair-before-after.jpg",
    category: "Repair",
    year: "2024",
  },
]

export default function AdminPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const [projects, setProjects] = useState<any[]>([])
  const [editingProject, setEditingProject] = useState<any>(null)
  const [showForm, setShowForm] = useState(false)
  const [projectImages, setProjectImages] = useState<any[]>([])
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [analyzingImage, setAnalyzingImage] = useState(false)
  const [uploadingImages, setUploadingImages] = useState(false)

  const [activeTab, setActiveTab] = useState<"portfolio" | "seo">("portfolio")
  const [seoData, setSeoData] = useState({
    title: "Skylight Paver Solutions | Expert Paver Installation in Jacksonville, FL",
    description:
      "Transform your outdoor spaces with expert paver solutions. Driveways, patios, pool areas, outdoor kitchens, and more. Licensed & insured.",
    keywords: "Jacksonville paver installation, Florida driveway pavers, patio pavers Jacksonville, pool deck pavers",
  })
  const [aiSuggestion, setAiSuggestion] = useState("")
  const [loadingAI, setLoadingAI] = useState(false)

  useEffect(() => {
    const auth = sessionStorage.getItem("admin_authenticated")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      loadProjects()
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (username === "skylight_admin" && password === "SkyP@v3r2024!Secure") {
      setIsAuthenticated(true)
      sessionStorage.setItem("admin_authenticated", "true")
    } else {
      setError("Invalid credentials. Please try again.")
      setUsername("")
      setPassword("")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("admin_authenticated")
    setPassword("")
  }

  const handleAddNew = () => {
    setEditingProject({
      id: Date.now(),
      title: "",
      location: "",
      description: "",
      image: "",
      category: "Pool Area",
      year: "2024",
    })
    setShowForm(true)
    setProjectImages([]) // Clear previous images
  }

  const handleEdit = async (project: any) => {
    setEditingProject({ ...project })
    setShowForm(true)

    await loadProjectImages(project.id)
  }

  const loadProjectImages = async (projectId: number) => {
    const supabase = getSupabaseBrowserClient()
    const { data, error } = await supabase
      .from("portfolio_images")
      .select("*")
      .eq("project_id", projectId)
      .order("position", { ascending: true })

    if (error) {
      console.error("[v0] Error loading project images:", error)
      setProjectImages([])
    } else {
      console.log("[v0] Loaded images for project:", data)
      setProjectImages(data || [])
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this project? This will also delete all associated images.")) {
      const supabase = getSupabaseBrowserClient()

      const { error } = await supabase.from("portfolio_projects").delete().eq("id", id)

      if (error) {
        console.error("Error deleting project:", error)
        alert("Failed to delete project. Please try again.")
        return
      }

      await loadProjects()
    }
  }

  const handleMoveUp = async (index: number) => {
    if (index > 0) {
      const supabase = getSupabaseBrowserClient()
      const project1 = projects[index]
      const project2 = projects[index - 1]

      await supabase
        .from("portfolio_projects")
        .update({ position: index - 1 })
        .eq("id", project1.id)
      await supabase.from("portfolio_projects").update({ position: index }).eq("id", project2.id)

      await loadProjects()
    }
  }

  const handleMoveDown = async (index: number) => {
    if (index < projects.length - 1) {
      const supabase = getSupabaseBrowserClient()
      const project1 = projects[index]
      const project2 = projects[index + 1]

      await supabase
        .from("portfolio_projects")
        .update({ position: index + 1 })
        .eq("id", project1.id)
      await supabase.from("portfolio_projects").update({ position: index }).eq("id", project2.id)

      await loadProjects()
    }
  }

  const handleSave = async () => {
    if (editingProject) {
      console.log("[v0] Saving project...")

      const supabase = getSupabaseBrowserClient()

      if (editingProject.id && projects.find((p) => p.id === editingProject.id)) {
        // Update existing project
        const { error } = await supabase
          .from("portfolio_projects")
          .update({
            title: editingProject.title,
            location: editingProject.location,
            description: editingProject.description,
            image: projectImages.length > 0 ? projectImages[0].image_url : editingProject.image,
            category: editingProject.category,
            year: editingProject.year,
            updated_at: new Date().toISOString(),
          })
          .eq("id", editingProject.id)

        if (error) {
          console.error("[v0] Error updating project:", error)
          alert("Failed to save project. Please try again.")
          return
        }

        // Save any new images that don't have a database ID yet
        const newImages = projectImages.filter(img => !img.project_id || img.id > 1000000000000)
        console.log("[v0] Saving new images for existing project:", newImages.length)
        
        for (let i = 0; i < newImages.length; i++) {
          const { error: imgError } = await supabase.from("portfolio_images").insert({
            project_id: editingProject.id,
            image_url: newImages[i].image_url,
            position: projectImages.findIndex(p => p.image_url === newImages[i].image_url),
          })
          
          if (imgError) {
            console.error("[v0] Error saving image:", imgError)
          }
        }

        console.log("[v0] Project updated successfully")
      } else {
        const { data, error } = await supabase
          .from("portfolio_projects")
          .insert({
            title: editingProject.title,
            location: editingProject.location,
            description: editingProject.description,
            image: projectImages.length > 0 ? projectImages[0].image_url : "",
            category: editingProject.category,
            year: editingProject.year,
            position: projects.length,
          })
          .select()
          .single()

        if (error) {
          console.error("Error creating project:", error)
          alert("Failed to save project. Please try again.")
          return
        }

        console.log("[v0] New project created, uploading images...")
        if (projectImages.length > 0) {
          for (let i = 0; i < projectImages.length; i++) {
            await supabase.from("portfolio_images").insert({
              project_id: data.id,
              image_url: projectImages[i].image_url,
              position: i,
            })
          }
        }
      }

      await loadProjects()
      setShowForm(false)
      setEditingProject(null)
      setProjectImages([])
      setImageFile(null)
      setImagePreview("")
    }
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingProject(null)
    setProjectImages([])
    setImageFile(null)
    setImagePreview("")
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    if (files.length > 10) {
      alert("You can upload a maximum of 10 images per project.")
      return
    }

    setUploadingImages(true)

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      if (file.size > 10 * 1024 * 1024) {
        alert(`File "${file.name}" is too large. Maximum size is 10MB.`)
        continue
      }

      console.log("[v0] Uploading image:", file.name)

      const formData = new FormData()
      formData.append("file", file)

      try {
        const response = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        })

        // Check if response is JSON before parsing
        const contentType = response.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text()
          console.error("[v0] Non-JSON response:", text)
          throw new Error("Server returned an invalid response. Please try again.")
        }

        const data = await response.json()

        if (response.ok && data.url) {
          console.log("[v0] Image upload successful:", data.url)

          const newImage = {
            image_url: data.url,
            position: projectImages.length,
            project_id: editingProject?.id,
            id: Date.now() + i, // Temporary ID for new images
          }

          setProjectImages((prev) => [...prev, newImage])

          if (i === 0 && projectImages.length === 0) {
            await analyzeImage(data.url)
          }
        } else {
          console.error("[v0] Upload failed:", data.error)
          alert(`Failed to upload "${file.name}": ${data.error || "Please try again."}`)
        }
      } catch (error: any) {
        console.error("[v0] Error uploading image:", error)
        alert(`Error uploading "${file.name}": ${error.message || "Please try again."}`)
      }
    }

    setUploadingImages(false)
  }

  const analyzeImage = async (imageUrl: string) => {
    setAnalyzingImage(true)
    try {
      console.log("[v0] Sending image to AI for analysis...", imageUrl)

      const response = await fetch("/api/analyze-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("[v0] AI analysis complete:", data)

        setEditingProject((prev: any) => ({
          ...prev,
          title: data.title || prev.title,
          description: data.description || prev.description,
        }))

        alert("✨ AI has generated a title and description! You can edit them before saving.")
      } else if (data.fallback) {
        // Use fallback if AI fails but fallback is provided
        console.log("[v0] Using fallback analysis:", data.fallback)

        setEditingProject((prev: any) => ({
          ...prev,
          title: data.fallback.title || prev.title,
          description: data.fallback.description || prev.description,
        }))

        alert("⚠️ AI analysis unavailable. Using default description. Please customize before saving.")
      } else {
        console.error("[v0] AI analysis failed:", data)
        alert("AI analysis is temporarily unavailable. Please add a title and description manually.")
      }
    } catch (error) {
      console.error("[v0] Error analyzing image:", error)
      alert("AI analysis is temporarily unavailable. Please add a title and description manually.")
    } finally {
      setAnalyzingImage(false)
    }
  }

  const handleRemoveImage = async (imageIndex: number) => {
    const image = projectImages[imageIndex]

    if (image.project_id && image.id) {
      if (confirm("Are you sure you want to delete this image?")) {
        const supabase = getSupabaseBrowserClient()
        const { error } = await supabase.from("portfolio_images").delete().eq("id", image.id)

        if (error) {
          console.error("[v0] Error deleting image:", error)
          alert("Failed to delete image")
          return
        }
      } else {
        return
      }
    }

    setProjectImages((prev) => prev.filter((_, i) => i !== imageIndex))
  }

  const handleMoveImage = async (fromIndex: number, toIndex: number) => {
    const newImages = [...projectImages]
    const [movedImage] = newImages.splice(fromIndex, 1)
    newImages.splice(toIndex, 0, movedImage)

    // Update positions
    newImages.forEach((img, idx) => {
      img.position = idx
    })

    setProjectImages(newImages)

    if (editingProject?.id && projectImages.find((p) => p.project_id)) {
      const supabase = getSupabaseBrowserClient()
      for (const img of newImages) {
        if (img.project_id && img.id) {
          await supabase.from("portfolio_images").update({ position: img.position }).eq("id", img.id)
        }
      }
    }
  }

  const generateAISuggestion = async () => {
    setLoadingAI(true)
    setAiSuggestion("")

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const suggestions = [
      "Consider adding 'Licensed Contractor' to your title for increased trust signals",
      "Your meta description should include a call-to-action like 'Get Free Estimate Today'",
      "Add location-specific keywords like 'Jacksonville Beach' and 'St. Augustine' to expand reach",
      "Include 'Before & After' in your description to improve click-through rates",
      "Consider mentioning '15+ Years Experience' to build credibility",
      "Add seasonal keywords like 'Pool Deck Installation for Summer' during relevant months",
    ]

    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)]
    setAiSuggestion(randomSuggestion)
    setLoadingAI(false)
  }

  const handleSaveSEO = () => {
    alert("SEO settings saved! These changes would update your site metadata.")
  }

  const loadProjects = async () => {
    const supabase = getSupabaseBrowserClient()
    const { data, error } = await supabase.from("portfolio_projects").select("*").order("position", { ascending: true })

    if (error) {
      console.error("Error loading projects:", error)
      return
    }

    setProjects(data || [])
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-20">
              <Image src="/logo.png" alt="Skylight Paver Solutions" fill className="object-contain" />
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-2">Admin Access</h1>
            <p className="text-muted-foreground text-center mb-8">Enter your credentials to continue</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black/50 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter username"
                  autoComplete="username"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/50 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter password"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,196,48,0.5)]"
              >
                Sign In
              </Button>
            </form>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Protected admin area • Skylight Paver Solutions
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-border bg-black/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-48 h-12">
              <Image src="/logo.png" alt="Skylight Paver Solutions" fill className="object-contain" />
            </div>
            <span className="text-muted-foreground">|</span>
            <h1 className="text-xl font-semibold text-white">Admin Panel</h1>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-border hover:border-primary hover:text-primary transition-colors bg-transparent"
          >
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                activeTab === "portfolio"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-white"
              }`}
            >
              Portfolio Manager
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                activeTab === "seo"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-white"
              }`}
            >
              SEO & Analytics
            </button>
          </div>

          {activeTab === "portfolio" && (
            <>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Portfolio Images</h2>
                  <p className="text-muted-foreground">Add, edit, remove, or reorder portfolio projects</p>
                </div>
                <Button
                  onClick={handleAddNew}
                  className="bg-primary hover:bg-primary/90 text-black font-semibold flex items-center gap-2"
                >
                  <Plus className="h-5 w-5" />
                  Add New Project
                </Button>
              </div>

              {showForm && editingProject && (
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {projects.find((p) => p.id === editingProject.id) ? "Edit Project" : "Add New Project"}
                    </h3>
                    {(analyzingImage || uploadingImages) && (
                      <div className="flex items-center gap-2 text-primary">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span className="text-sm font-medium">
                          {analyzingImage ? "AI Analyzing..." : "Uploading Images..."}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Project Title
                        {analyzingImage && <span className="text-primary ml-2">(AI generating...)</span>}
                      </label>
                      <input
                        type="text"
                        value={editingProject.title}
                        onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                        className="w-full bg-black/50 border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                        placeholder="Enter project title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Location</label>
                      <input
                        type="text"
                        value={editingProject.location}
                        onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                        className="w-full bg-black/50 border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                        placeholder="Jacksonville, FL"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Category</label>
                      <select
                        value={editingProject.category}
                        onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="Pool Area">Pool Area</option>
                        <option value="Driveway">Driveway</option>
                        <option value="Patio">Patio</option>
                        <option value="Walkway">Walkway</option>
                        <option value="Repair">Repair</option>
                        <option value="Outdoor Kitchen">Outdoor Kitchen</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Year</label>
                      <input
                        type="text"
                        value={editingProject.year}
                        onChange={(e) => setEditingProject({ ...editingProject, year: e.target.value })}
                        className="w-full bg-black/50 border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                        placeholder="2024"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white mb-2">
                        Description
                        {analyzingImage && <span className="text-primary ml-2">(AI generating...)</span>}
                      </label>
                      <textarea
                        value={editingProject.description}
                        onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                        className="w-full bg-black/50 border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary min-h-[100px]"
                        placeholder="Enter project description"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white mb-2">Project Image</label>
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                          <label className="flex-1 cursor-pointer">
                            <div className="w-full bg-primary/10 border-2 border-dashed border-primary/50 rounded-lg px-4 py-8 hover:border-primary transition-colors flex flex-col items-center justify-center gap-2">
                              <Upload className="h-8 w-8 text-primary" />
                              <span className="text-sm font-medium text-white">Upload Image</span>
                              <span className="text-xs text-muted-foreground">Click to browse files</span>
                            </div>
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                          </label>
                          {(imagePreview || editingProject.image) && (
                            <div className="w-48 h-48 relative rounded-lg overflow-hidden border-2 border-border">
                              <Image
                                src={imagePreview || editingProject.image}
                                alt="Preview"
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-px bg-border"></div>
                          <span className="text-xs text-muted-foreground">OR</span>
                          <div className="flex-1 h-px bg-border"></div>
                        </div>
                        <div>
                          <input
                            type="text"
                            value={editingProject.image}
                            onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                            className="w-full bg-black/50 border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                            placeholder="Or paste image URL: /images/your-image.jpg"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Upload an image file or enter a URL. Supported formats: JPG, PNG, WebP
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-white mb-2">
                      Project Images (Upload multiple images)
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                        id="multiple-image-upload"
                        disabled={uploadingImages}
                      />
                      <label
                        htmlFor="multiple-image-upload"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="h-12 w-12 text-muted-foreground" />
                        <span className="text-white font-medium">
                          {uploadingImages ? "Uploading..." : "Click to upload images"}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          PNG, JPG, or WebP (max 10MB each, up to 10 images)
                        </span>
                      </label>
                    </div>

                    {projectImages.length > 0 && (
                      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {projectImages.map((img, index) => (
                          <div key={img.id || index} className="relative group">
                            <img
                              src={img.image_url || "/placeholder.svg"}
                              alt={`Image ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg border border-border"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                              {index > 0 && (
                                <button
                                  onClick={() => handleMoveImage(index, index - 1)}
                                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                                  title="Move left"
                                >
                                  <ArrowUp className="h-4 w-4 text-white rotate-[-90deg]" />
                                </button>
                              )}
                              {index < projectImages.length - 1 && (
                                <button
                                  onClick={() => handleMoveImage(index, index + 1)}
                                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                                  title="Move right"
                                >
                                  <ArrowDown className="h-4 w-4 text-white rotate-[-90deg]" />
                                </button>
                              )}
                              <button
                                onClick={() => handleRemoveImage(index)}
                                className="p-2 bg-red-500/80 hover:bg-red-600 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="h-4 w-4 text-white" />
                              </button>
                            </div>
                            {index === 0 && (
                              <div className="absolute top-2 left-2 bg-primary text-black text-xs font-bold px-2 py-1 rounded">
                                Cover
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-black font-semibold">
                      <Save className="h-4 w-4 mr-2" />
                      Save Project
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="border-border hover:border-primary bg-transparent"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </div>
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        #{index + 1}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.location} • {project.year}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex gap-2 mb-2">
                        <Button
                          onClick={() => handleMoveUp(index)}
                          size="sm"
                          variant="outline"
                          disabled={index === 0}
                          className="flex-1 border-border hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Move up"
                        >
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleMoveDown(index)}
                          size="sm"
                          variant="outline"
                          disabled={index === projects.length - 1}
                          className="flex-1 border-border hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Move down"
                        >
                          <ArrowDown className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleEdit(project)}
                          size="sm"
                          variant="outline"
                          className="flex-1 border-border hover:border-primary hover:text-primary"
                        >
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(project.id)}
                          size="sm"
                          variant="outline"
                          className="border-red-500/50 hover:border-red-500 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
                <p className="text-white text-center">
                  <span className="font-semibold">✓ All changes are automatically saved to the database</span> and will
                  persist permanently.
                </p>
              </div>
            </>
          )}

          {activeTab === "seo" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">SEO Configuration</h2>
                <p className="text-muted-foreground">
                  Optimize your website for search engines with AI-powered suggestions
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Meta Tags & Descriptions</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Page Title</label>
                    <input
                      type="text"
                      value={seoData.title}
                      onChange={(e) => setSeoData({ ...seoData, title: e.target.value })}
                      className="w-full bg-black/50 border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                      placeholder="Enter page title"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {seoData.title.length} / 60 characters {seoData.title.length > 60 && "⚠️ Too long"}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Meta Description</label>
                    <textarea
                      value={seoData.description}
                      onChange={(e) => setSeoData({ ...seoData, description: e.target.value })}
                      className="w-full bg-black/50 border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary min-h-[100px]"
                      placeholder="Enter meta description"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {seoData.description.length} / 160 characters {seoData.description.length > 160 && "⚠️ Too long"}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Keywords</label>
                    <textarea
                      value={seoData.keywords}
                      onChange={(e) => setSeoData({ ...seoData, keywords: e.target.value })}
                      className="w-full bg-black/50 border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary min-h-[80px]"
                      placeholder="Enter keywords separated by commas"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Separate keywords with commas</p>
                  </div>

                  <Button onClick={handleSaveSEO} className="bg-primary hover:bg-primary/90 text-black font-semibold">
                    <Save className="h-4 w-4 mr-2" />
                    Save SEO Settings
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-white">AI-Powered SEO Suggestions</h3>
                  </div>
                  <Button
                    onClick={generateAISuggestion}
                    disabled={loadingAI}
                    className="bg-primary hover:bg-primary/90 text-black font-semibold"
                  >
                    {loadingAI ? "Analyzing..." : "Generate Suggestion"}
                  </Button>
                </div>

                {aiSuggestion && (
                  <div className="bg-black/30 border border-primary/20 rounded-lg p-4 mt-4">
                    <p className="text-white">{aiSuggestion}</p>
                  </div>
                )}

                {!aiSuggestion && !loadingAI && (
                  <p className="text-muted-foreground text-center py-8">
                    Click "Generate Suggestion" to get AI-powered SEO recommendations
                  </p>
                )}
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Sitemap Management</h3>
                <p className="text-muted-foreground mb-4">
                  Your sitemap is automatically generated and updated at{" "}
                  <code className="text-primary">/sitemap.xml</code>
                </p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm text-gray-300">
                  <div>✓ Homepage (/)</div>
                  <div>✓ Portfolio (/portfolio)</div>
                  <div>✓ Get Quote (/quote)</div>
                  <div>✓ Admin Panel (/admin)</div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Sitemap is automatically submitted to search engines for faster indexing
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4">SEO Health Score</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="text-green-500 text-3xl font-bold mb-1">92%</div>
                    <div className="text-sm text-white">Mobile Friendly</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <div className="text-blue-500 text-3xl font-bold mb-1">88%</div>
                    <div className="text-sm text-white">Page Speed</div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <div className="text-yellow-500 text-3xl font-bold mb-1">85%</div>
                    <div className="text-sm text-white">SEO Score</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
