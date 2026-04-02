'use client'

import { useState, useEffect } from 'react'

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    normX: 0,
    normY: 0
  })

  useEffect(() => {
    // Skip if touch device
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const updateMousePosition = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      const normX = (x / window.innerWidth) * 2 - 1
      const normY = -(y / window.innerHeight) * 2 + 1

      setMousePosition({ x, y, normX, normY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}
