import { Handle, Position } from 'reactflow'
import { useState } from 'react'
import 'reactflow/dist/style.css';
import './WoWise.css'

function WoWise({ data }) {
  const [agamaData, setagamaData] = useState({})
  return (
    <div className="wowise">
      <Handle type="target" position={Position.Left} />
      <div id="subflow">
        {data.label}
      </div>
    </div>
  )
}

export default WoWise
