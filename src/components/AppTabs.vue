<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  tabs: {
    title: string
    label: string
    component: any
    componentProps: any
  }[]
}
const { tabs } = defineProps<Props>()

const allTabs = ref(tabs)
const activeTab = ref(tabs[0])
const changeTab = (newTab: any) => {
  activeTab.value = newTab
}
</script>
<template>
  <div class="AppTabs">
    <div class="Tabs">
      <button
        @click="() => changeTab(tab)"
        :class="{ active: tab.label === activeTab.label }"
        v-for="tab in allTabs"
        :key="tab.label"
      >
        {{ tab.title }}
      </button>
    </div>
    <component :is="activeTab.component" v-bind="activeTab.componentProps"></component>
  </div>
</template>

<style scoped lang="scss">
.Tabs {
  margin-bottom: 15px;
  button {
    border: 1px solid $color-grey-transparent;
    border-radius: 4px;
    padding: 8px;
    margin-right: 8px;
    font-size: 12px;
    font-weight: bold;
    color: $color-grey-light;
  }
  .active {
    background-color: $color-green-light;
    color: $color-white;
  }
}
</style>
