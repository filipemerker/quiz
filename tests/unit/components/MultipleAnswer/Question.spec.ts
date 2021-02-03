import Question from '@/components/MultipleAnswer/Question.vue'
import { createMultipleChoiceQuestion } from '@/helpers/bible'
import { mountSuspense } from '../../../helpers'

describe('Presentation - MultipleAnswer - Question', () => {
  it('should render question and alternatives correctly', async () => {
    const question = await createMultipleChoiceQuestion()

    const onSelect = jest.fn()
    const wrapper = await mountSuspense(Question, {
      onSelect,
      question
    })

    expect(wrapper.get('[data-testid="question-title"]').text()).toBe(question.title[1])
    question.alternatives.map((alternative:string) => {
      const query = `[data-testid="${alternative}"]`

      expect(wrapper.get(query)).not.toBeNull()
    })
  })
})

describe('Presentation - MultipleAnswer - Question', () => {
  it('should show context if title is clicked', async () => {
    const question = await createMultipleChoiceQuestion()

    const onSelect = jest.fn()
    const wrapper = await mountSuspense(Question, {
      onSelect,
      question
    })

    await wrapper.get('[data-testid="question-title"]').trigger('click')

    const before = wrapper.get('[data-testid="question-title-before"]')
    const after = wrapper.get('[data-testid="question-title-after"]')
    expect(before).not.toBeNull()
    expect(after).not.toBeNull()
  })

  it('should fire onSelect when option is clicked', async () => {
    const question = await createMultipleChoiceQuestion()
    const alternative = question.alternatives[0]
    const onSelect = jest.fn()
    const wrapper = await mountSuspense(Question, {
      onSelect,
      question
    })

    await wrapper.get(`[data-testid="${alternative}"]`).trigger('click')

    expect(onSelect).toHaveBeenCalledWith(alternative, question.rightAlternative)
  })
})
