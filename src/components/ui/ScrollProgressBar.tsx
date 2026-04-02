'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Timeout to ensure ScrollTrigger is registered by SmoothScrollProvider
    const timer = setTimeout(() => {
      if (barRef.current) {
        gsap.to(barRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            scroller: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
          }
        })
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      ref={barRef}
      className="scroll-progress" 
      style={{ transform: 'scaleX(0)', width: '100%' }}
    />
  )
}
