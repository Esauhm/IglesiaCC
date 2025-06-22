import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para servirte. No dudes en contactarnos para cualquier consulta o necesidad
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Envíanos un Mensaje</h2>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Formulario de Contacto</CardTitle>
                  <CardDescription>Completa el formulario y nos pondremos en contacto contigo pronto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" placeholder="Tu número de teléfono" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input id="asunto" placeholder="¿En qué podemos ayudarte?" />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." className="min-h-[120px]" />
                  </div>

                  <Button className="w-full bg-blue-700 hover:bg-blue-800">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Información de Contacto */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Información de Contacto</h2>

              <div className="space-y-6">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-900 flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Teléfonos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>Oficina Principal:</strong> +1 (555) 123-4567
                      </p>
                      <p>
                        <strong>Pastor Principal:</strong> +1 (555) 123-4568
                      </p>
                      <p>
                        <strong>Emergencias:</strong> +1 (555) 123-4569
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-900 flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Correos Electrónicos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>General:</strong> info@iglesia.com
                      </p>
                      <p>
                        <strong>Pastor:</strong> pastor@iglesia.com
                      </p>
                      <p>
                        <strong>Oración:</strong> oracion@iglesia.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-900 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Dirección
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-600">
                      <p>Calle Principal #123</p>
                      <p>Colonia Centro</p>
                      <p>Ciudad, Estado 12345</p>
                      <p>País</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-900 flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Horarios de Oficina
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>Lunes - Viernes:</strong> 9:00 AM - 5:00 PM
                      </p>
                      <p>
                        <strong>Sábado:</strong> 9:00 AM - 2:00 PM
                      </p>
                      <p>
                        <strong>Domingo:</strong> 8:00 AM - 12:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Síguenos en Redes Sociales</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Facebook className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Facebook</CardTitle>
                <CardDescription>Síguenos para noticias y eventos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mantente al día con nuestras actividades, eventos especiales y mensajes inspiradores.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Seguir en Facebook</Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Instagram</CardTitle>
                <CardDescription>Fotos y momentos especiales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mira las fotos de nuestros eventos, actividades y momentos especiales de la comunidad.
                </p>
                <Button className="bg-pink-600 hover:bg-pink-700">Seguir en Instagram</Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Youtube className="h-12 w-12 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">YouTube</CardTitle>
                <CardDescription>Predicaciones y música</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Accede a nuestras predicaciones, música de adoración y eventos en vivo.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Suscribirse</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Cómo Llegar</h2>

          <Card className="border-blue-200 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-blue-900 text-center">Nuestra Ubicación</CardTitle>
              <CardDescription className="text-center">
                Estamos ubicados en el corazón de la ciudad, fácil acceso en transporte público
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Mapa Interactivo</p>
                  <p>Calle Principal #123, Colonia Centro</p>
                  <p className="text-sm mt-2">Aquí se mostraría el mapa de Google Maps</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-blue-700 hover:bg-blue-800">
                  <MapPin className="h-4 w-4 mr-2" />
                  Ver en Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Oración o Consejería?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros pastores están disponibles para orar contigo y brindarte consejería espiritual
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Solicitar Oración
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Agendar Consejería
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
