import { Handle, Position } from 'reactflow'
import { useState } from 'react'
import './Basepath.css'
import 'reactflow/dist/style.css';

function Basepath({ data }) {
  const [agamaData, setagamaData] = useState({})
  return (
    <div className="basepath">
      <Handle type="source" position={Position.Right} />
      <div>
        <label htmlFor="start">Basepath</label>
        <input
          id="start"
          name="start"
          placeholder="e.g sample/otp-email"
        />
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id={`${data.id}.righta`}
      />
    </div>
  )
}

export default Basepath