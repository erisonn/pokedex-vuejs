<script setup lang="ts">
import { GET_POKEMON } from '@/queries/getPokemon'
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
import TagList from './TagList.vue'
import AppLoading from './AppLoading.vue'
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'
import { watch } from 'vue'
import RadarChart from './RadarChart.vue'

interface PageData {
  sprite: string
  species: string
  types: {
    name: string
  }[]
  flavorTexts: {
    flavor: string
  }[]
  evYields: {
    hp: number
    attack: number
    defense: number
    speed: number
    specialdefense: number
    specialattack: number
  }
}

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

// const chartCategories = ['HP', 'Attack', 'Defense', 'Speed', 'Sp. Def', 'Sp. Atk']
// const chartSeries = {
//   name: '',
//   data: [
//     evYields?.hp,
//     evYields?.attack,
//     evYields?.defense,
//     evYields?.speed,
//     evYields?.specialdefense,
//     evYields?.specialattack
//   ]
// }
</script>

<template>
  <div class="PokemonCardBig">
    <AppLoading v-if="loading" />
    <p v-else-if="error">Oops! Something went wrong.</p>
    <div v-else class="Container">
      <div class="SpriteContainer">
        <img :src="result.getPokemon.sprite" />
      </div>
      <h6>Nº001</h6>
      <h4>{{ capitalizeFirstLetter(result.getPokemon.species) }}</h4>
      <TagList :tags="result.getPokemon.types" />
      <div class="DescriptionSection">
        <h4>POKÉDEX ENTRY</h4>
        <p>
          {{ result.getPokemon.flavorTexts?.[0].flavor }}
        </p>
      </div>
      <div class="ChartSection">
        <h4>EV YIELDS</h4>
        <RadarChart
          v-if="result"
          chart-id="pokemonEvYieldsChart"
          :series="[
            {
              name: '',
              data: [
                result.getPokemon.evYields?.hp,
                result.getPokemon.evYields?.attack,
                result.getPokemon.evYields?.defense,
                result.getPokemon.evYields?.speed,
                result.getPokemon.evYields?.specialdefense,
                result.getPokemon.evYields?.specialattack
              ]
            }
          ]"
          :categories="['HP', 'Attack', 'Defense', 'Speed', 'Sp. Def', 'Sp. Atk']"
          height="300"
          width="300"
        />
      </div>
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
  top: 100px;
  background-color: $card-bg-color;
  width: 350px;
  height: 750px;
  padding: 15px 40px;
  border: 1px solid $color-grey-transparent;
  border-radius: 8px;
  box-shadow: $box-shadow;
  .Container {
    padding: 20px;
    text-align: center;
    .SpriteContainer {
      img {
        height: 150px;
      }
    }
    .DescriptionSection,
    .ChartSection {
      margin-top: 15px;
    }
  }
}
</style>
