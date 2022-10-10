import React from 'react'
import { useReactFlow } from 'reactflow'
import NodePopUp from '../../components/NodePopUp'
import { useState } from 'react'
import { Handle, Position } from 'reactflow'
import './Call.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'

function Call({ data }) {
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
        <AgamaTooltip title="Calls a java class">
          <div className="call-node">
            <Handle type="source" position={Position.Right} />
            <div>
              <label htmlFor="call-node">Call</label>
            </div>

            <div className="fields">
              <div>
                <label htmlFor="method-name">Java method name</label>
                <input
                  id="method-name"
                  name="java-method-name"
                  placeholder="e.g io.jans.agama..."
                />
              </div>

              <div>
                <label htmlFor="params">params(space seperated)</label>
                <input id="params" name="params" placeholder="e.g userId" />
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

export default Call
