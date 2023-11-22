import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Notifications from '@/components/Notifications'
import Navbar from '@/components/Navbar'
import Footers from '@/components/Footers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} scrollbar-hide>
        <Notifications />
        <Navbar />
        {children}
        <Footers />
      </body>
    </html>
  )
}
