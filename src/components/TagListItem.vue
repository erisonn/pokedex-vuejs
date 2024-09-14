<script setup lang="ts">
import { ref } from 'vue'
import { colors } from '@/helpers/pokemonTypesColors'

interface Props {
  tag: {
    name: string
  }
}

const props = defineProps<Props>()
const { tag } = props
const theme = ref({
  color: colors[tag.name.toLowerCase()]
})
</script>

<template>
  <span>
    <div class="TagListItem">
      {{ tag.name.toUpperCase() }}
    </div>
  </span>
</template>

<style scoped lang="scss">
@import '/src/assets/main.scss';
.TagListItem {
  margin-right: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: v-bind('theme.color.color');
  color: v-bind('theme.color.fontColor');
  width: max-content;
}
</style>
