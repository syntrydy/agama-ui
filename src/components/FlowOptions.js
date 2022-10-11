import React from 'react'
import { useReactFlow } from 'reactflow'
import { DeleteOutlined, EditOutlined } from '@mui/icons-material'
import AgamaNodeAddMenu from './AgamaNodeAddMenu/AgamaNodeAddMenu'
import { useState } from 'react'
import NodePopUp from './NodePopUp'
function FlowOptions({ data }) {
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

  const deleteNodeById = (id) => {
    flowInstance.setNodes((nds) => nds.filter((node) => node.id !== id))
  }
  return (
    <>
      <div style={{ paddingLeft: '70px' }}>
        <AgamaNodeAddMenu />
        <DeleteOutlined
          onClick={() => deleteNodeById(data.id)}
          style={{ color: '#FF0000' }}
        />
        <EditOutlined onClick={handleClick} />
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
export default FlowOptions
