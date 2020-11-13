import { reducer } from './reducer';
import * as actionTypes from '../actions/actionTypes';

import { normalizeLoansData } from '../../utility/dataNormalizer';
import { originalLoansData } from '../../data';

const loans = normalizeLoansData(originalLoansData);

describe('Apartment loans reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      loans: loans,
      balance: 238456,
      history: []
    };
  });

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    )
    .toEqual(initialState)
  });

  describe('INVEST_AMOUNT', () => {
    it('should decrease balance, increase available, create new history item', () => {
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
          "available": 2359,
          "annualised_return": "4.80",
          "term_remaining": 879000,
          "ltv": "48.80",
          "amount": 85754
        }
      ];
  
      const resultHistory = [ { id: "12", amount: amount } ];
  
      const resultState = {
        loans: resultLoans,
        balance: initialState.balance - amount,
        history: resultHistory
      };
  
      expect(
        reducer(initialState, {
          type: actionTypes.INVEST_AMOUNT,
          loanId,
          amount
        })
      ).toEqual(resultState)
    });

    it('should update history item', () => {
      const loanId = "12";
      const amount = 2000;

      const exampleAmountToBeUpdated = 800;
      const exampleState = {
        loans: loans,
        balance: 238456,
        history: [{ id: "5", amount: 800 }, { id: "12", amount: exampleAmountToBeUpdated }]
      };
      
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
          "available": 10359,
          "annualised_return": "4.80",
          "term_remaining": 879000,
          "ltv": "48.80",
          "amount": 85754
        }
      ];
  
      const resultHistory = [ 
        { id: "5", amount: 800 },
        { id: "12", amount: exampleAmountToBeUpdated + amount }
      ];
  
      const resultState = {
        loans: resultLoans,
        balance: initialState.balance - amount,
        history: resultHistory
      };
  
      expect(
        reducer(exampleState, {
          type: actionTypes.INVEST_AMOUNT,
          loanId,
          amount
        })
      ).toEqual(resultState)
    });
  })
});
