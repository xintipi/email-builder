'use client'

import { HistoryContext, useRouteHistory } from '@/hooks/use-route-history'

export const HistoryProvider = ({ children }) => {
  const historyProps = useRouteHistory()

  return (
    <HistoryContext.Provider
      value={{
        ...historyProps,
      }}>
      {children}
    </HistoryContext.Provider>
  )
}

export default HistoryProvider
