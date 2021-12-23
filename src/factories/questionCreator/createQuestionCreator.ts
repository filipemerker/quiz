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
  time: number
}

type QuestionsObjectType = {
  [key: number]: QuestionObjectType
}
export type QuestionType = {
  question: MultipleAnswerQuestion
  type: QuestionTypes
  time: number
}
export type QuestionCreatorType = () => Promise<QuestionType>

export const Questions: QuestionsObjectType = {
  [QuestionTypes.GuessTheReference]: {
    generate: createGuessTheReferenceQuestion,
    component: GuessTheReferenceQuestion,
    time: 30000,
  },
  [QuestionTypes.GuessTheVerse]: {
    generate: createGuessTheVerseQuestion,
    component: GuessTheVerseQuestion,
    time: 60000,
  },
  [QuestionTypes.Quiz]: {
    generate: createGuessTheReferenceQuestion,
    component: QuizQuestion,
    time: 40000,
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
    time: selectedQuestion.time,
  }
}
