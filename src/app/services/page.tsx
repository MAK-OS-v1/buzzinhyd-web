'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const SERVICES = [
  {
    id: '01',
    title: 'Food Photography',
    description: 'Professional shoots for menus, delivery platforms, social media, and campaigns. We engineer every shot to maximize appetite appeal and brand aesthetics.'
  },
  {
    id: '02',
    title: 'Food Videography',
    description: 'Cinematic short-form and long-form video content for Reels, YouTube, and ads. Movement, steam, and sizzling sound design to stop the scroll.'
  },
  {
    id: '03',
    title: 'Restaurant Marketing Strategy',
    description: 'Full-funnel strategy from brand positioning to monthly content calendars. We build the architecture that turns attention into reservations.'
  },
  {
    id: '04',
    title: 'Social Media Management',
    description: 'Daily content, stories, reels, and community management across Instagram and YouTube. We become your voice online.'
  },
  {
    id: '05',
    title: 'Swiggy / Zomato Listing Optimisation',
    description: 'Menu photography, keyword strategy, and listing design to maximise order conversions. We make you stand out in the crowded aggregator space.'
  },
  {
    id: '06',
    title: 'Influencer & PR Campaigns',
    description: 'Hyderabad-based food influencer outreach, press events, and launch campaigns. We connect you with the voices that matter.'
  }
]

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>('01') // first open by default

  const toggleAccordion = (id: string) => {
    // If it's desktop, we might want to mandate one is always open. 
    // On mobile, allow all to close. For simplicity, allow all to close anywhere:
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="pt-32 pb-32 min-h-screen bg-[var(--bh-warm)] text-[var(--bh-text)]">
      <div className="container max-w-4xl">
        
        {/* Hero */}
        <div className="mb-24 text-center md:text-left">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)] mb-6 block">
            Capabilities
          </span>
          <h1 className="font-display text-6xl md:text-[96px] leading-[0.9]">
            What We Do
          </h1>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-[rgba(160,120,48,0.15)]">
          {SERVICES.map((service, index) => {
            const isOpen = openId === service.id
            return (
              <div 
                key={service.id} 
                className={`accordion-item group transition-colors duration-500 overflow-hidden ${isOpen ? 'accordion-open' : 'bg-[var(--bh-cream)]'}`}
              >
                <button 
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full text-left py-8 md:py-10 px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4 outline-none"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="font-mono text-xs md:text-sm text-[var(--bh-gold)] transition-transform duration-300 group-hover:-translate-y-1">
                      {service.id}.
                    </span>
                    <h2 className="font-display text-3xl md:text-[40px] transition-transform duration-300 group-hover:translate-x-2">
                      {service.title}
                    </h2>
                  </div>
                  
                  {/* Plus/Minus icon */}
                  <div className="relative w-6 h-6 shrink-0 hidden md:block">
                    <motion.div 
                      className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--bh-gold)] -translate-y-1/2"
                    />
                    <motion.div 
                      className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--bh-gold)] -translate-y-1/2"
                      animate={{ rotate: isOpen ? 0 : 90 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 md:px-12 md:pl-[84px]"
                    >
                      <p className="font-body text-base md:text-[17px] leading-relaxed text-[var(--bh-muted)] pb-10 max-w-2xl">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
