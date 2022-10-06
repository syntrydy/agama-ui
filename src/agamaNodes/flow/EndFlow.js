import { useState } from 'react'
import React from 'react'
import { Handle, Position } from 'reactflow'
import './EndFlow.css'
import 'reactflow/dist/style.css'
import NodePopUp from '../../components/NodePopUp'
const handleStyle = { top: 30 }
function EndFlow({ data }) {
  if (!data.hasOwnProperty('agamaData')) {
    data.agamaData = { type: data.type }
  }
  const [agamaData, setagamaData] = useState(data.agamaData)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div onClick={handleClick}>
        <div className="end-node" style={{ backgroundColor: data.color }}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${data.id}.righta`}
            style={handleStyle}
          />
        </div>
      </div>
      <NodePopUp
        id={id}
        open={open}
        agamaData={agamaData}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  )
}

export default EndFlow
