<script setup>
import Navbar from './views/layouts/Navbar.vue';
import Pricing from './views/pages/Pricing.vue';
import ComparePlans from './views/pages/ComparePlans.vue';
import Footer from './views/layouts/Footer.vue';
</script>

<template>
    <div class="container py-3">  
      <!-- <Navbar></Navbar> -->
      <Navbar />
      <main>
        <Pricing />        
        <ComparePlans />
      </main>
      <Footer />
    </div>
</template>

<style scoped></style>
