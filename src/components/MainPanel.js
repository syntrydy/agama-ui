import React, { useRef, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Controls,
  updateEdge,
  Background,
  MiniMap,
} from 'react-flow-renderer'
import ActionNode from '../customNodes/ActionNode'
import CircleNode from '../customNodes/CircleNode'
import DataNode from '../customNodes/DataNode'
import DiamondNode from '../customNodes/DiamondNode'
import SubFlow from '../customNodes/SubFlow'
import WhenOtherwise from '../customNodes/WhenOtherwise'

const nodeTypes = {
  whenOtherwise: WhenOtherwise,
  circle: CircleNode,
  condition: DiamondNode,
  action: ActionNode,
  subflow: SubFlow,
  data: DataNode,
}

let id = 0
const getId = () => `dndnode_${id++}`
const MainPanel = () => {
  const reactFlowWrapper = useRef(null)
  const flowInstance = useReactFlow()
  const [nodes, setNodes, onNodesChange] = useNodesState([])
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
    let newTarget = {...target[0]}
    newTarget.data = {...newTarget.data, agamasource: source[0].data.id }
    // console.log('===========target2' + JSON.stringify(newTarget))
    setNodes((nds) =>
    nds.map((node) => {
      if (node.id === targetId) {
        console.log('===========' + JSON.stringify(newTarget.data))
        node.data = newTarget.data
      }
      console.log('=====t data======' + JSON.stringify(node))
      return node;
    })
  );
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

      if (type === 'subflow') {
        const id = getId()
        const pNode = {
          id: id,
          type,
          position: { x: 300, y: 5 },
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { label: 'When-Otherwise' },
        }
        const conditionId = getId()
        const conditionNode = {
          id: conditionId,
          type: 'condition',
          position: { x: 20, y: 80 },
          parentNode: id,
          extent: 'parent',
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { label: `${type}` },
        }
        const actionOneId = getId()
        const actionOne = {
          id: actionOneId,
          type: 'action',
          position: { x: 130, y: 30 },
          parentNode: id,
          extent: 'parent',
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { label: `${type}`, color: '#7be76d' },
        }
        const actionTwoId = getId()
        const actionTwo = {
          id: actionTwoId,
          type: 'action',
          position: { x: 130, y: 120 },
          parentNode: id,
          extent: 'parent',
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { label: `${type}` },
        }
        const edges = [
          { id: 'condition-action1', source: conditionId, target: actionOneId },
          { id: 'condition-action2', source: conditionId, target: actionTwoId },
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
          data: { label: `${type}`, id: newNodeId, inputData: '' },
        }
        setNodes((nds) => nds.concat(newNode))
      } else if (type === 'circle') {
        const newNode = {
          id: 'circle-' + getId(),
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { label: `${type}` },
        }
        setNodes((nds) => nds.concat(newNode))
      } else {
        const newNode = {
          id: getId(),
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { label: `${type}` },
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
          // onChange={onChange}
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
              if (n.type === 'input') return '#0041d0'
              if (n.type === 'circle') return '#58dd6a'
              if (n.type === 'output') return '#ff0072'
              if (n.type === 'condition') return 'rgb(0, 225, 255)'
            }}
            nodeColor={(n) => {
              if (n.type === 'action') return 'rgb(224, 79, 79)'
              if (n.type === 'whenOtherwise') return 'rgb(79, 125, 224)'
              return '#fff'
            }}
          />
        </ReactFlow>
      </div>
    </div>
  )
}

export default MainPanel
