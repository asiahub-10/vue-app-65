<script setup lang="ts">
import axios from "axios";
import {useRoute} from "vue-router";
import {reactive, ref} from "vue";
import { defaultPostFake, type PostFake } from "@/interfaces/PostFake";
// import { defaultPostFake as defaultPost, type PostFake } from "@/interfaces/PostFake";

    let route = useRoute();
    // let post = reactive<PostFake>(defaultPost);
    // let post = ref<PostFake>(defaultPost);
    let post = ref<PostFake>(defaultPostFake);

    axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(response => {
        console.log(response.data);
        // Object.assign(post, response.data);
        post.value = response.data;
    })
    .catch(error => {
        console.log(error);
    })
</script>

<template>
    <h3>Post Details</h3>
    <p>Post ID: {{ route.params.id }}</p>
    <p>User ID: {{ route.params.userid }}</p>
    <div class="card">
        <div class="card-body">
            <h4>{{ post.title }}</h4>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>