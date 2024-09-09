<script setup lang="ts">
import { ref } from 'vue'
import { colors } from '@/helpers/pokemonTypesColors'

interface Props {
  type: {
    name: string
  }
}

const props = defineProps<Props>()
const { type } = props
const theme = ref({
  color: colors[type.name.toLowerCase()]
})
</script>
<template>
  <div class="TagList-Item">
    {{ type.name }}
  </div>
</template>

<style scoped lang="scss">
.TagList-Item {
  margin-right: 5px;
  padding: 3px 15px;
  border-radius: 4px;

  background-color: v-bind('theme.color');
}
</style>
