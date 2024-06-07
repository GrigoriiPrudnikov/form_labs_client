'use client'

import { IField } from '@/interfaces'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Button,
  Card,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Switch,
} from './ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldIcon } from './fieldIcon'
import { useFormStore } from '@/state'
import { DeleteFieldIcon } from './deleteFieldIcon'

const formSchema = z.object({
  label: z.string(),
  placeholder: z.string(),
  description: z.string(),
  isRequired: z.boolean(),
  from: z.number().optional(),
  to: z.number().optional(),
})

export const DesignField: FC<{ field: IField }> = ({
  field,
}: {
  field: IField
}) => {
  const { label, placeholder, description, isRequired } = field

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: label,
      placeholder: placeholder,
      description: description,
      isRequired: isRequired,
      from: field?.options?.from,
      to: field?.options?.to,
    },
  })
  const { updateField, deleteField } = useFormStore((store) => store)

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateField({
      id: field.id,
      type: field.type,
      ...values,
    })
    console.log(values)
  }

  return (
    <Card className="p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FieldIcon type={field.type} />
              {field.type}
            </div>
            <FormField
              control={form.control}
              name="isRequired"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Mark as required</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input placeholder="Label" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="placeholder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Placeholder</FormLabel>
                  <FormControl>
                    <Input placeholder="Placeholder" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* {field.type === FieldType.NUMBER && (
              <div className="flex justify-between">
                <FormField
                  control={form.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From</FormLabel>
                      <FormControl>
                        <Input placeholder="123" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="to"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>To</FormLabel>
                      <FormControl>
                        <Input placeholder="123" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            )} */}
          </div>
          <div className="flex justify-between items-center">
            <DeleteFieldIcon field={field} deleteField={deleteField} />
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </Card>
  )
}
