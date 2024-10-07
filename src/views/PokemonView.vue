<script setup lang="ts">
import { GET_POKEMON } from '@/queries/getPokemon'
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
import AppLoading from '../components/AppLoading.vue'
import { watch } from 'vue'
import PokemonViewContent from '../components/PokemonViewContent.vue'

const route = useRoute()
const { result, loading, error, refetch } = useQuery(GET_POKEMON, {
  pokemonKey: route.params.pokemonKey
})

watch(
  () => route.params.pokemonKey,
  async (newPokemon) => {
    refetch({
      pokemonKey: newPokemon
    })
  }
)
</script>

<template>
  <div class="PokemonView">
    <AppLoading v-if="loading" />
    <p v-else-if="error">Oops! Something went wrong.</p>
    <PokemonViewContent v-else :data="result.getPokemon" />
  </div>
</template>

<style scoped lang="scss">
.PokemonView {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
</style>
