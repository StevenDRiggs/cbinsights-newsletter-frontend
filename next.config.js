//module.exports = {
//  reactStrictMode: true,
//  images: {
//    domains: ['www.cbinsights.com'],
//  },
//}
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.cbinsights.com'],
  },
}

module.exports = withPlugins([[withImages]], nextConfig)
