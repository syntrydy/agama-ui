import React from 'react'
import { useReactFlow } from 'reactflow'
import NodePopUp from '../../components/NodePopUp'
import { useState } from 'react'
import { Handle, Position } from 'reactflow'
import './Trigger.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'

function Trigger({ data }) {
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
        <AgamaTooltip title="triggers an action">
          <div className="trigger-node" style={{ backgroundColor: data.color }}>
            <Handle type="source" position={Position.Right} />
            <div>
              <label htmlFor="trigger-node">Trigger Flow</label>
            </div>

            <div className="fields">
              <div>
                <label htmlFor="flow-filename">Flow Filename</label>
                <input
                  id="flow-filename"
                  name="flow-filename"
                  placeholder="e.g index"
                />
              </div>

              <div>
                <label htmlFor="assigned-variable-name">
                  assigned variable name
                </label>
                <input
                  id="variable-name"
                  name="assigned-variable-name"
                  placeholder="e.g obj = Trigger.io.jans..."
                />
              </div>
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

export default Trigger
