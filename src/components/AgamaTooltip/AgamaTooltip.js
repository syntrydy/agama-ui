import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

export const AgamaTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgb(0, 129, 250)',
      color: 'rgb(255, 255, 255)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
