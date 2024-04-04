import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { dbConnect } from '@/services/mongo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food-Recipe App',
  description: 'A food recipe app built with Next.js and DaisyUI.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const conn = await dbConnect();
  console.log(conn);
  return (
    <html lang="en">
      
        <body className={inter.className}>
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        </body>
      
    </html>
  )
}
