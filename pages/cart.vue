<template>
<div class="h-screen overflow-hidden pt-[84px]">
  <div class="w-full h-full overflow-auto">
    <div class="mx-32 ">
      <table class="min-w-full table-fixed ">
        <thead class="border-b">
          <tr>
            <th scope="col" class="text-left px-6 py-4">
              
            </th>
            <th scope="col" class="text-left px-6 py-4">
              Product
            </th>
            <th scope="col" class="text-center px-6 py-4">
              Qty
            </th>
            <th scope="col" class="text-center px-6 py-4">
              Sub Total
            </th>
            <th scope="col" class="text-left px-6 py-4">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <ProductCart v-for="product in products" :key="product.id" :product="product"/>
        </tbody>
      </table>
      <div class="flex w-full justify-end text-sm font-semibold  mt-5">
        <h1 class="text-end mr-72">Total</h1>
        <h1 id="totalText" class="text-end">Rp. {{total_bill}}</h1>
      </div>
      <div class="w-full h-auto my-10 text-right flex justify-end">
        <nuxt-link to="/" class="btn btn-trans mr-3">Back to home</nuxt-link>
        <nuxt-link to="/success" id="payBtn" type="submit" class="btn">Pay Bill</nuxt-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products : 'productCart/products',
      total_bill : 'productCart/total_bill'
    })
  }
}
</script>