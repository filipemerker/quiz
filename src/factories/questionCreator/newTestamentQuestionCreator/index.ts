import {
  PassageReference,
  BiblePassage,
  BibleBook,
  BibleBooks,
  Bible,
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

export const getBible = async (): Promise<any> => {
  try {
    const { NT }: { NT: Bible } = await import('@/api/data/nvi-nt')

    return NT
  } catch (err) {
    throw new Error(err as string)
  }
}

export const getBook = async (title: string): Promise<BibleBook> => {
  try {
    const bible = await getBible()

    return bible.find(({ name, abbrev }: BibleBook) =>
      [name, abbrev].includes(title)
    )
  } catch (err) {
    throw new Error(err as string)
  }
}

export const getPassage = async ({
  book,
  chapter,
  verse,
}: PassageReference): Promise<BiblePassage> => {
  try {
    const { chapters } = await getBook(book)
    const verses = chapters[lessOne(chapter)]
    const length = verses.length
    if (verse === 1) {
      return verses.slice(0, 3)
    }

    if (verse === length) {
      return verses.slice(lessOne(lessOne(lessOne(verse))), verse)
    }

    return verses.slice(lessOne(lessOne(verse)), plusOne(verse))
  } catch (err) {
    throw new Error(err as string)
  }
}

export const getBookTitles = async (): Promise<BibleBooks> => {
  try {
    const bible = await getBible()

    return bible.map(({ name }: { name: string }) => name)
  } catch (err) {
    throw new Error(err as string)
  }
}

export const getRandomReference = async (): Promise<PassageReference> => {
  try {
    const titles = await getBookTitles()
    const book = titles[random(0, 27)]
    const fullBook = await getBook(book)
    const chapter = random(1, fullBook.chapters.length)
    const verses = fullBook.chapters[lessOne(chapter)]
    const verse = random(1, verses.length)

    return {
      book,
      chapter,
      verse,
    }
  } catch (err) {
    throw new Error(err as string)
  }
}

export const createGuessTheReferenceQuestion = async (): Promise<MultipleAnswerQuestion> => {
  const reference = await getRandomReference()
  const formattedReference = formatBibleReference(reference)
  const passage = await getPassage(reference)
  const alternatives = await Promise.all(
    new Array(3)
      .fill({})
      .map(async () => formatBibleReference(await getRandomReference()))
  )

  return {
    title: passage,
    rightAlternative: formattedReference,
    alternatives: shuffle([formattedReference, ...alternatives]),
  }
}

export const createGuessTheVerseQuestion = async (): Promise<MultipleAnswerQuestion> => {
  const reference = await getRandomReference()
  const formattedReference = formatBibleReference(reference)
  const { 1: passage } = await getPassage(reference)
  const alternatives = await Promise.all(
    new Array(3).fill({}).map(async () => {
      const { 1: passage } = await getPassage(await getRandomReference())

      return passage
    })
  )

  return {
    title: formattedReference,
    rightAlternative: passage,
    alternatives: shuffle([passage, ...alternatives]),
  }
}
