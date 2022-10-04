import { useCallback } from 'react'
import { Handle, Position } from 'react-flow-renderer'
import '../styles/index.css'
const handleStyle = { top: 10 }

function StartFlow({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="start-node" style={{ backgroundColor: data.color }}>
      <Handle type="source" position={Position.Right} />
      <div>
        <label htmlFor="start">Flow</label>
        <input
          id="start"
          name="start"
          onChange={onChange}
          placeholder="flow name"
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

export default StartFlow