<template>
  <nav class="fixed top-0 px-32 py-5 w-full bg-[#0052CC] text-white">
    <div class="flex items-center justify-between w-full h-full">
      <h1 class=" font-semibold">MASPOS</h1>
      <div class=" flex items-center">
        <p class="mr-3 peer">{{ $auth.user.name }}</p>
        <img src="@/assets/img/Avatar.svg" alt="" class="peer">
        <p class="invisible peer-hover:visible hover:cursor-pointer hover:visible fixed right-32 top-14 h-auto w-auto bg-gray-500 px-3 py-2 rounded-md"
        @click="userLogout()" >
            logout
        </p>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods:{
    userLogout(){
      this.$store.dispatch('user/userLogout',this.login)
    }
  }
}
</script>