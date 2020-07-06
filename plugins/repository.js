/**
 * API Abstraction
 * See https://blog.lichter.io/posts/nuxt-api-call-organization-and-decoupling/
 */

// inject the repository in the context (ctx.app.$repository)
// And in the Vue instances (this.$repo in your components)
// e.g.
// const repo = {
//   test: repoWithAxios('api/test')
// }
//
// You can reuse the repositoryWithAxios object:
// inject("userRepository", repoWithAxios('/users'))

import generalRepo from '@/api/generalRepo.js'

export default ({ $axios, params }, inject) => {
  const repoWithAxios = generalRepo($axios)
  const repo = {}

  inject('repo', repo)
}
