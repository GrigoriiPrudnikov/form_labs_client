export enum FieldType {
	SHORT_ANSWER = 'Short Answer',
	PARAGRAPH = 'Paragraph',
	EMAIL = 'Email',
	NUMBER = 'Number',
	PHONE = 'Phone',
	SELECT = 'Select',
	CHECKBOX = 'Checkbox',
	DATE = 'Date',
}

export interface IField {
	id: string
	type: FieldType
	label: string
	description: string
	placeholder: string
	isRequired: boolean
	options?: {
		from?: number
		to?: number
		items?: string[]
	}
}
