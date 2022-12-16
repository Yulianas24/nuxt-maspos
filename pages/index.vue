<template>
  <div class="pt-24">
      <!-- Product Toast -->
  <div v-if="$store.state.products.toast" class="fixed z-10 bg-[#36B37E] top-[8%] py-4 px-6 inline-flex text-sm text-white w-[60%] mx-[20%] justify-center">
    <img src="@/assets/img/Info.svg" alt="">
    <p class="text-base font-semibold">Add product success!</p>
  </div>
  <!-- End of Product Toast -->

    <!-- Cart Toast -->
    <div v-if="show" class="fixed bg-[#36B37E] top-[11%] py-4 px-6 inline-flex text-sm text-white w-[60%] mx-[20%] justify-center">
      <img src="@/assets/img/Info.svg" alt="">
      <p class="text-base font-semibold">Added to cart</p>
    </div>
    <!-- End of Cart Toast -->
    <div class="menu-bar px-32 mt-5 flex justify-end">
      <nuxt-link to="/add-category" class="btn bg-[#B3D4FF99] text-[#0052CC] mr-3">+Add Category</nuxt-link>
      <nuxt-link to="/add-product" class="btn bg-[#B3D4FF99] text-[#0052CC] mr-3">+Add Products</nuxt-link>
      <nuxt-link to="/cart" class="btn">Cart</nuxt-link>
    </div>
    <div class="mx-32 my-3 flex">
      <div class="h-full hover:text-[#0052CC]  border-b-2" 
      :class="(selectedCategory==null?'border-blue-500  text-[#0052CC]':' text-[#7A869A]')">
        <button class="px-2 text-sm font-semibold  h-full" @click="selected(null)">Semua</button>
      </div>
      <div v-for="category in categories" v-bind:key="category.id" class="btn-category" 
      :class="(selectedCategory==category.id?'border-blue-500  text-[#0052CC]':' text-[#7A869A]')">
        <button class="px-2 text-sm font-semibold  h-full" @click="selected(category.id)">{{ category.name }}</button>
      </div>
  
      <span class="w-full border-b-2"></span>
    </div>

      <!-- Product list -->
    <div  class="grid grid-cols-5 justify-items-center gap-10 my-10 w-full px-32">
      <ProductCard v-for="(product) in this.products" :key="product.id" :product="product"/>
    </div>
        <!-- End of Product list -->
    <div class="flex justify-end w-auto h-auto mx-32 mb-10">
      <nuxt-link class="btn text-center px-5 rounded-[3px] py-3 w-[205px] block " to="/cart">Total Bill : Rp. {{total_bill}}</nuxt-link>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products : 'products/products',
      selectedCategory : 'products/selectedCategory',
      categories : 'categories/categories',
      total_bill : 'productCart/total_bill',
      show : 'productCart/show',
    }),
  },
  fetch(){
    this.$store.dispatch('products/fetchProduct')
    this.$store.dispatch('categories/fetchCategories')
  },
  methods:{
    selected(id){
      this.$store.commit('products/selectedCategory', id)
    }
  }
}
</script>