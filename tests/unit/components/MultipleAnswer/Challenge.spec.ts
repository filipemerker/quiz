import Challenge from '@/components/MultipleAnswer/Challenge.vue'
import { mountSuspense } from '../../../helpers'

describe('Presentation - MultipleAnswer - Challenge', () => {
  // Inspect the raw component options
  it('should render the title', async () => {
    const wrapper = await mountSuspense(Challenge)

    const title = wrapper.get('[data-testid="title"]')

    expect(title.text()).toBe('Welcome to a new challenge')
  })
})

describe('Presentation - MultipleAnswer - Question', () => {
  it('should have a click trigger on the options', async () => {
    const wrapper = await mountSuspense(Challenge)
    const alternative = wrapper.get(`#alternatives .alternative`)

    await alternative.trigger('click')

    expect(true).toBe(true)
  })
})
