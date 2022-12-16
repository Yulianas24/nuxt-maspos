<template>
<section class="pt-24">
  <!-- Toast -->
  <div v-if="toast" class="fixed z-10 bg-[#36B37E] top-[8%] py-4 px-6 inline-flex text-sm text-white w-[60%] mx-[20%] justify-center">
    <img src="@/assets/img/Info.svg" alt="">
    <p class="text-base font-semibold">Add product success!</p>
  </div>
  <!-- End of toast -->
  <form @submit.prevent="store" action="/add-product" method="POST" enctype="multipart/form-data">
    <div class="w-[900px] mt-5 h-[500px] mx-auto">
      <h1 class="font-bold mb-4">Add Product</h1>
      <hr class="w-full mb-5">
      <div class="grid grid-cols-2 gap-4 h-full w-full ">
        <!-- input image  -->
        <div class="">
          <label for="formFileLg">
            <div class=" grid content-center justify-items-center  w-[180px] h-[180px] bg-blue-200 mx-auto mt-10 rounded-md  bg-cover"
            :style="{ 'background-image': `url(${filePreview})` }" id="image_prev">
            <div v-if="(filePreview == null)" id="image_child" class="grid content-center justify-items-center">
              <img src="@/assets/img/cloud_up.svg" alt="">
              <p class="text-[#0052CC]">upload image</p>
            </div>
            <input id="formFileLg" type="file" required @change="selectImgFile" class="fixed  w-[180px] mt-[140px] opacity-0">
            </div>
          </label>
        </div>
        <!-- input text and select -->
        <div class="py-10 px-14">
          <div class="inp-box w-full">
            <label for="product name">Product Name</label><br>
            <input v-model="product.name" type="text" name="product_name" id="" placeholder="" required>
          </div>
          <div class="inp-box w-full">
            <label for="price">Price</label><br>
            <input v-model="product.price" type="number" name="price" id="price" required>
          </div>
          <div class="inp-box w-full">
            <label for="category">Category</label><br>
            <select v-model="product.category_id" name="category_id" id="" required>
              <option value="" selected hidden>Select</option>
              <option v-for="category in categories" :key="category.id" :value="category.id"> {{ category.name }} </option>
            </select>
          </div>
          <div class="flex justify-end  w-full mt-16">
            <nuxt-link to="/" class="btn btn-trans mr-3">Cancel</nuxt-link>
            <button type="submit" class="btn">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      filePreview: null,
      product : {
        category_id: '',
        name: '',
        price: null,
        picture: ''
      },
    };
  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories',
      toast: 'products/toast'
    })
  },
  methods: {
    selectImgFile(event) {
      this.product.picture = event.target.files[0]
      if (event.target.files[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.filePreview = e.target.result
        }
        reader.readAsDataURL(event.target.files[0])
      } else{
        this.filePreview = null
      }
    },
    
    async store() {
      this.$store.dispatch('products/store', this.product)
    }
  },

}
</script>