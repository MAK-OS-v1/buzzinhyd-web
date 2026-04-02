import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer pt-24 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="font-display italic text-3xl tracking-wide text-[var(--bh-gold)] mb-6 hover:opacity-80 transition-opacity">
              BUZZINHYD
            </Link>
            <p className="font-display text-2xl text-[var(--bh-warm)] max-w-md mb-8">
              We don&apos;t sell food.<br />We sell feelings.
            </p>
            <p className="font-mono text-xs footer-muted mt-auto">
              &copy; {new Date().getFullYear()} Buzzinhyd. All rights reserved.
            </p>
          </div>

          /* Spacer for desktop */
          <div className="hidden md:block md:col-span-2"></div>

          {/* Column 2: Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--bh-gold)] mb-2">Explore</span>
            <Link href="/" className="font-mono text-sm footer-link">Home</Link>
            <Link href="/work" className="font-mono text-sm footer-link">Work</Link>
            <Link href="/services" className="font-mono text-sm footer-link">Services</Link>
            <Link href="/about" className="font-mono text-sm footer-link">About</Link>
            <Link href="/contact" className="font-mono text-sm footer-link">Contact</Link>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--bh-gold)] mb-2">Get In Touch</span>
            <a href="mailto:hi@buzzinhyd.com" className="font-mono text-sm footer-link mb-6">
              hi@buzzinhyd.com
            </a>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-[var(--bh-gold)] flex items-center justify-center text-[var(--bh-warm)] hover:bg-[var(--bh-gold)] transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 border border-[var(--bh-gold)] flex items-center justify-center text-[var(--bh-warm)] hover:bg-[var(--bh-gold)] transition-colors">
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
            
            <p className="font-body text-sm footer-muted mt-6 max-w-[200px]">
              Based in Hyderabad.<br/>Working globally.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
