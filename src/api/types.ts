export type BiblePassage = string[]
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
