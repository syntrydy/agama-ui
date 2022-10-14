import React from 'react'
import { Handle, Position } from 'reactflow'
import './EndFlow.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'

function EndFlow({ data }) {
  return (
    <AgamaTooltip title="Ends a flow" placement="top-start">
      <div className="end-node" style={{ backgroundColor: data.color }}>
        <label htmlFor="end">Finish</label>
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

export default EndFlow
