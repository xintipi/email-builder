import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useGlobalStore = create(
  persist(
    (set, get) => ({
      selectedTemplate: null,
      setSelectedTemplate: (template) => {
        set(() => ({ selectedTemplate: template }))
      },
    }),
    {
      name: 'emailbuilder.global.storage',
      version: '1.0.0',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ selectedTemplate: state.selectedTemplate }),
    }
  )
)
