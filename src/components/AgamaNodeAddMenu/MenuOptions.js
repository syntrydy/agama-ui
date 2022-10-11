// import { useCallback, useRef } from 'react'

// import { useReactFlow } from 'reactflow'

// let nodeId = 0
// const getId = () => `dndnode_${nodeId++}`
// const xPos = useRef(0)
// const flowInstance = useReactFlow()
// export const addCallNode = useCallback(() => {
//   const newCallId = 'Call-' + getId()
//   xPos.current += 400

//   //new Call Node
//   const newNode = {
//     id: newCallId,
//     position: {
//       x: xPos.current,
//       y: 250,
//     },
//     type: 'call',
//     data: {
//       id: newCallId,
//       type: 'Agama-call-Flow',
//     },
//   }
//   flowInstance.addNodes(newNode)
// }, [])
