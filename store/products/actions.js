
export default {
  // menampilkan data
  async fetchProduct({ commit }){
    await this.$axios.get('/product').then(response => {
      commit("fetchProduct", response.data.data)
    }).catch(error=>{
      console.log(error.response.data)
    })
  },
  // Menambahkan data
  async store({ commit }, product){
    commit("showToast")
    const fd = new FormData()
    fd.append('category_id', product.category_id)
    fd.append('name', product.name)
    fd.append('price', product.price)
    fd.append('picture', product.picture, product.picture.name)
    await this.$axios.post('/product', fd)
    .then(()=>{
        setTimeout(() => {
          commit("hideToast")
          this.$router.push({
            name: 'index'
          })
        }, 1000)
      }).catch(error => {
        console.log(error.response.data)
      })
  },
  // Menghapus data
  deleteProduct({ commit }, id){
    if(confirm('Do you want to remove?')){
      this.$axios.delete(`product/${id}`)
      .then(() => {
        commit('deleteProduct', id)
        })
    }
  },
}