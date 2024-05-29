import { FieldType, IField } from '@/interfaces'
import { log } from 'console'
import { FC } from 'react'

interface Props {
	field: IField
}

export const DesignField: FC<Props> = ({ field }: Props) => {
	const icon: string = {
		[FieldType.SHORT_ANSWER]: 'type',
		[FieldType.PARAGRAPH]: 'align-left',
		[FieldType.EMAIL]: 'mail',
		[FieldType.NUMBER]: 'sigma',
		[FieldType.PHONE]: 'phone',
		[FieldType.SELECT]: 'square-mouse-pointer',
		[FieldType.CHECKBOX]: 'check-check',
		[FieldType.DATE]: 'calendar-days',
	}[field.type]	

	return <div>{field.type}</div>
}
