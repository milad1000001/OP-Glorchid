<template>
  <li
    :class="{
      'drugItem--IsActive': drug.IsActive,
      'drugItem--isDeactive': !drug.IsActive,
    }"
    class="drugItem"
    @click="chengeState()"
  >
    <div
      :class="{
        'drugItem__state--IsActive': drug.IsActive,
        'drugItem__state--isDeactive': !drug.IsActive
      }"
      class="drugItem__cell drugItem__state"
    >
      <icon-checkmark v-if="drug.IsActive" class="drugItem__stateIcon" />
      <icon-crossmark v-else class="drugItem__stateIcon" />
      {{ drug.IsActive ? 'Active' : 'Inactive' }}
    </div>
    <div class="drugItem__cell drugItem__name">{{ drug.DrugName }}</div>
    <div class="drugItem__cell drugItem__simCount">{{ drug.TotalRequiredSimCards }}</div>
  </li>
</template>

<script>
import IconCheckmark from './icon/checkmark.vue';
import IconCrossmark from './icon/crossmark.vue';

export default {
  name: 'DrugItem',
  components: {
    IconCheckmark,
    IconCrossmark,
  },
  props: {
    drug: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    chengeState() {
      this.promptIfIsActive(() => {
        this.$emit('changeState', {
          activeState: !this.drug.IsActive,
          id: this.drug.DrugId,
        });
      });
    },
    promptIfIsActive(func) {
      // if (this.drug.IsActive) {
      this.$dialog
        .confirm(
          `You are about to ${this.drug.IsActive ? 'Inactive' : 'Active'} ${
            this.drug.DrugName
          }, Are you sure?`,
          {
            cancelText: 'Cancel',
            okText: 'Yes',
          }
        )
        .then(dialog => {
          func();
        });
    },
  },
};
</script>

<style scoped>
.drugItem {
  position: relative;
  user-select: none;
}
.drugItem:before {
  content: '';
  border: 1px solid var(--active);
  position: absolute;
  left: 4px;
  top: 4px;
  bottom: 4px;
}
.drugItem__cell {
  display: flex;
  align-items: center;
  padding: 1em 0.5em;
}
.drugItem__name {
  min-width: 150px;
  user-select: none;
}

.drugItem__simCount {
  padding-right: 2em;
  padding-left: 2em;
}

.drugItem__state {
  color: var(--active);
  width: 90px;
  padding-left: 2em;
  padding-right: 1em;
  flex-grow: 0;
}
.drugItem__state--IsActive {
  color: var(--active);
}
.drugItem__state--IsActive:before {
  content: '';
  border: 1px solid var(--active);
  position: absolute;
  left: 4px;
  top: 4px;
  bottom: 4px;
}
.drugItem__state--isDeactive:before {
  content: '';
  border: 1px solid var(--deactive);
  position: absolute;
  left: 4px;
  top: 4px;
  bottom: 4px;
}
.drugItem--IsActive:hover {
  background-color: var(--green--lighter);
}
.drugItem__state--isDeactive {
  color: var(--red);
}
.drugItem--isDeactive:hover {
  background-color: var(--red--lighter);
}
.drugItem__stateIcon {
}
</style>
