'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Wait a tick for DOM to be ready
    const timer = setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger)

      // Initialize AOS
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
      })

      // Exact Lenis settings from spec
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true, /* Actually, smoothTouch in latest lenis is just implicitly handled, but let's conform to the spec if possible or the closest equivalent in v1.1 */
        smoothTouch: false, // CRITICAL: false on touch prevents janky mobile scroll
        touchMultiplier: 2,
        infinite: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)

      // Sync Lenis with GSAP ticker
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      gsap.ticker.lagSmoothing(0)

      // Wire GSAP ScrollTrigger to use Lenis scroll position
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (arguments.length) {
            lenis.scrollTo(value as number, { immediate: true })
          }
          return lenis.scroll
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        },
        pinType: (document.body.style.transform ? 'transform' : 'fixed') as 'transform' | 'fixed',
      })

      lenis.on('scroll', ScrollTrigger.update)

      return () => {
        lenis.destroy()
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000)
        })
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return isMounted ? <>{children}</> : null
}
