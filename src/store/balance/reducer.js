import { DEPOSIT, WITHDRAW } from './actions'

const initial = { amount: 0, open: Date.now() }

export default function reducer (
  state = initial,
  action
) {
  switch (action.type) {
    case DEPOSIT: {
      const newAmount = state.amount + action.payload

      return {
        ...state,
        amount: newAmount
      }
    }

    case WITHDRAW: {
      const newAmount = state.amount - action.payload

      return {
        ...state,
        amount: newAmount
      }
    }

    default: {
      return state
    }
  }
}
