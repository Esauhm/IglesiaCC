import { Home, TreePine, Heart, Users, HandIcon as Hands, Book } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Otros() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Otros Ministerios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce nuestros ministerios especiales y proyectos de impacto social
          </p>
        </div>
      </section>

      {/* Hogar de Protección al Pastor Anciano */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-blue-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-blue-50 p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Home className="h-8 w-8 text-blue-700" />
                    <h2 className="text-3xl font-bold text-blue-900">Hogar de Protección al Pastor Anciano</h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    Un ministerio especial dedicado al cuidado y protección de pastores ancianos que han dedicado su
                    vida al servicio de Dios. Proporcionamos un hogar digno, atención médica y el amor que merecen en
                    esta etapa de sus vidas.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-blue-700" />
                      <span className="text-gray-600">Atención médica especializada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-700" />
                      <span className="text-gray-600">Compañía y cuidado pastoral</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5 text-blue-700" />
                      <span className="text-gray-600">Instalaciones cómodas y seguras</span>
                    </div>
                  </div>
                  <Button className="bg-blue-700 hover:bg-blue-800">Conocer Más</Button>
                </div>
                <div className="bg-gray-200 min-h-[300px] lg:min-h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Home className="h-16 w-16 mx-auto mb-4" />
                    <p>Imagen del Hogar de Protección</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Finca Espíritu Santo */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-blue-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gray-200 min-h-[300px] lg:min-h-full flex items-center justify-center lg:order-first">
                  <div className="text-center text-gray-500">
                    <TreePine className="h-16 w-16 mx-auto mb-4" />
                    <p>Imagen de la Finca Espíritu Santo</p>
                  </div>
                </div>
                <div className="bg-white p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <TreePine className="h-8 w-8 text-blue-700" />
                    <h2 className="text-3xl font-bold text-blue-900">Finca Espíritu Santo</h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    Un hermoso espacio natural dedicado a la adoración, retiros espirituales y encuentros con Dios. La
                    finca ofrece un ambiente tranquilo y sereno para la oración, meditación y renovación espiritual.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <TreePine className="h-5 w-5 text-blue-700" />
                      <span className="text-gray-600">Retiros espirituales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-blue-700" />
                      <span className="text-gray-600">Encuentros de adoración</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-700" />
                      <span className="text-gray-600">Campamentos juveniles</span>
                    </div>
                  </div>
                  <Button className="bg-blue-700 hover:bg-blue-800">Reservar Visita</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Otros Ministerios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Ministerios Adicionales</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Hands className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Ministerio de Ayuda Social</CardTitle>
                <CardDescription>Apoyo a familias necesitadas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Proporcionamos alimentos, ropa y apoyo económico a familias en situación vulnerable de nuestra
                  comunidad.
                </p>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Participar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Book className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Escuela Bíblica</CardTitle>
                <CardDescription>Formación teológica</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cursos de formación bíblica y teológica para líderes y miembros que desean profundizar en su
                  conocimiento.
                </p>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Inscribirse
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Ministerio de Sanidad</CardTitle>
                <CardDescription>Oración por los enfermos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un ministerio dedicado a la oración por sanidad física, emocional y espiritual de quienes lo
                  necesitan.
                </p>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Solicitar Oración
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Ministerio de Matrimonios</CardTitle>
                <CardDescription>Fortaleciendo familias</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Consejería matrimonial, talleres para parejas y eventos especiales para fortalecer los matrimonios.
                </p>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Más Info
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TreePine className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Ministerio de Misiones</CardTitle>
                <CardDescription>Alcanzando el mundo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Apoyamos misioneros locales e internacionales y organizamos viajes misioneros para evangelizar.
                </p>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Participar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Células de Hogar</CardTitle>
                <CardDescription>Comunión en casa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Grupos pequeños que se reúnen en hogares para estudiar la Biblia, orar y tener comunión.
                </p>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Unirse
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Te Gustaría Participar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Todos nuestros ministerios necesitan voluntarios comprometidos. Únete a nosotros y marca la diferencia en la
            vida de otros.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Quiero Ser Voluntario
          </Button>
        </div>
      </section>
    </div>
  )
}
