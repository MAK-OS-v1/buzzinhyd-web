'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { BHImage } from '@/components/ui/BHImage'

const CATEGORIES = ['All', 'Photography', 'Videography', 'Social Content', 'Campaigns']

const WORK_ITEMS = [
  { id: 1, src: '/images/pastry-cinnamon-roll.jpg', category: 'Photography', title: 'Artisan Pastry', slug: 'breads-viennoiserie' },
  { id: 2, src: '/images/pastry-pain-raisin.jpg', category: 'Photography', title: 'Golden Viennoiserie', slug: 'breads-viennoiserie' },
  { id: 3, src: '/images/pastry-chocolate-croissant.jpg', category: 'Photography', title: 'Cacao Layers', slug: 'breads-viennoiserie' },
  { id: 4, src: '/images/pastry-butter-croissant.jpg', category: 'Photography', title: 'The Classic', slug: 'breads-viennoiserie' },
  { id: 5, src: '/images/chef-michelin-portrait.jpg', category: 'Campaigns', title: 'Chef Portrait', slug: 'michelin-chef-collab' },
  { id: 6, src: '/images/bts-kitchen-shoot-wide.jpg', category: 'Videography', title: 'Kitchen Action', slug: 'michelin-chef-collab' },
  { id: 7, src: '/images/bts-live-kitchen-flash.jpg', category: 'Videography', title: 'Flash Macro', slug: 'michelin-chef-collab' },
  { id: 8, src: '/images/dessert-roast-cube.jpg', category: 'Photography', title: 'Geometric Dessert', slug: 'product-studio-series' },
  { id: 9, src: '/images/dessert-choux-stack.jpg', category: 'Photography', title: 'Cream Stacks', slug: 'product-studio-series' },
  { id: 10, src: '/images/bts-fine-dining-spread.jpg', category: 'Campaigns', title: 'Modern Table', slug: 'holiday-chefs-table' },
  { id: 11, src: '/images/bts-table-setting-elegant.jpg', category: 'Campaigns', title: 'Studio Setup', slug: 'holiday-chefs-table' },
  { id: 12, src: '/images/bts-ipad-pasta-flatlay.jpg', category: 'Social Content', title: 'Digital Workflow', slug: 'daily-creative-stories' },
]

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = activeFilter === 'All' 
    ? WORK_ITEMS 
    : WORK_ITEMS.filter(item => item.category === activeFilter)

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
        <div className="flex flex-wrap justify-center mb-16 gap-3 mx-auto">
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
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                key={`${item.slug}-${item.id}`}
                className="break-inside-avoid"
              >
                <Link href={`/work/${item.slug}`} className="block work-card group relative overflow-hidden bg-[var(--bh-cream)] shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-none border border-[var(--bh-gold)] border-opacity-10">
                  <div className={`relative w-full ${item.id % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
                    <BHImage src={item.src} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="work-card-overlay absolute inset-0 flex flex-col justify-end p-8 z-10 pointer-events-none">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--bh-gold)] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.category}
                    </span>
                    <h3 className="font-display text-3xl text-[var(--bh-warm)] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {item.title}
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
