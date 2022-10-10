import React from 'react'
import { useState } from 'react'
import { Handle, Position } from 'reactflow'
import { useReactFlow } from 'reactflow'
import './StartFlow.css'
import 'reactflow/dist/style.css'
import NodePopUp from '../../components/NodePopUp'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import AgamaNodeAddMenu from '../../components/AgamaNodeAddMenu/AgamaNodeAddMenu'
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
function StartFlow({ data }) {
  const isValidConnection = (connection) => {
    if (
      connection.source.includes('start') &&
      connection.target.includes('end')
    ) {
      return false
    } else {
      return true
    }
  }
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
      <div >
        <AgamaTooltip title="starts a new flow">
          <div className="start-node">
            <label htmlFor="end">Start Flow</label>
            <Handle
              type="source"
              position={Position.Right}
              isValidConnection={isValidConnection}
            />
            <div style={{paddingLeft: '80px'}}>
            <AgamaNodeAddMenu />
            <DeleteOutlined style={{color: '#FF0000'}}/>
            <EditOutlined onClick={handleClick}/>
            </div>
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

export default StartFlow
