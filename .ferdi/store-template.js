/**
 * Modular Store for <%= moduleName %>
 */

export const state = () => ({
  polling: true
})

export const mutations = {
  SET_POLLING (state, status) {
    state.polling = status
  }
}

export const actions = {}

export const getters = {
  getPolling: (state) => state.polling
}
