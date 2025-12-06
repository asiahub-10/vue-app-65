<script setup lang="ts">
import type { Category } from '@/interfaces/Category';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    const router = useRouter();

    let categories = ref<Category[]>([]);

    function getItems() {
        axios.get('http://127.0.0.1:8000/api/categories')
        .then(response => {
            console.log(response.data);
            categories.value = response.data.categories;
            // if(categories.value.length === 0) {
            //     router.push('/');
            // }
        })
        .catch(error => {
            console.log(error);
        })
    }
    getItems();

    function handleDelete(id: number) {
        let confirmation = confirm('Are you sure to delete?');

        if(confirmation) {
            axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
            .then(response => {
                console.log(response.data.message);
                // categories.value = response.data.categories;
                getItems();
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    
</script>

<template>
    <h3>Category List</h3>
    <router-link to="/category/create" class="btn btn-outline-dark mb-3">New Category</router-link>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th><i class="fa-regular fa-user"></i> Name</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in categories" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.is_inactive ? 'Inactive' : 'Active' }}</td>
                <td>
                    <div class="btn-group">
                        <router-link :to="`/category/${item.id}/edit`" class="btn btn-sm btn-outline-success"><i class="fa-regular fa-pen-to-square"></i></router-link>
                        <button @click="handleDelete(item.id)" class="btn btn-sm btn-outline-danger"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>