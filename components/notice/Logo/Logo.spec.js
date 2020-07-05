// Vue Testfile
import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/notice/Logo/Logo.vue'

describe('Logo', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Logo)
  })

  it('is vue instance', () => {
    expect(wrapper).toBeTruthy()
  })
})
