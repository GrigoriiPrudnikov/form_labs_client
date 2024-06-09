import { IField } from '@/interfaces'
import { nanoid } from 'nanoid'
import { create } from 'zustand'

interface State {
  id: string
  name: string
  fields: IField[]
}

interface Action {
  updateName: (name: string) => void
  createField: (field: IField) => void
  updateField: (field: IField) => void
  deleteField: (field: IField) => void
}

export const useFormStore = create<State & Action>()((set) => ({
  id: nanoid(),
  name: 'Untitled form',
  fields: [],
  updateName: (name: string) => set({ name }),
  createField: (field) => set((state) => ({ fields: [...state.fields, field] })),
  updateField: (field) =>
    set((state) => ({
      fields: state.fields.map((elem) => (elem.id === field.id ? field : elem)),
    })),
  deleteField: (field) =>
    set((state) => ({
      fields: state.fields.filter((elem) => elem.id !== field.id),
    })),
}))
