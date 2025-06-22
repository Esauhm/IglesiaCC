import { Church, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8" />
              <span className="text-xl font-bold">Iglesia Cristiana</span>
            </div>
            <p className="text-blue-200 mb-4">
              Una comunidad de fe dedicada a servir a Dios y a nuestra comunidad con amor y esperanza.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-blue-200">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@iglesia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Calle Principal</span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <div className="space-y-2 text-blue-200">
              <div>
                <p className="font-medium">Domingo</p>
                <p className="text-sm">10:00 AM - Culto</p>
              </div>
              <div>
                <p className="font-medium">Miércoles</p>
                <p className="text-sm">7:00 PM - Estudio</p>
              </div>
              <div>
                <p className="font-medium">Viernes</p>
                <p className="text-sm">6:00 PM - Oración</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Iglesia Cristiana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
