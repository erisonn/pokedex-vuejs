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
    {{ type.name.toUpperCase() }}
  </div>
</template>

<style scoped lang="scss">
@import '/src/assets/main.scss';
.TagList-Item {
  margin-right: 8px;
  padding: 8px 15px;
  border-radius: 8px;
  background-color: v-bind('theme.color');
  color: $color-grey-dark;
}
</style>
