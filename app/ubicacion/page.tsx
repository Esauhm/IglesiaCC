import { MapPin, Clock, Phone, Car } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Ubicacion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ubicación y Horarios</h1>
          <p className="text-xl max-w-3xl mx-auto">Encuentra nuestra iglesia y conoce nuestros horarios de culto</p>
        </div>
      </section>

      {/* Información de Ubicación */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Cómo Llegar</h2>

              <Card className="mb-6 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Dirección
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Calle Principal #123
                    <br />
                    Colonia Centro
                    <br />
                    Ciudad, Estado 12345
                  </p>
                  <Button className="bg-blue-700 hover:bg-blue-800">Ver en Google Maps</Button>
                </CardContent>
              </Card>

              <Card className="mb-6 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Estacionamiento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Contamos con estacionamiento gratuito para más de 100 vehículos. El estacionamiento está ubicado
                    detrás del edificio principal.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Teléfono: +1 (555) 123-4567
                    <br />
                    Email: info@iglesia.com
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mapa */}
            <div>
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Ubicación en el Mapa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Mapa Interactivo</p>
                      <p className="text-sm">Aquí se mostraría el mapa de Google Maps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios de Culto */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Horarios de Culto</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Culto Dominical</CardTitle>
                <CardDescription>Servicio Principal</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-900 mb-2">10:00 AM</p>
                <p className="text-gray-600 mb-4">Adoración, predicación y comunión. Incluye ministerio para niños.</p>
                <p className="text-sm text-gray-500">Duración: 1.5 horas aproximadamente</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Estudio Bíblico</CardTitle>
                <CardDescription>Miércoles</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-900 mb-2">7:00 PM</p>
                <p className="text-gray-600 mb-4">Estudio profundo de la Palabra de Dios en grupos pequeños.</p>
                <p className="text-sm text-gray-500">Duración: 1 hora</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Reunión de Oración</CardTitle>
                <CardDescription>Viernes</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-900 mb-2">6:00 PM</p>
                <p className="text-gray-600 mb-4">Tiempo de oración, intercesión y búsqueda de Dios.</p>
                <p className="text-sm text-gray-500">Duración: 1 hora</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios Especiales */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Servicios Especiales</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Culto de Jóvenes</CardTitle>
                <CardDescription>Sábados 6:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un servicio dinámico diseñado especialmente para jóvenes y adolescentes, con música contemporánea y
                  mensajes relevantes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Escuela Dominical</CardTitle>
                <CardDescription>Domingos 9:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Clases para todas las edades antes del culto principal. Niños, jóvenes y adultos tienen sus propios
                  grupos de estudio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
