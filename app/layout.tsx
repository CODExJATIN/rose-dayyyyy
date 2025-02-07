import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rose Day',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
<link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Inconsolata:wght@200..900&family=Jersey+10&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Oswald:wght@200..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
