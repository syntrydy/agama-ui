import React, { useRef, useState, useCallback } from 'react'
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Controls,
  updateEdge,
  Background,
  MiniMap,
} from 'reactflow'
import 'reactflow/dist/style.css'
import Trigger from '../agamaNodes/Trigger/Trigger'
import DataNode from '../agamaNodes/Data/DataNode'
import Condition from '../agamaNodes/Condition/Condition'
import WoWise from '../agamaNodes/WoWise/WoWise'
import Call from '../agamaNodes/Call/Call'
import EndFlow from '../agamaNodes/flow/EndFlow'
import StartFlow from '../agamaNodes/flow/StartFlow'
import Basepath from '../agamaNodes/Basepath/Basepath'
import Rrf from '../agamaNodes/RRF/Rrf'
import Quit from '../agamaNodes/Quit/Quit'
import Repeat from '../agamaNodes/Repeat/Repeat'

const nodeTypes = {
  call: Call,
  condition: Condition,
  trigger: Trigger,
  wowise: WoWise,
  data: DataNode,
  end: EndFlow,
  start: StartFlow,
  basepath: Basepath,
  rrf: Rrf,
  repeat:Repeat,
  quit: Quit,
}

let id = 0
const getId = () => `dndnode_${id++}`
const defaultViewport = { x: 10, y: 15, zoom: 1 }

const initialNodeId = `start- ${getId()}`
const initialNodes = [
  {
    id: initialNodeId,
    type: 'start',
    sourcePosition: 'right',
    data: {id: initialNodeId, type: "Agama-start-Flow"},
    position: { x: 250, y: 250 },
  },
]

const MainPanel = () => {
  const reactFlowWrapper = useRef(null)
  const flowInstance = useReactFlow()
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

  const onConnect = useCallback((params) => {
    const currentNodes = flowInstance.getNodes()
    setEdges((eds) => addEdge(params, eds))
    let sourceId = params.source
    let targetId = params.target
    let source = currentNodes.filter((n) => n.id === sourceId)
    let target = currentNodes.filter((n) => n.id === targetId)
    let newTarget = { ...target[0] }
    newTarget.data = { ...newTarget.data, agamasource: source[0].data.id }
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === targetId) {
          node.data = newTarget.data
        }
        return node
      }),
    )
  }, [])

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

      if (type === 'wowise') {
        const parentId = 'WOD' + getId()
        const pNode = {
          id: parentId,
          type,
          position: { x: 300, y: 5 },
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: parentId, type: `Agama-${type}-Flow` },
        }
        const conditionId = `${parentId}_CONDITION-${getId()}`
        const conditionNode = {
          id: conditionId,
          type: 'condition',
          position: { x: 20, y: 80 },
          parentNode: parentId,
          extent: 'parent',
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: conditionId, type: `Agama-${type}-Node` },
        }
        const actionOneId = `${parentId}_TRIGGER-${getId()}-SUCCESS`
        const actionOne = {
          id: actionOneId,
          type: 'trigger',
          position: { x: 210, y: 30 },
          parentNode: parentId,
          extent: 'parent',
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: actionOneId, type: `Agama-${type}-Flow`, color: '#7be76d' },
        }
        const actionTwoId = `${parentId}_TRIGGER-${getId()}-FAILURE`
        const actionTwo = {
          id: actionTwoId,
          type: 'trigger',
          position: { x: 210, y: 170 },
          parentNode: parentId,
          extent: 'parent',
          targetPosition: 'left',
          sourcePosition: 'right',
          data: {id: actionTwoId, type: `Agama-${type}-Flow` },
        }
        const edges = [
          {
            id: 'condition-action1',
            source: conditionId,
            target: actionOneId,
          },
          {
            id: 'condition-action2',
            source: conditionId,
            target: actionTwoId,
          },
        ]
        setNodes((nds) => nds.concat(pNode))
        setNodes((nds) => nds.concat(conditionNode))
        setNodes((nds) => nds.concat(actionOne))
        setNodes((nds) => nds.concat(actionTwo))
        setEdges((eds) => eds.concat(edges[0]))
        setEdges((eds) => eds.concat(edges[1]))
      } else if (type === 'data') {
        const newNodeId = 'data-' + getId()
        const newNode = {
          id: newNodeId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newNodeId, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newNode))
      }
      else if (type === 'start') {
        const newStartId = 'start-' + getId()
        const newStartNode = {
          id: newStartId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newStartId, type: `Agama-${type}-Flow` },
        }
        setNodes((nds) => nds.concat(newStartNode))
      }  
      else if (type === 'end') {
        const newEndId = 'end-' + getId()
        const newEndNode = {
          id: newEndId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newEndId, type: `Agama-${type}-Flow` },
        }
        setNodes((nds) => nds.concat(newEndNode))
      }  
      else {
        const newNodeId = `${type}-${getId()}`
        const newNode = {
          id: newNodeId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: `${id}`, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newNode))
      }
    },
    [reactFlowInstance],
  )

  return (
    <div className="dndflow">
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
          defaultViewport={defaultViewport}
        >
          <Controls />
          <Background variant="lines" />
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.type === 'start') return '#0041d0'
              if (n.type === 'end') return '#ff0072'
              if (n.type === 'basepath') return 'rgb(255, 137, 59)'
              if (n.type === 'trigger') return 'rgb(224, 79, 79)'
              if (n.type === 'data') return 'rgb(88, 184, 248)'
              if (n.type === 'condition') return 'rgb(0, 195, 255)'
              if (n.type === 'call') return 'rgb(185, 50, 212)'
              if (n.type === 'rrf') return 'rgb(77, 2, 70)'
            }}
            nodeColor={(n) => {
              if (n.type === 'wowise') return 'rgb(161, 247, 150)'
              return '#fff'
            }}
          />
        </ReactFlow>
      </div>
    </div>
  )
}

export default MainPanel
