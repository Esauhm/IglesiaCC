import { MapPin, Clock, Car, Phone, Mail, Facebook, Instagram, Youtube, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Ubicacion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative h-[590px] text-white">
        {/* Imagen de fondo */}
        <img
          src="/imagenes/iglesia.png" // 🔁 Reemplaza con tu imagen deseada
          alt="Ubicación"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Ubicación y Horarios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Encuentra nuestra iglesia y conoce nuestros horarios de culto
          </p>
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
                    Sobre 23 y 25 avenida
                    <br />
                    Santa Ana, El Salvador
                  </p>
                  <a
                    href="https://maps.app.goo.gl/mNn5YpthVMp8U1hGA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-700 hover:bg-blue-800">Ver en Google Maps</Button>
                  </a>
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
                    Contamos con estacionamiento. El estacionamiento está ubicado
                    justo delante del edificio principal
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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1750633462342!6m8!1m7!1sCAoSFENJSE0wb2dLRUlDQWdJRDkxZElq!2m2!1d13.98283193992888!2d-89.5599594204686!3f137.74288034162606!4f8.356730603579521!5f0.7820865974627469"
                    width="100%"
                    height="384"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>



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
                <CardDescription>Domingos</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-900 mb-2">9:00 AM</p>
                <p className="text-gray-600 mb-4">Culto general, contamos con escuela biblica para niños.</p>
                <p className="text-sm text-gray-500">Duración: 2 horas</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Culto de Departamentos</CardTitle>
                <CardDescription>Martes</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-900 mb-2">6:00 PM</p>
                <p className="text-gray-600 mb-4">Enseñanza bíblica por edades.</p>
                <p className="text-sm text-gray-500">Duración: 1:30 horas</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Culto General</CardTitle>
                <CardDescription>Jueves</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-900 mb-2">6:00 PM</p>
                <p className="text-gray-600 mb-4">Servicio de enseñanza de doctrinas de la palabra de Dios.</p>
                <p className="text-sm text-gray-500">Duración: 1.30 horas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


  
    </div>
  )
}
