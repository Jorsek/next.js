const env = require('./env-config')

module.exports = {
  presets: ['@ornery/next.js/babel'],
  plugins: [['transform-define', env]],
}
