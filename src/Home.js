import React from 'react'
import { Button } from '@mui/material'
import LoopIcon from '@mui/icons-material/Loop'
import PendingIcon from '@mui/icons-material/Pending'

import logo from './logo.svg'
import './Home.css'
// redux & actions
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementAsync } from './store/counterSlice'

export default function Home() {
  const count = useSelector(store => store.counter.value)
  const f_blocking = useSelector(store => store.appInfo.f_blocking)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">

        {f_blocking ? <LoopIcon fontSize="large" /> : <PendingIcon fontSize="large" />}
        
        <div className='block'>
          <Button variant="contained" color="primary" sx={{ mx: 1 }}
            onClick={() => dispatch(increment())}>
            Increment
          </Button>
          <span>{count}</span>
          <Button variant="contained" color="secondary" sx={{ mx: 1 }}
            onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
          <Button variant="outlined" color="warning" sx={{ mx: 1 }}
            onClick={() => dispatch(incrementAsync(3))}>
            incrementAsync
          </Button>
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
