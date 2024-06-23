'use client'

import { IField } from '@/interfaces'
import { useExandedFieldStore, useFormStore } from '@/state'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Icon } from '.'
import { DeleteFieldIcon } from './deleteFieldIcon'
import { FieldIcon } from './fieldIcon'
import {
  Button,
  Card,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Label,
  Switch,
} from './ui'

const formSchema = z.object({
  label: z.string(),
  placeholder: z.string(),
  description: z.string(),
  isRequired: z.boolean(),
})

export const DesignField: FC<{ field: IField }> = ({
  field,
}: {
  field: IField
}) => {
  const { label, placeholder, description, isRequired, type, index } = field

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: label,
      placeholder: placeholder,
      description: description,
      isRequired: isRequired,
    },
  })
  const { updateField, deleteField } = useFormStore((store) => store)
  const { id, setId } = useExandedFieldStore((store) => store)
  const isExpanded = id === field.id

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateField({
      id: field.id,
      type: type,
      index: index,
      ...values,
    })
  }

  const requiredMark = <span className="text-red-500">*</span>

  if (!isExpanded)
    return (
      <Card
        className="p-4 flex flex-col gap-2 cursor-grab"
        onClick={() => setId(field.id)}
      >
        <Label htmlFor="field">
          {label === '' ? 'Label' : label} {isRequired && requiredMark}
        </Label>
        <Input
          id="field"
          placeholder={type}
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
          readOnly
        />
      </Card>
    )

  return (
    <Card className="p-4 flex flex-col gap-2 cursor-grab">
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
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <DeleteFieldIcon field={field} deleteField={deleteField} />
              {/* <Button variant="outline" size="icon" className="h-8 w-8">
                <Icon name="copy" className="h-4 w-4" />
              </Button> */}
            </div>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </Card>
  )
}
