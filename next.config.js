/** @type {import('next').NextConfig} */

const links = require('./links.json')

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return links.map(link => ({
      source: `/${link.key}`,
      destination: link.href,
      permanent: true
    }))
  }
}

module.exports = nextConfig
