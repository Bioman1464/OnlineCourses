export default function someMutations (state) {
  return {
    SET_TOKEN (state, payload) {
      state.token = payload
    }
  }
}
