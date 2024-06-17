import { FC } from 'react'
import { Button } from './ui'
import Link from 'next/link'

export const Footer: FC = () => (
  <footer className="p-4 text-center text-zinc-500 dark:zinc-400 flex flex-col gap-4">
    Built by Grigorii Prudnikov 2024
    <div className="flex justify-center  gap-8">
      <Button variant="outline" asChild>
        <Link href="https://github.com/GrigoriiPrudnikov" target="_blank">
          Github
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="https://t.me/GrigoriiPrudnikov" target="_blank">
          Telegram
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="mailto:griprudnikov742@gmail.com" target="_blank">
          Gmail
        </Link>
      </Button>
    </div>
  </footer>
)
