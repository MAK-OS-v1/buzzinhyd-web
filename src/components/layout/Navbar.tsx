'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Youtube } from 'lucide-react'

const LINKS = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    
    // Check initial position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = 'hidden'
      // Use Lenis pause if available via global
      // If we strictly wanted to couple, we'd use useLenis, but simplest is via body style
    } else {
      document.documentElement.style.overflow = ''
    }
    
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || menuOpen 
            ? 'py-4' 
            : 'py-8'
        }`}
        style={{
          backgroundColor: scrolled && !menuOpen ? 'rgba(250, 246, 239, 0.92)' : 'transparent',
          backdropFilter: scrolled && !menuOpen ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled && !menuOpen ? 'blur(16px)' : 'none',
          borderBottom: scrolled && !menuOpen ? '1px solid rgba(160, 120, 48, 0.15)' : '1px solid transparent'
        }}
      >
        <div className="container flex justify-between items-center">
          {/* Logotype */}
          <Link 
            href="/" 
            className="font-display italic text-[22px] tracking-wide relative z-[60]"
            style={{ color: menuOpen ? 'var(--bh-text)' : 'var(--bh-text)' }}
            onClick={() => setMenuOpen(false)}
          >
            BUZZINHYD
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {LINKS.map(link => (
              <Link 
                key={link.name} 
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 relative group overflow-hidden"
                style={{ color: 'var(--bh-text)' }}
              >
                <span className="group-hover:text-[var(--bh-gold)] transition-colors duration-300">
                  [{link.name}]
                </span>
                
                {/* Underline slide down/up */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--bh-gold)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden relative z-[60] w-8 h-8 flex flex-col justify-center gap-1.5 focus:outline-none interactive"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-full h-[1.5px] block transition-colors duration-300"
              style={{ backgroundColor: 'var(--bh-text)' }}
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-[1.5px] block transition-colors duration-300"
              style={{ backgroundColor: 'var(--bh-text)' }}
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-full h-[1.5px] block transition-colors duration-300"
              style={{ backgroundColor: 'var(--bh-text)' }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between pt-32 pb-12 px-6"
            style={{ backgroundColor: 'var(--bh-warm)' }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {LINKS.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + (i * 0.08), ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link 
                      href={link.href}
                      className="font-display text-5xl flex items-center gap-4"
                      style={{ color: 'var(--bh-text)' }}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text-[var(--bh-gold)] font-mono text-xs mb-4">0{i+1}.</span>
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="border-t border-[rgba(160,120,48,0.15)] pt-8 flexjustify-between items-end flex gap-4"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs" style={{ color: 'var(--bh-muted)' }}>Say Hello</span>
                <a href="mailto:hi@buzzinhyd.com" className="font-display text-xl" style={{ color: 'var(--bh-text)' }}>hi@buzzinhyd.com</a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[var(--bh-gold)] flex items-center justify-center text-[var(--bh-text)]">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[var(--bh-gold)] flex items-center justify-center text-[var(--bh-text)]">
                  <Youtube size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
