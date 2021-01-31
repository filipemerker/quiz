import { plusOne, lessOne } from '@/helpers/bible'

describe('Helper - Bible', () => {
  it('should add one to a give number', () => {
    expect(plusOne(1)).toBe(2)
  })

  it('should remove one from a give number', () => {
    expect(lessOne(1)).toBe(0)
  })
})
