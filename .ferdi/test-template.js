// Vue Testfile
import { shallowMount } from '@vue/test-utils'
import <%= moduleName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }) %> from '@/components/<%= modulePath %>/<%= moduleName %>.vue'

describe('Testing <%= moduleName %>', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(<%= moduleName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase() }) %>)
  })

  it('is vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
