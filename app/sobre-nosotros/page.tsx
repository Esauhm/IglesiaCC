import { Users, Heart, Book, HandIcon as Hands } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function SobreNosotros() {
  const [videoId, setVideoId] = useState("")

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await fetch("https://www.youtube.com/feeds/videos.xml?channel_id=TU_CHANNEL_ID")
        const text = await res.text()
        const parser = new DOMParser()
        const xml = parser.parseFromString(text, "text/xml")
        const firstEntry = xml.querySelector("entry link")
        const url = firstEntry?.getAttribute("href")
        if (url) {
          const id = new URL(url).searchParams.get("v")
          if (id) setVideoId(id)
        }
      } catch (error) {
        console.error("No se pudo cargar el video:", error)
      }
    }

    fetchLatestVideo()
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">Conoce nuestra historia, misión y visión como comunidad de fe</p>
        </div>
      </section>

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

      {/* Misión y Visión */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  Nuestra Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proclamar el evangelio de Jesucristo, hacer discípulos, y servir a nuestra comunidad con amor,
                  compasión y excelencia, transformando vidas a través del poder de Dios.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                  <Book className="h-6 w-6" />
                  Nuestra Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser una iglesia que impacte positivamente nuestra ciudad y el mundo, formando discípulos maduros que
                  vivan los valores del Reino de Dios en todas las áreas de sus vidas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Último Video en YouTube</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Último video del canal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
                  El amor de Cristo es el fundamento de todo lo que hacemos y enseñamos.
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
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Nuestro Liderazgo</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-white border-blue-200">
              <CardHeader>
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-blue-900">Pastor Principal</CardTitle>
                <CardDescription>Rev. Juan Pérez</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Con más de 20 años de ministerio, el Pastor Juan lidera nuestra congregación con sabiduría y pasión
                  por las almas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-blue-200">
              <CardHeader>
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-blue-900">Pastora Asociada</CardTitle>
                <CardDescription>Pastora María González</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  La Pastora María se enfoca en el ministerio de mujeres y familias, brindando consejería y apoyo
                  pastoral.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-blue-200">
              <CardHeader>
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-blue-900">Pastor de Jóvenes</CardTitle>
                <CardDescription>Pastor Carlos Rodríguez</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  El Pastor Carlos dirige el ministerio juvenil, inspirando a la próxima generación a seguir a Cristo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
