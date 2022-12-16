<template>
  <div class="grid w-[200px] h-[300px] rounded-2xl shadow-lg shadow-gray-300">
    <img class="object-cover w-[200px] h-[165px] rounded-t-2xl" :src="product.picture_url" alt="">
    <div class="m-3">
      <div class="flex justify-between  text-sm">
        <p class="tracking-tighter font-semibold">{{product.name}}</p>
        <button class="bg-[#DE350B] text-white text-[8px] px-1 rounded-[3px]" @click="deleteProduct(product.id)">Delete</button>
      </div>
      <p class="text-base font-bold">Rp. {{(product.price).toLocaleString()}}.00</p>
    </div>
    <div class="justify-self-center pb-3">
      <button class=" btn text-xs px-5  rounded-[3px] h-8 hover:cursor-pointer" @click="getData(product)">+ Add to Cart</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product : {
      type: Object
    }
  },
  methods: {
    getData(product){
      this.$store.dispatch('productCart/pushData', product)
      this.$store.dispatch('productCart/hide')
    },
    // menghapus product
    deleteProduct(id){
      this.$store.dispatch('products/deleteProduct', id)    
    }
  }
}
</script>