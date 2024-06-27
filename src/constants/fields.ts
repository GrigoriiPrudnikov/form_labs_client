import { FieldType } from '@/interfaces'

export const FIELDS = [
  {
    label: 'Text elements',
    elements: [
      {
        type: FieldType.SHORT_ANSWER,
        name: 'Short Answer',
        icon: 'type',
      },
      {
        type: FieldType.PARAGRAPH,
        name: 'Paragraph',
        icon: 'align-left',
      },
      {
        type: FieldType.EMAIL,
        name: 'Email',
        icon: 'mail',
      },
    ],
  },
  {
    label: 'Number elements',
    elements: [
      {
        type: FieldType.NUMBER,
        name: 'Number',
        icon: 'sigma',
      },
      {
        type: FieldType.PHONE,
        name: 'Phone',
        icon: 'phone',
      },
    ],
  },
  // {
  //   label: 'Multiple choice',
  //   elements: [
  //     {
  //       type: FieldType.SELECT,
  //       name: 'Select',
  //       icon: 'square-mouse-pointer',
  //     },
  //     {
  //       type: FieldType.CHECKBOX,
  //       name: 'Checkbox',
  //       icon: 'check-check',
  //     },
  //   ],
  // },
  // {
  //   label: 'Other',
  //   elements: [
  //     {
  //       type: FieldType.DATE,
  //       name: 'Date',
  //       icon: 'calendar-days',
  //     },
  //   ],
  // },
] as const
