import React from 'react'
import { Handle, Position } from 'reactflow'
import './LogNode.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'
function LogNode({ data }) {
  return (
    <AgamaTooltip title="use for logging" placement="top-start">
      <div className="log">
        <Handle type="source" position={Position.Right} />
        <div>
          <label htmlFor="log">Log</label>
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
export default LogNode
