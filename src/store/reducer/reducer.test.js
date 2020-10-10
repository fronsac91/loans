import { reducer } from './reducer';
import * as actionTypes from '../actions/actionTypes';

import { normalizeLoansData } from '../../utility/dataNormalizer';
import { originalLoansData } from '../../data';

const loans = normalizeLoansData(originalLoansData);

describe('LendInvest reducer', () => {
  let exampleState;

  beforeEach(() => {
    exampleState = {
      loans,
      balance: 238456
    };
  });

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    )
    .toEqual(
      {
        loans,
        balance: 238456
      }
    )
  })

  it('should handle INVEST_AMOUNT', () => {
    const loanId = "12";
    const amount = 10000;
    
    const resultLoans = [
      {
        "id": "1",
        "title": "Voluptate et sed tempora qui quisquam.",
        "tranche": "A",
        "available": 11959,
        "annualised_return": "8.60",
        "term_remaining": 864000,
        "ltv": "48.80",
        "amount": 85754
      },
      {
        "id": "5",
        "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
        "tranche": "B",
        "available": 31405,
        "annualised_return": "7.10",
        "term_remaining": 1620000,
        "ltv": "48.80",
        "amount": 85754
      },
      {
        "id": "12",
        "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
        "tranche": "C",
        "available": 22359,
        "annualised_return": "4.80",
        "term_remaining": 879000,
        "ltv": "48.80",
        "amount": 85754
      }
    ];

    const resultState = {
      loans: resultLoans,
      balance: exampleState.balance - amount
    };

    expect(
      reducer(exampleState, {
        type: actionTypes.INVEST_AMOUNT,
        loanId,
        amount
      })
    ).toEqual(resultState)
  })
})