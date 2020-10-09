import { updateObject } from './updateObject';

export const normalizeLoansData = (loansData) => {
  const normalizedLoansData = loansData.map(loan => {
    const normalizedAvailable = parseInt(loan.available.replace(/,/g, ''), 10);
    const normalizedAmount = parseInt(loan.amount.replace(/,/g, ''), 10);
    const normalizedTermRemaining = parseInt(loan.term_remaining, 10);

    const normalizedLoan = updateObject(
      loan,
      {
        available: normalizedAvailable,
        amount: normalizedAmount,
        term_remaining: normalizedTermRemaining
      }
    );

    return normalizedLoan;
  });

  return normalizedLoansData;
};