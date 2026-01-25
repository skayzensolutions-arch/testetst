"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, ChevronDown, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const services = [
  { name: "Patio Installation", href: "/services" },
  { name: "Driveway Pavers", href: "/services" },
  { name: "Pool Decks", href: "/services" },
  { name: "Outdoor Kitchens", href: "/services" },
  { name: "Walkways", href: "/services" },
  { name: "Fire Pits", href: "/services" },
  { name: "Retaining Walls", href: "/services" },
  { name: "Paver Repair", href: "/services" },
]

const navLinks = [
  { name: "Home", href: "/", key: "home" },
  { name: "About", href: "/about", key: "about" },
  { name: "Services", href: "/services", key: "services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio", key: "portfolio" },
  { name: "Reviews", href: "/#reviews", key: "reviews" },
  { name: "Contact", href: "/contact", key: "contact" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      ;(window as any).gtag_report_conversion("tel:9044373853")
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div 
        className={`bg-black border-b border-white/10 transition-all duration-500 ease-out overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left - Location */}
            <div className="hidden md:flex items-center gap-2 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Jacksonville & Northeast Florida</span>
            </div>
            
            {/* Center - Contact Info */}
            <div className="flex items-center gap-6">
              <a 
                href="tel:9044373853" 
                className="flex items-center gap-2 text-white font-medium hover:text-primary transition-colors" 
                onClick={handlePhoneClick}
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                (904) 437-3853
              </a>
              <span className="hidden md:block text-white/20">|</span>
              <a 
                href="mailto:lopes@skylightpaver.com" 
                className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                lopes@skylightpaver.com
              </a>
            </div>

            {/* Right - Social Links */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61583859682007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/skylightpaver/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`relative transition-all duration-500 ${
          isScrolled 
            ? "bg-black/90 backdrop-blur-xl shadow-2xl shadow-black/50" 
            : "bg-gradient-to-b from-black/95 via-black/90 to-black/80 backdrop-blur-md"
        }`}
        role="banner"
      >
        {/* Bottom gold accent border */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-60" : "opacity-30"}`} />
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-20" : "h-24 md:h-28"}`}>
            {/* Logo - Larger and more prominent */}
            <Link href="/" className="flex-shrink-0 relative group">
              <Image
                src="/logo.png"
                alt="Skylight Paver Solutions"
                width={400}
                height={133}
                className={`w-auto transition-all duration-500 ${isScrolled ? "h-14 md:h-16" : "h-16 md:h-20 lg:h-24"}`}
                priority={true}
                quality={95}
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300 -m-2" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <div key={link.name} className="relative" ref={link.hasDropdown ? dropdownRef : undefined}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                          servicesOpen 
                            ? "text-primary bg-primary/10" 
                            : "text-gray-300 hover:text-primary hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {/* Services Dropdown */}
                      <div 
                        className={`absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-primary/20 rounded-xl shadow-2xl shadow-black/50 transition-all duration-300 origin-top ${
                          servicesOpen 
                            ? "opacity-100 scale-100 translate-y-0" 
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="p-2">
                          {services.map((service, index) => (
                            <a
                              key={service.name}
                              href={service.href}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                              style={{ transitionDelay: `${index * 30}ms` }}
                            >
                              <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-3" />
                              {service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                      <Link
                        href={link.href}
                        className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 rounded-lg hover:bg-white/5 group"
                      >
                        {link.name}
                        <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 rounded-lg hover:bg-white/5 group"
                      >
                        {link.name}
                        <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                      </a>
                    )
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side - CTA */}
            <div className="flex items-center gap-3">
              {/* Get a Free Quote Button - Desktop */}
              <Link href="/quote" className="hidden lg:block">
                <Button
                  className="bg-primary text-black font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 px-6"
                >
                  Get a Free Quote
                </Button>
              </Link>

              {/* Phone Button - Tablet */}
              <a href="tel:9044373853" className="hidden md:block lg:hidden" onClick={handlePhoneClick}>
                <Button
                  variant="outline"
                  className="bg-transparent border-primary text-primary hover:bg-primary hover:text-black font-semibold transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
                  <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)} 
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-screen bg-black border-l border-primary/20 shadow-2xl transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Image
              src="/logo.png"
              alt="Skylight Paver Solutions"
              width={160}
              height={53}
              className="h-10 w-auto"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Menu Content */}
          <nav className="p-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                        mobileServicesOpen ? "text-primary bg-primary/10" : "text-white hover:bg-white/5"
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.name}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="pl-4 py-2 space-y-1">
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            onClick={() => {
                              setIsMenuOpen(false)
                              setMobileServicesOpen(false)
                            }}
                            className="flex items-center px-4 py-2 text-gray-400 hover:text-primary transition-colors rounded-lg"
                          >
                            <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-3" />
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-white hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-white hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black/50 backdrop-blur-sm space-y-3">
            <a
              href="tel:9044373853"
              onClick={() => {
                handlePhoneClick()
                setIsMenuOpen(false)
              }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              (904) 437-3853
            </a>
            <Link
              href="/quote"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
