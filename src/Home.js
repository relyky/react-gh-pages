import React from 'react'
import { Typography, Button, CircularProgress } from '@mui/material'
import {
  Add as AddIcon,
  Remove as RemoveIcon
} from '@mui/icons-material'

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

        <div className='block'>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} sx={{ mx: 1 }}
            onClick={() => dispatch(increment())}>
            Increment
          </Button>
          <Typography variant="h2" component="span" sx={{ mx: 1 }}>
            {count}
          </Typography>
          <Button variant="contained" color="secondary" startIcon={<RemoveIcon />} sx={{ mx: 1 }}
            onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
          <Button variant="outlined" color="warning" sx={{ mx: 1 }}
            endIcon={f_blocking && <CircularProgress size="1rem" color="secondary" />}
            onClick={() => dispatch(incrementAsync(3))}>
            incrementAsync
          </Button>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          練習 <code>React.v17</code> + <code>Redux</code> + <code>Material UI.v5</code>
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
