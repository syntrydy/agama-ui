import { Handle, Position } from 'react-flow-renderer'
import '../styles/index.css'

function SubFlow({ data }) {

  return (
    <div className="subflow">
      <Handle type="target" position={Position.Left} />
      <div id="subflow">
        {data.label}
      </div>
    </div>
  )
}

export default SubFlow
