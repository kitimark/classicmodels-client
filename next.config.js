const compose = require('next-compose')
const withSass = require('@zeit/next-sass')

module.exports = compose([
  [withSass]
])