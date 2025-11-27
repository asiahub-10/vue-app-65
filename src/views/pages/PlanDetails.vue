<template>
    <div>
        <h3>Plan Details</h3>
        <h5>Plan: {{ currentPlan }}</h5>
        <p>This is the plan details page</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const currentPlan = route.params.id;
console.log(route);
</script>

<style scoped>

</style>