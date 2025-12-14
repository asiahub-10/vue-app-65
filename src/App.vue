<script setup>
import Navbar from './views/layouts/Navbar.vue';
import Pricing from './views/pages/Pricing.vue';
import ComparePlans from './views/pages/ComparePlans.vue';
import Footer from './views/layouts/Footer.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <div class="container py-3">  
      <!-- <Navbar></Navbar> -->
      <Navbar v-if="!route.meta.noLayout" />
      <main>
        <!-- <Pricing />
        <ComparePlans /> -->
        <router-view />
      </main>
      <Footer v-if="!route.meta.noLayout" />
    </div>
</template>

<style scoped></style>
