export default {
  products(state){
    return state.products.filter(product => product.category_id == state.selectedCategory || state.selectedCategory == null)
  },
  selectedCategory(state){
    return state.selectedCategory
  },
  toast(state){
    return state.toast
  },
}