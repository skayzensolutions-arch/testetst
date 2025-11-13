"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"

export function MaintenanceGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [pincode, setPincode] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if user is already authenticated
    const auth = sessionStorage.getItem("maintenance_auth")
    setIsAuthenticated(auth === "true")
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (pincode === "455") {
      sessionStorage.setItem("maintenance_auth", "true")
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Incorrect pincode. Please try again.")
      setPincode("")
    }
  }

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  // Show maintenance screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="space-y-4">
            <Image src="/logo.png" alt="Skylight Paver Solutions" width={200} height={80} className="mx-auto" />
            <h1 className="text-4xl font-bold text-white">Under Maintenance</h1>
            <p className="text-gray-400 text-lg">
              We're currently updating our website to serve you better. Please check back soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-8">
            <div>
              <input
                type="password"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter access code"
                className="w-full px-4 py-3 bg-secondary/30 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                autoComplete="off"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Access Site
            </button>
          </form>

          <div className="pt-8 text-gray-500 text-sm">
            <p>Expected to be back online soon.</p>
            <p className="mt-2">
              Questions? Call us at{" "}
              <a href="tel:9044373853" className="text-primary hover:underline">
                (904) 437-3853
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Show normal site if authenticated
  return <>{children}</>
}
