import { Users, Heart, Book, HandIcon as Hands, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Carrusel de Imágenes */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="40000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active h-[500px]">
            <div className="relative bg-gradient-to-r h-[500px] from-blue-950 via-blue-900 to-blue-800 text-white py-20">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-5">Bienvenidos a Nuestra Iglesia</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Un lugar donde encontrarás amor, esperanza y comunidad en El Espiritu Santo
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item h-[500px]">
            <div className="relative bg-gradient-to-r from-blue-900 h-[500px] via-blue-800 to-blue-700 text-white py-20">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Células de Crecimiento</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Crece en comunidad y fortalece tu fe en grupos pequeños
                </p>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Conocer Células
                </Button>
              </div>
            </div>
          </div>

          <div className="carousel-item h-[500px]">
            <div className="relative bg-gradient-to-r from-blue-800 h-[500px] via-blue-900 to-blue-950 text-white py-20">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Radio Bendición</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Escucha música cristiana y predicaciones las 24 horas
                </p>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Escuchar Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Actividades de la Semana */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Actividades de la Semana</h2>
            <p className="text-gray-600 text-lg">Únete a nuestras actividades y fortalece tu fe</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <img src="/imagenes/Domingo.jpeg" alt="Culto Dominical" className="w-full h-80 object-cover rounded-t-md" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-700" />
                  <CardTitle className="text-blue-900">Culto Dominical</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Domingo 09:00 AM - 11:00 PM</p>
                <p className="text-sm text-gray-500">Adoración, predicación y alabanza</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <img src="/imagenes/Martes.jpeg" alt="Culto de Departamentos" className="w-full h-80 object-cover rounded-t-md" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-blue-700" />
                  <CardTitle className="text-blue-900">Culto de Departamentos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Martes 6:00 PM - 7:30 PM</p>
                <p className="text-sm text-gray-500">Reunión con jóvenes, adultos y niños</p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <img src="/imagenes/Jueves.jpeg" alt="Estudio Bíblico" className="w-full h-80 object-cover rounded-t-md" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-700" />
                  <CardTitle className="text-blue-900">Estudio Bíblico</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Jueves 6:00 PM - 7:30 PM</p>
                <p className="text-sm text-gray-500">Profundizando en la Palabra de Dios</p>
              </CardContent>
            </Card>
          </div>

          {/* Card adicional centrada abajo */}
          <div className="mt-8 flex justify-center">
            <Card className="w-full max-w-md border-blue-200 hover:shadow-lg transition-shadow">
              <img src="/imagenes/Lunes.jpeg" alt="Noche de Oración" className="w-full h-80 object-cover rounded-t-md" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-700" />
                  <CardTitle className="text-blue-900">Altar Familiar</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Lunes</p>
                <p className="text-sm text-gray-500">Un tiempo para buscar la presencia de Dios juntos en familia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Información Importante */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        {/* Historia */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Nuestra Historia</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Nuestra iglesia fue fundada en 1985 con el propósito de crear una comunidad donde las personas pudieran
                  encontrar a Dios, crecer en su fe y servir a otros con amor. Durante más de 35 años, hemos sido un faro
                  de esperanza en nuestra comunidad.
                </p>
                <p className="mb-6">
                  Comenzamos como un pequeño grupo de familias que se reunían en hogares para estudiar la Biblia y orar
                  juntos. Con el tiempo, Dios bendijo nuestro ministerio y pudimos establecer nuestro templo actual, donde
                  continuamos creciendo y sirviendo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                  <Book className="h-6 w-6" />
                  Misión y Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conocer a la persona del Espíritu Santo de la manera más bíblica y completa, vivir de acuerdo a ese conocimiento
                  y compartir ambos aspectos con toda persona sin ninguna distinción y por todos los medios posibles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Valores */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Comunidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Creemos en la importancia de la comunión y el apoyo mutuo entre hermanos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Amor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  El amor de Dios es el fundamento de todo lo que hacemos y enseñamos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Book className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Verdad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  La Palabra de Dios es nuestra autoridad suprema en fe y práctica.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Hands className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Servicio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Servimos a Dios sirviendo a otros con humildad y generosidad.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Liderazgo */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Nuestros Pastores</h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            {/* Pastor */}
            <Card className="text-center bg-white border-blue-200 w-full max-w-sm">
              <CardHeader>
                <img
                  src="/imagenes/Pastor.jpeg"
                  alt="Pastor Marcos Antonio Amaya Lizama"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-blue-100"
                />
                <CardTitle className="text-blue-900">Pastor</CardTitle>
                <CardDescription>Marcos Antonio Amaya Lizama</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Lidera nuestra congregación con sabiduría y pasión por las almas.
                </p>
              </CardContent>
            </Card>

            {/* Pastora */}
            <Card className="text-center bg-white border-blue-200 w-full max-w-sm">
              <CardHeader>
                <img
                  src="/imagenes/Pastora.jpeg"
                  alt="Pastora Gloria Amaya"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-blue-100"
                />
                <CardTitle className="text-blue-900">Pastora</CardTitle>
                <CardDescription>Gloria Amaya</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  La Pastora Gloria se enfoca en el ministerio de mujeres y familias y servicio en el culto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
