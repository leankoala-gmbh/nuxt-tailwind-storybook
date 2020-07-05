module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/multiline-html-element-content-newline': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'nuxt/no-cjs-in-config': 'off'
  }
}
