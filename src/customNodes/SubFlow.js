import { useState } from 'react'
import { Handle, Position } from 'react-flow-renderer'
import { connect } from 'react-redux'
import '../styles/index.css'

const handleStyle = { top: 10 }

function SubFlow({ data, agamadata }) {
  const [sourceId, setstate] = useState(data.agamasource)
  function getNodeById(nodeId) {
    let result = agamadata.filter((nds) => nds.id === nodeId)
    let size = result.length
    if (size > 0) {
      return result[size - 1].agamadata
    }
    return '-'
  }

  return (
    <div className="subflow">
      <Handle type="target" position={Position.Left} />
      <div id="subflow">
        {data.label}-{getNodeById(sourceId)}
      </div>
      {/* <Handle type="source" position={Position.Right} id={`${data.id}.righta`} style={handleStyle} /> */}
      {/* <Handle type="source" position={Position.Right} id={`${data.id}.rightb`} /> */}
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  setNodeData: (payload) => dispatch.flowModel.addNodeData(payload),
})

const mapState = (state) => ({
  agamadata: state.flowModel.nodes,
})

export default connect(mapState, mapDispatch)(SubFlow)
