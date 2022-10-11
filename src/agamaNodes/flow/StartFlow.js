import React from 'react'
import { Handle, Position } from 'reactflow'
import './StartFlow.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'
function StartFlow({ data }) {
  const isValidConnection = (connection) => {
    if (
      connection.source.includes('start') &&
      connection.target.includes('end')
    ) {
      return false
    } else {
      return true
    }
  }
  return (
    <AgamaTooltip title="starts a new flow">
      <div className="start-node">
        <label htmlFor="start-flow">Flow</label>
        <Handle
          type="source"
          position={Position.Right}
          isValidConnection={isValidConnection}
        />
        <FlowOptions data={data} />
      </div>
    </AgamaTooltip>
  )
}
export default StartFlow
