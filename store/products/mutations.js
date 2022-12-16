export default {
  // Mengambil data
  fetchProduct(state, data){
    state.products = data
  },
  // Menghapus data
  deleteProduct(state, data){
    for (let index = 0; index < state.products.length; index++) {
      if(state.products[index].id == data){
        state.products.splice(index, 1);
      }
    }
  },
  // Filter berdasarkan kategori
  selectedCategory(state, id){
    state.selectedCategory = id
  },
  showToast(state){
    state.toast = true
  },
  hideToast(state){
    state.toast = false
  },
}