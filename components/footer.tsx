import { Church, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

const TikTokIcon = () => (
  <svg
    className="h-6 w-6 text-gray-400 hover:text-black transition-colors"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.75 2h3a6 6 0 0 0 6 6v3a9 9 0 1 1-9-9z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-10 text-center">
        {/* Logo y nombre */}
        <div className="flex justify-center items-center space-x-2 mb-4">
          <img
              src="/imagenes/logo1.png" 
              alt="Logo MCC"
              className="h-8 w-8 object-contain"
            />
          <span className="text-xl font-bold">Ministerio Centro Cristiano</span>
        </div>

        {/* Descripción */}
        <p className="max-w-xl mx-auto text-gray-400 mb-6">
          Una comunidad de servicio y devoción, que desea agradar al Espíritu Santo.
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-6">
          <Link href="https://www.facebook.com/share/1NpscNMMe4/" className="text-gray-400 hover:text-blue-700 transition-colors" target="_blank">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="https://www.instagram.com/mcc_sv?igsh=MWk3NTJpZ2hpeDR5eA==" className="text-gray-400 hover:text-pink-600 transition-colors" target="_blank">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://youtube.com/@ministeriocentrocristianosv?si=hodW-qfRr7WBmM7O" className="text-gray-400 hover:text-red-600 transition-colors" target="_blank">
            <Youtube className="h-6 w-6" />
          </Link>
          <Link href="https://www.tiktok.com/@mccsantaana?_t=ZM-8xQmMvCEbnM&_r=1" className="text-gray-400 transition-colors" target="_blank">
            <TikTokIcon />
          </Link>
        </div>

        {/* Marca de agua */}
        <div className="mt-6 text-sm text-black-500">
          &copy; {new Date().getFullYear()} Iglesia Centro Cristiano. Todos los derechos reservados.
        </div>
      
      </div>
    </footer>
  )
}