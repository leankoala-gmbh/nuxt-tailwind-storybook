const path = require('path')

module.exports = {
  stories: [
    '../components/**/*.stories.@(js|mdx)',
    './additional/technical/**/*.stories.@(js|mdx)'
  ],

  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        vueDocgenOptions: {
          alias: {
            '@': path.resolve(__dirname, '../')
          }
        }
      }
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y'
  ],

  webpackFinal: async (config, { configType }) => {

    // remove default css rules
    config.module.rules = config.module.rules.filter(
      rule => !(rule.test instanceof RegExp) || !rule.test.test('.css')
    )

    config.module.rules.push({
      test: /\.(post)?css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: './.storybook/'
            }
          }
        }
      ]
    })

    // we need this alias
    config.resolve.alias['@'] = path.dirname(path.resolve(__dirname))

    return config
  }
}
