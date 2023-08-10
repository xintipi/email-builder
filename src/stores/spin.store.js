import { create } from 'zustand'

export const useSpin = create((set) => {
  return {
    spinning: false,
    setSpinning: (spinning) => {
      set(() => ({ spinning }))
    },
  }
})
