export default {
  // Mengambil data kategori
  async fetchCategories({ commit, state }) {
    await this.$axios.get('/category').then(response => {
      commit("fetchCategories", response.data.data)
      return state.categories
    }).catch(error=>{
      console.log(error.response.data)
    })
  },
  // Menambahkan kategori
  store({commit}, name){
    commit("store", name)
  }
}