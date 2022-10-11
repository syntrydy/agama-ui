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
              <label htmlFor="trigger-node">Repeat</label>
            </div>
            <div className="fields">
              <div>
                <label htmlFor="repeat-block">Repeat Block</label>
                <input
                  id="repeat-block"
                  name="repeat-block"
                  placeholder="block to repeat"
                />
              </div>
              <div>
                <label htmlFor="assigned-variable-name">
                  Max number of times
                </label>
                <input
                  id="max-number-times"
                  name="max-number"
                  placeholder="e.g 3"
                />
              </div>
            </div>
            <Handle
              type="target"
              position={Position.Left}
              id={`${data.id}.righta`}
            />
            <FlowOptions data={data}/>
          </div>
        </AgamaTooltip>
  )
}

export default Repeat
