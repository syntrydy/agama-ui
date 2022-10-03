export const flowModel = {
  state: {nodes: []},
  reducers: {
    addNodeData(state, payload) {
      return {
        ...state, nodes:[...state.nodes,payload]
      }
    },
  },
  effects: (dispatch) => ({
    async asyncHandleInput() {
      dispatch.data.addNodeData()
    },
  }),
}
