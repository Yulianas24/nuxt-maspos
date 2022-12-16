export default {
    pushData ({ commit }, product) {
      commit('pushData', product)
    },
    hide ({ commit }) {
      setTimeout(() => {
        commit('hide')
      }, 500)
    }
}