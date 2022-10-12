import React, { useState } from 'react'
import Popover from '@mui/material/Popover'
import { TextareaAutosize, Box, Button, TextField, Chip } from '@mui/material'
import Grid from '@mui/material/Grid'
import ColorPicker from 'material-ui-color-picker'
import {
  showColorField,
  showJavaMethodNameField,
  showParamsField,
  showFlowNameField,
  showBasepathField,
  showFlowFileNameField,
  showAssignedVariableNameField,
  showTemplateNameField,
  showLogMessageField,
  showMaxNumberOfIterationsField,
  showRepeatBlockField,
  showQuitConditionField,
  showRedirectLocationField,
} from './Utils/NodePopUpUtils'

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
  const idName = `${nodeId}-flowname`
  const idBasepath = `${nodeId}-basepath`
  const idColor = `${nodeId}-color`
  const idComment = `${nodeId}-comment`
  const idFlowFileName = `${nodeId}-flowfilename`
  const idAssignedVariableName = `${nodeId}-assignedvariableName`
  const idJavaMethodName = `${nodeId}-javaMethodName`
  const idParams = `${nodeId}-params`
  const idLogMessage = `${nodeId}-logMessage`
  const idTemplateName = `${nodeId}-templateName`
  const idMaxIteration = `${nodeId}-maxIteration`
  const idRepeatBlock = `${nodeId}-repeatBlock`
  const idQuitCondition = `${nodeId}-quitCondition`
  const idRedirectLocation = `${nodeId}-redirectLocation`
  function updateColor(value) {
    setcolor(value)
  }

  function doSave() {
    popUpNodeData.type = nodeType
    if (document.getElementById(idName) !== null) {
      popUpNodeData.flowname = document.getElementById(idName).value
    }
    if (document.getElementById(idBasepath) !== null) {
      popUpNodeData.basepath = document.getElementById(idBasepath).value
    }
    if (document.getElementById(idFlowFileName) !== null) {
      popUpNodeData.flowFileName = document.getElementById(idFlowFileName).value
    }
    if (document.getElementById(idAssignedVariableName) !== null) {
      popUpNodeData.asssignedVariableName = document.getElementById(
        idAssignedVariableName,
      ).value
    }
    if (document.getElementById(idColor) !== null) {
      popUpNodeData.color = document.getElementById(idColor).value
    }
    if (document.getElementById(idComment) !== null) {
      popUpNodeData.comment = document.getElementById(idComment).value
    }
    if (document.getElementById(idJavaMethodName) !== null) {
      popUpNodeData.javaMethodName = document.getElementById(
        idJavaMethodName,
      ).value
    }
    if (document.getElementById(idParams) !== null) {
      popUpNodeData.params = document.getElementById(idParams).value
    }
    if (document.getElementById(idTemplateName) !== null) {
      popUpNodeData.templateName = document.getElementById(idTemplateName).value
    }
    if (document.getElementById(idLogMessage) !== null) {
      popUpNodeData.logMessage = document.getElementById(idLogMessage).value
    }
    if (document.getElementById(idMaxIteration) !== null) {
      popUpNodeData.maxIteration = document.getElementById(idMaxIteration).value
    }
    if (document.getElementById(idRepeatBlock) !== null) {
      popUpNodeData.repeatBlock = document.getElementById(idRepeatBlock).value
    }
    if (document.getElementById(idQuitCondition) !== null) {
      popUpNodeData.quitCondition = document.getElementById(idQuitCondition).value
    }
    if (document.getElementById(idRedirectLocation) !== null) {
      popUpNodeData.redirectLocation = document.getElementById(idRedirectLocation).value
    }
    saveHandler(popUpNodeData)
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
          {showFlowNameField(agamaData) && (
            <>
              <Grid item xs={5}>
                Flow Name
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idName}
                  variant="standard"
                  placeholder="Test-flow"
                  defaultValue={agamaData.flowname}
                />
              </Grid>
            </>
          )}
          {showBasepathField(agamaData) && (
            <>
              <Grid item xs={5}>
                Basepath
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idBasepath}
                  variant="standard"
                  placeholder="e.g sample/otp-email"
                  defaultValue={agamaData.basepath}
                />
              </Grid>
            </>
          )}
          {showFlowFileNameField(agamaData) && (
            <>
              <Grid item xs={5}>
                Flow File Name
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idFlowFileName}
                  variant="standard"
                  placeholder="e.g index"
                  defaultValue={agamaData.flowFileName}
                />
              </Grid>
            </>
          )}
          {showJavaMethodNameField(agamaData) && (
            <>
              <Grid item xs={5}>
                Java method name
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idJavaMethodName}
                  variant="standard"
                  placeholder="e.g io.jans.agama"
                  defaultValue={agamaData.javaMethodName}
                />
              </Grid>
            </>
          )}
          {showTemplateNameField(agamaData) && (
            <>
              <Grid item xs={5}>
                Template name
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idTemplateName}
                  variant="standard"
                  placeholder="e.g otp.flth"
                  defaultValue={agamaData.templateName}
                />
              </Grid>
            </>
          )}
          {showParamsField(agamaData) && (
            <>
              <Grid item xs={5}>
                Params (space seperated)
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idParams}
                  variant="standard"
                  placeholder="e.g userId"
                  defaultValue={agamaData.params}
                />
              </Grid>
            </>
          )}
          {showAssignedVariableNameField(agamaData) && (
            <>
              <Grid item xs={5}>
                Assigned Variable Name
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idAssignedVariableName}
                  variant="standard"
                  placeholder="e.g obj = Trigger.io.jans..."
                  defaultValue={agamaData.asssignedVariableName}
                />
              </Grid>
            </>
          )}
          {showLogMessageField(agamaData) && (
            <>
              <Grid item xs={5}>
                Log Message
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idLogMessage}
                  variant="standard"
                  placeholder="e.g Hi there"
                  defaultValue={agamaData.logMessage}
                />
              </Grid>
            </>
          )}
          {showMaxNumberOfIterationsField(agamaData) && (
            <>
              <Grid item xs={5}>
                Maximum Iteration
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idMaxIteration}
                  variant="standard"
                  placeholder="e.g 3"
                  defaultValue={agamaData.maxIteration}
                />
              </Grid>
            </>
          )}
          {showQuitConditionField(agamaData) && (
            <>
              <Grid item xs={5}>
                Quit Condition
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idQuitCondition}
                  variant="standard"
                  placeholder="When data.guess is month"
                  defaultValue={agamaData.quitCondition}
                />
              </Grid>
            </>
          )}
          {showRepeatBlockField(agamaData) && (
            <>
              <Grid item xs={5}>
                Code block to repeat
              </Grid>
              <Grid item xs={7}>
                <TextareaAutosize
                  id={idRepeatBlock}
                  defaultValue={agamaData.repeatBlock}
                  minRows={3}
                  placeholder="e.g data = RRF &apos;index.ftl&apos;"
                  style={{ width: 170 }}
                />
              </Grid>
            </>
          )}
          {showRedirectLocationField(agamaData) && (
            <>
              <Grid item xs={5}>
                Redirect Location
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id={idRedirectLocation}
                  variant="standard"
                  placeholder="e.g &apos;https://login.twitter.com/?blah..&boo=...&apos;"
                  defaultValue={agamaData.redirectLocation}
                />
              </Grid>
            </>
          )}
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
              placeholder="e.g Starting flow..."
              style={{ width: 170 }}
            />
          </Grid>
        </Grid>
        <Button onClick={doSave} style={{ marginLeft: '-10px' }}>
          Save
        </Button>
        <Button onClick={handleClose} style={{ color: 'red ' }}>
          Cancel
        </Button>
      </Box>
    </Popover>
  )
}
export default NodePopUp
