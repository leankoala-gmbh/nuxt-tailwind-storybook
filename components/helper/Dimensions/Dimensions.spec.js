// Vue Testfile
import { shallowMount } from '@vue/test-utils'
import Dimensions from '@/components/helper/Dimensions/Dimensions.vue'

describe('Testing Dimensions', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Dimensions, {
      data () {
        return { myProp: 'small' }
      },
      scopedSlots: {
        default (props) {
          return this.$createElement('div', [props.width])
        }
      }
    })
  })

  it('is vue instance', () => {
    expect(wrapper).toBeTruthy()
  })
})
