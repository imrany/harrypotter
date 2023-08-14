import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'

const roboto = Roboto({ subsets:['cyrillic'],style: ['italic','normal'],fallback: ['system-ui', 'arial'],weight: ["100", "300", "400", "500", "700", "900"]  })

export const metadata: Metadata = {
  title: 'Harry Potter',
  description: 'Using the Harry potter API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
