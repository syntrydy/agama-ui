import React from 'react'
import { Handle } from 'react-flow-renderer'

const CircleNode = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: '#58dd6a',
        padding: '20px',
        borderRadius: '100px',
      }}
    >
      <Handle
        type="target"
        position="left"
        id={`${data.id}.left`}
      />
      <div id={data.id}>{data.label}</div>
      <Handle
        type="source"
        position="right"
        id={`${data.id}.right1`}
        style={{ top: '40%' }}
      />
      <Handle
        type="source"
        position="right"
        id={`${data.id}.right2`}
        style={{ top: '60%' }}
      />
    </div>
  )
}

export default CircleNode;
