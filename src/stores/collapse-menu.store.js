import { create } from 'zustand'

export const useCollapseMenuStore = create((set) => {
  return {
    collapsed: false,
    setCollapsed: (collapsed) => {
      set(() => ({ collapsed }))
    },
  }
})
