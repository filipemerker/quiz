import {
  PassageReference,
  BiblePassage,
  BibleBook,
  BibleBooks,
  Bible,
} from './types'
import { plusOne, lessOne } from '@/helpers/bible'
import { random } from '@/helpers'

export const getBible = async (): Promise<any> => {
  try {
    const { NT }: { NT: Bible } = await import('./data/nvi-nt')

    return NT
  } catch (err) {
    throw new Error(err)
  }
}

export const getBook = async (title: string): Promise<BibleBook> => {
  try {
    const bible = await getBible()

    return bible.find(({ name, abbrev }: BibleBook) =>
      [name, abbrev].includes(title)
    )
  } catch (err) {
    throw new Error(err)
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
    throw new Error(err)
  }
}

export const getBookTitles = async (): Promise<BibleBooks> => {
  try {
    const bible = await getBible()

    return bible.map(({ name }: { name: string }) => name)
  } catch (err) {
    throw new Error(err)
  }
}

export const getRandomPassage = async (): Promise<PassageReference> => {
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
    throw new Error(err)
  }
}
