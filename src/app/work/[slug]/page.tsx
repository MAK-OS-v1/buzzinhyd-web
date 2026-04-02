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

  // Find next project for the footer link
  const currentIndex = projects.findIndex(p => p.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <article className="min-h-screen bg-[var(--bh-warm)] text-[var(--bh-text)] pt-24">
      
      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] relative">
        <BHImage src={project.images[0].src} alt={project.title} fill priority className="object-cover" />
      </div>

      <div className="container py-24">
        
        {/* Meta Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[rgba(160,120,48,0.2)] pb-16 mb-16">
          <div className="md:col-span-8">
            <h1 className="font-display text-5xl md:text-7xl mb-6">{project.title}</h1>
            <p className="font-body text-lg md:text-xl text-[var(--bh-muted)] max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-8 md:pl-12 pt-4">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase block text-[var(--bh-muted)] mb-1">Client</span>
              <span className="font-body text-base">{project.client}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase block text-[var(--bh-muted)] mb-1">Category</span>
              <span className="font-body text-base">{project.category}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase block text-[var(--bh-muted)] mb-1">Year</span>
              <span className="font-body text-base">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-col gap-12 md:gap-24 mb-24">
          {project.images.slice(1).map((img, i) => (
            <div 
              key={i} 
              className={`relative w-full ${i % 2 === 0 ? 'h-[70vh]' : 'h-[100vh] w-[80%] mx-auto'}`}
            >
              <BHImage src={img.src} alt={img.alt || project.title} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Next Project Footer */}
        <div className="text-center pt-24 border-t border-[rgba(160,120,48,0.2)] pb-12">
          <span className="font-mono text-[11px] tracking-widest uppercase block text-[var(--bh-gold)] mb-6">Next Project</span>
          <Link href={`/work/${nextProject.slug}`} className="font-display italic text-5xl md:text-7xl group inline-flex items-center gap-6">
            {nextProject.title}
            <span className="font-mono text-4xl text-[var(--bh-gold)] transform translate-x-0 group-hover:translate-x-6 transition-transform duration-500">
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
