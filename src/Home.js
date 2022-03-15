import logo from './logo.svg'
import './Home.css'
// redux, action
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementAsync } from './store/counterSlice'

export default function Home() {
  const count = useSelector(store => store.counter.value)
  const f_blocking = useSelector(store => store.appInfo.f_blocking)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">

        <pre>f_blocking: {f_blocking ? 'TRUE' : 'FALSE'}</pre>
        <div className='block'>
          <button onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button onClick={() => dispatch(incrementAsync(3))}>
            incrementAsync
          </button>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
