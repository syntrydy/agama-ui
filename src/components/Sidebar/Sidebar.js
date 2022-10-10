import React from 'react'
import './SidebarIcons.css'
import { Grid } from '@mui/material'

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <>
      <div className="description">
        You can drag these nodes to the pane on the left.
      </div>
      <Grid container>
        <Grid item xs={6}>
          <div
            className="start"
            onDragStart={(event) => onDragStart(event, 'start')}
            draggable
          ></div>
          <div style={{ marginLeft: '15px' }}>Start flow</div>
        </Grid>
        <Grid item xs={6}>
          <div
            className="end"
            onDragStart={(event) => onDragStart(event, 'end')}
            draggable
          ></div>
          <div style={{ marginTop: '10px' }}>Finish Flow</div>
        </Grid>
        <Grid item xs={6}>
          <div
            className="basepath-item"
            onDragStart={(event) => onDragStart(event, 'basepath')}
            draggable
          >
            Base path
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            className="subflow-item"
            onDragStart={(event) => onDragStart(event, 'wowise')}
            draggable
          >
            W/O WISE
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            className="data"
            onDragStart={(event) => onDragStart(event, 'data')}
            draggable
          >
            Data Node
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            className="action"
            onDragStart={(event) => onDragStart(event, 'trigger')}
            draggable
          >
            Trigger Flow
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            className="call"
            onDragStart={(event) => onDragStart(event, 'call')}
            draggable
          >
            Call (Java)
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            className="rrf-item"
            onDragStart={(event) => onDragStart(event, 'rrf')}
            draggable
          >
            RRF
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            className="repeat"
            onDragStart={(event) => onDragStart(event, 'repeat')}
            draggable
          >
            Repeat Node
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            className="quit"
            onDragStart={(event) => onDragStart(event, 'quit')}
            draggable
          >
            Quit
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Sidebar
