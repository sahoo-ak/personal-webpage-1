import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Dr. Aloka Kumar Sahoo - Theoretical Physicist",
  description: "Personal website of Dr. Aloka Kumar Sahoo, Postdoctoral Researcher in Theoretical Physics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'