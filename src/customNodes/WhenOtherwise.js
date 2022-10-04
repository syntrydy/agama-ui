import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import '../styles/index.css';
const handleStyle = { top: 25 };

function WhenOtherwise({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="when-otherwise">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="when">When</label>
        <input id="when" name="when" onChange={onChange} />

        <label htmlFor="otherwise">Otherwise</label>
        <input id="otherwise" name="otherwise" onChange={onChange} />
      </div>
      {/* <Handle type="source" position={Position.Right} id="a" style={handleStyle} /> */}
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
}

export default WhenOtherwise;