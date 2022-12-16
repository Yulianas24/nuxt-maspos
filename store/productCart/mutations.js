export default {
  pushData(state, product){
    state.show = true
    var data = {
      id: product.id,
      name : product.name,
      price : product.price,
      picture_url : product.picture_url,
      inCart : 1
    }
    if(state.products.filter(n => n['id'] == product.id)[0] == null){
      state.products.push(data)
      state.total_bill += data.price
    } else{
      state.products.forEach(n => {
        if (n.id == product.id) {
          n.inCart++
          state.total_bill += n.price
        }
      })
    }
  },
  increase(state, id){
    state.products.forEach(n => {
      if (n.id == id) {
        n.inCart++
        state.total_bill += n.price
      }
    })
  },
  decrease(state, id){
    state.products.forEach(function callback(n, index) {
      if (n.id == id) {
        state.total_bill -= n.price
        if(n.inCart <= 1){
          state.products.splice(index,1)
        } else{
          n.inCart--
        }
      } 
    })
  }, 
  delete(state, id){
    state.products.forEach(function callback(n, index) {
      if (n.id == id) {
        state.total_bill -= (n.price * n.inCart)
        state.products.splice(index,1)
      }
    })
  },
  hide(state){
    state.show = false
  },
  resetBill(state){
    state.total_bill = 0
    state.products = []
  }
}