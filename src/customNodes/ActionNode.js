import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import '../styles/index.css';
const handleStyle = { top: 10 };

function ActionNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="action-node">
      <Handle type="source" position={Position.Right} />
      <div>
        <label htmlFor="action">Action</label>
        <input id="action" name="action" onChange={onChange} />
      </div>
      <Handle type="target" position={Position.Left} id={`${data.id}.righta`} style={handleStyle} />
    </div>
  );
}

export default ActionNode;