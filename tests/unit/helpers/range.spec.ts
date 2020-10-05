import * as range from '@/helpers/range'

describe('range', () => {
  describe('isAbove', () => {
    const min = 1
    it('should return value is above min (2 > 1)', () => {
      const isAbove: boolean = range.isAbove(2, min)
      expect(isAbove).toBe(true)
    })
    it('should return value is not above min (1 == 1)', () => {
      const isAbove: boolean = range.isAbove(1, min)
      expect(isAbove).toBe(false)
    })
    it('should return value is not above min (0 < 1)', () => {
      const isAbove: boolean = range.isAbove(0, min)
      expect(isAbove).toBe(false)
    })
    describe('isBelow', () => {
      const max = 1
      it('should return value is below max (0 < 1)', () => {
        const isAbove: boolean = range.isAbove(2, max)
        expect(isAbove).toBe(true)
      })
      it('should return value is not below max (1 == 1)', () => {
        const isAbove: boolean = range.isAbove(1, max)
        expect(isAbove).toBe(false)
      })
      it('should return value is not below max (0 < 1)', () => {
        const isAbove: boolean = range.isAbove(0, max)
        expect(isAbove).toBe(false)
      })
    })
  })
})
