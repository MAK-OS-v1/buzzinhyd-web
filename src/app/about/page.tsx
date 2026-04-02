import { BHImage } from '@/components/ui/BHImage'

const TEAM = [
  { name: 'Ayesha Khan', role: 'Creative Director', img: '/images/placeholder.jpg' },
  { name: 'Rahul Sharma', role: 'Lead Photographer', img: '/images/placeholder.jpg' },
  { name: 'David Chen', role: 'Strategy Head', img: '/images/placeholder.jpg' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bh-warm)] text-[var(--bh-text)]">
      
      {/* Editorial Hero */}
      <section className="w-full pt-32 pb-24">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row gap-12 items-center min-h-[80vh]">
          <div className="w-full md:w-5/12">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)] mb-8 block">
              About The Agency
            </span>
            <h1 className="font-display text-6xl md:text-[80px] leading-[0.9] text-[var(--bh-text)]">
              We Are<br />Buzzinhyd.
            </h1>
          </div>
          <div className="w-full md:w-7/12 h-[60vh] md:h-[80vh] relative overflow-hidden transform-gpu">
            <BHImage src="/images/chef-plating-dark.jpg" alt="Chef plating — Buzzinhyd" fill priority className="object-cover object-top" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full py-24 md:py-32 bg-[var(--bh-cream)] border-y border-[rgba(160,120,48,0.15)]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center relative">
          <div className="gold-rule-center" />
          <h2 className="font-display italic text-4xl md:text-[64px] leading-tight my-12 text-[var(--bh-text)]">
            "We don't shoot food.<br />We build brands."
          </h2>
          <div className="gold-rule-center" />
        </div>
      </section>

      {/* Story Column */}
      <section className="w-full py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
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
            <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden">
              <BHImage src="/images/bts-studio-setup.jpg" alt="Behind the scenes shoot" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team / Work Evidence strip */}
      <section className="w-full py-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative h-[300px] group">
            <BHImage src="/images/bts-kitchen-shoot-wide.jpg" alt="On Location" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-mono text-white tracking-widest uppercase">On Location</span>
            </div>
          </div>
          <div className="relative h-[300px] group border-x border-[var(--bh-warm)]">
            <BHImage src="/images/bts-ipad-pasta-flatlay.jpg" alt="The Process" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-mono text-white tracking-widest uppercase">The Process</span>
            </div>
          </div>
          <div className="relative h-[300px] group">
            <BHImage src="/images/bts-table-setting-elegant.jpg" alt="The Result" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-mono text-white tracking-widest uppercase">The Result</span>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
      
    </div>
  )
}
