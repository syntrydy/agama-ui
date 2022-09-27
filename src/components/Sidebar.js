import React from 'react'
import '../styles/index.css'
import '../styles/icons.css'

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the left.
      </div>
      <div
        className="dndnode repeat"
        onDragStart={(event) => onDragStart(event, 'input')}
        draggable
      ></div>

      <div
        className="dndnode start"
        onDragStart={(event) => onDragStart(event, 'circle')}
        draggable
      ></div>

      <div
        className="dndnode finish"
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
      ></div>

      <div
        className="dndnode diamond"
        onDragStart={(event) => onDragStart(event, 'condition')}
        draggable
      >
        <div className="diamond-text">Condition</div>
      </div>

      <div
        className="subflow-item"
        onDragStart={(event) => onDragStart(event, 'subflow')}
        draggable
      >
        Subflow
      </div>

      <div
        className="dndnode when"
        onDragStart={(event) => onDragStart(event, 'whenOtherwise')}
        draggable
      ></div>

      <div
        className="circle"
        onDragStart={(event) => onDragStart(event, 'circle')}
        draggable
      >
        Circle
      </div>

      <div
        className="action"
        onDragStart={(event) => onDragStart(event, 'action')}
        draggable
      >
        Action
      </div>
    </aside>
  )
}

export default Sidebar
