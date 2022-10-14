import React from 'react'
import { Handle, Position } from 'reactflow'
import './StartFlow.css'
import 'reactflow/dist/style.css'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'
import FlowOptions from '../../components/FlowOptions'
function StartFlow({ data }) {
  let defaultFlowName = ''
  if (!data.hasOwnProperty('agamaData')) {
    data.agamaData = {
      id: data.id,
      type: data.type,
      flowname: defaultFlowName,
    }
  }
  if (data.agamaData.hasOwnProperty('flowname')) {
    defaultFlowName = data.agamaData.flowname
  }
  const isValidConnection = (connection) => {
    if (
      connection.source.includes('Start') &&
      connection.target.includes('Finish')
    ) {
      return false
    } else {
      return true
    }
  }
  return (
    <AgamaTooltip title="starts a new flow" placement="top-start">
      <div className="start-node">
        <label htmlFor="start-flow">Flow</label>
        <br />
        <label htmlFor="flow-name">{data.agamaData.flowname}</label>
        <Handle
          type="source"
          position={Position.Right}
          isValidConnection={isValidConnection}
        />
        <FlowOptions data={data} />
      </div>
    </AgamaTooltip>
  )
}
export default StartFlow
