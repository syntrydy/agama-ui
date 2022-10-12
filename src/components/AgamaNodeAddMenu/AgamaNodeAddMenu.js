import React, { useCallback, useRef } from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import AddCircleOutlined from '@mui/icons-material/AddCircleOutlined'
import { useReactFlow } from 'reactflow'
import { v4 as uuidv4 } from 'uuid';
import { addCallNode } from './MenuOptions'

export const AgamaNodeAddMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

export default function CustomizedMenus({data}) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // Node Menu generator
  const xPos = useRef(0);
  const flowInstance = useReactFlow()

  // Call Node
  const addCallNode = useCallback(() => {
    const newCallId = 'Call-' + uuidv4()
    xPos.current += 400;
    const newCallNode = {
      id: newCallId,
      position: {
        x: xPos.current,
        y: 250,
      },
      type: 'call',
      data: {
        id: newCallId, type: 'Agama-call-Node'
      },
    }

    // edge
    const edges = [
      {
        id: `${data.id}-Call- ${uuidv4()}`,
        type:'straight',
        source: data.id,
        target: newCallId,
      },
    ]
    flowInstance.addNodes(newCallNode)
    flowInstance.setEdges((eds) => eds.concat(edges[0]))
  }, [])

    // Trigger Node
    const addTriggerNode = useCallback(() => {
      const newTriggerNodeId = 'Trigger-' + uuidv4()
      xPos.current += 400;
      const newTriggerNode = {
        id: newTriggerNodeId,
        position: {
          x: xPos.current,
          y: 250,
        },
        type: 'trigger',
        data: {
          id: newTriggerNodeId, type: 'Agama-trigger-Node'
        },
      }
  
      // edge
      const edges = [
        {
          id: `${data.id}-Trigger- ${uuidv4()}`,
          type:'straight',
          source: data.id,
          target: newTriggerNodeId,
        },
      ]
      flowInstance.addNodes(newTriggerNode)
      flowInstance.setEdges((eds) => eds.concat(edges[0]))
    }, [])

      // RRF Node
  const addRrfNode = useCallback(() => {
    const newRrfId = 'RRF-' + uuidv4()
    xPos.current += 400;
    const newRrfNode = {
      id: newRrfId,
      position: {
        x: xPos.current,
        y: 250,
      },
      type: 'rrf',
      data: {
        id: newRrfId, type: 'Agama-rrf-Node'
      },
    }

    // edge
    const edges = [
      {
        id: `${data.id}-${newRrfId}- ${uuidv4()}`,
        type:'straight',
        source: data.id,
        target: newRrfId,
      },
    ]
    flowInstance.addNodes(newRrfNode)
    flowInstance.setEdges((eds) => eds.concat(edges[0]))
  }, [])

    // Wowise Node
    const addWowiseNode = useCallback(() => {
      const newWowiseId = 'Wowise-' + uuidv4()
      xPos.current += 400;
      const newWowiseNode = {
        id: newWowiseId,
        position: {
          x: xPos.current,
          y: 250,
        },
        type: 'wowise',
        data: {
          id: newWowiseId, type: 'Agama-wowise-Node'
        },
      }
  
      // edge
      const edges = [
        {
          id: `${data.id}-${newWowiseId}- ${uuidv4()}`,
          type:'straight',
          source: data.id,
          target: newWowiseId,
        },
      ]
      flowInstance.addNodes(newWowiseNode)
      flowInstance.setEdges((eds) => eds.concat(edges[0]))
    }, [])

      // Repeat Node
  const addRepeatNode = useCallback(() => {
    const newRepeatNodeId = 'Repeat-' + uuidv4()
    xPos.current += 400;
    const newRepeatNode = {
      id: newRepeatNodeId,
      position: {
        x: xPos.current,
        y: 250,
      },
      type: 'repeat',
      data: {
        id: newRepeatNodeId, type: 'Agama-repeat-Node'
      },
    }

    // edge
    const edges = [
      {
        id: `${data.id}-${newRepeatNodeId}- ${uuidv4()}`,
        type:'straight',
        source: data.id,
        target: newRepeatNodeId,
      },
    ]
    flowInstance.addNodes(newRepeatNode)
    flowInstance.setEdges((eds) => eds.concat(edges[0]))
  }, [])

 // Log Node
 const addLogNode = useCallback(() => {
  const newLogNodeId = 'Log-' + uuidv4()
  xPos.current += 400;
  const newLogNode = {
    id: newLogNodeId,
    position: {
      x: xPos.current,
      y: 250,
    },
    type: 'log',
    data: {
      id: newLogNodeId, type: 'Agama-log-Node'
    },
  }

  // edge
  const edges = [
    {
      id: `${data.id}-${newLogNodeId}- ${uuidv4()}`,
      type:'straight',
      source: data.id,
      target: newLogNodeId,
    },
  ]
  flowInstance.addNodes(newLogNode)
  flowInstance.setEdges((eds) => eds.concat(edges[0]))
}, [])

    // Finish Node
    const addFinishNode = useCallback(() => {
      const newFinishNodeId = 'Finish-' + uuidv4()
      xPos.current += 400;
      const newFinishNode = {
        id: newFinishNodeId,
        position: {
          x: xPos.current,
          y: 250,
        },
        type: 'end',
        data: {
          id: newFinishNodeId, type: 'Agama-finish-Flow'
        },
      }
  
      // edge
      const edges = [
        {
          id: `${data.id}-${newFinishNodeId}- ${uuidv4()}`,
          type:'straight',
          source: data.id,
          target: newFinishNodeId,
        },
      ]
      flowInstance.addNodes(newFinishNode)
      flowInstance.setEdges((eds) => eds.concat(edges[0]))
    }, [])
  return (
    <div>
      <Button
        id="agama-node-add"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={<AddCircleOutlined style={{ color: '#68BB59' }} />}
      ></Button>
      <AgamaNodeAddMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={addCallNode} disableRipple>
          Call
        </MenuItem>
        <MenuItem onClick={addTriggerNode} disableRipple>
          Trigger
        </MenuItem>
        <MenuItem onClick={addRrfNode} disableRipple>
          RRF
        </MenuItem>
        <MenuItem onClick={addLogNode} disableRipple>
          Log
        </MenuItem>
        <MenuItem onClick={addWowiseNode} disableRipple>
          When-Otherwise
        </MenuItem>
        <MenuItem onClick={addRepeatNode} disableRipple>
          Repeat
        </MenuItem>
        <MenuItem onClick={addFinishNode} disableRipple>
          Finish
        </MenuItem>
      </AgamaNodeAddMenu>
    </div>
  )
}
