const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true
})

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['pixldinc.link', 'https://pixldinc.link', 'images.unsplash.com', 'https://images.unsplash.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
