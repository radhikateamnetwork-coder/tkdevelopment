import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  title: 'Tushar | Web Design & Development',
  description: 'Professional Web Design, Development, and SEO Services. We build modern, fast, and SEO-optimized websites that help your business grow.',
  keywords: 'web design, web development, SEO, UI/UX design, e-commerce, Delhi',
  authors: [{ name: 'Tushar' }],
  openGraph: {
    title: 'Tushar | Web Design & Development',
    description: 'Professional Web Design, Development, and SEO Services',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://tushar.dev',
    siteName: 'Tushar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tushar | Web Design & Development',
    description: 'Professional Web Design, Development, and SEO Services',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}