import React from 'react'
import { Handle, Position } from 'reactflow'
import './Call.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'

function Call({ data }) {
  return (
    <AgamaTooltip title="Calls a java class">
      <div className="call-node">
        <Handle type="source" position={Position.Right} />
        <div>
          <label htmlFor="call-node">Call</label>
        </div>

        <div className="fields">
          <div>
            <label htmlFor="method-name">Java method name</label>
            <input
              id="method-name"
              name="java-method-name"
              placeholder="e.g io.jans.agama..."
            />
          </div>

          <div>
            <label htmlFor="params">params(space seperated)</label>
            <input id="params" name="params" placeholder="e.g userId" />
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

export default Call
