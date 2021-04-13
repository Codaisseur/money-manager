import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw } from './store/balance/actions'
import { selectBalance } from './store/balance/selectors'
import { selectAssets } from './store/assets/selectors'
import { add, remove } from './store/assets/actions'
import { useState } from 'react'

function App () {
  const dispatch = useDispatch()
  const balance = useSelector(selectBalance)
  const assets = useSelector(selectAssets)

  const [name, setName] = useState('')
  const [value, setValue] = useState(0)

  function onClick () {
    const action = deposit(10)

    dispatch(action)
  }

  function onClickWithdraw () {
    const action = withdraw(1)

    dispatch(action)
  }

  function onClickRemove (name) {
    const action = remove(name)

    console.log('action test:', action)

    dispatch(action)
  }

  const rows = assets.map(asset => (
    <tr key={asset.name}>
      <td>{asset.name}</td>
      <td>{asset.value}</td>
      <td>
        <button
          onClick={
            (event) => onClickRemove(asset.name)
          }
        >
          Remove
        </button>
      </td>
    </tr>
  ))

  const table = (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )

  function onSubmit (event) {
    event.preventDefault()

    const action = add(name, value)

    dispatch(action)
  }

  const form = (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={name}
        onChange={
          event => setName(event.target.value)
        }
      />
      <input
        type='number'
        value={value}
        onChange={
          event => {
            const value = parseInt(event.target.value)
            setValue(value)
          }
        }
      />
      <button
        type='button'
        onClick={
          () => setValue(value * 2)
        }
      >
        Double
      </button>
      <button>
        Submit
      </button>
    </form>
  )

  return (
    <main>
      {balance}
      <button onClick={onClick}>
        deposit 10
      </button>

      <button onClick={onClickWithdraw}>
        Withdraw 1
      </button>

      {form}

      {table}
    </main>
  )
}

export default App
