import React, { useState } from 'react'
import { Handle } from 'reactflow'
import { connect } from 'react-redux'
import './Condition.css'
import 'reactflow/dist/style.css';

const Condition = ({ data }) => {
  const conditionRightId = `${data.id}.right1`

  const [] = useState(data.agamasource)

  return (
    <div className="condition-node" style={{ backgroundColor: data.color }}>
      <Handle type="target" position="left" id={`${data.id}.left`} />

      <div className="fields">
      <div>
        <label htmlFor="method-name">Variable</label>
        <input
          id="variable-id"
          name="variable-name"
          placeholder="e.g obj.success"
        />
      </div>

      <div>
        <label htmlFor="params">Condition</label>
        <input
          id="condition-id"
          name="condition-name"
          placeholder="e.g =="
        />
      </div>

      <div>
        <label htmlFor="assigned-variable-name">Value</label>
        <input
          id="value-id"
          name="value-name"
          placeholder="e.g true"
        />
      </div>
      </div>
      <Handle
        type="source"
        position="right"
        id={conditionRightId}
        style={{ top: '40%' }}
      />
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  setNodeData: (payload) => dispatch.flowModel.addNodeData(payload),
})

const mapState = (state) => ({
  agamadata: state.flowModel.nodes,
})

export default connect(mapState, mapDispatch)(Condition)
