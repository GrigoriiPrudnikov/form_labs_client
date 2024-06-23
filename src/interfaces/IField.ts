export enum FieldType {
  SHORT_ANSWER = 'Short Answer',
  PARAGRAPH = 'Paragraph',
  EMAIL = 'Email',
  NUMBER = 'Number',
  PHONE = 'Phone',
  // DATE = 'Date',
}

export interface IField {
  id: string
  type: FieldType
  label: string
  description: string
  placeholder: string
  isRequired: boolean
  index: number
  options?: {
    from?: number
    to?: number
  }
}
