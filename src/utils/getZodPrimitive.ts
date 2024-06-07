import { FieldType } from '@/interfaces'
import { isInt, isMobilePhone, isEmail, isEmpty } from 'validator'
import { z } from 'zod'

export const getZodPrimitive = (type: FieldType, isRequired?: boolean) => {
  const primitive = {
    [FieldType.SHORT_ANSWER]: z.string(),
    [FieldType.PARAGRAPH]: z.string(),
    [FieldType.EMAIL]: z.string().refine(isEmail, {
      message: 'Your input is not a valid email',
    }),
    [FieldType.NUMBER]: z.string().refine(isInt),
    [FieldType.PHONE]: z.string().refine(isMobilePhone, {
      message: 'Your input is not a valid phone number',
    }),
    // [FieldType.DATE]: z.string().min(1, { message: 'Required' }),
  }[type]

  if (isRequired)
    return primitive.refine((val) => !isEmpty(val.trim()), {
      message: 'Required',
    })

  return primitive.optional()
}
