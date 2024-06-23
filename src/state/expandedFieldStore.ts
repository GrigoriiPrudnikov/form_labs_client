import { create } from 'zustand'

interface State {
  id: string | null
}

interface Action {
  setId: (id: string) => void
}

export const useExandedFieldStore = create<State & Action>()((set) => ({
  id: null,
  setId: (id) => set(() => ({ id })),
}))
