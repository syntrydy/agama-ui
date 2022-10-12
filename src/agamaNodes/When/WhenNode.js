import React from 'react'
import { Handle, Position } from 'reactflow'
import './WhenNode.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'
const handleStyleRight = { top: 1 }

function WhenNode({ data }) {
  return (
    <AgamaTooltip title="When node">
      <div className="when-node">
        <Handle
          type="source"
          id={`${data.id}.right`}
          position={Position.Right}
          style={handleStyleRight}
        />
        <div className="contents">
        <label htmlFor="when-node">When</label>
        <FlowOptions data={data} />
        </div>
        
        <Handle
          type="target"
          position={Position.Left}
          id={`${data.id}.left`}
          style={handleStyleRight}
        />
      </div>
    </AgamaTooltip>
  )
}

export default WhenNode
