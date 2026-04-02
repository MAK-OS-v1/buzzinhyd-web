'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

export function BHImage({ src, alt, priority = false, className = '', ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

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
        {...props}
      />
    </div>
  )
}
