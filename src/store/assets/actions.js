export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

export function add (name, value) {
  return {
    type: ADD,
    payload: { name, value }
  }
}

export function remove (name) {
  return {
    type: REMOVE,
    payload: name
  }
}
