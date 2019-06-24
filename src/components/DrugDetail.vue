<template>
  <div class="drugDetails">
    <div class="drugDetails__detail">
      Active: {{ activeDrugLength }}, using {{ activeSim }} SimCards
    </div>
    <!-- <div class="drugDetails__detail">
      Inactive: {{ inActiveDrugLength }}, using {{ inativeSim }} SimCards<br>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'DrugDetails',
  props: {
    drugItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    activeDrug() {
      return this.drugItems.filter(drugitem => {
        return drugitem.isActive;
      });
    },
    inActiveDrug() {
      return this.drugItems.filter(drugitem => {
        return !drugitem.isActive;
      });
    },
    activeDrugLength() {
      return this.drugItems.filter(drugitem => {
        return drugitem.isActive;
      }).length;
    },
    inActiveDrugLength() {
      return this.drugItems.filter(drugitem => {
        return !drugitem.isActive;
      }).length;
    },
    activeSimList() {
      return this.activeDrug.map((drugItem) => {
          return drugItem.simcardCount;
      });
    },
    inactiveSimList() {
      return this.inActiveDrug.map((drugItem) => {
          return drugItem.simcardCount;
      });
    },
    activeSim() {
      return this.activeSimList.reduce((lastSimcart, currentSimcart) => {
        return lastSimcart + currentSimcart;
      });
    },
    inativeSim() {
      return this.inactiveSimList.reduce((lastSimcart, currentSimcart) => {
        return lastSimcart + currentSimcart;
      });
    },
  },
};
</script>

<style scoped>
.drugDetails {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1em;
  color: rgb(184, 184, 184);
  font-size: 0.8em;
  padding-right: 1em;
}

.drugDetails__detail {
  margin-bottom: 0.25em;
}
</style>
