import React from 'react'
import { Handle, Position } from 'reactflow'
import './Call.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'

function Call({ data }) {
  return (
    <AgamaTooltip title="Calls a java class">
      <div className="call-node">
        <Handle type="source" position={Position.Right} />
        <div>
          <label htmlFor="call-node">Call</label>
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

export default Call
