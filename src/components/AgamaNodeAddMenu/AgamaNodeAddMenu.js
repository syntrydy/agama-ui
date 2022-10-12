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

  // testing with call node
  const xPos = useRef(0);
  const flowInstance = useReactFlow()
  // const sourceId = flowInstance.getNode
  const addCallNode = useCallback(() => {
    const newCallId = 'Call-' + uuidv4()
    xPos.current += 400;

    //new Call Node
    const newNode = {
      id: newCallId,
      position: {
        x: xPos.current,
        y: 250,
      },
      type: 'call',
      data: {
        id: newCallId, type: 'Agama-call-Flow'
      },
    }

    // edge
    const edges = [
      {
        id: `${data.id}-${newCallId}- ${uuidv4()}`,
        type:'straight',
        source: data.id,
        target: newCallId,
      },
    ]
    console.log('====ID====' + data.id);
    flowInstance.addNodes(newNode)
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
        <MenuItem onClick={handleClose} disableRipple>
          Trigger
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          RRF
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Log
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          When-Otherwise
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Repeat
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Finish
        </MenuItem>
      </AgamaNodeAddMenu>
    </div>
  )
}
