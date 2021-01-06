console.log('hello from babel!')

module.exports = {
  presets: [
    [
      '@ornery/next.js/babel',
      {
        'styled-jsx': {
          plugins: [require.resolve('styled-jsx-plugin-postcss')],
        },
      },
    ],
  ],
}
