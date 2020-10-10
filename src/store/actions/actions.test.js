import * as actions from '../actions'
import * as actionTypes from './actionTypes'

describe('actions', () => {
  it('should create an action to invest an amount', () => {
    const amount = 17342;
    const expectedAction = {
      type: actionTypes.INVEST_AMOUNT,
      amount
    }
    expect(actions.investAmount(amount)).toEqual(expectedAction)
  })
})