import { Handle, Position } from 'react-flow-renderer';
import '../styles/index.css';
const handleStyle = { top: 10 };

function SubFlow({ data }) {

  return (
    <div className="subflow">
      <Handle type="target" position={Position.Left} />
      <div id={data.id}>{data.label}</div>
      {/* <Handle type="source" position={Position.Right} id={`${data.id}.righta`} style={handleStyle} /> */}
      {/* <Handle type="source" position={Position.Right} id={`${data.id}.rightb`} /> */}
    </div>
  );
}

export default SubFlow;