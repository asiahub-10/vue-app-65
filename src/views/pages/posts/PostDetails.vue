<script setup>
    import {useRoute} from "vue-router";
    let route = useRoute();
</script>

<template>
    <h3>Post Details</h3>
    <p>Post ID: {{ route.params.id }}</p>
    <p>User ID: {{ route.params.userid }}</p>
    <div class="card">
        <div class="card-body">
            <h4></h4>
            <p></p>
        </div>
    </div>
</template>

<style scoped>

</style>