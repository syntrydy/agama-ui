import React from 'react'
import { Handle, Position } from 'reactflow'
import 'reactflow/dist/style.css'
import './WoWise.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'

function WoWise({ data }) {
  return (
    <AgamaTooltip title="Use to write conditionals.">
      <div className="wowise">
        <Handle type="target" position={Position.Left} />
        <div id="subflow">{data.type}</div>
        <FlowOptions data={data} />
      </div>
    </AgamaTooltip>
  )
}

export default WoWise
