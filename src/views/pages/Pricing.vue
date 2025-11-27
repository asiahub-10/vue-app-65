<script setup>
import { ref } from 'vue'
import PriceCard from '@/components/PriceCard.vue'
</script>
<template>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal text-body-emphasis">Pricing</h1>
        <p class="fs-5 text-body-secondary">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
        </p>
    </div>
    <div class="row gy-4 row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
            <PriceCard title="Free Plan" btnClass="btn-outline-primary" :id="1" :isDisabled="false">
                <ul class="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                </ul>
            </PriceCard>
        </div>
        <div class="col">
            <PriceCard title="Standard Plan" price="10" :id="2" btn="Get Started" :isDisabled="true" />
        </div>
        <div class="col">
            <PriceCard title="Pro Plan" price="20" :id="3" btn="Get Started" :isDisabled="false">
                <ul class="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                </ul>
            </PriceCard>
        </div>
    </div>
</template>