import { defineComponent, h, Suspense, Component } from 'vue'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

export const mountSuspense = async (component: Component, props?: any) => {
  const wrapper = mount(
    defineComponent({
      render() {
        return h(Suspense, null, {
          default: h(component, props),
          fallback: h('div', 'fallback'),
        })
      },
    })
  )

  await flushPromises()
  return wrapper
}
