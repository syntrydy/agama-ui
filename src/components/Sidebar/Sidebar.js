import React from 'react'
import './SidebarIcons.css'
import { Grid } from '@mui/material'
import { AgamaTooltip } from '../../components/AgamaTooltip/AgamaTooltip'

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
        <AgamaTooltip
          title="Use this element to start a new flow"
          placement="top-start"
        >
          <Grid item xs={6}>
            <div
              className="start"
              onDragStart={(event) => onDragStart(event, 'start')}
              draggable
            >
              Start flow
            </div>
          </Grid>
        </AgamaTooltip>
        <AgamaTooltip
          title="Use this element to end a flow"
          placement="top-start"
        >
          <Grid item xs={6}>
            <div
              className="end"
              onDragStart={(event) => onDragStart(event, 'end')}
              draggable
            >
              End flow
            </div>
          </Grid>
        </AgamaTooltip>

        <AgamaTooltip title="Basepath node" placement="top-start">
          <Grid item xs={6}>
            <div
              className="basepath-item"
              onDragStart={(event) => onDragStart(event, 'basepath')}
              draggable
            >
              Base path
            </div>
          </Grid>
        </AgamaTooltip>

        <AgamaTooltip
          title="This element sort of represent and if-else block"
          placement="top-start"
        >
          <Grid item xs={6}>
            <div
              className="subflow-item"
              onDragStart={(event) => onDragStart(event, 'wowise')}
              draggable
            >
              W/O WISE
            </div>
          </Grid>
        </AgamaTooltip>

        <AgamaTooltip title="Data node" placement="top-start">
          <Grid item xs={6}>
            <div
              className="data"
              onDragStart={(event) => onDragStart(event, 'data')}
              draggable
            >
              Data Node
            </div>
          </Grid>
        </AgamaTooltip>

        <AgamaTooltip
          title="Use this element to trigger a flow"
          placement="top-start"
        >
          <Grid item xs={6}>
            <div
              className="action"
              onDragStart={(event) => onDragStart(event, 'trigger')}
              draggable
            >
              Trigger Flow
            </div>
          </Grid>
        </AgamaTooltip>

        <AgamaTooltip
          title="Use this element to make a Java call"
          placement="top-start"
        >
          <Grid item xs={6}>
            <div
              className="call"
              onDragStart={(event) => onDragStart(event, 'call')}
              draggable
            >
              Call (Java)
            </div>
          </Grid>
        </AgamaTooltip>

        <AgamaTooltip title="RRF" placement="top-start">
          <Grid item xs={6}>
            <div
              className="rrf-item"
              onDragStart={(event) => onDragStart(event, 'rrf')}
              draggable
            >
              RRF
            </div>
          </Grid>
        </AgamaTooltip>

        <AgamaTooltip
          title="Use this element to repeat a block while specifying the max number of times"
          placement="top-start"
        >
          <Grid item xs={6}>
            <div
              className="repeat"
              onDragStart={(event) => onDragStart(event, 'repeat')}
              draggable
            >
              Repeat Node
            </div>
          </Grid>
        </AgamaTooltip>

        <AgamaTooltip title="Quit" placement="top-start">
          <Grid item xs={6}>
            <div
              className="quit"
              onDragStart={(event) => onDragStart(event, 'quit')}
              draggable
            >
              Quit
            </div>
          </Grid>
        </AgamaTooltip>
      </Grid>
    </>
  )
}

export default Sidebar
