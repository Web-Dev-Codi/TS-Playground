import Link from 'next/link';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web-Dev-Codi Next.js Typescript Test',
  description: 'Testing Typescript with Next.js from the netninja Typescript course',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href="/contact"></Link>
        {children}
      
      </body>
    </html>
  )
}
