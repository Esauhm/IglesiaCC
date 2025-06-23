import { TreePine, Heart, Users, Mountain, Sunrise, Tent } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FincaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <TreePine className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Finca Espíritu Santo</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Un santuario natural para la adoración, retiros espirituales y encuentros transformadores con Dios
          </p>
        </div>
      </section>

      {/* Información Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-blue-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gray-200 min-h-[400px] lg:min-h-full flex items-center justify-center lg:order-first">
                  <div className="text-center text-gray-500">
                    <TreePine className="h-20 w-20 mx-auto mb-4" />
                    <p className="text-lg">Paisaje de la Finca</p>
                    <p className="text-sm">Naturaleza y tranquilidad para adorar</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Un Lugar Apartado para Dios</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    La Finca Espíritu Santo es nuestro refugio espiritual ubicado en las montañas, rodeado de naturaleza
                    exuberante y tranquilidad. Es el lugar perfecto para alejarse del ruido del mundo y encontrarse
                    íntimamente con Dios a través de la oración, adoración y meditación en Su Palabra.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Mountain className="h-6 w-6 text-blue-700" />
                      <span className="text-gray-700 font-medium">Ubicación privilegiada en las montañas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TreePine className="h-6 w-6 text-blue-800" />
                      <span className="text-gray-700 font-medium">Ambiente natural y sereno</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-6 w-6 text-blue-700" />
                      <span className="text-gray-700 font-medium">Espacio dedicado a la adoración</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Actividades */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Actividades en la Finca</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Retiros Espirituales</CardTitle>
                <CardDescription>Encuentros profundos con Dios</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Organizamos retiros de fin de semana para diferentes grupos: matrimonios, jóvenes, líderes y
                  congregación en general, con tiempos intensivos de oración y ministración.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-navy-700 mb-2" />
                <CardTitle className="text-navy-900">Campamentos Juveniles</CardTitle>
                <CardDescription>Experiencias transformadoras para jóvenes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Campamentos de verano e invierno para niños, adolescentes y jóvenes, con actividades recreativas,
                  deportes, fogatas y momentos especiales de encuentro con Dios.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sunrise className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Vigilias de Oración</CardTitle>
                <CardDescription>Noches de búsqueda de Dios</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Vigilias mensuales donde la congregación se reúne para orar durante toda la noche, interceder por la
                  iglesia, la ciudad y las naciones bajo las estrellas.
                </p>
              </CardContent>
            </Card>

            {/* <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TreePine className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Caminatas de Oración</CardTitle>
                <CardDescription>Comunión con Dios en la naturaleza</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Senderos especialmente diseñados para caminar en oración y meditación, donde cada paso es una
                  oportunidad para conectar con el Creador a través de Su creación.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Tent className="h-12 w-12 text-navy-700 mb-2" />
                <CardTitle className="text-navy-900">Conferencias</CardTitle>
                <CardDescription>Eventos especiales de enseñanza</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conferencias temáticas con invitados especiales, seminarios de liderazgo y eventos de capacitación
                  ministerial en un ambiente natural que favorece el aprendizaje.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Bodas y Eventos</CardTitle>
                <CardDescription>Celebraciones en la naturaleza</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un lugar único para celebrar bodas cristianas, quinceañeros y otros eventos especiales rodeados de la
                  belleza natural que Dios nos ha regalado.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Nuestras Instalaciones</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Auditorio Natural</CardTitle>
                <CardDescription>Capacidad para 200 personas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un anfiteatro natural con vista panorámica a las montañas, equipado con sistema de sonido y
                  iluminación para eventos nocturnos. El lugar perfecto para adoración al aire libre.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-navy-50 to-white border-navy-200">
              <CardHeader>
                <CardTitle className="text-navy-900">Cabañas de Hospedaje</CardTitle>
                <CardDescription>Alojamiento cómodo y acogedor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cabañas rústicas pero cómodas con capacidad para 4-8 personas cada una, equipadas con literas, baños y
                  áreas comunes para la convivencia y comunión.
                </p>
              </CardContent>
            </Card>

            {/* <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Comedor Principal</CardTitle>
                <CardDescription>Espacio para compartir alimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Amplio comedor con cocina industrial completamente equipada, donde se preparan comidas nutritivas y se
                  vive la comunión alrededor de la mesa como una gran familia.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Áreas Recreativas</CardTitle>
                <CardDescription>Espacios para actividades y deportes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Canchas deportivas, área de fogata, zona de juegos para niños y espacios abiertos para actividades
                  grupales y recreación sana en familia.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Próximos Eventos</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Retiro de Matrimonios</CardTitle>
                <CardDescription>15-17 de Marzo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un fin de semana especial para fortalecer los matrimonios con enseñanzas, dinámicas y tiempo de
                  calidad.
                </p>
                <Button className="bg-blue-700 hover:bg-blue-800 w-full">Inscribirse</Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200">
              <CardHeader>
                <CardTitle className="text-navy-900">Campamento Juvenil</CardTitle>
                <CardDescription>22-25 de Marzo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cuatro días de aventura, diversión y encuentro con Dios para jóvenes de 13 a 25 años.
                </p>
                <Button className="bg-navy-700 hover:bg-navy-800 w-full">Inscribirse</Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Vigilia de Oración</CardTitle>
                <CardDescription>30 de Marzo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Una noche completa de oración e intercesión bajo las estrellas, buscando el rostro de Dios.
                </p>
                <Button className="bg-blue-700 hover:bg-blue-800 w-full">Participar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para una Experiencia Transformadora?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ven y experimenta la presencia de Dios en un ambiente natural diseñado especialmente para encuentros
            espirituales profundos y renovación del alma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Reservar Visita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Ver Galería
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Contactar
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
