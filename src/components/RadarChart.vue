<script setup lang="ts">
import { computed } from 'vue'

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
      colors: ['#4ecdc4']
    },
    fill: {
      colors: ['#4ecdc4']
    },
    markers: {
      size: 3,
      colors: '#4ecdc4',
      strokeColors: '#4ecdc4'
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
  .apexcharts-tooltip {
    display: none !important;
  }
}
</style>
