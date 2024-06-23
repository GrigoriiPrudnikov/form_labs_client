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
  createField: (field: Omit<IField, 'index'>) => void
  updateField: (field: IField) => void
  deleteField: (field: IField) => void
  setFields: (fields: IField[]) => void
}

export const useFormStore = create<State & Action>()((set) => ({
  id: nanoid(),
  name: 'Untitled form',
  fields: [],
  updateName: (name: string) => set({ name }),
  createField: (field) =>
    set((state) => {
      const index =
        state.fields.length < 1
          ? 0
          : state.fields[state.fields.length - 1].index + 1

      return {
        fields: [
          ...state.fields,
          {
            ...field,
            index,
          },
        ],
      }
    }),
  updateField: (field) =>
    set((state) => ({
      fields: state.fields.map((elem) => (elem.id === field.id ? field : elem)),
    })),
  deleteField: (field) =>
    set((state) => ({
      fields: state.fields.filter((elem) => elem.id !== field.id),
    })),
  setFields: (fields) => {
    set(() => ({
      fields: fields.map((elem, index) => ({
        ...elem,
        index,
      })),
    }))
    console.log(
      fields.map((elem, index) => ({
        ...elem,
        index,
      })),
    )
  },
}))
