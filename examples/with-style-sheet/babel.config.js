const path = require('path')

module.exports = {
  presets: [
    [
      '@ornery/next.js/babel',
      {
        'preset-react': {
          pragma: 'createElement',
        },
      },
    ],
  ],
  plugins: [
    [
      'style-sheet/babel',
      {
        stylePropName: 'css',
        stylePropPackageName: path.resolve('./lib/styleSheet.js'),
      },
    ],
  ],
}
