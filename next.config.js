/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const nextConfig = {
  images: {
    domains: ["chart.googleapis.com"]
  },
    webpack: (config, options) => {
        config.plugins.push(new NodePolyfillPlugin())
        return config
      },

}

module.exports = nextConfig
