import React from 'react'
import { Handle, Position } from 'reactflow'
import './Trigger.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'

function Trigger({ data }) {
  return (
    <AgamaTooltip title="triggers an action">
      <div className="trigger-node" style={{ backgroundColor: data.color }}>
        <Handle type="source" position={Position.Right} />
        <div>
          <label htmlFor="trigger-node">Trigger Flow</label>
        </div>

        <div className="fields">
          <div>
            <label htmlFor="flow-filename">Flow Filename</label>
            <input
              id="flow-filename"
              name="flow-filename"
              placeholder="e.g index"
            />
          </div>

          <div>
            <label htmlFor="assigned-variable-name">
              assigned variable name
            </label>
            <input
              id="variable-name"
              name="assigned-variable-name"
              placeholder="e.g obj = Trigger.io.jans..."
            />
          </div>
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

export default Trigger
