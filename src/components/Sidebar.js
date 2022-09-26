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
      >
        Repeat Node
      </div>

      <div
        className="dndnode start"
        onDragStart={(event) => onDragStart(event, 'input')}
        draggable
      >
        Start Node
      </div>

      <div
        className="dndnode finish"
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
      >
        Finish Node
      </div>

      <div
        className="dndnode when"
        onDragStart={(event) => onDragStart(event, 'whenOtherwise')}
        draggable
      >
        When Node
      </div>
    </aside>
  )
}

export default Sidebar
