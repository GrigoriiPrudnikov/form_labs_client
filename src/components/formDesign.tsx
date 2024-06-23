'use client'

import { FieldType } from '@/interfaces'
import { useFormStore } from '@/state'
import { getZodPrimitive } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Reorder } from 'framer-motion'
import { nanoid } from 'nanoid'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { DesignField, Icon } from '.'
import { Button } from './ui'

export const FormDesign: FC = () => {
  const { fields, createField, setFields } = useFormStore((state) => state)

  const schema: Record<string, any> = {}

  fields.map((elem) => {
    schema[elem.id] = getZodPrimitive(elem.type, elem.isRequired)
  })

  const formSchema = z.object(schema)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <main className="flex justify-center gap-4 p-4 pt-0">
      <div className="w-1/3 flex flex-col gap-4">
        <Reorder.Group
          values={fields}
          onReorder={setFields}
          className="flex flex-col gap-4"
        >
          {fields.map((elem) => (
            <Reorder.Item
              key={elem.id}
              value={elem}
            >
              <DesignField field={elem} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <Button
          variant="outline"
          className="w-full h-20"
          onClick={() =>
            createField({
              id: nanoid(),
              type: FieldType.SHORT_ANSWER,
              label: '',
              description: '',
              placeholder: '',
              isRequired: false,
            })
          }
        >
          <Icon name="plus" className="w-7 h-7" />
        </Button>
      </div>
    </main>
  )
}
