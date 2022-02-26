import { useEffect, useState } from 'react'

export const useIsBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => {
    try {
      setIsBrowser(typeof window !== 'undefined')
    } catch (error) {
      console.error(error)
      setIsBrowser(false)
    }
  }, [])

  return isBrowser
}
