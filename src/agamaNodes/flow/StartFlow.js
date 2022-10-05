import { useState } from 'react'
import { Handle, Position } from 'reactflow'
import './StartFlow.css'
import 'reactflow/dist/style.css';
const handleStyleRight = { top: 40, left: 66 }
function StartFlow({ data }) {
  const [agamaData, setagamaData] = useState({})
  return (
    <div className="start-node" style={{ backgroundColor: data.color }}>
      <Handle type="source" position={Position.Right} style={handleStyleRight}/>
    </div>
  )
}

export default StartFlow
