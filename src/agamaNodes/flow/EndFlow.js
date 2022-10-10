import { useState } from 'react'
import React from 'react'
import { Handle, Position } from 'reactflow'
import { useReactFlow } from 'reactflow'
import './EndFlow.css'
import 'reactflow/dist/style.css'
import NodePopUp from '../../components/NodePopUp'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'

function EndFlow({ data }) {
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
        <AgamaTooltip title="Ends a flow">
          <div className="end-node" style={{ backgroundColor: data.color }}>
          <label htmlFor="end">End Flow</label>
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

export default EndFlow
