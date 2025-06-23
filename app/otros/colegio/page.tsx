import { GraduationCap, Book, Users, Heart, Star, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ColegioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Colegio Cristiano Esperanza</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Formando líderes íntegros con excelencia académica y valores cristianos sólidos
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
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Educación Integral</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    El Colegio Cristiano Esperanza es una institución educativa que combina la excelencia académica con
                    la formación en valores cristianos. Nuestro objetivo es desarrollar estudiantes íntegros, preparados
                    para enfrentar los desafíos del futuro con sabiduría, conocimiento y fe.
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
                  <Button className="bg-blue-700 hover:bg-blue-800">Solicitar Información</Button>
                </div>
                <div className="bg-gray-200 min-h-[400px] lg:min-h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <GraduationCap className="h-20 w-20 mx-auto mb-4" />
                    <p className="text-lg">Instalaciones del Colegio</p>
                    <p className="text-sm">Aulas modernas y espacios de aprendizaje</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Niveles Educativos */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Niveles Educativos</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Preescolar</CardTitle>
                <CardDescription>3 a 5 años</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Desarrollo integral en los primeros años con metodologías lúdicas, estimulación temprana y primeros
                  valores cristianos en un ambiente de amor y cuidado.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Desarrollo psicomotor</li>
                  <li>• Iniciación a la lectoescritura</li>
                  <li>• Valores y principios bíblicos</li>
                  <li>• Arte y creatividad</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Book className="h-12 w-12 text-navy-700 mb-2" />
                <CardTitle className="text-navy-900">Primaria</CardTitle>
                <CardDescription>6 a 11 años</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Educación básica sólida con énfasis en matemáticas, ciencias, lenguaje e inglés, complementada con
                  formación bíblica y desarrollo del carácter cristiano.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Matemáticas y ciencias</li>
                  <li>• Lenguaje y literatura</li>
                  <li>• Inglés como segunda lengua</li>
                  <li>• Estudios bíblicos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-blue-700 mb-2" />
                <CardTitle className="text-blue-900">Secundaria</CardTitle>
                <CardDescription>12 a 17 años</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Preparación integral para la universidad y la vida, con currículo avanzado, liderazgo cristiano y
                  orientación vocacional basada en los dones y talentos de cada estudiante.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Preparación universitaria</li>
                  <li>• Liderazgo cristiano</li>
                  <li>• Orientación vocacional</li>
                  <li>• Proyectos de servicio</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                <p className="text-gray-600 text-sm">
                  Programa avanzado para estudiantes destacados con cursos de nivel superior y preparación para
                  olimpiadas académicas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-navy-700 mx-auto mb-2" />
                <CardTitle className="text-navy-900">Liderazgo Juvenil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Formación de líderes cristianos a través de talleres, proyectos comunitarios y desarrollo de
                  habilidades de liderazgo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Servicio Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Proyectos de servicio a la comunidad que desarrollan el corazón de servicio y la responsabilidad
                  social.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Deportes y Arte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Desarrollo de talentos artísticos y deportivos con equipos competitivos y presentaciones culturales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
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
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Formar Parte de Nuestra Familia Educativa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a una comunidad educativa que valora tanto la excelencia académica como la formación del carácter
            cristiano
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Solicitar Admisión
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Agendar Visita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Descargar Prospecto
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
