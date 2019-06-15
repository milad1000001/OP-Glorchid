<template>
  <div class="drugManager">
    <drug-filter
      class="drugManager__search"
      @search="search"
    />
    <drug-detail
      :drug-items="drugItems"
    />
    <drug-list
      :drug-items="drugItemsToRender"
      @changeState="changeState"
    />
  </div>
</template>

<script>
import DrugList from './DrugList.vue';
import DrugFilter from './DrugFilter.vue';
import DrugDetail from './DrugDetail.vue';

export default {
  name: 'DrugManager',
  components: {
    DrugList,
    DrugFilter,
    DrugDetail
  },
  data() {
    return {
      drugItems: [
        {
          name: 'Bevasizumab',
          simcardCount: 23,
          isActive: true
        },
        {
          name: 'Asetaminofen',
          simcardCount: 12,
          isActive: false
        },
        {
          name: 'Dalfyra',
          simcardCount: 32,
          isActive: false
        },
        {
          name: 'Diclofenac',
          simcardCount: 15,
          isActive: true
        },
        {
          name: 'Alterzumab',
          simcardCount: 42,
          isActive: true
        },
        {
          name: 'Cinnatropin',
          simcardCount: 10,
          isActive: false
        },
        {
          name: 'Cinnora',
          simcardCount: 19,
          isActive: true
        },
      ],
      drugItemsToRender: []
    };
  },
  watch: {
    drugItems: {
      immediate: true,
      handler(newDrugItems) {
        this.drugItemsToRender = [...this.drugItems];
      }
    }
  },
  methods: {
    changeState({ activeState, name }) {
      var drugItemToChangeState = this.drugItems.find((drugItem) => {
        return drugItem.name === name;
      });
      drugItemToChangeState.isActive = activeState;
    },
    search(query) {
      this.drugItemsToRender = this.drugItems.filter((drugItem) => {
        return drugItem.name.toLowerCase().includes(query);
      });
    },
  }
}
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
