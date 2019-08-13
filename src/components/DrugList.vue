<template>
  <ul class="drugList">
    <drug-item
      v-for="drugItem in drugItems"
      :key="drugItem.DrugId"
      :drug="drugItem"
      class="drugList__item"
      @changeState="changeState"
    />
  </ul>
</template>

<script>
import DrugItem from './DrugItem.vue';
export default {
  name: 'DrugList',
  components: {
    DrugItem,
  },
  props: {
    drugItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    };
  },
  methods: {
    changeState({ activeState, id }) {
      this.$emit('changeState',{
        'activeState': activeState,
        'id': id
      });
    }
  }
};
</script>

<style scoped>
.drugList {
  padding: 0px;
  border-radius: 5px;
  background: #fefefe;
  box-shadow: var(--BoxShadow);
}
.drugList__item {
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid var(--gray);
}
.drugList__item:nth-last-child(1) {
  border: 0px;
}
</style>
