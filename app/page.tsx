"use client"

import { Users, Heart, Book, HandIcon as Hands } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { PlayCircle } from "lucide-react"
import { CalendarDays, BookOpen, Home, Cross, Clock } from "lucide-react";


type VideoCardProps = {
  previewImage: string
  videoId: string
}


const schedule = {
  Lunes: [
    { icon: <Clock className="w-4 h-4 inline mr-1" />, name: "Culto de Oración", hour: "6:00 PM" },
    { icon: <Home className="w-4 h-4 inline mr-1" />, name: "Altar Familiar" },
  ],
  Martes: [
    { icon: <Users className="w-4 h-4 inline mr-1" />, name: "Culto de Departamentos", hour: "6:00 PM" },
  ],
  Miércoles: [
    { icon: <Home className="w-4 h-4 inline mr-1" />, name: "Células de Crecimiento" },
  ],
  Jueves: [
    { icon: <BookOpen className="w-4 h-4 inline mr-1" />, name: "Estudio Bíblico", hour: "6:00 PM" },
  ],
  Viernes: [
    { icon: <Home className="w-4 h-4 inline mr-1" />, name: "Células de Crecimiento" },
  ],
  Sábado: [
    { icon: <Home className="w-4 h-4 inline mr-1" />, name: "Células de Crecimiento" },
  ],
  Domingo: [
    { icon: <Cross className="w-4 h-4 inline mr-1" />, name: "Culto Dominical", hour: "09:00 AM" },
  ],
};

function VideoCard({ previewImage, videoId }: VideoCardProps) {
  const [play, setPlay] = useState(false)

  return (
    <div
      className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => setPlay(true)}
    >
      {!play ? (
        <>
          <img
            src={previewImage}
            alt="Vista previa"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white opacity-90" />
          </div>
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
    <div className="min-h-screen bg-gradient-to-b ">
      {/* Carrusel de Imágenes */}
      <div id="heroCarousel" className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px]">
        <img
          src="/imagenes/portada2.png"
          alt="Bienvenida"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center text-white py-20">
          {/* Puedes poner contenido aquí si deseas */}
        </div>
      </div>

      {/* Fondo blanco en lugar de imagen */}
      <div className="absolute inset-0 -z-10 bg-white" />


      {/* Capa translúcida sobre la imagen, una sola para toda la sección */}
      <div className="relative  sm:mx-6 lg:mx-12 xl:mx-20  backdrop-blur-md bg-black/10  shadow-lg px-4 sm:px-8 md:px-12 lg:px-20 py-12">

        {/* Contenido interno con margen interno adicional */}
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Actividades de la Semana
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center">
            Únete a nuestras actividades y fortalece tu fe
          </p>

          {/* Primera fila: 4 tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={`/imagenes/${["oracion.png", "Lunes.jpeg", "Martes.jpeg", "Jueves.jpeg"][i]}`}
                  alt=""
                  className="w-full h-48 sm:h-60 object-cover"
                />
                <div className="p-3 sm:p-4 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    {["Culto de Oración", "Altar Familiar", "Culto de Departamentos", "Estudio Bíblico"][i]}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    {["Lunes 6:00 PM - 7:00 PM", "Lunes", "Martes 6:00 PM - 7:30 PM", "Jueves 6:00 PM - 7:30 PM"][i]}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    {[
                      "Culto de Oración para buscar la presencia de Dios.",
                      "Un tiempo para buscar la presencia de Dios en tu hogar.",
                      "Reunión de jóvenes, adultos y niños.",
                      "Profundizando en la Palabra de Dios.",
                    ][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila: Células y Domingo */}
          <div className="col-span-full flex flex-col lg:flex-row justify-center gap-6 mt-10">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg w-full lg:w-[300px]">
              <img src="/imagenes/celulas.png" alt="Células de Crecimiento" className="w-full h-48 sm:h-60 object-cover" />
              <div className="p-3 sm:p-4 text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Células de Crecimiento</h3>
                <p className="text-sm sm:text-base text-gray-700">Miércoles, Viernes, Sábado</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Reuniones en casas de hermanos de la iglesia.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg w-full lg:w-[300px]">
              <img src="/imagenes/Domingo.jpeg" alt="Culto Dominical" className="w-full h-48 sm:h-60 object-cover" />
              <div className="p-3 sm:p-4 text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Culto Dominical</h3>
                <p className="text-sm sm:text-base text-gray-700">Domingo 09:00 AM - 11:00 PM</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Adoración, predicación y alabanza
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-13 px-4 max-w-7xl mx-auto">

          <p className="text-center text-gray-600 mb-12">Consulta rápidamente las actividades de cada día</p>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-7 min-w-[800px] bg-white border rounded-xl shadow">
              {Object.entries(schedule).map(([day, activities]) => (
                <div key={day} className="border-r last:border-r-0 px-4 py-6">
                  <h3 className="font-semibold text-lg text-blue-900 mb-4 text-center">{day}</h3>
                  {activities.length > 0 ? (
                    <ul className="space-y-3 text-sm text-gray-700">
                      {activities.map((activity, index) => (
                        <li key={index} className="flex items-start">
                          {activity.icon}
                          <span>
                            {activity.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-center text-gray-400 text-sm">—</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Sección de Videos */}
        <section className="py-16">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative h-[400px]">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">
              Videos de la Iglesia
            </h2>

            <div className="relative w-full h-full flex justify-center items-center">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`absolute transition-transform duration-300 cursor-pointer z-[${10 - i}] hover:z-50 hover:scale-105`}
                  style={{
                    transform: `translateX(${i * 165 - 210}px) rotate(${(i - 1.5) * 3}deg)`,
                  }}
                >
                  <div className="w-64 h-96 shadow-2xl rounded-xl overflow-hidden">
                    <VideoCard
                      previewImage={`/imagenes/i${4 - i}.jpeg`}
                      videoId={[
                        '1VNo8971RZJWnGGXKlK9qMyzDWRyDnnye',
                        '1VTGkiwb8ZBUbNO7uQtaDRzm4np2IF36d',
                        '1VQCBEHk26m746N0KNt99YnpTS9F1R0Wb',
                        '1VOZ8QUTiY-LIt3evG2upHdhEXU5MLzVc'
                      ][i]}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>





        {/* Información Importante */}
        <section className="py-16 bg-gradient-to-r ">
          <div className="container mx-auto px-4">
            {/* Título principal */}
            <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center text-gray-900">Nuestra Historia</h2>

            {/* Contenido dividido en columnas */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
              {/* Imagen */}
              <div>
                <img
                  src="/imagenes/historia.jpg"
                  alt="Historia de la Iglesia"
                  className="w-full h-full rounded-xl shadow-md object-cover rounded-xl border-4 border-grey-400 shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Texto */}
              <div className="text-gray-600 prose prose-lg max-w-none">
                <p className="mb-6 ">
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
                  <CardTitle className="text-2xl text-black-900 flex items-center gap-2">
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
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-3xl font-bold mb-4 text-center text-gray-900">Nuestros Valores</h2>
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


        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-900">Nuestros Pastores</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              {/* Pastor */}
              <Card className="flex flex-col justify-between text-center bg-white border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm rounded-xl">
                <CardHeader>
                  <img
                    src="/imagenes/Pastor2.png"
                    alt="Pastor Marcos Antonio Amaya Lizama"
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                  />
                  <CardTitle className="text-blue-900 text-lg">Pastor</CardTitle>
                  <CardDescription className="text-sm font-semibold">
                    Marcos Antonio Amaya Lizama
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 text-sm">
                    Fundador del Ministerio Centro Cristiano de Las Asambleas de Dios,
                    lidera la congregación con sabiduría y pasión por las almas. Durante más de seis décadas
                    de ministerio, el Pastor Amaya ha sido un testimonio vivo de compromiso inquebrantable
                    con su fe en el Señor y su vocación al servicio. Ha escrito tres libros, uno de ellos es
                    "Conociendo al Espíritu Santo" y sus predicaciones son transmitidas en Radio Shabach 93.3 FM.
                  </p>
                </CardContent>
              </Card>

              {/* Pastora */}
              <Card className="flex flex-col justify-between text-center bg-white border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm rounded-xl">
                <CardHeader>
                  <img
                    src="/imagenes/Pastora2.png"
                    alt="Pastora Gloria Amaya"
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                  />
                  <CardTitle className="text-blue-900 text-lg">Pastora</CardTitle>
                  <CardDescription className="text-sm font-semibold">
                    Marta Gloria Coreas de Amaya
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 text-sm">
                    La Hna. Gloria es una mujer de fe y entrega, apasionada por servir en el ministerio de mujeres
                    y apoyar activamente en el ministerio de servidores. Actualmente, forma parte del equipo
                    administrativo del Colegio Centro Cristiano, donde aporta con excelencia y compromiso.
                    Le apasiona llevar esperanza a través del evangelismo y las visitas a enfermos y personas desanimadas,
                    siendo un canal del amor de Dios donde más se necesita. Ha apoyado a su esposo en todos los proyectos
                    realizados hasta la fecha siendo una ayuda idónea y comprometida.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>



      </div>


    </div>

  )
}
