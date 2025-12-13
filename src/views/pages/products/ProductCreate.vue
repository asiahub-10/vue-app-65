<script setup lang="ts">
import { defaultCategory, type Category } from '@/interfaces/Category';
import { defaultProduct, type Product } from '@/interfaces/Product';
import axios from 'axios';
import { ref } from 'vue';

let product = ref<Product>(defaultProduct);
const categories = ref<Category[]>([]);

axios.get('http://127.0.0.1:8000/api/categories')
.then(response => {
    // console.log(response.data);
    categories.value = response.data.categories;
})
.catch(error => {
    console.log(error);
})

const handleFileChange = (event: any) => {
  product.value.photo_file = event.target.files[0];
}
// const handleFileChange = (event: any) => {
//     const start = performance.now();
//   let photo = event.target.files[0];
//   console.log(photo);
// //   alert(photo);
//   product.value.photo_file = photo;
//   const end = performance.now();
//   console.log(`Execution time: ${end - start} ms`);
// }

function handleSubmit() {
    // console.log(product.value);

    let formData = new FormData();
    formData.append('name', product.value.name);
    formData.append('category_id', product.value.category_id.toString());
    formData.append('price', String(product.value.price));
    formData.append('photo', product.value.photo_file as File ?? null);

    // formData.forEach((value, key) => {
    //     console.log(key + ' : ' + value);
    // });

    axios.post('http://127.0.0.1:8000/api/products', formData)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })
}
</script>

<template>
    <h3>Create New Product</h3>
    <form v-on:submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model="product.name">            
        </div>
        <div class="mb-3">
            <label for="">Category</label>
            <select v-model="product.category_id" class="form-select">
                <option v-for="category in categories" v-bind:key="category.id" :value="category.id">{{ category.name }}</option>
            </select>          
        </div>
        <div class="mb-3">
            <label for="">Price</label>
            <input type="number" class="form-control" v-model="product.price">            
        </div>
        <div class="mb-3">
            <label for="">Photo</label>
            <input type="file" class="form-control" @change="handleFileChange">
        </div>
        <div class="mb-3">
            <button class="btn btn-success">Save</button>
        </div>
    </form>
</template>

<style scoped>

</style>