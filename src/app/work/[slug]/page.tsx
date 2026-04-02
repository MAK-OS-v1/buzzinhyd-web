import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { BHImage } from '@/components/ui/BHImage'

// Using classic Next.js app router params approach (since it's server component by default)
export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }

  const isDailyStories = project.slug === 'daily-creative-stories';

  // Find next project for the footer link
  const currentIndex = projects.findIndex(p => p.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <article className="min-h-screen bg-[var(--bh-warm)] text-[var(--bh-text)] pt-24">
      
      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
        <BHImage src={project.heroImage} alt={project.title} fill priority className="object-cover" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24">
        
        {/* Meta Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[rgba(160,120,48,0.2)] pb-16 mb-24">
          <div className="md:col-span-8">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase block text-[var(--bh-gold)] mb-6">Case Study</span>
            <h1 className="font-display text-5xl md:text-8xl mb-8 leading-[0.9]">{project.title}</h1>
            <p className="font-body text-lg md:text-2xl text-[var(--bh-muted)] max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-10 md:pl-16 pt-8">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase block text-[var(--bh-gold)] mb-2">Partner</span>
              <span className="font-display text-2xl">{project.client}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase block text-[var(--bh-gold)] mb-2">Category</span>
              <span className="font-display text-2xl">{project.category}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase block text-[var(--bh-gold)] mb-2">Timeline</span>
              <span className="font-display text-2xl">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {isDailyStories ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mb-32">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[9/16] overflow-hidden rounded-[24px] border-[6px] border-[var(--bh-charcoal)] shadow-2xl group">
                <BHImage src={img} alt={`${project.title} story ${i+1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                {/* iPhone Styled Speaker */}
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[30%] h-[5px] bg-[var(--bh-charcoal)] rounded-full z-10" />
              </div>
            ))}
          </div>
        ) : (
          <div className="columns-1 md:columns-2 gap-12 md:gap-16 space-y-12 md:space-y-16 mb-24">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative w-full overflow-hidden break-inside-avoid">
                <BHImage 
                  src={img} 
                  alt={project.title} 
                  width={1200} 
                  height={1600} 
                  className="w-full h-auto object-cover border border-[var(--bh-gold)] border-opacity-10" 
                />
              </div>
            ))}
          </div>
        )}

        {/* Next Project Footer */}
        <div className="text-center pt-32 border-t border-[rgba(160,120,48,0.2)] pb-24">
          <span className="font-mono text-[11px] tracking-widest uppercase block text-[var(--bh-gold)] mb-8">Next Case Study</span>
          <Link href={`/work/${nextProject.slug}`} className="font-display italic text-5xl md:text-8xl group inline-flex items-center gap-6 leading-[0.9]">
            {nextProject.title}
            <span className="font-mono text-4xl text-[var(--bh-gold)] transform translate-x-0 group-hover:translate-x-8 transition-transform duration-500">
              &rarr;
            </span>
          </Link>
        </div>

      </div>
    </article>
  )
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }
  
  return {
    title: `Buzzinhyd | ${project.title}`,
    description: project.description
  }
}
