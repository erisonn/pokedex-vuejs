<script setup lang="ts">
import CardListItem from '../CardListItem/CardListItem.vue'
import type { Pokemon } from '../CardListItem/CardListItem.vue'

interface Props {
  pokemons: Pokemon[]
}
const props = defineProps<Props>()
</script>

<template>
  <div class="CardList">
    <CardListItem v-for="pokemon of props.pokemons" :key="pokemon.key" :pokemon="pokemon" />
  </div>
</template>

<style lang="scss">
.CardList {
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
