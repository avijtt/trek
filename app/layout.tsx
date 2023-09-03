import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
 
 
export const metadata: Metadata = {
  title: 'ADVENTURER AWAITS!',
  description: 'Discover the best place to travel in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
