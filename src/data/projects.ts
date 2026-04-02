export interface Project {
  slug: string
  title: string
  category: string
  client: string
  year: string
  description: string
  heroImage: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'breads-viennoiserie',
    title: 'Breads & Viennoiserie',
    category: 'Photography',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/pastry-butter-croissant.jpg',
    gallery: [
      '/images/pastry-cinnamon-roll.jpg',
      '/images/pastry-pain-raisin.jpg',
      '/images/pastry-chocolate-croissant.jpg',
      '/images/bts-studio-softbox.jpg',
    ],
    description: 'A complete photography campaign for Roast Cafe\'s artisan bakery range. A focused campaign highlighting the flaky textures and golden layers of freshly baked croissants and pastries.'
  },
  {
    slug: 'michelin-chef-collab',
    title: 'The Michelin Collaboration',
    category: 'Chef Campaigns',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/chef-michelin-portrait.jpg',
    gallery: [
      '/images/bts-kitchen-shoot-wide.jpg',
      '/images/dessert-roast-cube.jpg',
      '/images/dessert-choux-stack.jpg',
      '/images/bts-live-kitchen-flash.jpg',
    ],
    description: 'A multi-channel campaign for a limited-time menu by a visiting Michelin-starred chef. Photography, reels, and social graphics delivered.'
  },
  {
    slug: 'holiday-chefs-table',
    title: 'The Holiday Chef\'s Table',
    category: 'Campaign',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/bts-fine-dining-spread.jpg',
    gallery: [
      '/images/bts-table-setting-elegant.jpg',
      '/images/chef-plating-dark.jpg',
      '/images/bts-ipad-pasta-flatlay.jpg',
    ],
    description: 'An intimate holiday dining event captured across stills and video — from the kitchen to the table.'
  },
  {
    slug: 'daily-creative-stories',
    title: 'Daily Creative Stories',
    category: 'Social Content',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/campaign-valentines-bear.jpg',
    gallery: [
      '/images/campaign-roast-new-desserts.jpg',
      '/images/campaign-valentines-bear.jpg',
      '/images/campaign-choco-strawberry.jpg',
      '/images/campaign-strawberry-display.jpg',
    ],
    description: `Keeping brands alive every single day. We produce daily Instagram stories — seasonal drops, product highlights, and creative campaigns — engineered to hold attention and drive repeat visits. Aesthetic content gets likes. Storytelling content gets customers.`
  },
  {
    slug: 'valentines-campaign',
    title: "Valentine's Edition",
    category: 'Campaign',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/campaign-valentines-bear.jpg',
    gallery: [
      '/images/campaign-roast-new-desserts.jpg',
      '/images/dessert-roast-oval.jpg',
    ],
    description: 'Concept, styling, photography and social content for a limited Valentine\'s Day chocolate collection.'
  },
  {
    slug: 'product-studio-series',
    title: 'Studio Product Series',
    category: 'Photography',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/dessert-pistachio-ring.jpg',
    gallery: [
      '/images/dessert-creme-brulee-tart.jpg',
      '/images/dessert-mirror-tart.jpg',
      '/images/dessert-chocolate-eclair.jpg',
      '/images/dessert-roast-cube.jpg',
      '/images/dessert-choux-stack.jpg',
      '/images/bts-camera-closeup.jpg',
    ],
    description: 'High-conversion product photography for menus, delivery platforms, and social media. Clean, high-conversion product photography for menus, delivery platforms, and social media.'
  },
]
