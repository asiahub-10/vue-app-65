<script setup lang="ts">
import { api } from '@/config/api';
import type { Product } from '@/interfaces/Product';
import { ref } from 'vue';
import { baseURL } from '@/config/baseURL';

    const products = ref<Product[]>([]);
    api.get('products')
    .then(response => {
        console.log(response.data);
        products.value = response.data;
    })
    .catch(error => {
        console.log(error);
    })
</script>

<template>
    <h3>Product List</h3>
    <router-link to="/product/create" class="btn btn-outline-dark mb-3">New Product</router-link>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                    <img v-if="item.photo == null" src="https://placehold.co/60" alt="Image" class="rounded">
                    <img v-else :src="baseURL + item.photo" alt="Image" class="rounded" width="60">
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.quantity }}</td>
                <td>
                    <div class="btn-group">
                        <router-link :to="`/product/${item.id}/edit`" class="btn btn-sm btn-outline-success"><i class="fa-regular fa-pen-to-square"></i></router-link>
                        <button  class="btn btn-sm btn-outline-primary"><i class="fa-regular fa-eye"></i></button>
                        <button  class="btn btn-sm btn-outline-danger"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>