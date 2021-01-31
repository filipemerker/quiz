import { BiblePassage } from '@/api/types'

export type MultipleAnswerQuestion = {
  title: BiblePassage
  rightAlternative: string
  alternatives: string[]
}
export type MultipleAnswerChallenge = MultipleAnswerQuestion[]
