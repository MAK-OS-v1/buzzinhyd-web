export interface Project {
  slug: string
  title: string
  category: string
  client: string
  year: string
  description: string
  images: { src: string; alt: string; priority?: boolean }[]
}

export const projects: Project[] = [
  {
    slug: 'breads-viennoiserie',
    title: 'Breads & Viennoiserie',
    category: 'Food Photography',
    client: 'Local Artisan Bakery',
    year: '2025',
    description: 'A focused campaign highlighting the flaky textures and golden hues of freshly baked sourdough and croissants. Shot on location to capture the early morning bakery atmosphere.',
    images: [
      { src: '/images/placeholder.jpg', alt: 'Fresh croissants', priority: true },
      { src: '/images/placeholder.jpg', alt: 'Sourdough scoring' },
      { src: '/images/placeholder.jpg', alt: 'Bakery interior' }
    ]
  },
  {
    slug: 'michelin-star-collab',
    title: 'Chef Collaboration',
    category: 'Campaigns',
    client: 'The Grand Hotel',
    year: '2024',
    description: 'A multi-channel marketing campaign for a limited-time menu designed by a visiting Michelin-starred chef. Delivered a full suite of photography, teaser videos, and social graphics.',
    images: [
      { src: '/images/placeholder.jpg', alt: 'Chef plating dish', priority: true },
      { src: '/images/placeholder.jpg', alt: 'Signature dish close up' }
    ]
  },
  {
    slug: 'ramadan-haleem',
    title: 'Ramadan Haleem',
    category: 'Videography',
    client: 'Heritage Cafe',
    year: '2024',
    description: 'Capturing the deeply rooted cultural significance of Hyderabad\'s traditional Haleem preparation. A cinematic short documentary style reel that drove massive engagement.',
    images: [
      { src: '/images/placeholder.jpg', alt: 'Haleem preparation', priority: true },
      { src: '/images/placeholder.jpg', alt: 'Serving haleem' },
      { src: '/images/placeholder.jpg', alt: 'Sunset cafe exterior' }
    ]
  },
  {
    slug: 'daily-creative',
    title: 'Daily Creative Stories',
    category: 'Social Content',
    client: 'Urban Brew',
    year: '2023 - Present',
    description: 'Ongoing monthly content creation focused on lifestyle, community, and the daily ritual of coffee. Designed specifically to build a loyal Instagram following.',
    images: [
      { src: '/images/placeholder.jpg', alt: 'Latte art pouring', priority: true },
      { src: '/images/placeholder.jpg', alt: 'Customer reading book' }
    ]
  },
  {
    slug: 'brand-identity',
    title: 'Restaurant Identity',
    category: 'Campaigns',
    client: 'Osteria',
    year: '2024',
    description: 'Visual identity overhaul accompanied by a new menu shoot. We translated their rustic Italian heritage into a modern digital presence.',
    images: [
      { src: '/images/placeholder.jpg', alt: 'New menu design', priority: true },
      { src: '/images/placeholder.jpg', alt: 'Pasta dish from above' },
      { src: '/images/placeholder.jpg', alt: 'Exterior signage' }
    ]
  },
  {
    slug: 'social-strategy',
    title: 'Platform Domination',
    category: 'Social Content',
    client: 'Spice Route',
    year: '2024',
    description: 'A high-frequency short-form video strategy across Instagram Reels and YouTube Shorts that resulted in a 300% increase in weekly footfall.',
    images: [
      { src: '/images/placeholder.jpg', alt: 'Reels thumbnail style', priority: true },
      { src: '/images/placeholder.jpg', alt: 'Behind the scenes video shoot' }
    ]
  }
]
