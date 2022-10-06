import React from 'react'
import Popover from '@mui/material/Popover'
import { TextareaAutosize, Badge, Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import ColorPicker from 'material-ui-color-picker'

function NodePopUp({ open, id, anchorEl, handleClose, agamaData }) {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Box style={{ margin: '10px', maxWidth: '300px' }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            Type
          </Grid>
          <Grid item xs={6}>
            <Badge
              color="secondary"
              badgeContent={agamaData.type || 'start'}
            ></Badge>
          </Grid>
          <Grid item xs={5}>
            Name
          </Grid>
          <Grid item xs={7}>
            <TextField id="outlined-basic" variant="standard" />
          </Grid>
          <Grid item xs={5}>
            Description
          </Grid>
          <Grid item xs={7}>
            <TextField id="outlined-basic" variant="standard" />
          </Grid>
          <Grid item xs={5}>
            Node Color
          </Grid>
          <Grid item xs={7}>
            <ColorPicker
              name="color"
              defaultValue="#000"
              // value={this.state.color} - for controlled component
              onChange={(color) => console.log(color)}
            />
          </Grid>
          <Grid item xs={5}>
            Comment
          </Grid>
          <Grid item xs={7}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Add a comment"
              style={{ width: 170 }}
            />
          </Grid>
        </Grid>
        <Button>Save</Button>
      </Box>
    </Popover>
  )
}
export default NodePopUp
