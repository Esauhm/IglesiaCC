"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Iglesia", href: "/" },
    { name: "Radio", href: "/radio" },
    { name: "Fundación", href: "/otros/hogar" },
    { name: "Colegio", href: "/otros/colegio" },
    { name: "Redes Sociales", href: "/contacto" },
    { name: "Ubicación", href: "/ubicacion" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y Título */}
          <Link href="/" className="flex items-center space-x-2 no-underline text-white hover:text-blue-200">
            <img
              src="/imagenes/logo1.png"
              alt="Logo MCC"
              className="h-8 w-8 object-contain"
            />
            <>
              <span className="text-xl font-bold md:hidden">Ministerio CC</span>
              <span className="text-xl font-bold hidden md:block">Ministerio Centro Cristiano</span>
            </>
          </Link>

          {/* Navegación Escritorio */}
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
          </nav>

          {/* Botón Menú Móvil */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-white-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Menú Móvil Expandido */}
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
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
