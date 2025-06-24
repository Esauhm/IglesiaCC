import { Home, Heart, MapPin, Clock, Car, Users, Shield, Stethoscope, Utensils } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HogarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">


      <section className="relative h-[590px] text-white">
        {/* Imagen de fondo */}
        <img
          src="/imagenes/fundacion.jpg" // 🔁 Reemplaza con tu imagen deseada
          alt="Ubicación"
          className="absolute inset-0 w-full h-full object-cover"
        />

      </section>

      {/* Call to Action - Apadrina un Pastor */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Apadrina un Pastor</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Ayúdanos a brindar apoyo digno a pastores que han entregado su vida al servicio del Reino.
            Con tu aporte, podemos cubrir necesidades básicas y mostrar el amor de Dios en acción.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white-900">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6" />
              <span className="text-lg font-medium"> +503 7894-2707</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6" />
              <span className="text-lg font-medium">+503 7894-1351</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <HeartHandshake className="w-10 h-10 text-white-700 animate-pulse" />
          </div>
        </div>
      </section>



      {/* Información Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-blue-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Nuestro Compromiso</h2>
                  <p className="text-gray-600 mb-6 text-lg text-justify">
                    El Hogar de Protección al Pastor Anciano es un ministerio especial que nace del corazón de nuestra
                    iglesia para honrar y cuidar a aquellos pastores que han dedicado su vida entera al servicio de Dios
                    y su pueblo. Creemos que merecen vivir sus años dorados con dignidad, amor y el cuidado que tanto
                    dieron.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Heart className="h-6 w-6 text-blue-700" />
                      <span className="text-gray-700 font-medium">Cuidado con amor y respeto</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-blue-800" />
                      <span className="text-gray-700 font-medium">Ambiente seguro y protegido</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-blue-700" />
                      <span className="text-gray-700 font-medium">Compañía y comunión cristiana</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 min-h-[400px] lg:min-h-full flex items-center justify-center">
                  <div className="text-center text-gray-500 w-full h-full">
                    <img
                      src="/imagenes/fundacion2.jpeg"
                      alt="Ubicación"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Servicios que Ofrecemos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Atención Médica</CardTitle>
                <CardDescription>Cuidado profesional de la salud</CardDescription>
              </CardHeader>

            </Card>

            <Card className="bg-white border-blue-300 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Utensils className="h-12 w-12 text-blue-800 mb-2" />
                <CardTitle className="text-blue-950">Alimentación</CardTitle>
                <CardDescription>Nutrición balanceada y saludable</CardDescription>
              </CardHeader>

            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Cuidado Pastoral</CardTitle>
                <CardDescription>Atención espiritual continua</CardDescription>
              </CardHeader>

            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Actividades Sociales</CardTitle>
                <CardDescription>Vida comunitaria activa</CardDescription>
              </CardHeader>

            </Card>

            <Card className="bg-white border-blue-300 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-blue-800 mb-2" />
                <CardTitle className="text-blue-950">Alojamiento</CardTitle>
                <CardDescription>Habitaciones cómodas y privadas</CardDescription>
              </CardHeader>

            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Seguridad</CardTitle>
                <CardDescription>Protección las 24 horas</CardDescription>
              </CardHeader>

            </Card>
          </div>
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
                    Hogar de Protección al Pastor Anciano
                    <br />
                    W9XP+X2, San Sebastián Salitrillo, El Salvador
                  </p>
                  <a
                    href="https://maps.app.goo.gl/V4eNLzaXzLAHxk896"
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
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d297.78480007046704!2d-89.61486815742968!3d13.949806899325022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e95845628a77%3A0xef2babd4713a742d!2sHogar%20de%20Protecci%C3%B3n%20al%20Pastor%20Anciano!5e1!3m2!1ses-419!2sgt!4v1750723646000!5m2!1ses-419!2sgt"
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

      {/* Testimonios
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Testimonios</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Pastor Emérito José Martínez</CardTitle>
                <CardDescription>Residente desde 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Después de 45 años de ministerio, encontré en este hogar no solo cuidado físico, sino una familia que
                  valora mi experiencia y me permite seguir sirviendo a Dios de diferentes maneras. Aquí he encontrado
                  paz y propósito en esta etapa de mi vida."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-100 to-white border-blue-300">
              <CardHeader>
                <CardTitle className="text-blue-950">Familia del Pastor Roberto Silva</CardTitle>
                <CardDescription>Familia de residente</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Como familia, estamos profundamente agradecidos por el amor y cuidado que recibe nuestro padre. El
                  personal no solo cuida su salud física, sino que honra su legado ministerial y lo trata con el respeto
                  que merece un siervo de Dios."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>*/}



      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Síguenos en Facebook</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Mantente al tanto de las actividades, eventos y noticias del Hogar a través de nuestra página oficial en Facebook.
          </p>

          <a
            href="https://www.facebook.com/p/Fundaci%C3%B3n-Esp%C3%ADritu-Santo-Oficial-61558676394703/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 mr-2"
            >
              <path d="M22 12a10 10 0 10-11.63 9.87v-7H8v-2.9h2.37V9.43c0-2.34 1.4-3.63 3.54-3.63 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.73-1.53 1.48v1.78h2.61l-.42 2.9h-2.19v7A10 10 0 0022 12z" />
            </svg>
            Visítanos en Facebook
          </a>
        </div>
      </section>




    </div>
  )
}
