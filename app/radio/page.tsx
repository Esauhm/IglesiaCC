"use client"

import { Radio, Play, Volume2, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function RadioPage() {
  const [videoId, setVideoId] = useState("")

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await fetch("https://www.youtube.com/feeds/videos.xml?channel_id=UCFJ-5_F-cJk-pz3LqOwG9BQ")
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

  if (!videoId) return <p className="text-center text-gray-500">Cargando video...</p>

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section con Banner Grande */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <Radio className="h-20 w-20 mx-auto mb-6 text-blue-200" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Radio Bendición</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Música cristiana, predicaciones y programas que edifican tu fe las 24 horas del día
          </p>
          <div className="flex justify-center">
            <a
              href="https://laestaciondelavictoria.net/"  // 🔁 Reemplaza esta URL por la real
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
                <Play className="h-6 w-6 mr-2" />
                Escuchar Ahora
              </Button>
            </a>
          </div>
        </div>
      </section>


      {/* Información de la Radio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Tu Estación de Radio Cristiana</h2>
            <p className="text-lg text-gray-600">
              Radio Bendición es nuestro ministerio radial que lleva el mensaje de esperanza y amor de Cristo a miles de
              hogares. Transmitimos música cristiana contemporánea, predicaciones inspiradoras y programas que
              fortalecen la fe de toda la familia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Volume2 className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Música Cristiana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Los mejores éxitos de la música cristiana contemporánea, himnos clásicos y alabanzas que elevan tu
                  espíritu.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Radio className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Predicaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mensajes bíblicos profundos y prácticos que te ayudarán a crecer en tu relación con Dios.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Headphones className="h-12 w-12 text-blue-700 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Programas Especiales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Programas para jóvenes, familias, testimonios de vida y espacios de reflexión y oración.
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

      {/* Programación */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Programación Destacada</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Buenos Días con Jesús</CardTitle>
                <CardDescription>Lunes a Viernes 6:00 AM - 9:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comienza tu día con música inspiradora, reflexiones bíblicas y oración.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Hora Juvenil</CardTitle>
                <CardDescription>Sábados 4:00 PM - 6:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Programa especial para jóvenes con música actual y temas relevantes.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Familia Bendecida</CardTitle>
                <CardDescription>Domingos 2:00 PM - 4:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Consejos prácticos para fortalecer la familia cristiana y testimonios.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Noche de Adoración</CardTitle>
                <CardDescription>Todos los días 8:00 PM - 10:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Música de adoración y alabanza para terminar el día en la presencia de Dios.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Palabra Viva</CardTitle>
                <CardDescription>Martes y Jueves 12:00 PM - 1:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Estudio bíblico profundo con aplicaciones prácticas para la vida diaria.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Testimonios de Fe</CardTitle>
                <CardDescription>Viernes 7:00 PM - 8:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Historias reales de transformación y milagros que fortalecen la fe.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¡Sintoniza Radio Bendición!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de oyentes y permite que la Palabra de Dios transforme tu día
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Play className="h-5 w-5 mr-2" />
              Escuchar en Vivo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Descargar App
            </Button>
          </div>

          <div className="mt-8 text-blue-200">
            <p>Frecuencia: 101.5 FM | En línea: www.radiobendicion.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
