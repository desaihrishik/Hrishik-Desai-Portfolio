import type React from "react"
import type { Metadata } from "next"
import { DM_Mono, DM_Sans, Newsreader } from "next/font/google"
import "./globals.css"

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
})

export const metadata: Metadata = {
  title: "hrishik.",
  description:
    "Portfolio of Hrishik B. Desai, an NYU Computer Engineering master's student focused on AI/ML, data science, analytics, and scalable intelligent systems.",
  icons: {
    icon: "/hrishik-profile.png",
    shortcut: "/hrishik-profile.png",
    apple: "/hrishik-profile.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}
