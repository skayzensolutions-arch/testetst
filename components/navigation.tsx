"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"

const navLinks = [
  { name: "Services", href: "/#services", key: "services" },
  { name: "Portfolio", href: "/portfolio", key: "portfolio" },
  { name: "Why Us", href: "/#why-us", key: "whyUs" },
  { name: "Contact", href: "/#contact", key: "contact" },
]

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const handleLanguageChange = (code: string) => {
    setLanguage(code as Language)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-primary/10 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem-jxYKH0Sj1Ex8XGcQHz1DswMTp0jx5A.png"
                alt="Skylight Paver Solutions"
                width={240}
                height={80}
                className="h-14 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) =>
                link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/80 hover:text-primary font-medium transition-all duration-300 hover:scale-110 relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {t[link.key as keyof typeof t]}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/80 hover:text-primary font-medium transition-all duration-300 hover:scale-110 relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {t[link.key as keyof typeof t]}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                ),
              )}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full h-10 w-10 group"
                  >
                    <Globe className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-[10px] flex items-center justify-center font-bold">
                      {languages.find((l) => l.code === language)?.flag}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-black/95 backdrop-blur-xl border-primary/20 text-white min-w-[160px]"
                >
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="cursor-pointer hover:bg-primary/20 focus:bg-primary/20 transition-colors duration-200"
                    >
                      <span className="mr-2 text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                      {language === lang.code && <span className="ml-auto text-primary">✓</span>}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Call Button - Desktop */}
              <a href="tel:9044373853" className="hidden md:block">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 animate-pulse-glow"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (904) 437-3853
                </Button>
              </a>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-primary/20 transition-all duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-primary text-lg font-medium py-3 transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t[link.key as keyof typeof t]}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-primary text-lg font-medium py-3 transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t[link.key as keyof typeof t]}
                </a>
              ),
            )}
            <a href="tel:9044373853" className="mt-4" onClick={() => setIsMenuOpen(false)}>
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.call} (904) 437-3853
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}
