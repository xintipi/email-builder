import { useState, useEffect } from 'react'

const usePreviousPath = (pathName) => {
  const [previousPath, setPreviousPath] = useState('')

  useEffect(() => {
    const pathArray = pathName.split('/')
    pathArray.pop()
    setPreviousPath(pathArray.join('/'))
  }, [pathName])

  return previousPath
}

export { usePreviousPath }
