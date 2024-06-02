import { Header, ThemeProvider } from '@/components'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '800'] })

export const metadata: Metadata = {
  title: 'form_labs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'w-screen min-h-screen bg-white dark:bg-black text-black dark:text-white',
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
