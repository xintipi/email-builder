'use client'

import { useState, useEffect } from 'react'

const isBrowser = () => typeof window !== 'undefined'
function useResize(debounceTime = 0) {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    const debouncedResize = debounce(handleResize, debounceTime)

    window.addEventListener('resize', debouncedResize)

    return () => {
      window.removeEventListener('resize', debouncedResize)
    }
  }, [debounceTime])

  return windowSize
}

function debounce(func, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

export { useResize }
