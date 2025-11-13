"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Eye, EyeOff, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem("admin_authenticated")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Password is: 123
    if (password === "123") {
      setIsAuthenticated(true)
      sessionStorage.setItem("admin_authenticated", "true")
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("admin_authenticated")
    setPassword("")
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
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-20">
              <Image src="/logo.png" alt="Skylight Paver Solutions" fill className="object-contain" />
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-2">Admin Access</h1>
            <p className="text-muted-foreground text-center mb-8">Enter your password to continue</p>

            <form onSubmit={handleLogin} className="space-y-6">
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

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-border bg-black/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-48 h-12">
              <Image src="/logo.png" alt="Skylight Paver Solutions" fill className="object-contain" />
            </div>
            <span className="text-muted-foreground">|</span>
            <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Welcome Back</h2>
            <p className="text-muted-foreground text-lg">Manage your business content and settings from here.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-muted-foreground font-medium">Total Projects</h3>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-white">15</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-muted-foreground font-medium">Pending Quotes</h3>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-white">8</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-muted-foreground font-medium">Active Jobs</h3>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-white">3</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center gap-4 p-4 bg-black/50 border border-border rounded-lg hover:border-primary/50 hover:bg-black/70 transition-all duration-300 text-left group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                    Add New Project
                  </h4>
                  <p className="text-sm text-muted-foreground">Upload photos and details</p>
                </div>
              </button>

              <button className="flex items-center gap-4 p-4 bg-black/50 border border-border rounded-lg hover:border-primary/50 hover:bg-black/70 transition-all duration-300 text-left group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                    View Quote Requests
                  </h4>
                  <p className="text-sm text-muted-foreground">Review customer inquiries</p>
                </div>
              </button>

              <button className="flex items-center gap-4 p-4 bg-black/50 border border-border rounded-lg hover:border-primary/50 hover:bg-black/70 transition-all duration-300 text-left group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                    View Analytics
                  </h4>
                  <p className="text-sm text-muted-foreground">Site traffic and performance</p>
                </div>
              </button>

              <button className="flex items-center gap-4 p-4 bg-black/50 border border-border rounded-lg hover:border-primary/50 hover:bg-black/70 transition-all duration-300 text-left group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-primary transition-colors">Site Settings</h4>
                  <p className="text-sm text-muted-foreground">Update content and preferences</p>
                </div>
              </button>
            </div>
          </div>

          {/* Info Notice */}
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-white text-center">
              <span className="font-semibold">Admin Dashboard</span> - Full management features coming soon. This area
              will allow you to manage projects, quotes, analytics, and site content.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
