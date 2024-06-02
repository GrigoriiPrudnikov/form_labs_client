'use client'

import { FIELDS } from '@/constants'
import { useFormStore } from '@/state'
import { nanoid } from 'nanoid'
import { FC } from 'react'
import { Icon } from '.'
import { Button, Card, Input, ScrollArea } from './ui'

export const Sidebar: FC = () => {
  const addField = useFormStore((state) => state.createField)

  return (
    <Card className="w-full h-full p-4 flex flex-col gap-4">
      <Input placeholder="Search fields" />{' '}
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-4">
          {FIELDS.map((group) => (
            <div key={group.label}>
              <div className="text-sm text-center text-zinc-500">
                {group.label}
              </div>
              <div className="flex flex-col gap-2">
                {group.elements.map((elem) => (
                  <Button
                    key={elem.type}
                    variant="outline"
                    className="flex justify-start h-12 px-2 gap-2"
                    onClick={() =>
                      addField({
                        id: nanoid(),
                        label: '',
                        placeholder: '',
                        description: '',
                        type: elem.type,
                        isRequired: false,
                      })
                    }
                  >
                    <Icon name={elem.icon} />

                    {elem.name}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
