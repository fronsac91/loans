import { reducer } from './reducer';

import { normalizeLoansData } from '../../utility/dataNormalizer';
import { originalLoansData } from '../../data';

const loansData = normalizeLoansData(originalLoansData);

describe('LendInvest reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    )
    .toEqual(
      {
        loans: loansData,
        balance: 238456
      }
    )
  })
})