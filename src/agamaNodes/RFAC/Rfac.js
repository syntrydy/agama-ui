import React from 'react'
import { Handle, Position } from 'reactflow'
import 'reactflow/dist/style.css'
import './Rfac.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'

function Rfac({ data }) {
  return (
    <AgamaTooltip title="Redirect and Fetch at callback">
      <div className="rfac-node">
        <Handle type="source" position={Position.Right} />
        <div>
          <label htmlFor="rfac-node">RFAC</label>
        </div>
        <Handle
          type="target"
          position={Position.Left}
          id={`${data.id}.right`}
        />
        <FlowOptions data={data} />
      </div>
    </AgamaTooltip>
  )
}

export default Rfac
