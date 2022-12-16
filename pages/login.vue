<template>
  <div class="w-screen h-screen">
    <div class="flex justify-between bg-[#0052CC] w-full h-1/2 px-[120px] pt-[50px] text-white z-0">
      <h1 class=" text-3xl font-semibold ">MAS POS</h1>
      <p>Call Us  +62 817-1902-092</p>
    </div>
    <div class="grid justify-items-center w-[500px] h-[400px] mx-auto bg-white -mt-[15%] py-10 px-20 shadow-lg rounded-xl">
      <h1 class="text-xl font-medium">Login</h1>
      <!-- Toasts -->
      <div v-if="toast" class="fixed bg-red-600 top-[11%] py-4 px-6 inline-flex text-sm text-white w-[60%] mx-[20%] justify-center">
        <img src="@/assets/img/Info.svg" alt="">
        <p class="text-base font-semibold">login failed!</p>
      </div>
      <!-- End of toast -->
      <form @submit.prevent="userLogin" id="login_form" class="form" action="/" method="POST">
        <div class="w-full">
          <label for="email">Email</label><br>
          <input v-model="login.email" type="text" name="email" id="email" placeholder="Enter email" required>
        </div>
        <div class="w-full">
          <label for="password">Password</label><br>
          <input v-model="login.password" type="password" name="password" id="password" placeholder="Enter password" required>
        </div>
        <button type="submit" class="btn mx-auto py-0">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: 'nonavbar',
  data(){
    return {
      login: {
        email: '',
        password: ''
      },
    }
  },
  computed: {
    ...mapGetters({
      toast: 'user/toast'
    })
  },
  methods:{
    userLogin(){
      this.$store.dispatch('user/userLogin', this.login)

    }
  }
}
</script>
