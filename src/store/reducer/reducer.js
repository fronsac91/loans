import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/updateObject';

import { normalizeLoansData } from '../../utility/dataNormalizer';
import { originalLoansData } from '../../data';

const loansData = normalizeLoansData(originalLoansData);

const initialState = {
  loans: loansData,
  balance: 238456
};

const computeUpdatedLoans = (state, action) => {
  console.log(JSON.stringify(action, null, 2));
  const loanToBeUpdated = state.loans.filter(loan => loan.id === action.loanId)[0];

  const loanToBeUpdatedAvailable = loanToBeUpdated.available;  
  const updatedAvailable = loanToBeUpdatedAvailable + parseInt(action.amount);
  const updatedLoan = updateObject(loanToBeUpdated, { available: updatedAvailable });

  const untouchedLoans = state.loans.filter(loan => loan.id !== action.loanId);
  const updatedLoans = [ ...untouchedLoans, updatedLoan ];
  const updatedLoansSorted = updatedLoans.sort((a, b) => a.id - b.id);

  return updatedLoansSorted;
}

export const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case actionTypes.INVEST_AMOUNT:
      const updatedBalance = state.balance - action.amount;
      const updatedLoans = computeUpdatedLoans(state, action);

      return updateObject(
        state, 
        {
          loans: updatedLoans,
          balance: updatedBalance
        }
      );
    default:
      return state;
  }};

export default reducer;