import {
  getPassage,
  getBook,
  getBookTitles,
  getRandomReference,
} from '@/api'
import '@/api/data/nvi'

describe('Helper - Api', () => {
  it('should get a Bible passage by reference', async () => {
    const [first, second, third] = await getPassage({
      book: 'jo',
      chapter: 3,
      verse: 16,
    })

    expect(first).toBe('para que todo o que nele crer tenha a vida eterna.')
    expect(second).toBe(
      '"Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.'
    )
    expect(third).toBe(
      'Pois Deus enviou o seu Filho ao mundo, não para condenar o mundo, mas para que este fosse salvo por meio dele.'
    )
  })

  it('should get a Bible passage from the start of the chapter', async () => {
    const [first, second, third] = await getPassage({
      book: 'jo',
      chapter: 3,
      verse: 1,
    })

    expect(first).toBe(
      'Havia um fariseu chamado Nicodemos, uma autoridade entre os judeus.'
    )
    expect(second).toBe(
      'Ele veio a Jesus, à noite, e disse: "Mestre, sabemos que ensinas da parte de Deus, pois ninguém pode realizar os sinais miraculosos que estás fazendo, se Deus não estiver com ele".'
    )
    expect(third).toBe(
      'Em resposta, Jesus declarou: "Digo-lhe a verdade: Ninguém pode ver o Reino de Deus, se não nascer de novo".'
    )
  })

  it('should get a Bible passage from the end of the chapter', async () => {
    const [first, second, third] = await getPassage({
      book: 'jo',
      chapter: 3,
      verse: 36,
    })

    expect(first).toBe(
      'Pois aquele que Deus enviou fala as palavras de Deus, porque ele dá o Espírito sem limitações.'
    )
    expect(second).toBe('O Pai ama o Filho e entregou tudo em suas mãos.')
    expect(third).toBe(
      'Quem crê no Filho tem a vida eterna; já quem rejeita o Filho não verá a vida, mas a ira de Deus permanece sobre ele".'
    )
  })

  it('should get a book of the Bible', async () => {
    const { name, abbrev, chapters } = await getBook('João')

    expect(chapters.length).toBeGreaterThan(0)
    expect(abbrev).toBe('jo')
    expect(name).toBe('João')
  })

  it('should get a list of the books of the Bible', async () => {
    const titles = await getBookTitles()

    expect(titles).toHaveLength(27)
    expect(titles.includes('1 Pedro'))
  })

  it('should get a random reference of the Bible', async () => {
    const iterations = new Array(100).fill('')

    iterations.forEach(async () => {
      try {
        const random = await getRandomReference()
        const passage = await getPassage(random)

        expect(random).toEqual({
          book: expect.any(String),
          chapter: expect.any(Number),
          verse: expect.any(Number),
        })
        expect(passage).toHaveLength(3)
      } catch (err) {
        fail(err)
      }
    })
  })
})
