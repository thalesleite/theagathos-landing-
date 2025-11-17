import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agathos Books — Livros em português, direto pra Irlanda",
  description:
    "Estamos montando o primeiro catálogo da Agathos Books. Indique livros, ganhe 10% no lançamento e ajude a construir a livraria da comunidade.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Agathos Books",
    description:
      "Livros em português, direto pra Irlanda. Indique títulos e ganhe 10% no lançamento.",
    url: "https://agathosbooks.ie",
    siteName: "Agathos Books",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "pt_PT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body
        className={`${inter.className} min-h-screen bg-[var(--brand-bg)] text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
