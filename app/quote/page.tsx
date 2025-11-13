import { Phone, MapPin, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function QuotePage() {
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
                    <button
                      type="button"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xl py-8 font-semibold shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 animate-pulse-glow"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      Call Us Now
                    </button>
                  </a>
                </div>

                <div className="space-y-6">
                  <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                    <form action="https://formsubmit.co/lopes@skylightpaver.com" method="POST" className="space-y-4">
                      {/* FormSubmit Configuration */}
                      <input type="hidden" name="_subject" value="New Quote Request - Skylight Paver Solutions" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <input
                        type="hidden"
                        name="_autoresponse"
                        value="Thank you for contacting Skylight Paver Solutions! We'll get back to you within 24 hours."
                      />

                      {/* Form Fields */}
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          className="w-full bg-background/50 border border-border text-white placeholder:text-muted-foreground rounded-md px-4 py-3"
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="w-full bg-background/50 border border-border text-white placeholder:text-muted-foreground rounded-md px-4 py-3"
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
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
                          Project Type
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="w-full bg-white text-black border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          <option value="">Select a project type</option>
                          <option value="Driveway">Driveway</option>
                          <option value="Patio">Patio</option>
                          <option value="Pool Area">Pool Area</option>
                          <option value="Walkway/Sidewalk">Walkway/Sidewalk</option>
                          <option value="Outdoor Kitchen">Outdoor Kitchen</option>
                          <option value="Repair">Repair</option>
                          <option value="Pressure Washing & Sealing">Pressure Washing & Sealing</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                          Project Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project..."
                          rows={4}
                          className="w-full bg-background/50 border border-border text-white placeholder:text-muted-foreground rounded-md px-4 py-3"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-6 rounded-md shadow-lg hover:shadow-primary/20 transition-all hover:scale-105"
                      >
                        Request Your Free Quote
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
