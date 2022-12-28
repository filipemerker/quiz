export type MultipleAnswerQuestion = {
  title: BiblePassage
  rightAlternative: string
  alternatives: string | string[]
}
export type MultipleAnswerChallenge = MultipleAnswerQuestion[]

export type BiblePassage = string[] | string
export type BibleChapter = string[]
export type BibleBook = {
  abbrev: string
  chapters: BibleChapter[]
  name: string
}
export type BibleBooks = string[]
export type Bible = BibleBook[]
export type PassageReference = {
  book: string
  chapter: number
  verse: number
}

export interface Option {
  title: string
  correct: boolean
}
export interface Question {
  title: string
  options: Array<Option>
}

export type Questions = Question[]
