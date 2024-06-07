'use client'

import { PreviewField, Sidebar } from '@/components'
import { DesignField } from '@/components/designField'
import { Button, Card, Form, ScrollArea } from '@/components/ui'
import { useFormStore } from '@/state'
import { getZodPrimitive } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function Page() {
  const fields = useFormStore((state) => state.fields)

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
    fields.forEach(elem => {
      form.setValue(elem.id, '');
    });
  }

  return (
    <main className="flex gap-4 p-4">
      {/* Sidebar */}
      <div className="w-1/6 h-[calc(100vh-5.5rem)]">
        <Sidebar />
      </div>
      {/* Design */}
      <div className="w-1/2 h-[calc(100vh-5.5rem)]">
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
      <div className="w-1/3 h-[calc(100vh-5.5rem)]">
        <Card className="w-full h-full">
          <ScrollArea className="h-full w-full">
            <Form {...form}>
              <form
                className="p-4 flex flex-col gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {fields.map((elem) => (
                  <PreviewField
                    key={elem.id}
                    field={elem}
                    form={form}
                  />
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
