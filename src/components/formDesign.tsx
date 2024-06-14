'use client'

import { FC } from 'react'
import { DesignField, PreviewField, Sidebar } from '.'
import { Button, Card, Form, ScrollArea } from './ui'
import { useFormStore } from '@/state'
import { getZodPrimitive } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const FormDesign: FC = () => {
  const fields = useFormStore((state) => state.fields)
  const name = useFormStore((state) => state.name)

  const schema: Record<string, any> = {}

  fields.map((elem) => {
    schema[elem.id] = getZodPrimitive(elem.type, elem.isRequired)
  })

  const formSchema = z.object(schema)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    fields.forEach((elem) => {
      form.setValue(elem.id, '')
    })
  }

  return (
    <main className="flex gap-4 p-4 pt-0">
      {/* Sidebar */}
      <div className="w-1/6 h-[calc(100vh-8rem)]">
        <Sidebar />
      </div>
      {/* Design */}
      <div className="w-1/2 h-[calc(100vh-8rem)]">
        <Card className="w-full h-full">
          <ScrollArea className="h-full w-full">
            <div className="p-4 flex flex-col gap-4">
              {fields.map((elem) => (
                <DesignField key={elem.id} field={elem} />
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
      {/* Preview */}
      <div className="w-1/3 h-[calc(100vh-8rem)]">
        <Card className="w-full h-full">
          <ScrollArea className="h-full w-full">
            <Form {...form}>
              <form className="p-4 flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="text-2xl text-center">{name}</div>
                {fields.map((elem) => (
                  <PreviewField key={elem.id} field={elem} form={form} />
                ))}
                {fields.length > 0 && (
                  <Button className="w-full" type="submit">
                    Reset
                  </Button>
                )}
              </form>
            </Form>
          </ScrollArea>
        </Card>
      </div>
    </main>
  )
}
