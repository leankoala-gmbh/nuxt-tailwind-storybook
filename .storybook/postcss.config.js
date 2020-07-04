module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('postcss-preset-env')({
      stage: 0,
      browsers: 'last 2 versions'
    }),
    require('cssnano')({
      discardComments: { removeAll: true },
      zindex: false,
      discardUnused: false,
      reduceIdents: false,
      mergeIdents: false
    })
  ]
}
