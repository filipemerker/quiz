import { getRandomReference, getPassage } from '@/api'
import { PassageReference } from '@/api/types'
import { MultipleAnswerChallenge, MultipleAnswerQuestion } from '@/types/Quiz'
import { shuffle } from '.'

export const plusOne = (index: number) => index + 1
export const lessOne = (index: number) => index - 1
export const formatBibleReference = ({
  book,
  chapter,
  verse,
}: PassageReference): string => `${book} ${chapter}:${verse}`

export const createMultipleChoiceQuestion = async (): Promise<MultipleAnswerQuestion> => {
  const reference = await getRandomReference()
  const formattedReference = formatBibleReference(reference)
  const passage = await getPassage(reference)
  const alternatives = await Promise.all(
    new Array(3).fill({}).map(async () => {
      return formatBibleReference(await getRandomReference())
    })
  )

  return {
    title: passage,
    rightAlternative: formattedReference,
    alternatives: shuffle([formattedReference, ...alternatives]),
  }
}

export const createMultipleChoiceChallenge = async (
  questions: number
): Promise<MultipleAnswerChallenge> => {
  const challenge = new Array(questions).fill({})

  return Promise.all(
    challenge.map(() => {
      return createMultipleChoiceQuestion()
    })
  )
}
