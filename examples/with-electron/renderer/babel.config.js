const { devDependencies } = require('../package.json')

module.exports = {
  presets: [
    [
      '@ornery/next.js/babel',
      {
        'preset-env': {
          targets: {
            electron: devDependencies.electron.replace(/^\^|~/, ''),
          },
        },
      },
    ],
  ],
}
