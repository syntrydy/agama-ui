import { useCallback } from 'react'
import { Handle, Position } from 'react-flow-renderer'
import '../styles/index.css'
const handleStyle = { top: 10 }

function FinishFlow({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="finish-node" style={{ backgroundColor: data.color }}>
      <Handle type="source" position={Position.Right} />
      <div>
        <label htmlFor="finish">Finish Flow</label>
        <input
          id="action"
          name="action"
          onChange={onChange}
          placeholder="e.g true, obj"
        />
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

export default FinishFlow
