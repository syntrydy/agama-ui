import React from 'react'
import { Handle, Position } from 'reactflow'
import './Repeat.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'
function Repeat({ data }) {
  return (
    <AgamaTooltip title="Repeat block">
      <div className="repeat-node">
        <Handle type="source" position={Position.Right} />
        <div>
          <label htmlFor="repeat-node">Repeat</label>
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

export default Repeat
