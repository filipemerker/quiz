import { MultipleAnswerQuestion } from '@/types/Quiz'
import {
  createGuessTheReferenceQuestion,
  createGuessTheVerseQuestion,
} from './newTestamentQuestionCreator'
import GuessTheReferenceQuestion from '@/pages/Challenges/questions/GuessTheReferenceQuestion.vue'
import GuessTheVerseQuestion from '@/pages/Challenges/questions/GuessTheVerseQuestion.vue'
import QuizQuestion from '@/pages/Challenges/questions/QuizQuestion.vue'
import { random } from '@/helpers'

export enum QuestionTypes {
  'GuessTheReference',
  'GuessTheVerse',
  'Quiz',
}

export type QuestionComponentType =
  | typeof GuessTheVerseQuestion
  | typeof GuessTheReferenceQuestion
  | typeof QuizQuestion

type QuestionObjectType = {
  generate: () => Promise<MultipleAnswerQuestion>
  component: QuestionComponentType
}

type QuestionsObjectType = {
  [key: number]: QuestionObjectType
}
export type QuestionType = {
  question: MultipleAnswerQuestion
  type: QuestionTypes
}
export type QuestionCreatorType = () => Promise<QuestionType>

export const Questions: QuestionsObjectType = {
  [QuestionTypes.GuessTheReference]: {
    generate: createGuessTheReferenceQuestion,
    component: GuessTheReferenceQuestion,
  },
  [QuestionTypes.GuessTheVerse]: {
    generate: createGuessTheVerseQuestion,
    component: GuessTheVerseQuestion,
  },
  [QuestionTypes.Quiz]: {
    generate: createGuessTheReferenceQuestion,
    component: QuizQuestion,
  },
}

export const createQuestionCreator = (
  ...types: QuestionTypes[]
): QuestionCreatorType => async () => {
  const randomType = types[random(1, types.length) - 1]
  const selectedQuestion = Questions[randomType]

  return {
    question: await selectedQuestion.generate(),
    type: randomType,
  }
}
