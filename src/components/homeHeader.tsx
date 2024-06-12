import { cn } from '@/lib/utils'
import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'
import { ModeToggle } from '.'
import { Button } from './ui'

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] })

export const HomeHeader: FC = () => (
  <header className="px-4 w-full h-14 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
    <div className="flex items-center gap-4">
      <div className={cn('text-xl', jetbrains_mono.className)}>
        <Link href="/">form_labs</Link>
      </div>
      <nav className="flex items-center">
        <Button variant="ghost" asChild>
          <Link href="/design">New</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/templates">Templates</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="https://github.com/GrigoriiPrudnikov/form_labs_client">
            Github
          </Link>
        </Button>
      </nav>
    </div>
    <div className="flex gap-2">
      <Button variant="outline" asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/signup">Sign up</Link>
      </Button>
    </div>
  </header>
)
