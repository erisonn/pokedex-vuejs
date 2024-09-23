<script setup lang="ts">
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'
import RadarChart from './RadarChart.vue'
import TagList from './TagList.vue'
import AppTabs from './AppTabs.vue'
import { shallowRef } from 'vue'
import HeatMapChart from './HeatMapChart.vue'
import { buildHeatMapChartSeries } from '@/helpers/buildHeatMapChartSeries'
import { type TypeMatchups } from '@/helpers/buildHeatMapChartSeries'
import { addLeadingZerosToNumber } from '@/helpers/addLeadingZerosToNumber'

interface PokemonStats {
  hp: number
  attack: number
  defense: number
  speed: number
  specialdefense: number
  specialattack: number
}

interface Props {
  data: {
    num: number
    sprite: string
    species: string
    types: TypeMatchups[]
    flavorTexts: {
      flavor: string
    }[]
    evYields: PokemonStats
    baseStats: PokemonStats
  }
}

const { data } = defineProps<Props>()
const { sprite, species, types, flavorTexts, evYields, baseStats, num } = data

const baseStatsData = {
  categories: [
    baseStats.hp + ' HP',
    baseStats.attack + ' Attack',
    baseStats.defense + ' Defense',
    baseStats.speed + ' Speed',
    baseStats.specialdefense + ' Sp. Def',
    baseStats.specialattack + ' Sp. Atk'
  ],
  series: [
    {
      name: '',
      data: [
        baseStats.hp,
        baseStats.attack,
        baseStats.defense,
        baseStats.speed,
        baseStats.specialdefense,
        baseStats.specialattack
      ]
    }
  ]
}

const evYieldsData = {
  categories: [
    evYields.hp + ' HP',
    evYields.attack + ' Attack',
    evYields.defense + ' Defense',
    evYields.speed + ' Speed',
    evYields.specialdefense + ' Sp. Def',
    evYields.specialattack + ' Sp. Atk'
  ],
  series: [
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
}

// TODO: ADD OTHER TABS
// TODO: FIGURE OUT HOW TO TYPE THESE PROPS
const TABS_STATES = [
  {
    title: 'STATS',
    label: 'stats',
    component: shallowRef(RadarChart),
    componentProps: {
      'chart-id': 'pokemonStatsChart',
      series: baseStatsData.series,
      categories: baseStatsData.categories,
      height: '300',
      width: '300',
      minValue: -80,
      maxValue: 255
    }
  },
  {
    title: 'EV YIELDS',
    label: 'evYields',
    component: shallowRef(RadarChart),
    componentProps: {
      'chart-id': 'pokemonEvYieldsChart',
      series: evYieldsData.series,
      categories: evYieldsData.categories,
      height: '300',
      width: '300',
      minValue: -1,
      maxValue: 3
    }
  },
  {
    title: 'ATTACKING DATA',
    label: 'attackingData',
    component: shallowRef(HeatMapChart),
    componentProps: {
      chartId: 'pokemonTypeMatchupsChart',
      series: buildHeatMapChartSeries(types, 'attacking'),
      width: 520,
      height: 300
    }
  }
]
</script>

<template>
  <div class="PokemonCardBigContent">
    <div class="SpriteContainer">
      <img :src="sprite" />
    </div>
    <h6>{{ 'Nº' + addLeadingZerosToNumber(num, 4) }}</h6>
    <h4>{{ capitalizeFirstLetter(species) }}</h4>
    <TagList :tags="types" />
    <div class="DescriptionSection">
      <h4>POKÉDEX ENTRY</h4>
      <p>
        {{ flavorTexts[0].flavor }}
      </p>
    </div>
    <AppTabs :tabs="TABS_STATES" />
  </div>
</template>

<style scoped lang="scss">
.PokemonCardBigContent {
  min-width: 310px;
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
