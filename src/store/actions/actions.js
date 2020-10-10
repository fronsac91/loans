import * as actionTypes from './actionTypes';

export const investAmount = (loanId, amount) => {
  return {
    type: actionTypes.INVEST_AMOUNT,
    loanId,
    amount
  }
};