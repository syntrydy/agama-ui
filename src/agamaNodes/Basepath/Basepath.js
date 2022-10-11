import React from 'react'
import { Handle, Position } from 'reactflow'
import './Basepath.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'
function Basepath({ data }) {
  return (
    <AgamaTooltip title="The Basepath directive determines where flow assets reside">
      <div className="basepath">
        <Handle type="source" position={Position.Right} />
        <div>
          <label htmlFor="basepath">Basepath</label>
          <input id="start" name="start" placeholder="e.g sample/otp-email" />
        </div>
        <Handle
          type="target"
          position={Position.Left}
          id={`${data.id}.righta`}
        />
        <FlowOptions data={data} />
      </div>
    </AgamaTooltip>
  )
}

export default Basepath
