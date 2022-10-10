import React, { useState } from 'react'
import Popover from '@mui/material/Popover'
import { TextareaAutosize, Box, Button, TextField, Chip } from '@mui/material'
import Grid from '@mui/material/Grid'
import ColorPicker from 'material-ui-color-picker'

function NodePopUp({
  open,
  id,
  anchorEl,
  handleClose,
  agamaData,
  saveHandler,
}) {
  const [color, setcolor] = useState(agamaData.color)
  const popUpNodeData = {}
  const nodeId = agamaData.id
  const nodeType = agamaData.type
  const idName = `${nodeId}-name`
  const idDesc = `${nodeId}-desc`
  const idColor = `${nodeId}-color`
  const idComment = `${nodeId}-comment`
  function updateColor(value) {
    setcolor(value)
  }

  function doSave() {
    popUpNodeData.type = nodeType
    popUpNodeData.name = document.getElementById(idName).value
    popUpNodeData.description = document.getElementById(idDesc).value
    if (document.getElementById(idColor) !== null) {
      popUpNodeData.color = document.getElementById(idColor).value 
    }
    
    popUpNodeData.comment = document.getElementById(idComment).value
    saveHandler(popUpNodeData)
  }
  function showColorField(agamaData) {
    if (
      agamaData.type === 'Agama-start-Flow' ||
      agamaData.type === 'Agama-quit-Node' ||
      agamaData.type === 'Agama-end-Flow'
    ) {
      return false
    }
    return true
  }
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
          <Grid item xs={5}>
            Type
          </Grid>
          <Grid item xs={7}>
            <Chip label={agamaData.type} color="primary" variant="outlined" />
          </Grid>
          <Grid item xs={5}>
            Name
          </Grid>
          <Grid item xs={7}>
            <TextField
              id={idName}
              variant="standard"
              defaultValue={agamaData.name}
            />
          </Grid>
          <Grid item xs={5}>
            Description
          </Grid>
          <Grid item xs={7}>
            <TextField
              id={idDesc}
              variant="standard"
              defaultValue={agamaData.description}
            />
          </Grid>
          {showColorField(agamaData) && (
            <>
              <Grid item xs={5}>
                Node Color
              </Grid>
              <Grid item xs={7}>
                <ColorPicker
                  id={idColor}
                  defaultValue="#000"
                  value={color}
                  onChange={(color) => updateColor(color)}
                />
              </Grid>
            </>
          )}

          <Grid item xs={5}>
            Comment
          </Grid>
          <Grid item xs={7}>
            <TextareaAutosize
              id={idComment}
              defaultValue={agamaData.comment}
              minRows={3}
              placeholder="Add a comment"
              style={{ width: 170 }}
            />
          </Grid>
        </Grid>
        <Button onClick={doSave} style={{ marginLeft: '-10px' }}>
          Save
        </Button>
      </Box>
    </Popover>
  )
}
export default NodePopUp