<script setup lang="ts">
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'
import RadarChart from './RadarChart.vue'
import TagList from './TagList.vue'

interface Props {
  data: {
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
}

const props = defineProps<Props>()
const { sprite, species, types, flavorTexts, evYields } = props.data

const categories = ['HP', 'Attack', 'Defense', 'Speed', 'Sp. Def', 'Sp. Atk']
const series = [
  {
    name: '',
    data: [
      evYields.hp,
      evYields.attack,
      evYields.defense,
      evYields.speed,
      evYields.specialdefense,
      evYields.specialattack
    ]
  }
]
</script>

<template>
  <div class="PokemonCardBigContent">
    <div class="SpriteContainer">
      <img :src="sprite" />
    </div>
    <h6>Nº001</h6>
    <h4>{{ capitalizeFirstLetter(species) }}</h4>
    <TagList :tags="types" />
    <div class="DescriptionSection">
      <h4>POKÉDEX ENTRY</h4>
      <p>
        {{ flavorTexts[0].flavor }}
      </p>
    </div>
    <div class="ChartSection">
      <h4>EV YIELDS</h4>
      <RadarChart
        chart-id="pokemonEvYieldsChart"
        :series="series"
        :categories="categories"
        height="300"
        width="300"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.PokemonCardBigContent {
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
</style>
