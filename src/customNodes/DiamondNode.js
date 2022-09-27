import React, { useCallback } from 'react'
import { Handle } from 'react-flow-renderer'
import '../styles/index.css'

const DiamondNode = ({ data }) => {
  function testCondition() {
    try {
      const input = document.getElementById('condition').value
      const result = eval(input)
      console.log(result)
      return result
    } catch (error) {
      return error
    }
  }

  return (
    <div
      style={{
        transform: 'rotate(-45deg)',
        width: '80px',
        height: '80px',

        border: '2px solid rgb(0, 225, 255)',
        overflow: 'hidden',
      }}
    >
      <Handle type="target" position="left" id={`${data.id}.left`} />
      <div
        style={{
          transform: 'rotate(45deg)',
          paddingTop: '10px',
          paddingLeft: '17px',
        }}
        id={data.id}
      >
        condition
      </div>
      <div className="condition">
        <input id="condition" name="condition" onChange={testCondition} />
      </div>
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

export default DiamondNode
