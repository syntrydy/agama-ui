import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import '../styles/index.css';
const handleStyle = { top: 10 };

function DataNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

function handleConnect() {
      console.log("=========" + "connected")
      try {
        const input = document.getElementById('data').value
        const result = eval(input)
        console.log("====" +result)
        return result
      } catch (error) {
        return error
      }
  }
  return (
    <div className="data-node">
      <Handle type="source" position={Position.Right} onConnect={handleConnect}/>
      <div>
        <label htmlFor="data">Data</label>
        <input id="data" name="data" onChange={handleConnect} />
      </div>
      <Handle type="target" position={Position.Left} id={`${data.id}.righta`} style={handleStyle} />
    </div>
  );
}

export default DataNode;