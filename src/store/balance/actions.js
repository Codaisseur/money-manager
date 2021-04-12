export const DEPOSIT = 'balance/deposit'
export const WITHDRAW = 'balance/withdraw'

export function deposit (amount) {
  return {
    type: DEPOSIT,
    payload: amount
  }
}

export function withdraw (amount) {
  return {
    type: WITHDRAW,
    payload: amount
  }
}
