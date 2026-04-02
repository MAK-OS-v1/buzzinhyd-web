/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'images.buzzinhyd.com'],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

module.exports = nextConfig
