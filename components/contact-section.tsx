"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  })
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">{t.contactTitle}</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t.contactSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">{t.contact}</h3>
                <div className="space-y-6">
                  <a
                    href="tel:9044373853"
                    className="flex items-center gap-4 text-lg text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.callUsNow}</p>
                      <p className="text-white font-semibold">(904) 437-3853</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-lg text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.serving}</p>
                      <p className="text-white font-semibold">Jacksonville & Surrounding FL Areas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6">
                <p className="text-center text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">{t.licensedInsured}</span>
                  <br />
                  {t.satisfactionGuaranteed}
                  <br />
                  {t.localExperts}
                </p>
              </div>

              <a href="tel:9044373853" className="block">
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xl py-8 font-semibold shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 animate-pulse-glow"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  {t.callUsNow}
                </Button>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder={t.fullName}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder={t.phone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder={t.propertyAddress}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-background/50 border border-border rounded-md px-3 py-2 text-white"
                      required
                    >
                      <option value="">{t.selectProject}</option>
                      <option value="driveway">{t.driveways}</option>
                      <option value="patio">{t.patios}</option>
                      <option value="pool">{t.poolDecks}</option>
                      <option value="walkway">{t.walkways}</option>
                      <option value="outdoor-kitchen">{t.outdoorKitchens}</option>
                      <option value="repair">{t.repair}</option>
                      <option value="pressure-washing">{t.pressureWashing}</option>
                    </select>
                  </div>
                  <div>
                    <Textarea
                      placeholder={t.message}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 border-border text-white placeholder:text-muted-foreground min-h-32"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-6 shadow-lg hover:shadow-primary/20 transition-all hover:scale-105"
                  >
                    {t.submit}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
