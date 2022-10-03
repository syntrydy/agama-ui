import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Handle } from 'react-flow-renderer'
import { connect } from 'react-redux'
import '../styles/index.css'

const DiamondNode = ({ data, agamadata }) => {

  const [sourceId, setstate] = useState(data.agamasource)
  function getNodeById(nodeId) {
    let result = agamadata.filter((nds) => nds.id === nodeId)
    let size = result.length
    if (size > 0) {
      return result[size - 1].agamadata
    }
    return '-'
  }

  function testEval() {
    try {
      const data = getNodeById(sourceId)
      const result = data > 10 ? "Pass" : "Fail"
      //return result
      console.log(result)
    } catch (error) {
      return error
    }
  }

  return (
    <div
      style={{
        transform: 'rotate(-45deg)',
        width: '80px',
        height: '80px',

        border: '2px solid rgb(0, 225, 255)',
        overflow: 'hidden',
      }}
    >
      <Handle type="target" position="left" id={`${data.id}.left`} />
      <div
        style={{
          transform: 'rotate(45deg)',
          paddingTop: '10px',
          paddingLeft: '17px',
        }}
        id={data.id}
      >
        {getNodeById(sourceId)}
      </div>
      <div className="condition">
        <input id="condition" name="condition"/>
      </div>
      <Button variant="contained" onClick={testEval}>Eval</Button>
      <Handle
        type="source"
        position="right"
        id={`${data.id}.right1`}
        style={{ top: '40%' }}
      />
      <Handle
        type="source"
        position="right"
        id={`${data.id}.right2`}
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