<script setup lang="ts">
interface Props {
  chartId: string
  categories: string[]
  series: {
    name: string
    data: number[]
  }[]
  height: string
  width: string
}
const props = defineProps<Props>()
const { chartId, categories, series, height, width } = props
// categories and series data array must be in the same order
const options = {
  chart: {
    id: chartId
  },
  yaxis: {
    show: false,
    min: -1,
    max: 3
  },
  xaxis: {
    categories: categories
  },
  theme: {
    mode: 'light',
    palette: 'palette4'
  }
}
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
