<script setup lang="ts">
import { defaultPostFake, type PostFake } from '@/interfaces/PostFake';
import axios from 'axios';
import { ref } from 'vue';

let post = ref<PostFake>(defaultPostFake);

function handleSubmit() {
    // console.log(post.value.title);
    // console.log(post.value.body);
    axios.post('https://jsonplaceholder.typicode.com/posts', post.value)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })
}
</script>

<template>
    <h3>Create New Post</h3>
    <form @submit.prevent=handleSubmit>
        <div class="mb-3">
            <label for="">Title</label>
            <input type="text" class="form-control" v-model="post.title">            
        </div>
        <div class="mb-3">
            <label for="">Body</label>
            <textarea class="form-control" v-model="post.body"></textarea>
        </div>
        <div class="mb-3">
            <button class="btn btn-success">Save</button>
        </div>
    </form>
</template>

<style scoped>

</style>