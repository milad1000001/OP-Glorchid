<template>
  <li
    :class="{
      'drugItem--isActive': isActive,
      'drugItem--isDeactive': !isActive,
    }"
    class="drugItem"
    @click="chengeState()"
  >
    <div
      :class="{
        'drugItem__state--isActive': isActive,
        'drugItem__state--isDeactive': !isActive
      }"
      class="drugItem__cell drugItem__state"
    >
      <icon-checkmark
        v-if="isActive"
        class="drugItem__stateIcon"
      />
      <icon-crossmark
        v-else
        class="drugItem__stateIcon"
      />
      {{isActive ? 'Active' : 'Inactive'}}
    </div>
    <div class="drugItem__cell drugItem__name">
      {{name}}
    </div>
    <div class="drugItem__cell drugItem__simCount">
      {{simcardCount}}
    </div>
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
    name: {
      type: String,
      required: true
    },
    simcardCount: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    chengeState() {
      this.$emit('changeState',{
        'activeState' :!this.isActive,
        'name':this.name
      });
    }
  }
};

</script>

<style scoped>

.drugItem {
  position: relative;
  user-select: none;
}
.drugItem:before{
  content: '';
  border:1px solid var(--active);
  position: absolute;
  left:4px;
  top:4px;
  bottom:4px;
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
.drugItem__state--isActive {
  color:var(--active);
}
.drugItem__state--isActive:before{
  content: '';
  border:1px solid var(--active);
  position: absolute;
  left:4px;
  top:4px;
  bottom:4px;
}
.drugItem__state--isDeactive:before{
  content: '';
  border:1px solid var(--deactive);
  position: absolute;
  left:4px;
  top:4px;
  bottom:4px;
}
.drugItem--isActive:hover {
  background-color: var(--green--lighter);
}
.drugItem__state--isDeactive {
  color:var(--red);
}
.drugItem--isDeactive:hover {
  background-color: var(--red--lighter);
}
.drugItem__stateIcon {
}
</style>
