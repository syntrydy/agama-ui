import { useCallback } from 'react'
import { Handle, Position } from 'react-flow-renderer'
import '../styles/index.css'
import TextField from '@mui/material/TextField'
const handleStyle = { top: 30 }

function Call({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="call-node" style={{ backgroundColor: data.color }}>
      <Handle type="source" position={Position.Right} />
      <div>
        <label htmlFor="action-node">Call</label>
      </div>

      <div className="fields">
      <div>
        <label htmlFor="action">Java method name</label>
        <input
          id="method-name"
          name="java-method-name"
          onChange={onChange}
          placeholder="e.g io.jans.agama..."
        />
      </div>

      <div>
        <label htmlFor="action">params(space seperated)</label>
        <input
          id="params"
          name="params"
          onChange={onChange}
          placeholder="e.g userId"
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

export default Call
