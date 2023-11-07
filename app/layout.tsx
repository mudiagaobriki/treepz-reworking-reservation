import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

 
// Font files can be colocated inside of `app`
const switzer = localFont({
  src: './Switzer-Variable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Treepz App',
  description: 'Built with Next.js and TailwindCSS by Droomworks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${switzer.className}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
