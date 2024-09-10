<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { GET_POKEMONS_QUERY } from './query'
import CardList from '@/components/CardList/CardList.vue'
import PokemonCardBig from '@/components/PokemonCardBig/PokemonCardBig.vue'
import AppLoading from '@/components/AppLoading/AppLoading.vue'

const { result, loading, error } = useQuery(GET_POKEMONS_QUERY)
</script>

<template>
  <div class="ListPokemonPage">
    <AppLoading v-if="loading" />
    <p v-else-if="error">Oops! Something went wrong.</p>
    <div v-else class="ListPokemonPage-ContentWrapper">
      <CardList :pokemons="result.getAllPokemon" />
      <PokemonCardBig v-if="$route.params.pokemonKey" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ListPokemonPage {
  .ListPokemonPage-ContentWrapper {
    padding-top: 50px;
    display: flex;
    justify-content: center;
  }
}
</style>
