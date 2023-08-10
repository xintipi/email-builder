'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect, createContext, useCallback } from 'react'

export const HistoryContext = createContext()

export const useRouteHistory = () => {
  const asPath = usePathname()
  const [history, setHistory] = useState([asPath])
  const lastHistoryIndex = history.length - 2
  const previousRoute = history[lastHistoryIndex > 0 ? lastHistoryIndex : 0]

  const removeHistoryItem = useCallback(
    (prevHistory, item) => prevHistory.filter((_, index) => index !== item),
    []
  )

  const removeHistory = () => {
    setHistory((prevHistory) =>
      prevHistory.length > 1 ? removeHistoryItem(prevHistory, prevHistory.length - 1) : prevHistory
    )
  }

  useEffect(() => {
    setHistory((prevHistory) =>
      prevHistory[prevHistory.length - 1] !== asPath
        ? [...(prevHistory.length > 9 ? removeHistoryItem(prevHistory, 0) : prevHistory), asPath]
        : prevHistory
    )
  }, [asPath, removeHistoryItem])

  return { history, previousRoute, removeHistory }
}
