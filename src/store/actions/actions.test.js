import * as actions from '../actions'
import * as actionTypes from './actionTypes'

describe('actions', () => {
  xit('should create an action to select a loan item', () => {
    const loanId = 17;
    const expectedAction = {
      type: actionTypes.SELECT_LOAN_ITEM,
      loanId
    }
    expect(actions.selectLoanItem(loanId)).toEqual(expectedAction)
  });

  xit('should create an action to invest an amount', () => {
    const loanId = 12;
    const amount = 17342;
    const expectedAction = {
      type: actionTypes.INVEST_AMOUNT,
      loanId,
      amount
    }
    expect(actions.investAmount(loanId, amount)).toEqual(expectedAction)
  })
})