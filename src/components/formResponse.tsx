import { FC } from 'react'
import { Card, ScrollArea } from './ui'

export const FormResponse: FC = () => (
  <main className="flex gap-4 p-4 pt-0">
    <div className="w-full h-[calc(100vh-8rem)]">
      <Card className='w-full h-full'>
        <ScrollArea></ScrollArea>
      </Card>
    </div>
  </main>
)
