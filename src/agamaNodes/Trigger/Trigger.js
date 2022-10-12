import React from 'react'
import { Handle, Position } from 'reactflow'
import './Trigger.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'

function Trigger({ data }) {
  return (
    <AgamaTooltip title="triggers an action">
      <div className="trigger-node" style={{ backgroundColor: data.color }}>
        <Handle type="source" position={Position.Right} />
        <div>
          <label htmlFor="trigger-node">Trigger</label>
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

export default Trigger
