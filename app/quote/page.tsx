"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, CheckCircle } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted with data:", formData)
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await sendQuoteEmail(formData)
      console.log("[v0] Send email result:", result)

      if (result.success) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          service: "",
          message: "",
        })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Error submitting quote:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-20">
        <section className="py-24 bg-gradient-to-b from-black to-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Get Your Free Estimate</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We'll bring your vision to life — fast, clean, and affordable
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-semibold mb-6 text-white">Contact Information</h2>
                    <div className="space-y-6">
                      <a
                        href="tel:9044373853"
                        className="flex items-center gap-4 text-lg text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Call us now</p>
                          <p className="text-white font-semibold">(904) 437-3853</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 text-lg text-muted-foreground">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Serving</p>
                          <p className="text-white font-semibold">Jacksonville & Surrounding FL Areas</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">What to Expect</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">Response within 24 hours</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">Free on-site consultation</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">Detailed written estimate</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">No obligation or pressure</p>
                      </div>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6">
                    <p className="text-center text-muted-foreground leading-relaxed">
                      <span className="text-primary font-semibold">Licensed & Insured</span>
                      <br />
                      Satisfaction Guaranteed
                      <br />
                      Local Florida Experts
                    </p>
                  </div>

                  <a href="tel:9044373853" className="block">
                    <Button
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xl py-8 font-semibold shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 animate-pulse-glow"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      Call Us Now
                    </Button>
                  </a>
                </div>

                <form
                  action="https://formsubmit.co/lopes@skylightpaver.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Quote Request - Skylight Paver" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
                        <p className="text-primary font-semibold">
                          ✓ Quote request sent successfully! We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg">
                        <p className="text-red-500 font-semibold">
                          Failed to send quote request. Please call us directly at (904) 437-3853.
                        </p>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="text"
                          name="address"
                          placeholder="Property Address (Optional)"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-white text-black border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          <option value="">Select a project type</option>
                          <option value="driveway">Driveway</option>
                          <option value="patio">Patio</option>
                          <option value="pool">Pool Area</option>
                          <option value="walkway">Walkway/Sidewalk</option>
                          <option value="outdoor-kitchen">Outdoor Kitchen</option>
                          <option value="repair">Repair</option>
                          <option value="pressure-washing">Pressure Washing & Sealing</option>
                        </select>
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground min-h-32"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-6 shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Request Your Free Quote"}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function sendQuoteEmail(formData) {
  // Implementation of sendQuoteEmail function
}
