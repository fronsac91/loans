import * as actionTypes from './actionTypes';

export const investAmount = (amount) => {
  return {
    type: actionTypes.INVEST_AMOUNT,
    amount
  }
};