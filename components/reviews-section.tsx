"use client"

import { Star, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-black via-secondary/50 to-black relative overflow-hidden">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(244,196,48,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">Customer Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-primary">Jacksonville</span> Homeowners
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Google Card */}
          <div className="bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Rating Display */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">5.0</span>
                      <span className="text-gray-400 text-lg">/ 5</span>
                    </div>
                    <p className="text-gray-400 text-sm">Google Rating</p>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Our commitment to quality craftsmanship has earned us a perfect 5-star rating from Jacksonville homeowners.
                </p>

                <a
                  href="https://g.page/r/CXKC-Ynt3_MAEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Read Our Reviews on Google
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Right - Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-black/30 rounded-xl p-4 border border-border/50">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Quality Guaranteed</h4>
                    <p className="text-gray-400 text-sm">Every project backed by our satisfaction guarantee</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-black/30 rounded-xl p-4 border border-border/50">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Licensed & Insured</h4>
                    <p className="text-gray-400 text-sm">Fully licensed contractor serving Jacksonville since 2018</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-black/30 rounded-xl p-4 border border-border/50">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Free Estimates</h4>
                    <p className="text-gray-400 text-sm">No-obligation quotes for all paver projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://g.page/r/CXKC-Ynt3_MAEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Leave Us a Review
            </a>
            <a
              href="tel:9044373853"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              <Phone className="w-5 h-5" />
              Call (904) 437-3853
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
