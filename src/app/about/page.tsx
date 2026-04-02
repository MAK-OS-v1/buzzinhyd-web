import { BHImage } from '@/components/ui/BHImage'

const TEAM = [
  { name: 'Ayesha Khan', role: 'Creative Director', img: '/images/placeholder.jpg' },
  { name: 'Rahul Sharma', role: 'Lead Photographer', img: '/images/placeholder.jpg' },
  { name: 'David Chen', role: 'Strategy Head', img: '/images/placeholder.jpg' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bh-warm)] text-[var(--bh-text)] pt-24 md:pt-32">
      
      {/* Editorial Hero */}
      <section className="container mb-32 h-[80vh] flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-5/12">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)] mb-8 block">
            About The Agency
          </span>
          <h1 className="font-display text-6xl md:text-[80px] leading-[0.9] text-[var(--bh-text)]">
            We Are<br />Buzzinhyd.
          </h1>
        </div>
        <div className="w-full md:w-7/12 h-[60vh] md:h-full relative overflow-hidden transform-gpu md:rotate-1">
          <BHImage src="/images/placeholder.jpg" alt="Team at Buzzinhyd" fill priority className="object-cover" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 md:py-32 bg-[var(--bh-cream)] border-y border-[rgba(160,120,48,0.15)] flex justify-center items-center">
        <div className="container text-center max-w-5xl relative">
          <div className="gold-rule-center" />
          <h2 className="font-display italic text-4xl md:text-[64px] leading-tight my-12 text-[var(--bh-text)]">
            "We don't shoot food.<br />We build brands."
          </h2>
          <div className="gold-rule-center" />
        </div>
      </section>

      {/* Story Column */}
      <section className="section container">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="font-display text-4xl mb-8">Our Story</h3>
            <div className="flex flex-col gap-6 font-body text-base md:text-lg text-[var(--bh-muted)] leading-relaxed">
              <p>
                Born in Hyderabad—a city where food is synonymous with culture, heritage, and pride—Buzzinhyd was founded on a simple premise: a great dish alone is no longer enough to guarantee a full dining room.
              </p>
              <p>
                We noticed that the most incredible culinary talent often struggled to translate their offline magic into online equity. They didn't need another generic social media manager; they needed storytellers.
              </p>
              <p>
                Today, we operate at the intersection of high-end editorial photography and aggressive performance marketing. We craft the visuals that stop the scroll, and implement the strategies that drive the footfall.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[500px] relative">
            <BHImage src="/images/placeholder.jpg" alt="Behind the scenes shoot" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-[var(--bh-cream)]">
        <div className="container">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)] mb-4 block">
              The Collective
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-[var(--bh-text)]">
              Core Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden relative mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <BHImage src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-display text-3xl text-[var(--bh-text)] mb-2">{member.name}</h3>
                <span className="font-mono text-[12px] text-[var(--bh-gold)] tracking-wider uppercase">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  )
}
