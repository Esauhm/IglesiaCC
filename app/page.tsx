"use client"

import { Users, Heart, Book, HandIcon as Hands } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { PlayCircle } from "lucide-react"


type VideoCardProps = {
  previewImage: string
  videoId: string
}

function VideoCard({ previewImage, videoId }: VideoCardProps) {
  const [play, setPlay] = useState(false)

  return (
    <div
      className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => setPlay(true)}
    >
      {!play ? (
        <>
          <img
            src={previewImage}
            alt="Vista previa"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
          <PlayCircle className="w-10 h-10 text-white" />

        </>
      ) : (
        <iframe
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          allow="autoplay"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Carrusel de Imágenes */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="40000">


        <div className="carousel-inner">
          {/* Slide 1 - Bienvenida */}
          <div className="carousel-item active relative h-[550px]">
            {/* Imagen de fondo que se ajusta completamente */}
            <img
              src="/imagenes/portada.png"
              alt="Bienvenida"
              className="absolute inset-0 w-full h-[100%] object-cover z-0"
            />

            {/* Contenido */}
            <div className="relative z-20 container mx-auto px-4 text-center text-white py-20"></div>
          </div>
        </div>
      </div>

      {/* Actividades de la Semana */}
      <section className="bg-gray-50 text-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Actividades de la Semana</h2>
          <p className="text-lg text-black-100 mb-10">
            Únete a nuestras actividades y fortalece tu fe
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Lunes */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/imagenes/Lunes.jpeg" alt="Altar Familiar" className="w-full h-60 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Altar Familiar</h3>
                <p className="text-sm text-gray-700">Lunes</p>
                <p className="text-sm text-gray-600 mt-2">Un tiempo para buscar la presencia de Dios juntos en familia</p>
              </div>
            </div>

            {/* Card 2 - Domingo */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/imagenes/Domingo.jpeg" alt="Culto Dominical" className="w-full h-60 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Culto Dominical</h3>
                <p className="text-sm text-gray-700">Domingo 09:00 AM - 11:00 PM</p>
                <p className="text-sm text-gray-600 mt-2">Adoración, predicación y alabanza</p>
              </div>
            </div>

            {/* Card 3 - Martes */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/imagenes/Martes.jpeg" alt="Culto de Departamentos" className="w-full h-60 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Culto de Departamentos</h3>
                <p className="text-sm text-gray-700">Martes 6:00 PM - 7:30 PM</p>
                <p className="text-sm text-gray-600 mt-2">Reunión con jóvenes, adultos y niños</p>
              </div>
            </div>

            {/* Card 4 - Jueves */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/imagenes/Jueves.jpeg" alt="Estudio Bíblico" className="w-full h-60 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Estudio Bíblico</h3>
                <p className="text-sm text-gray-700">Jueves 6:00 PM - 7:30 PM</p>
                <p className="text-sm text-gray-600 mt-2">Profundizando en la Palabra de Dios</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Sección de Videos */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Videos de la Iglesia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <VideoCard
              previewImage="/imagenes/i3.jpeg"
              videoId="1VNo8971RZJWnGGXKlK9qMyzDWRyDnnye"
            />
            <VideoCard
              previewImage="/imagenes/i4.jpeg"
              videoId="1VTGkiwb8ZBUbNO7uQtaDRzm4np2IF36d"
            />
            <VideoCard
              previewImage="/imagenes/i2.jpeg"
              videoId="1VQCBEHk26m746N0KNt99YnpTS9F1R0Wb"
            />
            <VideoCard
              previewImage="/imagenes/i1.jpeg"
              videoId="1VOZ8QUTiY-LIt3evG2upHdhEXU5MLzVc"
            />
          </div>
        </div>
      </section>



      {/* Información Importante */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
        <div className="container mx-auto px-4">
          {/* Título principal */}
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Nuestra Historia</h2>

          {/* Contenido dividido en columnas */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            {/* Imagen */}
            <div>
              <img
                src="/imagenes/iglesia.png"
                alt="Historia de la Iglesia"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Texto */}
            <div className="text-gray-600 prose prose-lg max-w-none">
              <p className="mb-6">
                Nuestra iglesia fue fundada con el propósito de crear una comunidad centrada en el servicio y en la búsqueda de Dios. Desde sus inicios, ha sido un espacio donde se predica fielmente la Palabra de Dios y se enseña sobre la persona del Espíritu Santo, guiando a las personas a tener una relación viva y transformadora con Él.
              </p>
              <p className="mb-6">
                Actualmente, somos una iglesia apasionada por la adoración, la enseñanza bíblica y la presencia del Espíritu Santo. Nos reunimos no solo para escuchar la Palabra, sino para vivirla día a día, fortaleciendo nuestra fe y edificándonos mutuamente en amor.
              </p>
            </div>
          </div>

          {/* Misión y Visión */}
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
      <section className="py-16 from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Users, title: "Comunidad", desc: "Creemos en la importancia de la comunión y el apoyo mutuo entre hermanos." },
              { Icon: Heart, title: "Amor", desc: "El amor de Dios es el fundamento de todo lo que hacemos y enseñamos." },
              { Icon: Book, title: "Verdad", desc: "La Palabra de Dios es nuestra autoridad suprema en fe y práctica." },
              { Icon: Hands, title: "Servicio", desc: "Servimos a Dios sirviendo a otros con humildad y generosidad." }
            ].map(({ Icon, title, desc }, i) => (
              <Card
                key={i}
                className="group text-center border border-blue-100 bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-500">
                    <Icon className="h-12 w-12 text-blue-700" />
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
      </section>


      {/* Liderazgo */}
      <section className="py-16 from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Nuestros Pastores</h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            {/* Pastor */}
            <Card className="text-center bg-white border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm rounded-xl">
              <CardHeader>
                <img
                  src="/imagenes/Pastor.jpeg"
                  alt="Pastor Marcos Antonio Amaya Lizama"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                />
                <CardTitle className="text-blue-900 text-lg">Pastor</CardTitle>
                <CardDescription className="text-sm font-semibold">Marcos Antonio Amaya Lizama</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Lidera nuestra congregación con sabiduría y pasión por las almas.
                </p>
              </CardContent>
            </Card>

            {/* Pastora */}
            <Card className="text-center bg-white border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm rounded-xl">
              <CardHeader>
                <img
                  src="/imagenes/Pastora.jpeg"
                  alt="Pastora Gloria Amaya"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                />
                <CardTitle className="text-blue-900 text-lg">Pastora</CardTitle>
                <CardDescription className="text-sm font-semibold">Gloria Amaya</CardDescription>
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
