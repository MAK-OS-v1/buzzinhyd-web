'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { BHImage } from '@/components/ui/BHImage'
import { projects } from '@/data/projects'
import { useIsMobile } from '@/hooks/useIsMobile'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false, loading: () => <div className="mobile-hero-bg absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, #F5EDD8 0%, var(--bh-warm) 60%)' }} /> })

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <>
      <HeroSection />
      <ShowreelStrip />
      <PhilosophySection />
      <FeaturedWork isMobile={isMobile} />
      <StatsStrip />
      <MarqueeBanner />
      <CTASection />
    </>
  )
}

function HeroSection() {
  const { scrollY } = useScroll()
  const yHeadline = useTransform(scrollY, [0, 1000], [0, 200])
  
  return (
    <section className="relative min-h-screen w-full flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      
      <motion.div 
        className="relative z-10 text-left flex flex-col items-start px-4"
        style={{ y: yHeadline }}
      >
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase mb-8 hero-label" style={{ color: 'var(--bh-gold)' }}>
          Hyderabad&apos;s Premier
        </span>
        
        <div className="flex flex-col items-start gap-2 md:gap-4 mb-8">
           <motion.h1
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
             style={{ fontFamily: 'var(--font-display)' }}
             className="text-[52px] md:text-[96px] leading-[0.9] text-[var(--bh-text)]"
           >
             We Don&apos;t Sell Food.
           </motion.h1>
           <motion.h1
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
             style={{ fontFamily: 'var(--font-display)', color: 'var(--bh-gold)' }}
             className="text-[52px] md:text-[96px] leading-[0.9]"
           >
             We Sell Feelings.
           </motion.h1>
         </div>

        <p className="font-body text-sm md:text-[15px] max-w-md hero-sub mb-10 text-left" style={{ color: 'var(--bh-muted)' }}>
          Restaurant Marketing · Food Photography · Content Strategy
        </p>

        <div className="hero-buttons">
          <Link href="/work" className="btn-outline">
            See Our Work &rarr;
          </Link>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-70 scroll-chevron">
        <ChevronDown size={24} color="var(--bh-gold)" strokeWidth={1} />
      </div>
    </section>
  )
}

function ShowreelStrip() {
  // Using generic placeholders since client provides images later
  const stripImages = Array(8).fill('/images/placeholder.jpg')

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-[var(--bh-warm)]">
      <div className="text-center mb-16 relative container flex items-center justify-center gap-6">
        <div className="h-[1px] flex-1 max-w-[100px] bg-[var(--bh-gold)] opacity-30" />
        <h2 className="font-display italic text-4xl md:text-6xl" style={{ color: 'var(--bh-text)' }}>
          The Work Speaks
        </h2>
        <div className="h-[1px] flex-1 max-w-[100px] bg-[var(--bh-gold)] opacity-30" />
      </div>

      <div className="flex flex-col gap-6 relative" style={{ left: '-10%' }}>
        {/* Row 1: Left */}
        <div className="marquee-track marquee-track--left">
          <div className="flex gap-4 px-2">
            {[...stripImages, ...stripImages].map((img, i) => (
              <div key={`r1-${i}`} className="w-[260px] md:w-[320px] aspect-[4/3] shrink-0 relative">
                <BHImage src={img} alt="Showreel moment" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Row 2: Right (Desktop primarily) */}
        <div className="marquee-track marquee-track--right hidden md:flex">
          <div className="flex gap-4 px-2">
            {[...stripImages, ...stripImages].map((img, i) => (
              <div key={`r2-${i}`} className="w-[320px] aspect-[4/3] shrink-0 relative">
                <BHImage src={img} alt="Showreel moment" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="relative w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 relative">
          
          {/* Left Sticky Content */}
          <div className="w-full md:w-5/12">
            <div className="md:sticky md:top-32 bh-card p-8 md:p-12">
              <span className="font-mono text-[11px] tracking-widest uppercase mb-6 block" style={{ color: 'var(--bh-gold)' }}>
                Our Philosophy
              </span>
              <h2 className="font-display italic text-4xl md:text-5xl leading-tight mb-8" style={{ color: 'var(--bh-text)' }}>
                Aesthetic content gets likes. Storytelling content gets customers.
              </h2>
              <p className="font-body text-[15px] md:text-base leading-relaxed" style={{ color: 'var(--bh-muted)' }}>
                We don&apos;t shoot food. We capture moments, emotions, and stories that make your audience stop scrolling and start feeling. It is about building a connection before the first bite.
              </p>
            </div>
          </div>

          {/* Right Scroll Content */}
          <div className="w-full md:w-7/12 flex flex-col gap-24 md:gap-48 mt-12 md:mt-24">
            
            <div className="philosophy-panel relative block w-full min-h-[300px]" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
              <h3 className="font-display text-3xl mb-4" style={{ color: 'var(--bh-text)' }}>1. Stop the Scroll</h3>
              <div className="w-full aspect-video relative mb-6">
                <BHImage src="/images/placeholder.jpg" alt="Stop the scroll" fill className="object-cover" />
              </div>
              <p className="font-body text-base" style={{ color: 'var(--bh-muted)' }}>
                High-contrast, cinematic visuals engineered to interrupt the endless feed and command absolute attention within the first second.
              </p>
            </div>

            <div className="philosophy-panel relative block w-full min-h-[300px]" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
              <h3 className="font-display text-3xl mb-4" style={{ color: 'var(--bh-text)' }}>2. Build Connection</h3>
              <div className="w-full aspect-video relative mb-6">
                <BHImage src="/images/placeholder.jpg" alt="Build connection" fill className="object-cover" />
              </div>
              <p className="font-body text-base" style={{ color: 'var(--bh-muted)' }}>
                We document the heat of the kitchen, the precision of the plating, and the atmosphere of the room. People buy the experience.
              </p>
            </div>

            <div className="philosophy-panel relative block w-full min-h-[300px]" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <h3 className="font-display text-3xl mb-4" style={{ color: 'var(--bh-text)' }}>3. Drive Footfall</h3>
              <div className="w-full aspect-video relative mb-6">
                <BHImage src="/images/placeholder.jpg" alt="Drive footfall" fill className="object-cover" />
              </div>
              <p className="font-body text-base" style={{ color: 'var(--bh-muted)' }}>
                Likes are vanity. Reservations are sanity. Every piece of content is strategically designed to convert attention into action.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedWork({ isMobile }: { isMobile: boolean }) {
  const featured = projects.slice(0, 6)

  // 3D Tilt Logic
  const handleMouseMove = (e: React.MouseEvent, target: HTMLElement) => {
    if (isMobile) return
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // limit rotation aggressively
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = (target: HTMLElement) => {
    if (isMobile) return
    target.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  }

  return (
    <section className="section bg-[var(--bh-warm)]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--bh-gold)' }}>
            Selected Work
          </span>
          <h2 className="font-display text-5xl md:text-7xl" style={{ color: 'var(--bh-text)' }}>
            Our Best Moments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <Link 
              href={`/work/${p.slug}`} 
              key={p.slug}
              className="block will-transform"
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
            >
              <div 
                className="flex flex-col overflow-hidden rounded-none border border-[var(--bh-gold)] border-opacity-10 bg-[var(--bh-cream)] h-[450px] group p-0 transition-transform duration-300 ease-out"
                style={{ boxShadow: '0 4px 32px rgba(160,120,48,0.06)' }}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <div className="relative w-full h-[60%] overflow-hidden bg-[var(--bh-charcoal)]">
                  <BHImage 
                    src={p.images[0].src} 
                    alt={p.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: 'var(--bh-gold)' }}>
                    {p.category}
                  </span>
                  <h3 className="font-display text-2xl mb-2" style={{ color: 'var(--bh-text)' }}>{p.title}</h3>
                  <p className="font-body text-sm line-clamp-2 mt-auto" style={{ color: 'var(--bh-muted)' }}>
                    {p.description}
                  </p>
                  <div className="w-full h-[1px] bg-[rgba(160,120,48,0.15)] mt-4 mb-4" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--bh-gold)] flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    View Project <span className="text-[14px]">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

function StatsStrip() {
  const [inView, setInView] = useState(false)
  const numbersRef = useRef<HTMLDivElement>(null)
  const stats = [
    { label: 'Brands Worked With', limit: 120, prefix: '', suffix: '+' },
    { label: 'Shoots Delivered', limit: 500, prefix: '', suffix: '+' },
    { label: 'Organic Views', limit: 10, prefix: '', suffix: 'M+' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (numbersRef.current) observer.observe(numbersRef.current)
    return () => observer.disconnect()
  }, [inView])

  return (
    <section className="stats-strip w-full relative overflow-hidden">
      <div className="container" ref={numbersRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[rgba(250,246,239,0.2)]">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <Counter value={inView ? stat.limit : 0} prefix={stat.prefix} suffix={stat.suffix} />
              <span className="stats-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ value, prefix, suffix }: { value: number, prefix: string, suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = 0
    // simple lerp over 2 seconds
    const duration = 2000
    const frameRate = 1000 / 60
    const totalFrames = Math.round(duration / frameRate)
    
    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // easeOutExpo
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      setCount(Math.floor(start + (value - start) * easing))

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameRate)

    return () => clearInterval(counter)
  }, [value])

  return (
    <div className="stats-number">
      {prefix}{count}{suffix}
    </div>
  )
}

function MarqueeBanner() {
  const text = "FOOD PHOTOGRAPHY · RESTAURANT MARKETING · SOCIAL CONTENT · BRAND STORYTELLING · HYDERABAD · INDIA · "
  
  return (
    <section className="py-24 bg-[var(--bh-warm)] overflow-hidden select-none pointer-events-none">
      <div className="flex flex-col gap-2 opacity-50 relative -rotate-2 scale-105 transform-gpu">
        
        {/* Row 1 */}
        <div className="marquee-track marquee-track--left">
          <div className="flex whitespace-nowrap">
            {[1,2,3].map(i => (
              <span key={`mq1-${i}`} className="font-display italic text-6xl md:text-8xl px-4" style={{ color: 'var(--bh-text)', opacity: 0.08 }}>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="marquee-track marquee-track--right">
          <div className="flex whitespace-nowrap">
            {[1,2,3].map(i => (
              <span key={`mq2-${i}`} className="font-display italic text-6xl md:text-8xl px-4" style={{ color: 'var(--bh-gold)', opacity: 0.06 }}>
                {text}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="cta-section section text-center relative z-10">
      <div className="container flex flex-col items-center">
        <h2 className="font-display text-5xl md:text-7xl mb-6 max-w-3xl leading-tight" style={{ color: 'var(--bh-text)' }}>
          Ready to make your food unforgettable?
        </h2>
        <p className="font-body text-lg md:text-xl mb-12 max-w-xl" style={{ color: 'var(--bh-muted)' }}>
          Let&apos;s build a story your customers won&apos;t forget. We are currently accepting new projects.
        </p>
        
        <Link href="/contact" className="btn-gold">
          Start a Project <span className="font-mono text-lg ml-2">&rarr;</span>
        </Link>
        
        <a href="mailto:hi@buzzinhyd.com" className="font-mono text-[13px] mt-8 transition-colors hover:text-[var(--bh-gold)]" style={{ color: 'var(--bh-muted)' }}>
          or email us at hi@buzzinhyd.com
        </a>
      </div>
    </section>
  )
}
