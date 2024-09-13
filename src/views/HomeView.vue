<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
import CardList from '@/components/CardList.vue'
import PokemonCardBig from '@/components/PokemonCardBig.vue'
import AppLoading from '@/components/AppLoading.vue'
import { GET_POKEMONS_QUERY } from '@/queries/getPokemons'

const { result, loading, error, fetchMore } = useQuery(GET_POKEMONS_QUERY, null, {
  notifyOnNetworkStatusChange: true
})

const infiniteScrollRef = ref(null)

const loadMorePokemon = () => {
  // TODO: STOP FETCHING MORE WHEN REACHING END OF PAGINATION
  if (!result.value) return
  fetchMore({
    variables: {
      offset: result.value?.getAllPokemon.length + 93
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult
      return {
        ...previousResult,
        getAllPokemon: [...previousResult.getAllPokemon, ...fetchMoreResult.getAllPokemon]
      }
    }
  })
}

useIntersectionObserver(infiniteScrollRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    loadMorePokemon()
  }
})
</script>

<template>
  <div class="ListPokemonPage">
    <div v-if="result" class="ContentWrapper">
      <CardList :pokemons="result.getAllPokemon" />
      <PokemonCardBig v-if="$route.params.pokemonKey" />
    </div>
    <AppLoading v-if="loading" />
    <p v-if="error">Oops! Something went wrong.</p>
    <div ref="infiniteScrollRef"></div>
  </div>
</template>

<style scoped lang="scss">
.ListPokemonPage {
  .ContentWrapper {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
