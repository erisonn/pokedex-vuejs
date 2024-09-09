<script setup>
import { useQuery } from '@vue/apollo-composable'
import { GET_POKEMONS_QUERY } from './query'
import CardList from '@/components/CardList/CardList.vue'

const { result, loading, error } = useQuery(GET_POKEMONS_QUERY)
</script>

<template>
  <div class="ListPokemonPage">
    <CardList v-if="!loading" :pokemons="result.getAllPokemon" />
    <p v-else-if="error">Oops! Something went wrong.</p>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped lang="scss">
.ListPokemonPage {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
