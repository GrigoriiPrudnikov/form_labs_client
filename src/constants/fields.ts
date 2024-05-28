export const fields = [
	{
		label: 'Text elements',
		elements: [
			{
				id: 'short_answer',
				name: 'Short Answer',
				icon: 'type',
			},
			{
				id: 'paragraph',
				name: 'Paragraph',
				icon: 'align-left',
			},
			{
				id: 'email',
				name: 'Email',
				icon: 'mail',
			},
		],
	},
	{
		label: 'Number elements',
		elements: [
			{
				id: 'number',
				name: 'Number',
				icon: 'sigma',
			},
			{
				id: 'phone',
				name: 'Phone',
				icon: 'phone',
			},
		],
	},
	{
		label: 'Multiple choice',
		elements: [
			{
				id: 'select',
				name: 'Select',
				icon: 'square-mouse-pointer',
			},
			{
				id: 'checkbox',
				name: 'Checkbox',
				icon: 'check-check',
			},
		],
	},
	{
		label: 'Other',
		elements: [
			{
				id: 'date',
				name: 'Date',
				icon: 'square-mouse-pointer',
			},
		],
	},
] as const
