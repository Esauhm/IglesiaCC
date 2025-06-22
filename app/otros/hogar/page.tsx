import { Home, Heart, Users, Shield, Stethoscope, Utensils } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HogarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Home className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hogar de Protección al Pastor Anciano</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Un refugio de amor y cuidado para quienes dedicaron su vida al servicio de Dios
          </p>
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
                  <p className="text-gray-600 mb-6 text-lg">
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
                  <Button className="bg-blue-700 hover:bg-blue-800">Conocer Más</Button>
                </div>
                <div className="bg-gray-200 min-h-[400px] lg:min-h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Home className="h-20 w-20 mx-auto mb-4" />
                    <p className="text-lg">Imagen del Hogar</p>
                    <p className="text-sm">Instalaciones cómodas y acogedoras</p>
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
              <CardContent>
                <p className="text-gray-600">
                  Contamos con personal médico especializado en geriatría y enfermeras las 24 horas para garantizar el
                  bienestar físico de nuestros residentes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-300 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Utensils className="h-12 w-12 text-blue-800 mb-2" />
                <CardTitle className="text-blue-950">Alimentación</CardTitle>
                <CardDescription>Nutrición balanceada y saludable</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ofrecemos tres comidas diarias nutritivas y balanceadas, preparadas con amor y considerando las
                  necesidades dietéticas especiales de cada residente.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Cuidado Pastoral</CardTitle>
                <CardDescription>Atención espiritual continua</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nuestros pastores brindan cuidado espiritual, consejería y acompañamiento, manteniendo viva la llama
                  del ministerio en el corazón de cada residente.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Actividades Sociales</CardTitle>
                <CardDescription>Vida comunitaria activa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Organizamos actividades recreativas, estudios bíblicos, tiempos de oración y eventos especiales para
                  mantener una vida social activa y enriquecedora.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-300 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-blue-800 mb-2" />
                <CardTitle className="text-blue-950">Alojamiento</CardTitle>
                <CardDescription>Habitaciones cómodas y privadas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Habitaciones privadas completamente amuebladas con baño propio, calefacción, aire acondicionado y
                  todas las comodidades necesarias para un hogar digno.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Seguridad</CardTitle>
                <CardDescription>Protección las 24 horas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistema de seguridad completo con personal capacitado, cámaras de vigilancia y protocolos de
                  emergencia para garantizar la tranquilidad y seguridad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios */}
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
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Cómo Puedes Ayudar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Este ministerio se sostiene gracias a la generosidad de hermanos como tú. Tu apoyo hace posible que podamos
            continuar honrando a quienes tanto dieron por el Reino de Dios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Hacer Donación
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Ser Voluntario
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Visitar el Hogar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
