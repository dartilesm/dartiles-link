/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

const links = require('./links.json')

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  async redirects() {
    return links.map(link => ({
      source: `/${link.slug}`,
      destination: link.href,
      permanent: true
    }))
  }
})

module.exports = nextConfig
