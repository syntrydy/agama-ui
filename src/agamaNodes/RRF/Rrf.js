import React from 'react'
import { Handle, Position } from 'reactflow'
import './Rrf.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import 'reactflow/dist/style.css'
import FlowOptions from '../../components/FlowOptions'

function Rrf({ data }) {
  return (
    <AgamaTooltip title="RRF(Render-Reply-Fetch) use this to abstract the process of rendering a UI template">
      <div className="rrf-node">
        <Handle type="source" position={Position.Right} />
        <div>
          <label htmlFor="rrf-node">RRF</label>
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
export default Rrf
