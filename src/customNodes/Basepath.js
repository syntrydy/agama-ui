import { useCallback } from 'react'
import { Handle, Position } from 'react-flow-renderer'
import '../styles/index.css'
const handleStyle = { top: 10 }

function Basepath({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="basepath" style={{ backgroundColor: data.color }}>
      <Handle type="source" position={Position.Right} />
      <div>
        <label htmlFor="start">Basepath</label>
        <input
          id="start"
          name="start"
          onChange={onChange}
          placeholder="e.g sample/otp-email"
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

export default Basepath