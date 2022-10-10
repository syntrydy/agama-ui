import React from 'react'
import { useReactFlow } from 'reactflow'
import NodePopUp from '../../components/NodePopUp'
import { Handle, Position } from 'reactflow'
import { useState } from 'react'
import './Repeat.css'
import 'reactflow/dist/style.css'
function Repeat({ data }) {
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
        <div className="repeat-node">
          <Handle type="source" position={Position.Right} />
          <div>
            <label htmlFor="trigger-node">Repeat</label>
          </div>
          <div className="fields">
            <div>
              <label htmlFor="repeat-block">Repeat Block</label>
              <input
                id="repeat-block"
                name="repeat-block"
                placeholder="block to repeat"
              />
            </div>
            <div>
              <label htmlFor="assigned-variable-name">
                Max number of times
              </label>
              <input
                id="max-number-times"
                name="max-number"
                placeholder="e.g 3"
              />
            </div>
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

export default Repeat
