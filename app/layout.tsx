import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ministerio Centro Cristiano",
  description: "Una comunidad de fe dedicada a servir a Dios y a nuestra comunidad con amor y esperanza.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
         <!-- Bootstrap -->
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        
          <!-- Favicon para todos los navegadores -->
          <link rel="icon" href="/imagenes/logo1.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/imagenes/logo1.ico" type="image/x-icon" />
        
          <!-- Apple Touch Icon (puede ser opcional si quieres dejar solo uno) -->
          <link rel="apple-touch-icon" sizes="180x180" href="/imagenes/logo1.ico" />
        
          <!-- Schema.org para el logo (SEO y Google Knowledge Panel) -->
          <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ministerio Centro Cristiano",
              "url": "https://ministeriocc.com",
              "logo": "https://ministeriocc.com/imagenes/logo1.ico"
            }
          </script>
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
