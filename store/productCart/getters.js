export default { 
  show(state){
    return state.show
  },
  products(state){
    return state.products
  },
  total_bill(state){
    return state.total_bill.toLocaleString()
  },
}