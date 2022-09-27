import React, { useState, useRef, useCallback } from 'react'
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  updateEdge,
  Background,
  MiniMap,
} from 'react-flow-renderer'
import ActionNode from '../customNodes/ActionNode'
import CircleNode from '../customNodes/CircleNode'
import DiamondNode from '../customNodes/DiamondNode'
import WhenOtherwise from '../customNodes/WhenOtherwise'

const nodeTypes = {
  whenOtherwise: WhenOtherwise,
  circle: CircleNode,
  condition: DiamondNode,
  action: ActionNode,
}

const initialNodes = [
  {
    id: '1',
    type: 'input',
    sourcePosition: 'right',
    data: { label: 'Start Flow' },
    position: { x: 250, y: 5 },
  },
]

let id = 0
const getId = () => `dndnode_${id++}`

const MainPanel = () => {
  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  const edgeUpdateSuccessful = useRef(true)
  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false
  }, [])

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true
    setEdges((els) => updateEdge(oldEdge, newConnection, els))
  }, [])

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id))
    }

    edgeUpdateSuccessful.current = true
  }, [])

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  )

  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event) => {
      event.preventDefault()

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData('application/reactflow')

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })
      const newNode = {
        id: getId(),
        type,
        position,
        targetPosition: 'left',
        sourcePosition: 'right',
        data: { label: `${type}` },
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [reactFlowInstance],
  )

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onEdgeUpdate={onEdgeUpdate}
            onEdgeUpdateStart={onEdgeUpdateStart}
            onEdgeUpdateEnd={onEdgeUpdateEnd}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            deleteKeyCode={['Backspace', 'Delete']}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
            <Background />
            <MiniMap 
            nodeStrokeColor={(n) => {
              if (n.type === "input") return "#0041d0";
              if (n.type === "circle") return "#58dd6a";
              if (n.type === "output") return "#ff0072";
              if (n.type === "condition") return "rgb(0, 225, 255)";
            }}
            nodeColor={(n) => {
              if (n.type === "action") return "rgb(224, 79, 79)";
              if (n.type === "whenOtherwise") return "rgb(79, 125, 224)";
              return "#fff";
            }}
            />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  )
}

export default MainPanel
