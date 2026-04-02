export function BHImage({ src, alt, className = '', fill, priority, ...props }: any) {
  // Using a standard img tag to bypass any next/image optimization or hydration issues 
  // that are currently causing images to be invisible in production.
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <img
        src={typeof src === 'string' ? src : (src as any).src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        style={fill ? {
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          objectFit: 'cover',
          objectPosition: 'center'
        } : {}}
        className={`object-cover w-full h-full ${className}`}
        {...props}
      />
    </div>
  )
}
