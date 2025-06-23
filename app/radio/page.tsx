"use client"

import { Radio, Play, Volume2, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RadioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section con imagen de fondo y capa oscura */}
      <section className="relative h-[620px] text-white">
        {/* Imagen de fondo */}
        <img
          src="/imagenes/radio.jpg"
          alt="Radio Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
          <Radio className="h-20 w-20 mb-6 text-blue-200" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Radio Shabach</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Música cristiana, predicaciones y programas que edifican tu fe las 24 horas del día
          </p>
          <div className="flex justify-center">
            <a href="https://laestaciondelavictoria.net/">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
                <Play className="h-6 w-6 mr-2" />
                Ir a Escuchar
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Información de la Radio */}
      <section id="info" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Tu Estación de Radio Cristiana</h2>
            <p className="text-lg text-gray-600">
              Radio Shabach es nuestro ministerio radial que lleva el mensaje de esperanza y amor de El Espiritu Santo a miles de
              hogares. Transmitimos música cristiana contemporánea, predicaciones inspiradoras y programas que
              fortalecen la fe de toda la familia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Volume2,
                title: "Música Cristiana",
                desc:
                  "Los mejores éxitos de la música cristiana contemporánea, himnos clásicos y alabanzas que elevan tu espíritu.",
              },
              {
                Icon: Radio,
                title: "Predicaciones",
                desc:
                  "Mensajes bíblicos profundos y prácticos que te ayudarán a crecer en tu relación con Dios.",
              },
              {
                Icon: Headphones,
                title: "Programas Especiales",
                desc:
                  "Programas para jóvenes, familias, testimonios de vida y espacios de reflexión y oración.",
              },
            ].map(({ Icon, title, desc }, index) => (
              <Card
                key={index}
                className="text-center bg-white border border-blue-100 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600">
                    <Icon className="h-12 w-12 text-blue-700 transition-colors duration-300 group-hover:text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-900">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
