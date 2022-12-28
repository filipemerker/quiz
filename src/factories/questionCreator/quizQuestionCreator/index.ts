/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  PassageReference,
  Questions,
  MultipleAnswerQuestion,
} from '@/types/Quiz'
import { random, shuffle } from '@/helpers'

export const plusOne = (index: number) => index + 1
export const lessOne = (index: number) => index - 1
export const formatBibleReference = ({
  book,
  chapter,
  verse,
}: PassageReference): string => `${book} ${chapter}:${verse}`

export const getQuestions = async (): Promise<any> => {
  try {
    const { Questions } = await import('@/api/data/questions-hard')

    return Questions
  } catch (err) {
    throw new Error(err as string)
  }
}

export const createQuizQuestion = async (): Promise<MultipleAnswerQuestion> => {
  const questions: Questions = await getQuestions()
  console.log(questions)
  const { title, options } = questions[random(0, questions.length)]
  const response = options.find(({ correct }) => correct)!.title
  const alternatives = options
    .filter(({ correct }) => !correct)
    .slice(0, 3)
    .map(({ title }) => title)

  return {
    title,
    rightAlternative: response,
    alternatives: shuffle([response, ...alternatives]),
  }
}
