import { MapPin, Clock, Users, Heart, Home, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CelulasPage() {
  const celulas = [
    {
      nombre: "Célula 1",
      ubicacion: "Familia Salazar",
      direccion: "Urb. Arizona, contiguo a Parque Jardín Las Flores",
      horario: "Viernes / 6:30 PM",
      lider: "Marlene Amaya de López",
      descripcion: "Reunión en hogar para crecimiento y comunión espiritual.",
      icon: Home,
      color: "blue",
      imagen: "/imagenes/c1.jpeg",
    },
    {
      nombre: "Célula 2",
      ubicacion: "Familia Colocho",
      direccion: "Cantón La Empalizada, Carretera al Porvenir.",
      horario: "Sábado / 5:00 PM",
      lider: "Odilio López",
      descripcion: "Encuentro en comunidad para fortalecer la fe.",
      icon: Building,
      color: "navy",
      imagen: "/imagenes/c2.jpeg",
    },
    {
      nombre: "Célula 3",
      ubicacion: "Familia de Carlos Flores",
      direccion: "Caserío Copinolito, abajo de la Colonia Santa Leonor.",
      horario: "Viernes / 6:30 PM",
      lider: "Jorge García",
      descripcion: "Célula familiar centrada en la enseñanza bíblica.",
      icon: Home,
      color: "blue",
      imagen: "/imagenes/c3.jpeg",
    },
    {
      nombre: "Célula 4",
      ubicacion: "Familia Amaya",
      direccion: "Urb. San Fernando, una cuadra abajo de multifamiliares Atlás.",
      horario: "Miércoles / 6:30 PM",
      lider: "Marcos Amaya",
      descripcion: "Estudio bíblico con familias del sector San Fernando.",
      icon: Building,
      color: "blue",
      imagen: "/imagenes/c4.jpeg",
    },
    {
      nombre: "Célula 5",
      ubicacion: "Familia Ortíz",
      direccion: "10 Calle Poniente, entre 18/16 Av. Norte, Casa #40",
      horario: "Sábados / 4:30 PM",
      lider: "Claudia de Ortíz",
      descripcion: "Encuentro para familias.",
      icon: Home,
      color: "navy",
      imagen: "/imagenes/c5.jpeg",
    },
    {
      nombre: "Célula 6",
      ubicacion: "Familia de Héctor Morán",
      direccion: "Cantón Caña Brava, Km. 54, Calle Nueva a San Salvador.",
      horario: "Miércoles / 5:30 PM",
      lider: "Odilio López",
      descripcion: "Célula enfocada en la Palabra y comunión familiar.",
      icon: Building,
      color: "blue",
      imagen: "/imagenes/c6.jpeg",
    },
  ]



  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section con imagen */}
      <section className="relative h-[400px] md:h-[530px]">
        <img
          src="/imagenes/portada-celulas.jpeg"
          alt="Células de Crecimiento"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>

          </div>
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
              {[
                { icon: Users, title: "Comunión", desc: "Fortalece lazos de amistad y hermandad cristiana" },
                { icon: Heart, title: "Crecimiento", desc: "Crece espiritualmente a través del estudio bíblico" },
                { icon: MapPin, title: "Cercanía", desc: "Encuentra una célula cerca de tu hogar" },
              ].map(({ icon: Icon, title, desc }, idx) => (
                <Card
                  key={idx}
                  className="text-center bg-white border border-blue-200 p-6 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600">
                      <Icon className="h-12 w-12 text-blue-700 transition-colors duration-300 group-hover:text-blue-600" />
                    </div>
                    <CardTitle className="text-blue-900">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </CardContent>
                </Card>
              ))}
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
                <Card
                  key={index}
                  className={`bg-white ${colors.border} rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4 transition-all duration-300 group-hover:text-blue-600">
                      <IconComponent className={`h-8 w-8 ${colors.icon} group-hover:text-blue-600`} />
                      <CardTitle className={`${colors.title}`}>{celula.nombre}</CardTitle>
                    </div>

                    <img
                      src={celula.imagen}
                      alt={`Imagen de ${celula.nombre}`}
                      className="w-full h-48 object-cover rounded-md mt-2 shadow-sm"
                    />

                    <CardDescription className="font-medium mt-2">{celula.ubicacion}</CardDescription>
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

                    <p className="text-gray-600 text-sm mb-2">{celula.descripcion}</p>
                  </CardContent>
                </Card>

              )
            })}
          </div>
        </div>
      </section>


    </div>
  )
}
