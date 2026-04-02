'use client'

import React, { useState } from 'react'
import { Instagram, Youtube } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BHImage } from '@/components/ui/BHImage'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Fallback: simply simulate a network request then show success
    // If user provides a Formspree endpoint, they can inject it in the <form action="">
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1200)
  }

  return (
    <div className="bg-[var(--bh-warm)] text-[var(--bh-text)] min-h-screen relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
        <BHImage 
          src="/images/bts-camera-closeup.jpg" 
          alt="Texture" 
          fill 
          className="object-cover grayscale" 
        />
      </div>

      <section className="w-full pt-32 pb-24 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 h-full relative z-10">
            
            {/* Left: Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)] mb-8 block">
                  Start a Project
                </span>
                <h1 className="font-display text-5xl md:text-[64px] leading-[1.05] text-[var(--bh-text)] mb-8 max-w-md">
                  Let's Create<br/>Something Unforgettable.
                </h1>
                <p className="font-body text-base text-[var(--bh-muted)] max-w-sm mb-16">
                  Fill out the form to tell us about your brand. We'll get back to you within 24 hours.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <a href="mailto:hi@buzzinhyd.com" className="font-mono text-lg text-[var(--bh-gold)] hover:text-[var(--bh-charcoal)] transition-colors inline-block w-max">
                  hi@buzzinhyd.com
                </a>
                
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 border border-[var(--bh-gold)] rounded-full flex items-center justify-center text-[var(--bh-text)] hover:bg-[var(--bh-gold)] hover:text-[var(--bh-warm)] transition-colors">
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="w-12 h-12 border border-[var(--bh-gold)] rounded-full flex items-center justify-center text-[var(--bh-text)] hover:bg-[var(--bh-gold)] hover:text-[var(--bh-warm)] transition-colors">
                    <Youtube size={20} strokeWidth={1.5} />
                  </a>
                </div>
                
                <p className="font-body text-sm text-[var(--bh-muted)] mt-2">
                  Based in Hyderabad.<br/>Working everywhere.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full md:w-1/2 bh-card p-8 md:p-12 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col h-full justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="form-field">
                      <input type="text" id="name" placeholder=" " required />
                      <label htmlFor="name">Your Name</label>
                    </div>
                    
                    <div className="form-field">
                      <input type="email" id="email" placeholder=" " required />
                      <label htmlFor="email">Email Address</label>
                    </div>
                    
                    <div className="form-field">
                      <input type="tel" id="phone" placeholder=" " />
                      <label htmlFor="phone">Phone Number (Optional)</label>
                    </div>
                    
                    <div className="form-field">
                      <select id="service" required defaultValue="">
                        <option value="" disabled hidden></option>
                        <option value="photography">Food Photography</option>
                        <option value="video">Videography / Reels</option>
                        <option value="social">Social Media Management</option>
                        <option value="full">Full Agency Retainer</option>
                        <option value="other">Other</option>
                      </select>
                      <label htmlFor="service">Type of Service</label>
                    </div>

                    <div className="form-field mb-12">
                      <textarea id="message" placeholder=" " required></textarea>
                      <label htmlFor="message">Tell us about your project</label>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn-gold w-full justify-center group overflow-hidden">
                      <span className="relative z-10 flex items-center gap-4">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <span className="text-xl leading-none">&rarr;</span>}
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="absolute inset-0 bg-[var(--bh-cream)] flex flex-col items-center justify-center p-8 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <svg className="w-24 h-24 mb-8 text-[var(--bh-gold)]" viewBox="0 0 50 50">
                      <motion.circle 
                        cx="25" cy="25" r="23" 
                        fill="none" stroke="currentColor" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      <motion.path 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                        d="M15 25 l7 7 l15 -15"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                      />
                    </svg>
                    <h2 className="font-display text-4xl mb-4 text-[var(--bh-text)]">Received.</h2>
                    <p className="font-body text-base text-[var(--bh-muted)]">
                      Thank you. We will review your inquiry and be in touch within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
