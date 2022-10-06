import React from 'react'
import { useState } from 'react'
import { Handle, Position } from 'reactflow'
import './StartFlow.css'
import 'reactflow/dist/style.css'
import NodePopUp from '../../components/NodePopUp'
const handleStyleRight = { top: 40, left: 66 }
function StartFlow({ data }) {
  const [agamaData, setagamaData] = useState({})
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
        <div className="start-node" style={{ backgroundColor: data.color }}>
          <Handle
            type="source"
            position={Position.Right}
            style={handleStyleRight}
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

export default StartFlow
