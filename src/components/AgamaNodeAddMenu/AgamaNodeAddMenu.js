import React, { useCallback, useRef } from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import AddCircleOutlined from '@mui/icons-material/AddCircleOutlined'
import { useReactFlow } from 'reactflow'

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

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // testing with call node
  let nodeId = 0
  const getId = () => `dndnode_${nodeId++}`
  const xPos = useRef(0);
  const flowInstance = useReactFlow()
  const addCallNode = useCallback(() => {
    const newCallId = 'Call-' + getId()
    xPos.current += 400;
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
    flowInstance.addNodes(newNode)
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
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          RRF
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          When-Otherwise
        </MenuItem>
      </AgamaNodeAddMenu>
    </div>
  )
}
