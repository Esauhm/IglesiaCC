import { MapPin, Clock, Users, Heart, Home, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CelulasPage() {
  const celulas = [
    {
      nombre: "Célula Norte",
      ubicacion: "Casa de la Familia Pérez",
      direccion: "Av. Norte #456, Colonia Jardines",
      horario: "Martes 7:00 PM",
      lider: "Juan y María Pérez",
      descripcion: "Célula familiar enfocada en el crecimiento espiritual y la comunión.",
      icon: Home,
      color: "blue",
    },
    {
      nombre: "Célula Centro",
      ubicacion: "Salón Comunitario Central",
      direccion: "Calle Principal #123, Centro",
      horario: "Jueves 6:30 PM",
      lider: "Pastor Carlos Rodríguez",
      descripcion: "Célula para jóvenes y adultos jóvenes con dinámicas modernas.",
      icon: Building,
      color: "navy",
    },
    {
      nombre: "Célula Sur",
      ubicacion: "Casa de la Familia González",
      direccion: "Calle Sur #789, Colonia Esperanza",
      horario: "Miércoles 7:30 PM",
      lider: "Roberto y Ana González",
      descripcion: "Célula multigeneracional con enfoque en familias.",
      icon: Home,
      color: "blue",
    },
    {
      nombre: "Célula Este",
      ubicacion: "Centro Comunitario Este",
      direccion: "Av. Este #321, Colonia Nueva Vida",
      horario: "Viernes 7:00 PM",
      lider: "Pastora María López",
      descripcion: "Célula de mujeres enfocada en el ministerio femenino.",
      icon: Building,
      color: "blue",
    },
    {
      nombre: "Célula Oeste",
      ubicacion: "Casa de la Familia Martínez",
      direccion: "Calle Oeste #654, Colonia Paz",
      horario: "Sábado 6:00 PM",
      lider: "David y Carmen Martínez",
      descripcion: "Célula para matrimonios y parejas en crecimiento.",
      icon: Home,
      color: "navy",
    },
    {
      nombre: "Célula Juvenil",
      ubicacion: "Salón Juvenil de la Iglesia",
      direccion: "Instalaciones de la Iglesia",
      horario: "Sábado 4:00 PM",
      lider: "Pastor de Jóvenes Miguel",
      descripcion: "Célula especial para adolescentes y jóvenes universitarios.",
      icon: Building,
      color: "blue",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Células de Crecimiento</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Únete a una célula cerca de ti y crece en comunidad, fe y amor fraternal
          </p>
        </div>
      </section>

      {/* Información sobre las Células */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">¿Qué son las Células de Crecimiento?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Las células de crecimiento son grupos pequeños que se reúnen semanalmente en diferentes ubicaciones para
              estudiar la Biblia, orar juntos, compartir experiencias y crecer espiritualmente en un ambiente íntimo y
              familiar.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-blue-200 text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                  <CardTitle className="text-blue-900">Comunión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Fortalece lazos de amistad y hermandad cristiana</p>
                </CardContent>
              </Card>

              <Card className="border-blue-300 text-center">
                <CardHeader>
                  <Heart className="h-12 w-12 text-blue-800 mx-auto mb-2" />
                  <CardTitle className="text-blue-950">Crecimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Crece espiritualmente a través del estudio bíblico</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                  <CardTitle className="text-blue-900">Cercanía</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Encuentra una célula cerca de tu hogar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Células */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Nuestras Células</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {celulas.map((celula, index) => {
              const IconComponent = celula.icon
              const colorClasses = {
                blue: {
                  border: "border-blue-200",
                  icon: "text-blue-700",
                  title: "text-blue-900",
                  button: "bg-blue-700 hover:bg-blue-800",
                },
                navy: {
                  border: "border-blue-300",
                  icon: "text-blue-800",
                  title: "text-blue-950",
                  button: "bg-blue-800 hover:bg-blue-900",
                },
              }

              const colors = colorClasses[celula.color as keyof typeof colorClasses]

              return (
                <Card key={index} className={`bg-white ${colors.border} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                      <CardTitle className={colors.title}>{celula.nombre}</CardTitle>
                    </div>
                    <CardDescription className="font-medium">{celula.ubicacion}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{celula.direccion}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{celula.horario}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">Líder: {celula.lider}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{celula.descripcion}</p>

                    <Button className={`w-full ${colors.button}`}>Unirse a esta Célula</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres Iniciar una Nueva Célula?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Si tienes el corazón para liderar y un lugar donde reunirse, te ayudamos a iniciar una nueva célula en tu
            área
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Quiero Ser Líder
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Más Información
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
