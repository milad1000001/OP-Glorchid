<template>
  <div class="drugFilter">
    <form class="drugFilter__form">
      <input
        v-model="query"
        type="text"
        class="drugFilter__TextInput"
        placeholder="Search for drug name..."
        autofocus
      >
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  data() {
    return {
      query: ''
    }
  },
  watch: {
    query(newQuery) {
      this.$emit('search', newQuery);
    }
  }
}
</script>

<style scoped>
.drugFilter{

}
.drugFilter__form{
  display: flex;
  align-content: center;
  justify-content: space-around;
  text-align: center;
  height: 2.5rem;
}
.drugFilter__TextInput {
  height: 100%;
  width: 100%;
  border: 0px;
  border-bottom: 3px solid rgb(198, 198, 198);
  padding: 0.25em 1em;
  background-color: transparent;
}
.drugFilter__TextInput:focus {
  box-shadow: none;
  outline: none;
  border-bottom-color: var(--active);
}
</style>
