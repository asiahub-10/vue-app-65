<script setup>
  import { ref } from 'vue'

  const title = "New Title";
  const desc = "Welcome to IsDB, WDPF-65";
  const round = ref(false);
  const trainees = ['Roxi','Sha Alom','Farhana'];
  const link = 'https://vuejs.org/';
  const test = () => {
    alert("Test Clicked");
  }
  const count = ref(0);
  const increment = () => {
    count.value++;
  }
  const change = () => {
    // if(round.value) {
    //   round.value = false;
    // } else {
    //   round.value = true;
    // }
    // round.value ? round.value = false : round.value = true;
    round.value = !round.value;
  }
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1>{{ title }}</h1>      
    </div>
    <h2>{{ count }}</h2>
    <button type="button" @click="increment">Increment</button>
  </header>

  <main>
    <p>{{desc}}</p>
    <p>Round: 
      <span v-if="round">Active</span>
      <span v-else="round">Inactive</span>

      <!-- <button type="button" @click="change">Change</button> -->
      <button type="button" @click="round = !round">Change</button>
    </p>
    <!-- <a v-bind:href="link" target="_blank">Visit Website</a> -->
    <a :href="link" target="_blank">Visit Website</a>
    <ul>
      <li v-for="trainee in trainees" :key="trainee">{{ trainee }}</li>
    </ul>
    <button type="button" @click="test">Click to Test</button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main {
  margin: 1.5rem auto;
  max-width: 800px;
  text-align: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
