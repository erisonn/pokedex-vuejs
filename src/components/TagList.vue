<script setup lang="ts">
import TagListItem from './TagListItem.vue'

interface Props {
  tags: {
    name: string
  }[]
}
const props = defineProps<Props>()
const { tags } = props
</script>

<template>
  <div class="TagList">
    <TagListItem v-for="tag in tags" :key="tag.name" :tag="tag" />
  </div>
</template>

<style scoped lang="scss">
.TagList {
  display: flex;
  justify-content: center;
}
</style>
