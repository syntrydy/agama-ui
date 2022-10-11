import React from 'react'
import { Handle, Position } from 'reactflow'
import './Quit.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'

function Quit({ data }) {
  return (
    <AgamaTooltip title="Quit">
      <div className="quit-node">
      <label htmlFor="quit-node">Quit Node</label>
        <Handle type="source" position={Position.Right} />
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

export default Quit
