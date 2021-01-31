import {
  plusOne,
  lessOne,
  createMultipleChoiceQuestion,
  createMultipleChoiceChallenge,
} from '@/helpers/bible'
import { MultipleAnswerQuestion } from '@/types/Quiz'

describe('Helper - Bible', () => {
  it('should add one to a give number', () => {
    expect(plusOne(1)).toBe(2)
  })

  it('should remove one from a give number', () => {
    expect(lessOne(1)).toBe(0)
  })

  it('should create multiple choice question', async () => {
    const question = await createMultipleChoiceQuestion()

    expect(question.rightAlternative).toEqual(expect.any(String))
    expect(question.title[2]).toEqual(expect.any(String))
    expect(question.title).toEqual(expect.any(Array))
    expect(question.title).toHaveLength(3)
    expect(question.alternatives).toEqual(expect.any(Array))
    expect(question.alternatives).toHaveLength(4)
  })

  it('should create multiple choice challenge', async () => {
    const challenge = await createMultipleChoiceChallenge(10)

    challenge.forEach((question: MultipleAnswerQuestion) => {
      expect(question.rightAlternative).toEqual(expect.any(String))
      expect(question.title[2]).toEqual(expect.any(String))
      expect(question.title).toEqual(expect.any(Array))
      expect(question.title).toHaveLength(3)
      expect(question.alternatives).toEqual(expect.any(Array))
      expect(question.alternatives).toHaveLength(4)
    })
  })
})
