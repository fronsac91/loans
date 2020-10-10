import * as actions from '../actions'
import * as actionTypes from './actionTypes'

describe('actions', () => {
  it('should create an action to invest an amount', () => {
    const loanId = "12";
    const amount = 17342;
    const expectedAction = {
      type: actionTypes.INVEST_AMOUNT,
      loanId,
      amount
    }
    expect(actions.investAmount(loanId, amount)).toEqual(expectedAction)
  })
})