import React from 'react'
import { Handle, Position } from 'reactflow'
import './Call.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'

function Call({ data }) {
  let defaultColor = ''
  if (!data.hasOwnProperty('agamaData')) {
    data.agamaData = {
      id: data.id,
      type: data.type,
      color: defaultColor,
    }
  }
  if (data.agamaData.hasOwnProperty('color')) {
    defaultColor = data.agamaData.color
  }
  return (
    <AgamaTooltip title="Calls a java class">
      <div className="call-node" style={{ backgroundColor: defaultColor }}>
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
