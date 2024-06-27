import { ThemeProvider } from '@/components'
import { Toaster } from '@/components/ui'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '800'] })

export const metadata: Metadata = {
  title: 'form_labs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'w-screen min-h-screen bg-white dark:bg-black text-black dark:text-white',
          jetbrains_mono.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
