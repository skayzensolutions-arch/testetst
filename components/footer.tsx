import Image from "next/image"
import { Instagram, Phone, MapPin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem-jxYKH0Sj1Ex8XGcQHz1DswMTp0jx5A.png"
              alt="Skylight Paver Solutions"
              width={200}
              height={67}
              className="h-12 w-auto mb-4"
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
                <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
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
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (904) 437-3853
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Jacksonville, FL
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/skylightpaver/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61583859682007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-muted-foreground mb-2">
            Licensed & Insured | Satisfaction Guaranteed | Local Florida Experts
          </p>
          <p className="text-muted-foreground/70 text-sm">
            © {new Date().getFullYear()} Skylight Paver Solutions LLC. All rights reserved. | Created by{" "}
            <a
              href="https://skayzen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              skayzen.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
