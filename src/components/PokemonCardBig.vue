<script setup lang="ts">
import { GET_POKEMON } from '@/queries/getPokemon'
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
import TagList from './TagList.vue'
import AppLoading from './AppLoading.vue'
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'
import { watch } from 'vue'
import RadarChart from './RadarChart.vue'

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
// const { sprite, species, types, evYields, key } = result.value.getPokemon
</script>

<template>
  <div class="PokemonCardBig">
    <AppLoading v-if="loading" />
    <p v-else-if="error">Oops! Something went wrong.</p>
    <div v-else class="PokemonCardBig-Container">
      <div class="PokemonCardBig-SpriteContainer">
        <img :src="result.getPokemon.sprite" />
      </div>
      <h4>Nº001</h4>
      <h2>{{ capitalizeFirstLetter(result.getPokemon.species) }}</h2>
      <TagList :tags="result.getPokemon.types" />
      <h3>POKÉDEX ENTRY</h3>
      <p>
        {{ result.getPokemon.flavorTexts[0].flavor }}
      </p>
      <h3>EV YIELDS</h3>
      <RadarChart />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/src/assets/main.scss';
.PokemonCardBig {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 150px;
  background-color: $color-white;
  width: 500px;
  height: 750px;
  padding: 15px 40px;
  border-radius: 20px;
  box-shadow: $box-shadow;
  .PokemonCardBig-Container {
    transform: translateY(-100px);
    text-align: center;
  }
  .PokemonCardBig-SpriteContainer {
    img {
      height: 200px;
    }
  }
}
</style>
