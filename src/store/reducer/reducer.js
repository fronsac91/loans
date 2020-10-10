import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/updateObject';

import { normalizeLoansData } from '../../utility/dataNormalizer';
import { originalLoansData } from '../../data';

const loansData = normalizeLoansData(originalLoansData);

const initialState = {
  loans: loansData,
  balance: 238456
};

export const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case actionTypes.INVEST_AMOUNT:
      const updatedBalance = state.balance - action.amount;

      return updateObject(
        state, 
        {
          balance: updatedBalance
        }
      );
    default:
      return state;
  }};

export default reducer;