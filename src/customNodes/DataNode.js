import { useCallback } from 'react'
import { Handle, Position } from 'react-flow-renderer'
import { connect } from 'react-redux'
import '../styles/index.css'
const handleStyle = { top: 10 }

function DataNode({ data, setNodeData }) {
  const onChange = useCallback((event) => {
    const value = event.target.value
    const nodeId = data.id
    const nodeData = { nodeId: nodeId, agamadata: value }
    data = { flowData: nodeData }
    setNodeData(nodeData)
  }, [])

  return (
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
        style={handleStyle}
      />
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  setNodeData: (payload) => dispatch.flowModel.addNodeData(payload),
})

const mapState = (state) => ({
  agamadata: state.flowModel,
})
export default connect(mapState, mapDispatch)(DataNode)
