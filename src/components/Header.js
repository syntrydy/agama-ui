import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Agama UI POC
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack direction="row" spacing={2}>
        <div id="canvas"></div>
        <div id="panel"></div>
      </Stack>
    </Box>
  )
}

export default Header
