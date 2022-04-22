//import { useState } from 'react'
import { Routes, Route, Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Divider, Typography, Stack, Link, Button } from '@mui/material'
import Home from './Home'
import AP0101 from './AppForm/AP0101/appCtx'
import AP0102 from './AppForm/AP0102/appCtx'

export default function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 3 }}>
            LOGO
          </Typography>

          <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem color="whitesmoke" />} >
            <Link component={RouterLink} to="/" hover>
              <Typography variant="body1" color="white">Home</Typography>
            </Link>
            <Link component={RouterLink} to="/ap0101">
              <Typography variant="body1" color="white">AP0101</Typography>
            </Link>
            <Link component={RouterLink} to="/ap0102">
              <Typography variant="body1" color="white">AP0102</Typography>
            </Link>
          </Stack>

        </Toolbar>
      </AppBar>

      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='ap0101' element={<AP0101 />} />
          <Route path='ap0102' element={<AP0102 />} />
        </Routes>
      </div>
    </div>
  );
}
