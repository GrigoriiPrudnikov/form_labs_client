import { FieldType, IField } from '@/interfaces'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from './ui'
import { Textarea } from './ui/textarea'

interface Props {
  field: IField
  form: UseFormReturn
}

export const PreviewField: FC<Props> = ({ field, form }: Props) => {
  const { id, type, label, description, placeholder, isRequired } = field

  const requiredMark = <span className="text-red-500">*</span>

  if (!label && !description && !placeholder) return null

  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} {isRequired && requiredMark}
          </FormLabel>
          <FormControl>
            {type === FieldType.PARAGRAPH ? (
              <Textarea placeholder={placeholder} {...field} />
            ) : (
              <Input placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  )
}
