import React from 'react'
import { useReactFlow } from 'reactflow'
import NodePopUp from '../../components/NodePopUp'
import { useState } from 'react'
import { Handle, Position } from 'reactflow'
import './Quit.css'
import 'reactflow/dist/style.css'

function Quit({ data }) {
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
        <div className="quit-node">
          <Handle type="source" position={Position.Right} />
          <div>
            <label htmlFor="quit-node">Quit</label>
            <input
                id="quit-node"
                name="quit"
              />
          </div>

          <Handle
            type="target"
            position={Position.Left}
            id={`${data.id}.righta`}
          />
        </div>
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

export default Quit
