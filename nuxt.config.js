const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric', month: 'numeric', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
    },
    time: {
      hour: 'numeric', minute: 'numeric'
    }
  },
  de: {
    short: {
      day: 'numeric', month: 'numeric', year: 'numeric'
    },
    long: {
      day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'
    },
    time: {
      hour: 'numeric', minute: 'numeric'
    }
  }
}

const numberFormats = {
  en: {
    currency: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  },
  de: {
    currency: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  }
}

module.exports = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Nuxt Telemetry
   ** See https://nuxtjs.org/api/configuration-telemetry
   */
  telemetry: false,
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * Remap ENV Variables
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiBaseUrl: process.env.API_BASE_URL || '',
    appName: process.env.npm_package_name || ''
  },
  /**
   * Configure Webpack Watchers
   */
  watchers: {
    webpack: {
      poll: 1000
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // { src: '~plugins/repository'},
    // { src: '~plugins/portals' }, // For Vue-Portals https://portal-vue.linusb.org/
    // { src: '~/plugins/vue-formulate' }, // Vue Formulate https://vueformulate.com/
    // { src: '~plugins/persistedStore', mode: 'client' } // To persist the Vuex Store https://github.com/robinvdvleuten/vuex-persistedstate#readme
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://composition-api.now.sh/
    // 'nuxt-composition-api',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/galvez/yamlful
    // 'yamlful-nuxt',
    // Doc: https://axios.nuxtjs.org/
    '@nuxtjs/axios',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /**
   * i18n Configuration
   * https://nuxt-community.github.io/nuxt-i18n/
   */
  i18n: {
    locales: [
      {
        code: process.env.LOCALE_CODE || 'de',
        file: process.env.LOCALE_FILE || 'de/translations.json',
        domain: process.env.LOCALE_DOMAIN || 'localhost:3000'
      }
    ],
    lazy: true,
    differentDomains: true,
    defaultLocale: process.env.DEFAULT_LOCALE || 'de',
    langDir: 'lang/',
    strategy: 'prefix',
    vueI18n: {
      dateTimeFormats,
      numberFormats
    }
  },
  /**
   * Webfont Config
   */
  webfontloader: {
    google: {
      families: ['Roboto:300,400,500,700']
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
    proxy: false
  },
  /**
   * Axios Proxies
   */
  proxy: {},
  /**
   * Customize Router
   */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-import': {},
        'postcss-preset-env': {},
        'postcss-custom-properties': {},
        cssnano: {
          discardComments: { removeAll: true },
          zindex: false,
          discardUnused: false,
          reduceIdents: false,
          mergeIdents: false
        }
      },
      preset: {
        autoprefixer: {
          grid: process.env.NODE_ENV === 'production',
          cascade: false
        },
        stage: 0
      }
    },
    /*
     ** Extract CSS
     */
    extractCSS: process.env.NODE_ENV === 'production',
    /**
     * Babel Config
     */
    babel: {
      presets ({ isServer }) {
        const targets = isServer
          ? { node: 'current' }
          : { ie: '11' }

        return [
          [require.resolve('@nuxt/babel-preset-app'), { targets, corejs: { version: 3 } }]
        ]
      },
      plugins: [
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'

      if (ctx && ctx.isClient) {
        config.optimization.splitChunks.maxSize = 151200
      }
    }
  }
}
