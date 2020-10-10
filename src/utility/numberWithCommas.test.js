import { numberWithCommas } from './numberWithCommas';

describe('Numbers', () => {
    it('should be formatted by commas', () => {
      expect(numberWithCommas(12)).toEqual("12");
      expect(numberWithCommas(123)).toEqual("123");
      expect(numberWithCommas(1234)).toEqual("1,234");
      expect(numberWithCommas(1234567)).toEqual("1,234,567");
    })
  });