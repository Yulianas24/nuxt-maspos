<template>
  <tr class="border-b">
    <td class="px-6 py-4 whitespace-nowrap text-gray-900">#</td>
    <td class="flex items-center px-6 py-4">
      <div class="h-[200px] w-[200px] rounded-md bg-slate-300 mr-3">
        <img class="object-cover h-[200px] w-[200px] rounded-md" :src="product.picture_url" alt="">
      </div>
      <div>
        <h1>{{ product.name }}</h1>
        <h1>Rp. {{product.price.toLocaleString()}}.00</h1>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-center">
      <div class="flex justify-center">
          <button class="h-8 w-8 pt-1 bg-[#0052CC] text-white rounded-full mr-3 hover:cursor-pointer" @click="decrease">-</button>
          {{ product.inCart }}
          <button class="h-8 w-8 pt-1 bg-[#0052CC] text-white rounded-full ml-3 hover:cursor-pointer" @click="increase">+</button>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-center">
      Rp. {{(product.price*product.inCart).toLocaleString()}}.00
    </td>
    <td class="text-sm text-gray-900 font-light pl-6 py-4 whitespace-nowrap text-right">
        <button class="btn bg-[#DE350B] hover:bg-[#de350bdb] hover:cursor-pointer" @click="remove">Remove Item</button>
    </td> 
  </tr>
</template>
<script>
export default {
  props:{
    product: {
      type:Object,
    }
  },
  methods:{
    increase(){
      this.$store.commit('productCart/increase', this.product.id)
    },
    decrease(){
      this.$store.commit('productCart/decrease', this.product.id)
    },
    remove(){
      this.$store.commit('productCart/delete', this.product.id)
    }
  }
}
</script>