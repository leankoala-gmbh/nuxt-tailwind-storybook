import { configure, addDecorator, addParameters } from '@storybook/vue'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import i18n from './helper/i18n'
import '@/assets/css/tailwind.css'

addDecorator(() => ({
  i18n,
  beforeCreate: function() {
    this.$root._i18n = this.$i18n;
  },
  template: "<story/>"
}))

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  passArgsFirst: true,
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'light-gray', value: '#f5f5f5' },
    ]
  },
  docs: {
    inlineStories: true
  },
  dependencies: { withStoriesOnly: true, hideEmpty: true }
})

Vue.use(VueI18n)
Vue.use(Vuex)

Vue.component('nuxt-link', {
  functional: true,
  render: function (createElement, context) {
    let allClass = {}
    let arrClass = context.data.staticClass
      ? context.data.staticClass.split(' ')
      : []
    arrClass.forEach(theClass => {
      allClass[theClass] = true
    })
    return createElement('a', { class: allClass }, context.children)
  }
})

Vue.component('client-only', {
  functional: true,
  render (_createElement, context) {
    return context.children
  }
})

const loaderFn = () => {
  const allExports = [
    require('./additional/basic/introduction.stories.js')
  ]

  const req = require.context('../components/', true, /\.stories\.js$/)
  req.keys().forEach(fname => allExports.push(req(fname)))
  return allExports
}

configure(loaderFn, module)
