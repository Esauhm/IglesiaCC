"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Church, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navigation = [
    { name: "Nosotros", href: "/" },
    { name: "Radio", href: "/radio" },
    { name: "Fundación", href: "/otros/hogar" },
    { name: "Colegio", href: "/otros/colegio" },
    { name: "Redes Sociales", href: "/contacto" },
  ]

  const otrosItems = [
    { name: "Ubicación", href: "/ubicacion" },
    { name: "Células de Crecimiento", href: "/celulas" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 no-underline text-white hover:text-blue-200">
            <img
              src="/imagenes/logo1.png" 
              alt="Logo MCC"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold">Ministerio Centro Cristiano</span>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-100 hover:bg-white/10 px-3 py-1 rounded transition-colors no-underline"
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown para Otros */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-white hover:text-gray-100 hover:bg-white/10 px-3 py-1 rounded transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Otros</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {otrosItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-white-50 hover:text-white-700 transition-colors no-underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-white-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-white hover:text-gray-200 hover:bg-white/10 rounded transition-colors duration-200 no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Otros submenu */}
              <div className="py-2 px-4">
                <span className="text-white font-medium">Otros:</span>
                {otrosItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-1 px-2 mt-1 text-white hover:text-gray-200 hover:bg-white/10 rounded transition-colors duration-200 no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}



      </div>
    </header>

  )
}
