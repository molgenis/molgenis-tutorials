import { shallowMount, Wrapper } from '@vue/test-utils'
import MolgenisTutorialPreview from '@/components/MolgenisTutorialPreview.vue'

describe('MolgenisTutorialPreview', () => {
  let wrapper: Wrapper<any>

  beforeEach(() => {
    wrapper = shallowMount(MolgenisTutorialPreview, { propsData: { tutorials: [] }, stubs: ['router-link'] })
  })

  it('should render the component', () => {
    expect(wrapper).toBeDefined()
  })

  describe('atMouseEnter', () => {
    it('should set inFocus to true and change isVisible to true and isStacked to false after 500 ms', () => {
      wrapper.vm.atMouseEnter()
      expect(wrapper.vm.inFocus).toBe(true)
      wrapper.vm.showDescription()
      expect(wrapper.vm.isVisible).toBe(true)
      expect(wrapper.vm.isStacked).toBe(false)
    })
  })

  describe('atMouseLeave', () => {
    beforeEach(() => {
      // set state that equals state when element is in focus
      wrapper.vm.isVisible = true
      wrapper.vm.isStacked = false
      jest.useFakeTimers()
    })

    it('should set inFocus to false and change isVisible to false and isStacked to true after 1000 ms', () => {
      wrapper.vm.atMouseLeave()
      expect(wrapper.vm.inFocus).toBe(false)
      wrapper.vm.hideDescription()
      expect(setTimeout).toHaveBeenCalledTimes(1)
      expect(setTimeout).toHaveBeenCalledWith(wrapper.vm.setStackedTrue, 500)
      jest.runAllTimers()
      expect(wrapper.vm.isVisible).toBe(false)
      expect(wrapper.vm.isStacked).toBe(true)
    })
  })
})
