import { IField } from '@/interfaces'
import { create } from 'zustand'

interface FormState {
	fields: IField[]
	addField: (field: IField) => void
}

export const useFormStore = create<FormState>()(set => ({
	fields: [],
	addField: field => {
		set(state => ({ fields: [...state.fields, field] }))
	},
}))
