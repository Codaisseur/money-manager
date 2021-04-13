import { ADD, REMOVE } from './actions'

const initial = [
  { name: 'keyboard', value: 250 }
]

export default function reducer (
  state = initial, action
) {
  switch (action.type) {
    case ADD: {
      action.payload.value = parseInt(action.payload.value)

      return [...state, action.payload]
    }

    case REMOVE: {
      const filtered = state
        .filter(asset => asset.name !== action.payload)

      return filtered
    }

    default: {
      return state
    }
  }
}
