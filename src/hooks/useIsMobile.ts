'use client'

import { useState, useEffect } from 'react'

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we are on client side
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < breakpoint)
      }
      
      // Initial check
      checkIsMobile()
      
      // Listen for window resize
      window.addEventListener('resize', checkIsMobile)
      
      return () => {
        window.removeEventListener('resize', checkIsMobile)
      }
    }
  }, [breakpoint])

  return isMobile
}
