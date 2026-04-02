'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Hide entirely on mobile/touch interfaces
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    setIsVisible(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if hovering an interactive element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: isHovering ? 0 : 1,
          scale: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'var(--bh-gold)' : 'rgba(26, 18, 8, 0.3)',
          opacity: 1
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
