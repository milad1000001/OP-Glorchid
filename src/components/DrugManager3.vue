<template>
  <div v-if="drugItems.length" class="drugManager">
    <drug-filter class="drugManager__search" @search="search" />
    <drug-detail :drug-items="drugItems" />
    <drug-list :drug-items="drugItemsToRender" @changeState="changeState" />
  </div>
</template>

<script>
import DrugList from './DrugList.vue';
import DrugFilter from './DrugFilter.vue';
import DrugDetail from './DrugDetail.vue';
import { log } from 'util';

export default {
  name: 'DrugManager',
  components: {
    DrugList,
    DrugFilter,
    DrugDetail,
  },
  data() {
    return {
      drugItems: [],
      drugItemsToRender: [],
    };
  },
  watch: {
    drugItems: {
      immediate: true,
      handler(newDrugItems) {
        this.drugItemsToRender = [...this.drugItems];
      },
    },
  },
  mounted() {
    this.refreshList();
  },
  methods: {
    changeState({ activeState, id }) {
      var drugItemToChangeState = this.drugItems.find(drugItem => {
        return drugItem.DrugId === id;
      });
      drugItemToChangeState.IsActive = activeState;
      this.getProperRequest()(id).then(() => {
        this.refreshList();
      });
    },
    getProperRequest(state) {
      if (state) {
        return apiService.activeDrug;
      }
      return apiService.deactiveDrug;
    },
    },
    search(query) {
      this.drugItemsToRender = this.drugItems.filter(drugItem => {
        return drugItem.DrugName.toLowerCase().includes(query);
      });
    },
  },
};
</script>

<style scoped>
.drugManager {
  width: 550px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto;
}
.drugManager__search {
  margin-bottom: 1em;
}
</style>
