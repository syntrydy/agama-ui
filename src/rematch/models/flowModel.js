export const flowModel = {
  state: {nodes: []},
  reducers: {
    addNodeData(state, payload) {
      console.log('======store' + JSON.stringify(payload))
      // this.state[payload.id] = payload.data
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
