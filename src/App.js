import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import MainPanel from './components/MainPanel'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={2} md={3} component={Paper} elevation={6} square>
          <Sidebar />
        </Grid >
        <MainPanel />
      </Grid>
    </div>
  )
}

export default App
