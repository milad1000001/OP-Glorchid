<template>
  <header class="header">
    <div class="header__top">
      <div class="header__username">
        Welcome Mr.Username
      </div>
    </div>
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
.header__username {
  margin-left: 0.7em;
}
.header__top {
  position: relative;
  color: var(--active);
  text-align: left;
  background-color: #fff;
  padding: 0.5rem;
  margin-bottom: 1em;
}
.header__username:before {
  content: '';
  position: absolute;
  background-color: var(--active);
  top: 5px;
  left: 10px;
  bottom: 5px;
  width: 2px;
}
header {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.root__header {
}
</style>
