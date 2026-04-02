'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { BHImage } from '@/components/ui/BHImage'

const CATEGORIES = ['All', 'Food Photography', 'Videography', 'Social Content', 'Campaigns']

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <div className="bg-[var(--bh-warm)] text-[var(--bh-text)] min-h-screen">
      <section className="w-full pt-32 pb-24">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Hero */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h1 
            className="font-display italic text-6xl md:text-[120px] mb-6 overflow-hidden flex"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
          >
            {"THE WORK".split('').map((char, i) => (
              <motion.span key={i} variants={letterVariants}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.span 
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Campaigns · Shoots · Stories
          </motion.span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrapjustify-center mb-16 gap-3 mx-auto justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat 
                  ? 'bg-[var(--bh-gold)] text-[var(--bh-warm)] border-[var(--bh-gold)]' 
                  : 'bg-[var(--bh-cream)] text-[var(--bh-muted)] border-[rgba(160,120,48,0.2)] hover:border-[var(--bh-gold)] hover:text-[var(--bh-text)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid via CSS Columns (Masonry effect) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                key={project.slug}
                className="break-inside-avoid"
              >
                <Link href={`/work/${project.slug}`} className="block work-card group relative overflow-hidden bg-[var(--bh-cream)] shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-sm">
                  <div className="relative w-full aspect-[4/5]">
                    <BHImage src={project.images[0].src} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="work-card-overlay absolute inset-0 flex flex-col justify-end p-8 z-10 pointer-events-none">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--bh-gold)] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.category}
                    </span>
                    <h3 className="font-display text-3xl text-[var(--bh-warm)] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        </div>
      </section>
    </div>
  )
}
