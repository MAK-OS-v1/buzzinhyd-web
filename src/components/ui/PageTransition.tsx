'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="min-h-screen flex flex-col">
        {children}
        
        {/* Wipe effect (Luxury Light theme: warm ivory overlay) */}
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          style={{ background: 'var(--bh-warm)' }}
          initial={{ y: '100%' }}
          animate={{ y: '100%' }}
          exit={{ y: '0%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          style={{ background: 'var(--bh-warm)' }}
          initial={{ y: '0%' }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
