'use client'

import { FieldType, IField } from '@/interfaces'
import { FC, useState } from 'react'
import { Icon } from './icon'
import { Card, Switch } from './ui'

export const DesignField: FC<{ field: IField }> = ({
	field,
}: {
	field: IField
}) => {
	const icon = {
		[FieldType.SHORT_ANSWER]: 'type',
		[FieldType.PARAGRAPH]: 'align-left',
		[FieldType.EMAIL]: 'mail',
		[FieldType.NUMBER]: 'sigma',
		[FieldType.PHONE]: 'phone',
		[FieldType.SELECT]: 'square-mouse-pointer',
		[FieldType.CHECKBOX]: 'check-check',
		[FieldType.DATE]: 'calendar-days',
	}[field.type]

	const [fieldParams, setFieldParams] = useState(field)
	
	const setIsRequired = () =>
		setFieldParams(prev => ({
			...prev,
			isRequired: !prev.isRequired,
		}))

	return (
		<Card className='p-4'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-2'>
					<div className='h-8 w-8 flex justify-center items-center rounded-md border border-zinc-200 dark:border-zinc-800'>
						{/* @ts-ignore */}
						<Icon name={icon} className='h-4 w-4' />
					</div>
					{field.type}
				</div>
				<div className='flex items-center gap-2'>
					<div>Mark as required</div>
					<Switch
						checked={fieldParams.isRequired}
						onCheckedChange={() => setIsRequired()}
					/>
				</div>
			</div>
			<div></div>
			<div></div>
		</Card>
	)
}
