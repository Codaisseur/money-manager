import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw } from './store/balance/actions'
import { selectBalance } from './store/balance/selectors'

function App () {
  const dispatch = useDispatch()
  const balance = useSelector(selectBalance)

  function onClick () {
    const action = deposit(10)

    dispatch(action)
  }

  function onClickWithdraw () {
    const action = withdraw(1)
    console.log('widthdraw action:', action)

    dispatch(action)
  }

  return (
    <main>
      {balance}
      <button onClick={onClick}>
        deposit 10
      </button>

      <button onClick={onClickWithdraw}>
        Withdraw 1
      </button>
    </main>
  )
}

export default App
