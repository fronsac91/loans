import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/updateObject';

import { normalizeLoansData } from '../../utility/dataNormalizer';
import { originalLoansData } from '../../data';

const loansData = normalizeLoansData(originalLoansData);

const initialState = {
  loans: loansData,
  balance: 238456,
  history: []
};

const computeUpdatedLoans = (state, action) => {
  const loanToBeUpdated = state.loans.filter(loan => loan.id === action.loanId)[0];

  const updatedAvailable = loanToBeUpdated.available + action.amount;
  const updatedLoan = updateObject(loanToBeUpdated, { available: updatedAvailable });

  const untouchedLoans = state.loans.filter(loan => loan.id !== action.loanId);
  const updatedLoans = [ ...untouchedLoans, updatedLoan ];
  const updatedLoansSorted = updatedLoans.sort((a, b) => a.id - b.id);

  return updatedLoansSorted;
}

const computeUpdatedHistory = (state, action) => {
  const loan = state.history
    .filter(loan => loan.id === action.loanId)[0];

  const updatedLoan = { 
    id: action.loanId, 
    amount: loan ? loan.amount + action.amount : action.amount
  };

  const otherItems = state.history
    .filter(loan => loan.id !== action.loanId);

    return [
    ...otherItems,
    updatedLoan
  ];
}

export const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case actionTypes.INVEST_AMOUNT:
      const updatedBalance = state.balance - action.amount;
      const updatedLoans = computeUpdatedLoans(state, action);
      const updatedhistory = computeUpdatedHistory(state, action);

      return updateObject(
        state, 
        {
          loans: updatedLoans,
          balance: updatedBalance,
          history: updatedhistory
        }
      );
    default:
      return state;
  }};

export default reducer;