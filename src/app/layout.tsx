import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar'
import { PageTransition } from '@/components/ui/PageTransition'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Buzzinhyd | Food & Restaurant Marketing Agency — Hyderabad',
  description: 'Buzzinhyd is Hyderabad\'s premier food and restaurant marketing agency. We craft cinematic content, brand stories, and campaigns that turn food into feelings.',
  keywords: ['food marketing', 'restaurant marketing', 'food photography', 'Hyderabad', 'content strategy', 'Buzzinhyd'],
  openGraph: {
    title: 'Buzzinhyd | We Don\'t Sell Food. We Sell Feelings.',
    description: 'Hyderabad\'s premier restaurant marketing agency — food photography, videography, social media, and brand strategy.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Buzzinhyd',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgressBar />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
