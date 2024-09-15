<script setup lang="ts">
import { computed } from 'vue'
import theme from '../assets/scss/variables.module.scss'

interface Props {
  chartId: string
  categories: string[]
  series: {
    name: string
    data: number[]
  }[]
  height: string
  width: string
  minValue: number
  maxValue: number
}
const { chartId, minValue, maxValue, categories, width, height, series } = defineProps<Props>()

// categories and series data array must be in the same order
const options = computed(() => {
  return {
    chart: {
      fontFamily: theme.FONT_FAMILY,
      id: chartId,
      animations: {
        dynamicAnimation: {
          enabled: false
        }
      }
    },
    yaxis: {
      show: false,
      min: minValue,
      max: maxValue
    },
    xaxis: {
      categories: categories
    },
    stroke: {
      colors: [theme.COLOR_GREEN_LIGHT]
    },
    fill: {
      colors: [theme.COLOR_GREEN_LIGHT]
    },
    markers: {
      size: 0,
      colors: [theme.COLOR_GREEN_LIGHT],
      strokeColors: [theme.COLOR_GREEN_LIGHT]
    }
  }
})
</script>

<template>
  <div class="RadarChart">
    <apexchart
      type="radar"
      :width="width"
      :height="height"
      :series="series"
      :options="options"
    ></apexchart>
  </div>
</template>

<style scoped lang="scss">
.RadarChart {
  display: flex;
  justify-content: center;
  .vue-apexcharts {
    background-color: $color-white;
    border-radius: 8px;
  }
}
</style>
