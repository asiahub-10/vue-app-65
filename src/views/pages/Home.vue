<script setup>
    import {useCounterStore} from '@/store/counter';
    const counter = useCounterStore();
</script>

<template>
    <h1>Welcome to Dashboard</h1>
    <h2>Counter: {{ counter.count }}</h2>
    <h5>This is <b>{{ counter.countResult }}</b> number.</h5>

    <div class="mt-3 btn-group">
        <button @click="counter.increment" class="btn btn-sm btn-outline-dark fs-5">+</button>
        <button @click="counter.decrement" class="btn btn-sm btn-outline-dark fs-5">&nbsp;-&nbsp;</button>
    </div>
</template>

<style scoped></style>
