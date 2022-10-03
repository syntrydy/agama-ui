import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Handle, useReactFlow } from 'react-flow-renderer'
import { connect } from 'react-redux'
import '../styles/index.css'

const DiamondNode = ({ data, agamadata }) => {
  const flowInstance = useReactFlow()
  const conditionRightId = `${data.id}.right1`
  const conditionLeftId = `${data.id}.right2`

  const [sourceId, setstate] = useState(data.agamasource)
  function getNodeById(nodeId) {
    let result = agamadata.filter((nds) => nds.id === nodeId)
    let size = result.length
    if (size > 0) {
      return result[size - 1].agamadata
    }
    return '-'
  }

  function excecute() {
    let result = doEvaluate()
    animateEdges(result)
  }

  function animateEdges(animated) {
    flowInstance.setEdges((eds) =>
      eds.map((edge) => {
        if (edge.source === data.id && edge.target.endsWith('SUCCESS')) {
          edge.animated = animated ? true : false
        }
        if (edge.source === data.id && edge.target.endsWith('FAILURE')) {
          edge.animated = animated ? false : true
        }
        return edge
      }),
    )
  }

  function doEvaluate() {
    try {
      const inputData = getNodeById(sourceId)
      const input = document.getElementById('condition').value
      const evaluation = `${inputData} ${input}`
      return eval(evaluation)
    } catch (error) {
      return false
    }
  }

  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        border: '2px solid rgb(0, 225, 255)',
        overflow: 'hidden',
      }}
    >
      <Handle type="target" position="left" id={`${data.id}.left`} />
      <div
        style={{
          paddingTop: '10px',
          paddingLeft: '17px',
        }}
        id={data.id}
      ></div>
      <div className="condition">
        <input id="condition" name="condition" />
      </div>
      <Button
        variant="contained"
        style={{
          fontSize: '10px',
          maxWidth: '70px',
          maxHeight: '20px',
          minWidth: '70px',
          minHeight: '20px',
          margin: '2px',
        }}
        onClick={excecute}
      >
        Evaluate
      </Button>
      <Handle
        type="source"
        position="right"
        id={conditionRightId}
        style={{ top: '40%' }}
      />
      <Handle
        type="source"
        position="right"
        id={conditionLeftId}
        style={{ top: '60%' }}
      />
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  setNodeData: (payload) => dispatch.flowModel.addNodeData(payload),
})

const mapState = (state) => ({
  agamadata: state.flowModel.nodes,
})

export default connect(mapState, mapDispatch)(DiamondNode)
