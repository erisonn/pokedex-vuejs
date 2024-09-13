<script setup lang="ts">
import { toRefs } from 'vue'
import CardListItem from './CardListItem.vue'
import type { Pokemon } from './CardListItem.vue'

interface Props {
  pokemons: Pokemon[]
}
const props = defineProps<Props>()
const { pokemons } = toRefs(props)
</script>

<template>
  <div class="CardList">
    <CardListItem v-for="pokemon of pokemons" :key="pokemon.key" :pokemon="pokemon" />
  </div>
</template>

<style scoped lang="scss">
.CardList {
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
