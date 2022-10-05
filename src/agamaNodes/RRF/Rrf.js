import { useState } from 'react'
import { Handle, Position } from 'reactflow'
import './Rrf.css'
import 'reactflow/dist/style.css';

function Rrf({ data }) {
  const [agamaData, setagamaData] = useState({})
  return (
    <div className="rrf-node">
      <Handle type="source" position={Position.Right} />
      <div>
        <label htmlFor="rrf-node">RRF</label>
      </div>

      <div className="fields">
      <div>
        <label htmlFor="template-name">Template Name</label>
        <input
          id="template-name"
          name="template-name"
          placeholder="e.g otp.flth"
        />
      </div>

      <div>
        <label htmlFor="params">params</label>
        <input
          id="params"
          name="params"
          placeholder="e.g obj"
        />
      </div>

      <div>
        <label htmlFor="assigned-variable-name">assigned variable name</label>
        <input
          id="variable-name"
          name="assigned-variable-name"
          placeholder="e.g Creds"
        />
      </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id={`${data.id}.righta`}
      />
    </div>
  )
}

export default Rrf
