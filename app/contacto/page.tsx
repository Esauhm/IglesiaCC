"use client"

import { Facebook, Instagram, Youtube } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const TikTokIcon = () => (
  <svg
    className="h-12 w-12 text-black mx-auto mb-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.75 2h3a6 6 0 0 0 6 6v3a9 9 0 1 1-9-9z" />
  </svg>
)



export default function Contacto() {
  const [videoId, setVideoId] = useState("")

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await fetch("https://www.youtube.com/feeds/videos.xml?channel_id=UCFJ-5_F-cJk-pz3LqOwG9BQ")
        const text = await res.text()
        const parser = new DOMParser()
        const xml = parser.parseFromString(text, "text/xml")
        const firstEntry = xml.querySelector("entry > link")
        const url = firstEntry?.getAttribute("href")
        if (url) {
          const id = new URL(url).searchParams.get("v")
          if (id) setVideoId(id)
        }
      } catch (error) {
        console.error("No se pudo obtener el video:", error)
      }
    }

    fetchLatestVideo()
  }, [])

  const redes = [
    {
      icon: <Facebook className="h-12 w-12 text-blue-600 mx-auto mb-2" />,
      title: "Facebook",
      description: "Síguenos para noticias y eventos",
      text: "Mantente al día con nuestras actividades, eventos especiales y mensajes inspiradores.",
      button: "Seguir en Facebook",
      url: "https://www.facebook.com/share/1NpscNMMe4/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-2" />,
      title: "Instagram",
      description: "Fotos y momentos especiales",
      text: "Mira las fotos de nuestros eventos, actividades y momentos especiales de la comunidad.",
      button: "Seguir en Instagram",
      url: "https://www.instagram.com/mcc_sv?igsh=MWk3NTJpZ2hpeDR5eA==",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: <Youtube className="h-12 w-12 text-red-600 mx-auto mb-2" />,
      title: "YouTube",
      description: "Predicaciones y música",
      text: "Accede a nuestras predicaciones, música de adoración y eventos en vivo.",
      button: "Suscribirse",
      url: "https://youtube.com/@ministeriocentrocristianosv?si=hodW-qfRr7WBmM7O",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: <TikTokIcon/>,
      title: "TikTok",
      description: "Contenido corto y poderoso",
      text: "Disfruta de clips, predicaciones breves y mensajes que impactan.",
      button: "Seguir en TikTok",
      url: "https://www.tiktok.com/@mccsantaana?_t=ZM-8xQmMvCEbnM&_r=1", // cambia si tienes otra URL real
      color: "bg-black hover:bg-gray-900 text-white",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero con imagen */}
      <section className="relative h-[450px] text-white">
        <img
          src="/imagenes/redes.jpg"
          alt="Ubicación"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Redes Sociales</h1>
          <p className="text-xl max-w-3xl mx-auto">Sigue nuestras redes sociales para mantenerte informado.</p>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Síguenos en Redes Sociales</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {redes.map(({ icon, title, description, text, button, color, url }, idx) => (
              <Card
                key={idx}
                className="text-center bg-white border-blue-200 p-6 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
              >
                <CardHeader>
                  <div className="transition-transform group-hover:scale-110">{icon}</div>
                  <CardTitle className="text-blue-900">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{text}</p>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Button className={`${color}`}>{button}</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Último video */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Predicaciones Recientes</h2>
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full h-[450px]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed?listType=playlist&amp;list=PLgFS4sQxyt5Ft5M2ozyS_mwZ8Ib-hjbkC"
                title="Último video del canal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
