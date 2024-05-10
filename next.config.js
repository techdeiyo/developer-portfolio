const path = require('path')

module.exports = {
  webpack: (config, { isServer }) => {
    // Custom webpack configuration if needed
    return config;
  }, sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}