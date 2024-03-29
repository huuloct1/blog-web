import React from 'react'
import './globals.css'
import { roboto } from '@/app/ui/fonts'

import Header from './ui/components/Header'
import Footer from './ui/components/Footer'
import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'MyDev',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${roboto.className} antialiased min-h-screen bg-gray-100`}>
        <Header />
        <div className='mt-12'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
