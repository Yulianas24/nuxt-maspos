export default {
  fetchCategories(state, data){
    state.categories = data
  },
  async store(state, data) {
    // console.log(data)
      await this.$axios.post('/category', {
        name : data
      }).then(()=>{
        this.$router.push({
          name: 'index'
        })
      }).catch(error => {
        console.log(error.response.data)
      })
    }
}