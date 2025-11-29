<script setup lang="ts">
import axios from 'axios';
import {reactive, ref} from "vue";
import type {PostFake} from "@/interfaces/PostFake";

let posts = ref<PostFake[]>([]);

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    posts.value = response.data;
    console.log(posts);
})
.catch(error => {
    console.log(error);
});
</script>

<template>
    <h3>Posts List</h3>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th><i class="fa-regular fa-user"></i> User ID</th>
                <th>Title</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.userId }}</td>
                <td>{{ post.title }}</td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-sm btn-outline-success"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="btn btn-sm btn-outline-info"><i class="fa-regular fa-eye"></i></button>
                        <button class="btn btn-sm btn-outline-danger"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>