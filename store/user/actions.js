export default {
  async userLogin({ commit }, data) {
    console.log(data)
    try {
      await this.$auth.loginWith('local', { data: data })
    } catch (err) {
      console.log(err)
      commit('showToast')
      setTimeout(() => {
        commit('hideToast')
      }, 2000)
    }
  },
  async userLogout(data){
    await this.$auth.logout('local', { data: data }).then(()=>{
      this.$router.push({
        name: 'login'
      })
    }).catch(error => {
      console.log(error.response.data)
    })
  }
}