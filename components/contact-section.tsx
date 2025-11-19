"use client"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from 'lucide-react'
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

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
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xl py-8 font-semibold shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 animate-pulse-glow inline-flex items-center justify-center gap-3"
                >
                  <Phone className="h-6 w-6" />
                  {t.callUsNow}
                </Button>
              </a>
            </div>

            <form 
              action="https://formsubmit.co/lopes@skylightpaver.com" 
              method="POST" 
              className="space-y-6"
              onSubmit={(e) => {
                console.log("[v0] Form submitting to FormSubmit.co")
                // Allow default form submission to proceed
              }}
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form - Skylight Paver Solutions" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://skylightpaver.com/?submitted=true" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting Skylight Paver Solutions! We'll get back to you within 24 hours."
              />

              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder={t.fullName}
                      className="w-full bg-background/50 border border-border text-white placeholder:text-muted-foreground rounded-md px-4 py-3"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder={t.email}
                      className="w-full bg-background/50 border border-border text-white placeholder:text-muted-foreground rounded-md px-4 py-3"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t.phone}
                      className="w-full bg-background/50 border border-border text-white placeholder:text-muted-foreground rounded-md px-4 py-3"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Property Address (Optional)"
                      className="w-full bg-background/50 border border-border text-white placeholder:text-muted-foreground rounded-md px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-white text-sm font-medium mb-2">
                      {t.projectType || "Project Type"}
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-secondary border border-border text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
                      style={{ colorScheme: "dark" }}
                      required
                    >
                      <option value="" className="bg-secondary text-white">
                        {t.selectProject}
                      </option>
                      <option value="driveway" className="bg-secondary text-white">
                        {t.driveways}
                      </option>
                      <option value="patio" className="bg-secondary text-white">
                        {t.patios}
                      </option>
                      <option value="pool" className="bg-secondary text-white">
                        {t.poolDecks}
                      </option>
                      <option value="walkway" className="bg-secondary text-white">
                        {t.walkways}
                      </option>
                      <option value="outdoor-kitchen" className="bg-secondary text-white">
                        {t.outdoorKitchens}
                      </option>
                      <option value="repair" className="bg-secondary text-white">
                        {t.repair}
                      </option>
                      <option value="pressure-washing" className="bg-secondary text-white">
                        {t.pressureWashing}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                      {t.projectDetails || "Project Details"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder={t.message}
                      className="w-full bg-background/50 border border-border text-white placeholder:text-muted-foreground rounded-md px-4 py-3 min-h-32"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-6 rounded-md shadow-lg hover:shadow-primary/20 transition-all hover:scale-105"
                  >
                    {t.submit}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
