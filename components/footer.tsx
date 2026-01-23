"use client"

import Image from "next/image"
import { Instagram, Phone, MapPin, Facebook, Mail } from "lucide-react"

export function Footer() {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      ;(window as any).gtag_report_conversion("tel:9044373853")
    }
  }

  return (
    <footer
      className="bg-black text-white py-12 border-t border-primary/20"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt="Skylight Paver Solutions"
              width={200}
              height={67}
              className="h-12 w-auto mb-4"
              priority={false}
              quality={85}
            />
            <p className="text-muted-foreground leading-relaxed">
              Expert paver solutions for driveways, patios, pool areas, and more. Serving Jacksonville & surrounding
              Florida areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#services"
                  className="text-gray-300 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-300 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-300 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/paver-installation-jacksonville-fl"
                  className="text-gray-300 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Paver Installation Jacksonville
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:9044373853"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors underline-offset-4 hover:underline"
                aria-label="Call us at 904-437-3853"
                onClick={handlePhoneClick}
              >
                <Phone className="h-4 w-4" />
                (904) 437-3853
              </a>
              <a
                href="mailto:lopes@skylightpaver.com"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors underline-offset-4 hover:underline"
                aria-label="Email us at lopes@skylightpaver.com"
              >
                <Mail className="h-4 w-4" />
                lopes@skylightpaver.com
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                Jacksonville, FL
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/skylightpaver/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-300 hover:scale-110 underline-offset-4 hover:underline"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61583859682007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-300 hover:scale-110 underline-offset-4 hover:underline"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://g.page/r/CXKC-Ynt3_MAEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-300 hover:scale-110 underline-offset-4 hover:underline"
                  aria-label="Review us on Google"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-gray-300 mb-2">Licensed & Insured | Satisfaction Guaranteed | Local Florida Experts</p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Skylight Paver Solutions LLC. All rights reserved. | Created by{" "}
            <a
              href="https://skayzen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
            >
              skayzen.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
