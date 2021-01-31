import { random } from '@/helpers'

describe('Helper - Bible', () => {
  it('should get a random number', () => {
    const iterations = new Array(50).fill('')

    iterations.forEach(async () => {
      const number = random(1, 10)

      expect(number).toBeGreaterThanOrEqual(1)
      expect(number).toBeLessThanOrEqual(10)
    })
  })
})
