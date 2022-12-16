<template>
  <div class="grid justify-items-center mx-auto w-[500px] h-[350px] mt-[9%]">
    <h1 class="text-xl font-semibold">Payment successful</h1>
    <div class="grid h-[100px] w-[100px] bg-[#36B37E] rounded-full justify-items-center content-center">
      <img  class="" src="@/assets/img/check.svg" alt="">
    </div>
    <h1 class="text-xl font-semibold">Rp. {{total_bill}}</h1>
    <nuxt-link to="/">
      <button class="btn btn-trans h-[44px]" @click="resetBill()">Back to home</button>
    </nuxt-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  layout: 'nonavbar',
  computed: {
    ...mapGetters({
      total_bill : 'productCart/total_bill'
    })
  },
  methods: {
    resetBill(){
      this.$store.commit('productCart/resetBill')
    },
  }
}
</script>