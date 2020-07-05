/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: [],
      whitelistPatterns: [],
      whitelistPatternsChildren: []
    }
  },
  corePlugins: {
    container: false,
    gridTemplateColumns: false,
    gridColumnGap: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridGap: false,
    gridColumn: false,
    gridRowGap: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gap: false
  },
  theme: {
    extend: {}
  },
  variants: {
    aspectRatio: ['responsive'],
    scrollSnapType: ['responsive']
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-scroll-snap'),
    function ({ addUtilities }) {
      const additional = {
        '.cmt-2 + .cmt-2': {
          marginTop: '.5rem'
        },
        '.cmt-4 + .cmt-4': {
          marginTop: '1rem'
        },
        '.cmt-8 + .cmt-8': {
          marginTop: '2rem'
        },
        '.cmt-16 + .cmt-16': {
          marginTop: '4rem'
        },
        '.cmt-1 + .cmt-1': {
          marginTop: '.25rem'
        },
        '.position-below': {
          bottom: '0',
          transform: 'translateY(100%)'
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.pin-vert-center': {
          top: '50%',
          transform: 'translateY(-50%)'
        },
        '.pin-horz-center': {
          left: '50%',
          transform: 'translateX(-50%)'
        },
        '.hyphens': {
          hyphens: 'auto',
          hyphenLimitChars: '6 3 2'
        },
        '.no-hyphens': {
          hyphens: 'manual'
        },
        '.blur-3': {
          filter: 'blur(3px)'
        },
        '.container': {
          width: '100%',
          minWidth: '320px',
          maxWidth: '1200px'
        },
        '.container-small': {
          width: '100%',
          minWidth: '320px',
          maxWidth: '768px'
        },
        '.separator-arrow:not(:last-child):after': {
          content: '"\\00a0\\00a0\\203A\\00a0\\00a0\\00a0"',
          position: 'relative',
          top: '-1px'
        },
        '.separator-pipe:not(:last-child):after': {
          content: '"\\00a0\\00a0|\\00a0\\00a0"'
        },
        '.separator-comma:not(:last-child):after': {
          content: '",\\00a0"'
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.last-mb-no > :last-child': {
          marginBottom: '0'
        }
      }

      addUtilities(additional)
    }
  ]
}
