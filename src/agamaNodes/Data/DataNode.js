import React from 'react'
import NodePopUp from '../../components/NodePopUp'
import { useCallback } from 'react'
import { useState } from 'react'
import { Handle, useReactFlow, Position } from 'reactflow'
import { connect } from 'react-redux'
import './DataNode.css'
import 'reactflow/dist/style.css'

function DataNode({ data, updateNodeDataInStore }) {
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
  const onChange = useCallback((event) => {
    const value = event.target.value
    const nodeId = data.id
    const nodeData = { nodeId: nodeId, agamadata: value }
    updateNodeDataInStore(nodeData)
    let shouldAnimate = value !== null && value.length >= 1 ? true : false
    animateEdge(shouldAnimate, nodeId)
  }, [])

  function animateEdge(animated, nodeId) {
    flowInstance.setEdges((eds) =>
      eds.map((edge) => {
        if (edge.source === nodeId) {
          edge.animated = animated ? true : false
        }
        return edge
      }),
    )
  }
  return (
    <>
      <div onClick={handleClick}>
    <div className="data-node">
      <Handle type="source" position={Position.Right} />
      <div>
        <label htmlFor="data">Data</label>
        <input id="data" name="data" onChange={onChange} />
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

const mapDispatch = (dispatch) => ({
  updateNodeDataInStore: (payload) => dispatch.flowModel.addNodeData(payload),
})

const mapState = (state) => ({
  agamadata: state.flowModel,
})
export default connect(mapState, mapDispatch)(DataNode)
