import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Notifications from '@/components/Notifications'
import Navbar from '@/components/Navbar'
import Footers from '@/components/Footers'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'khouloud Restaurant',
  description: 'delicious food ever!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Notifications />
          <Navbar />
          {children}
          <Footers />
        </AuthProvider>
      </body>
    </html>
  )
}
