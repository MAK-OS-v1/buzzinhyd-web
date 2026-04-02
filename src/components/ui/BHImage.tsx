'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

export function BHImage({ src, alt, priority = false, className = '', ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div 
        className={`w-full h-full min-h-32 bg-[var(--bh-cream)] border border-[var(--bh-gold)] border-opacity-20 flex items-center justify-center ${className}`}
      >
        <span style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '11px', 
          color: 'var(--bh-muted)',
          letterSpacing: '0.2em'
        }}>
          IMAGE PLACEHOLDER
        </span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer Placeholder */}
      <div 
        className={`absolute inset-0 shimmer transition-opacity duration-500 z-10 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
      
      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className={`object-cover transition-opacity duration-700 w-full h-full ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  )
}
