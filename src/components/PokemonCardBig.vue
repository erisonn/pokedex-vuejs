<script setup lang="ts">
import { GET_POKEMON } from '@/queries/getPokemon'
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
import AppLoading from './AppLoading.vue'
import { watch } from 'vue'
import PokemonCardBigContent from './PokemonCardBigContent.vue'

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
  <div class="PokemonCardBig">
    <AppLoading v-if="loading" />
    <p v-else-if="error">Oops! Something went wrong.</p>
    <PokemonCardBigContent v-else :data="result.getPokemon" />
  </div>
</template>

<style scoped lang="scss">
.PokemonCardBig {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 100px;
  background-color: $card-bg-color;
  width: 650px;
  height: 800px;
  padding: 15px 40px;
  border: 1px solid $color-grey-transparent;
  border-radius: 8px;
  box-shadow: $box-shadow;
}
</style>
