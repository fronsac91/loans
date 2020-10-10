import { normalizeLoansData } from '../../utility/dataNormalizer';
import { originalLoansData } from '../../data';

const loansData = normalizeLoansData(originalLoansData);

const initialState = {
  loans: loansData,
  balance: 238456
};

export const reducer = ( state = initialState, action ) => {
  return state;
};

export default reducer;