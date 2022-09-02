/** @type {import('next').NextConfig} */

const links = require('./links.json')

const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  },
  reactStrictMode: true,
  async redirects() {
    return links.map(link => ({
      source: `/${link.slug}`,
      destination: link.href,
      permanent: true
    }))
  }
}

module.exports = nextConfig
