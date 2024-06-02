import { IField } from '@/interfaces'
import { create } from 'zustand'

interface FormState {
  fields: IField[]
  createField: (field: IField) => void
  updateField: (field: IField) => void
  deleteField: (field: IField) => void
}

export const useFormStore = create<FormState>()((set) => ({
  fields: [],
  createField: (field) =>
    set((state) => ({ fields: [...state.fields, field] })),
  updateField: (field) =>
    set((state) => ({
      fields: state.fields.map((elem) => (elem.id === field.id ? field : elem)),
    })),
  deleteField: (field) =>
    set((state) => ({
      fields: state.fields.filter((elem) => elem.id !== field.id),
    })),
}))
