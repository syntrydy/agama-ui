import React from 'react'
import './SidebarIcons.css'
import { Grid } from '@mui/material'

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <side>
      <div className="description">
        You can drag these nodes to the pane on the left.
      </div>
      <Grid container>
        <Grid item xs={6}>
          <item>
            <div
              className="start"
              onDragStart={(event) => onDragStart(event, 'start')}
              draggable
            ></div>
            <div style={{ marginLeft: '15px' }}>Start flow</div>
          </item>
        </Grid>
        <Grid item xs={6}>
          <item>
            <div
              className="end"
              onDragStart={(event) => onDragStart(event, 'end')}
              draggable
            >
            </div>
            <div style={{ marginTop: '10px' }}>Finish Flow</div>
          </item>
        </Grid>
        <Grid item xs={6}>
          <item>
            <div
              className="basepath-item"
              onDragStart={(event) => onDragStart(event, 'basepath')}
              draggable
            >
              Base path
            </div>
          </item>
        </Grid>
        <Grid item xs={6}>
          <item>
            <div
              className="subflow-item"
              onDragStart={(event) => onDragStart(event, 'wowise')}
              draggable
            >
              W/O WISE
            </div>
          </item>
        </Grid>
        <Grid item xs={6}>
          <item>
            <div
              className="data"
              onDragStart={(event) => onDragStart(event, 'data')}
              draggable
            >
              Data Node
            </div>
          </item>
        </Grid>
        <Grid item xs={6}>
          <item>
            <div
              className="action"
              onDragStart={(event) => onDragStart(event, 'trigger')}
              draggable
            >
              Trigger Flow
            </div>
          </item>
        </Grid>
        <Grid item xs={6}>
          <item>
            <div
              className="call"
              onDragStart={(event) => onDragStart(event, 'call')}
              draggable
            >
              Call (Java)
            </div>
          </item>
        </Grid>
        <Grid item xs={6}>
          <item>
            <div
              className="rrf-item"
              onDragStart={(event) => onDragStart(event, 'rrf')}
              draggable
            >
              RRF
            </div>
          </item>
        </Grid>
      </Grid>
    </side>
  )
}

export default Sidebar
