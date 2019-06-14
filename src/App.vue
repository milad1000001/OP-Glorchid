<template lang="html">
  <div id="app">
    <div class="root">
      <the-header class="root__header" />
      <main>
        <drug-manager class="root__drugManager" />
      </main>
    </div>
  </div>
</template>

<script>
import './assets/style/normalize.css';
import './assets/style/variables/all.css';
import './assets/style/global.css';
import TheHeader from './components/TheHeader.vue';
import DrugManager from './components/DrugManager.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    DrugManager,
  },
};
</script>

<style scoped>
.root {
  display: grid;
}
</style>
