<template>
  <header class="header">
    <div>
      <img
        src="../assets/img/logo.png"
        alt=""
        class="header__logo"
      >
    </div>
  </header>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.root__header {
  margin: 2rem;
}
</style>
