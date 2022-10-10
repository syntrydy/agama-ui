import React from 'react'
import { useReactFlow } from 'reactflow'
import NodePopUp from '../../components/NodePopUp'
import { Handle, Position } from 'reactflow'
import { useState } from 'react'
import './Basepath.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
function Basepath({ data }) {
  const flowInstance = useReactFlow()
  const nodeId = data.id
  const [nodeData, setNodeData] = useState(data)
  if (!nodeData.hasOwnProperty('agamaData')) {
    nodeData.agamaData = {
      id: data.id,
      type: data.type,
      name: '',
      description: '',
      color: '',
      comment: '',
    }
  }
  const [agamaData, setAgamaData] = useState(nodeData.agamaData)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  function doSave(popUpNodeData) {
    flowInstance.setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          node.data.agamaData = popUpNodeData
        }
        return node
      }),
    )
    setAgamaData(popUpNodeData)
  }
  return (
    <>
      <div onClick={handleClick}>
        <AgamaTooltip title="The Basepath directive determines where flow assets reside">
          <div className="basepath">
            <Handle type="source" position={Position.Right} />
            <div>
              <label htmlFor="start">Basepath</label>
              <input
                id="start"
                name="start"
                placeholder="e.g sample/otp-email"
              />
            </div>
            <Handle
              type="target"
              position={Position.Left}
              id={`${data.id}.righta`}
            />
          </div>
        </AgamaTooltip>
      </div>
      <NodePopUp
        id={id}
        open={open}
        agamaData={agamaData}
        anchorEl={anchorEl}
        handleClose={handleClose}
        saveHandler={doSave}
      />
    </>
  )
}

export default Basepath
