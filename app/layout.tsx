import type React from "react"
import type { Metadata } from "next"
import { Cinzel, Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Band - Pirate Metal",
  description: "Official website of Your Band - Pirate Metal from the Seven Seas",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} ${cinzel.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
