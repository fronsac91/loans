import { reducer } from './reducer';
import * as actionTypes from '../actions/actionTypes';

import { normalizeLoansData } from '../../utility/dataNormalizer';
import { originalLoansData } from '../../data';

const loansData = normalizeLoansData(originalLoansData);

describe('LendInvest reducer', () => {
  let exampleState;

  beforeEach(() => {
    exampleState = {
      loansData: loansData,
      balance: 238456
    };
  });

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

  it('should handle INVEST_AMOUNT', () => {
    const amountToInvest = 10000;
    const resultState = {
      loansData: loansData,
      balance: exampleState.balance - amountToInvest
    };

    expect(
      reducer(exampleState, {
        type: actionTypes.INVEST_AMOUNT,
        amount: amountToInvest
      })
    ).toEqual(resultState)
  })
})