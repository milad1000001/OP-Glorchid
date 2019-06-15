<template>
  <div class="drugDetails">
    <div class="drugDetails__detail">
      Active: {{ SumIsActive }}, using 21 SimCards
    </div>
    <div class="drugDetails__detail">
      Inactive: {{ SumIsInctive }}, using 28 SimCards<br>
    </div>
    <!-- <div class="drugDetails__detail">
      Active drugs: {{ activeDrugsCount }}, using {{ activeDrugSimcardCount }} sim cards
    </div>
    <div class="drugDetails__detail">
      Inactive drugs: {{ InactiveDrugsCount }}, using {{ InactiveDrugSimcardCount }} sim cards
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
    SumIsActive() {
      return this.drugItems.filter(drugitem => {
        return drugitem.isActive;
      }).length;
    },
    SumIsInctive() {
      return this.drugItems.filter(drugitem => {
        return !drugitem.isActive;
      }).length;
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
