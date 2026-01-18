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
              <div className="flex items-center gap-4 mt-4">
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
