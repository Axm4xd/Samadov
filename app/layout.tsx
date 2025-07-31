import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./styles/components.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samadov Animation Studio",
  description: "Professional animation and visual effects studio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
