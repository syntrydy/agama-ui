import { duration } from '@mui/material'
import { useCallback } from 'react'
import { Handle, Position } from 'react-flow-renderer'
import '../styles/index.css'
const handleStyle = { top: 10 }

function Trigger({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="action-node" style={{ backgroundColor: data.color }}>
      <Handle type="source" position={Position.Right} />
      <div>
        <label htmlFor="action-node">Trigger Flow</label>
      </div>

      <div className="fields">
      <div>
        <label htmlFor="action">Flow Filename</label>
        <input
          id="flow-filename"
          name="flow-filename"
          onChange={onChange}
          placeholder="e.g index"
        />
      </div>

      <div>
        <label htmlFor="action">assigned variable name</label>
        <input
          id="variable-name"
          name="assigned-variable-name"
          onChange={onChange}
          placeholder="e.g obj = Trigger.io.jans..."
        />
      </div>
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

export default Trigger
