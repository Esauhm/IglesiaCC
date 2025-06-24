import { GraduationCap, Book, Users, Heart, Star, Trophy, Facebook, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ColegioPage() {
  const images = [
    "/imagenes/col2.jpeg",
    "/imagenes/cole1.jpeg",
    "/imagenes/cole3.jpeg",
    "/imagenes/cole4.png",
    "/imagenes/cole5.png",
    "/imagenes/cole6.png",
    "/imagenes/cole7.png",
    "/imagenes/cole8.png",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-32"
        style={{ backgroundImage: "url('/imagenes/colegio2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Colegio Centro Cristiano, de Las Asambleas de Dios
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tu alternativa en educación
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Formar Parte de Nuestra Familia Educativa?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Únete a una comunidad educativa que valora tanto la excelencia académica como la formación del carácter
            cristiano.

          </p>



          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/share/1HM8CwTHfd/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg hover:scale-105 transform duration-300"
            >
              <Facebook className="w-8 h-8 text-blue-300" />
              <span className="text-lg font-semibold">Visítanos en Facebook</span>
            </a>

            {/* Teléfono Card */}
            <a
              href="tel:+50324404833"
              className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg hover:scale-105 transform duration-300"
            >
              <Phone className="w-8 h-8 text-blue-300" />
              <span className="text-lg font-semibold">Llamar al +503 2440-4833</span>
            </a>
          </div>
        </div>
      </section>





      {/* Contenido interno con margen interno adicional */}
      <section className=" py-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
          Quienes somos?
        </h2>
        <p className="text-lg text-gray-700 mb-10 text-center">
          El CCC es una institución académica privada y sin fines de lucro, acreditada por
          el Ministerio de Educación de El Salvador, de carácter mixto. Ofrece los servicios
          desde Parvularia hasta bachillerato en jornada diurna, el colegio tiene de base el fomento de
          valores morales y espirituales, para formar líderes y ciudadanos integrales que sirvan a Dios y la sociedad.
        </p>
      </section>




      {/* Información Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Texto */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Proverbios 1:7</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    El principio de la sabiduría es el temor de Jehová.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Book className="h-6 w-6 text-blue-700" />
                      <span className="text-gray-700 font-medium">Currículo académico de alta calidad</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-6 w-6 text-blue-800" />
                      <span className="text-gray-700 font-medium">Formación en valores cristianos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-blue-700" />
                      <span className="text-gray-700 font-medium">Atención personalizada</span>
                    </div>
                  </div>
                </div>

                {/* Imagen */}
                <div className="relative flex items-center justify-center bg-gray-100 p-4">
                  <img
                    src="/imagenes/colegio4.jpg"
                    alt="Instalaciones del Colegio"
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>





      {/* Niveles Educativos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Niveles Educativos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Parvularia */}
            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Parvularia</CardTitle>
                <CardDescription>Kínder 4, 5 y Preparatoria (6 años)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Educación inicial con enfoque en desarrollo integral, habilidades básicas y valores.
                </p>

              </CardContent>
            </Card>

            {/* Primer y Segundo Ciclo */}
            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Book className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">1.º a 6.º Grado</CardTitle>
                <CardDescription>Primer y Segundo Ciclo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Formación académica sólida con refuerzo en lectura, escritura, matemáticas y fe cristiana.
                </p>

              </CardContent>
            </Card>

            {/* Tercer Ciclo */}
            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">7.º a 9.º Grado</CardTitle>
                <CardDescription>Tercer Ciclo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Nivel intermedio con orientación académica, pensamiento crítico y servicio comunitario.
                </p>

              </CardContent>
            </Card>

            {/* Bachillerato */}
            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Bachillerato</CardTitle>
                <CardDescription>Bachillerato General</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Preparación académica avanzada con enfoque vocacional, espiritual y profesional.
                </p>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Galería de imágenes */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Momentos Especiales</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                <img
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Misión y Visión */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-black-900 flex items-center gap-2">
              <Book className="h-6 w-6" />
              Proverbios 22:6
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Instruye al niño en su camino, Y aun cuando fuere viejo no se apartará de él.
            </p>
          </CardContent>
        </Card>
      </div>


      {/* Programas Especiales */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Programas Especiales</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-blue-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Excelencia Académica</CardTitle>
              </CardHeader>
              <CardContent>

              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-navy-700 mx-auto mb-2" />
                <CardTitle className="text-navy-900">Liderazgo Juvenil</CardTitle>
              </CardHeader>
              <CardContent>

              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Servicio Social</CardTitle>
              </CardHeader>
              <CardContent>

              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Deportes y Arte</CardTitle>
              </CardHeader>
              <CardContent>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instalaciones 
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Nuestras Instalaciones</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Aulas Inteligentes</CardTitle>
                <CardDescription>Tecnología educativa avanzada</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aulas equipadas con pizarras interactivas, proyectores, sistema de audio y acceso a internet para una
                  educación moderna y efectiva.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200">
              <CardHeader>
                <CardTitle className="text-navy-900">Laboratorios</CardTitle>
                <CardDescription>Ciencias, computación y idiomas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Laboratorios completamente equipados para ciencias naturales, computación e idiomas, facilitando el
                  aprendizaje práctico y experimental.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Biblioteca</CardTitle>
                <CardDescription>Centro de recursos educativos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Amplia biblioteca con más de 10,000 volúmenes, área de estudio silencioso y acceso a recursos
                  digitales para investigación y lectura.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Áreas Deportivas</CardTitle>
                <CardDescription>Espacios para actividad física</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Canchas de fútbol, básquetbol, voleibol, gimnasio cubierto y piscina para el desarrollo físico
                  integral de nuestros estudiantes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}







    </div>
  )
}
