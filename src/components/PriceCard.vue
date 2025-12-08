<script setup>
// import { defineProps } from 'vue';
import {useCounterStore} from '@/store/counter';
const counter = useCounterStore();
defineProps({
    title: String,
    price: {
        type: String,
        default: '0'
    },
    btn: {
        type: String,
        default: 'Sign up for free'
    },
    btnClass: {
        type: String,
        default: 'btn-primary'
    },
    isDisabled: Boolean,
    id: Number
});
</script>
<template>
    <div class="card mb-4 rounded-3 shadow-sm h-100">
        <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{{title}} <span class="badge bg-primary">{{ counter.count }}</span></h4>
        </div>
        <div class="card-body">
            <h1 class="card-title pricing-card-title">
                ${{price}}<small class="text-body-secondary fw-light">/mo</small>
            </h1>
            <slot>Same as free plan</slot>
            <router-link :to="`/plan-details/${id}`" :class="`w-100 btn btn-lg ${btnClass}`" :disabled="isDisabled">
                {{btn}}
            </router-link>
        </div>
    </div>
</template>