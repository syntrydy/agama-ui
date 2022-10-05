import { useState } from 'react'
import { Handle, Position } from 'reactflow'
import './EndFlow.css'
import 'reactflow/dist/style.css';
const handleStyle = { top: 30 }
function EndFlow({ data }) {
  const [agamaData, setagamaData] = useState({})
  
  return (
    <div className="end-node" style={{ backgroundColor: data.color }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${data.id}.righta`}
        style={handleStyle}
      />
    </div>
  )
}

export default EndFlow
