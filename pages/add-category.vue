<template>
<section class="pt-24">
  <div class=" w-[500px] h-[300px] mx-auto mt-[10%]">
    <h1 class="font-bold text-center my-4">Add Category</h1>
    <hr class="bg-gray-400">
    
    <form @submit.prevent="store()" action="/add-category" method="POST" class="h-full w-full">
      <div class="w-[70%] mx-auto mt-10">
        <label for="category">Category name</label><br>
        <input type="text" v-model="name" name="category" id="category" required>
      </div>
      <div class="mx-auto flex justify-center w-[70%] mt-16">
        <nuxt-link to="/" class="btn btn-trans mr-3">Cancel</nuxt-link>
        <button type="submit" class="btn">Confirm</button>
      </div>
    </form>
    
  </div>
</section>
</template>

<script>
export default {
  data(){
    return {
      name: ''
    }
  },
  methods: {
    store() {
      this.$store.dispatch('categories/store', this.name)
    }
  }
}
</script>