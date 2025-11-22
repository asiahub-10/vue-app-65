<script>
export default {
  setup() {
    const title = "IsDB - Welcome";
    const desc = "Welcome to IsDB, WDPF-65";
    const round = false;
    const trainees = ['Roxi','Sha Alom','Farhana'];
    const link = 'https://vuejs.org/';
    const test = () => {
      alert("Test Clicked");
    }
    return { title, desc, round, trainees, link, test }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1>{{ title }}</h1>
    </div>
  </header>

  <main>
    <p>{{desc}}</p>
    <p>Round: 
      <span v-if="round">Active</span>
      <span v-else="round">Inactive</span>
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
