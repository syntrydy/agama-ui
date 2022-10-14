import React, { useRef, useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid';
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
import Call from '../agamaNodes/Call/Call'
import EndFlow from '../agamaNodes/flow/EndFlow'
import StartFlow from '../agamaNodes/flow/StartFlow'
import Rrf from '../agamaNodes/RRF/Rrf'
import Quit from '../agamaNodes/Quit/Quit'
import Repeat from '../agamaNodes/Repeat/Repeat'
import LogNode from '../agamaNodes/Log/LogNode';
import WhenNode from '../agamaNodes/When/WhenNode';
import Rfac from '../agamaNodes/RFAC/Rfac';
import Button from '@mui/material/Button';
import processNodeData from '../engine/DSLGenerator';
import DSLCodeModal from './DSLCodeModal';

const nodeTypes = {
  call: Call,
  when: WhenNode,
  trigger: Trigger,
  rfac: Rfac,
  finish: EndFlow,
  start: StartFlow,
  log: LogNode,
  rrf: Rrf,
  repeat: Repeat,
  quit: Quit,
}

let id = 0
const defaultViewport = { x: 10, y: 15, zoom: 1 }

const initialNodeId = `start-${uuidv4()}`
const initialNodes = [
  {
    id: initialNodeId,
    type: 'start',
    sourcePosition: 'right',
    data: { id: initialNodeId, type: "Agama-start-Flow" },
    position: { x: 250, y: 250 },
  },
]

const MainPanel = () => {
  const reactFlowWrapper = useRef(null)
  const flowInstance = useReactFlow()
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)
  const [generatedCodeArr, setGeneratedCodeArr] = useState([])
  const [showCodeModal, setShowCodeModal] = useState(false)
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

  const closeModal =  useCallback(() => {
    setShowCodeModal(false)
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

      if (type === 'when') {
        const newWhenNodeId = 'When-' + uuidv4()
        const newWhenNode = {
          id: newWhenNodeId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newWhenNodeId, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newWhenNode))
      }
      else if (type === 'start') {
        const newStartId = 'Start-' + uuidv4()
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
      else if (type === 'finish') {
        const newEndId = 'Finish-' + uuidv4()
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
      else if (type === 'call') {
        const newCallId = 'Call-' + uuidv4()
        const newCallNode = {
          id: newCallId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newCallId, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newCallNode))
      }
      else if (type === 'log') {
        const newLogNodeId = 'Log-' + uuidv4()
        const newLogNode = {
          id: newLogNodeId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newLogNodeId, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newLogNode))
      }
      else if (type === 'rrf') {
        const newRrfId = 'RRF-' + uuidv4()
        const newRrfNode = {
          id: newRrfId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newRrfId, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newRrfNode))
      }
      else if (type === 'rfac') {
        const newRfacId = 'RFAC-' + uuidv4()
        const newRfacNode = {
          id: newRfacId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newRfacId, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newRfacNode))
      }
      else if (type === 'trigger') {
        const newTriggerId = 'Trigger-' + uuidv4()
        const newTriggerNode = {
          id: newTriggerId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newTriggerId, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newTriggerNode))
      }
      else if (type === 'repeat') {
        const newRepeatId = 'Repeat-' + uuidv4()
        const newRepeatNode = {
          id: newRepeatId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newRepeatId, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newRepeatNode))
      }
      else if (type === 'quit') {
        const newQuitId = 'Quit-' + uuidv4()
        const newQuitNode = {
          id: newQuitId,
          type,
          position,
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { id: newQuitId, type: `Agama-${type}-Node` },
        }
        setNodes((nds) => nds.concat(newQuitNode))
      }
      else {
        const newNodeId = `${type}-${uuidv4()}`
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
              if (n.type === 'finish') return '#ff0072'
              if (n.type === 'log') return 'rgb(255, 137, 59)'
              if (n.type === 'trigger') return 'rgb(224, 79, 79)'
              if (n.type === 'rfac') return 'rgb(88, 184, 248)'
              if (n.type === 'condition') return 'rgb(0, 195, 255)'
              if (n.type === 'call') return 'rgb(185, 50, 212)'
              if (n.type === 'rrf') return 'rgb(77, 2, 70)'
            }}
            nodeColor={(n) => {
              if (n.type === 'when') return 'rgb(161, 247, 150)'
              return '#fff'
            }}
          />
        </ReactFlow>
        <div className="controls">
          <Button variant="contained" onClick={() => {
            let generatedCodeArr = processNodeData(flowInstance.getNodes())
            setGeneratedCodeArr(generatedCodeArr)
            setShowCodeModal(true)
          }}>Generate Code</Button>
        </div>
      </div>
      <DSLCodeModal generatedCodeArr={generatedCodeArr} showCodeModal={showCodeModal} closeModal={closeModal}/>
    </div>
  )
}

export default MainPanel
