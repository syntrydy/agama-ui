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
        className="subflow-item"
        onDragStart={(event) => onDragStart(event, 'subflow')}
        draggable
      >
        WoWISE
      </div>

      <div
        className="data"
        onDragStart={(event) => onDragStart(event, 'data')}
        draggable
      >
        Data
      </div>
    </aside>
  )
}

export default Sidebar
