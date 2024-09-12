<script setup lang="ts">
const options = {
  chart: {
    id: 'pokemon-evYields-chart'
  },
  yaxis: {
    show: false,
    stepSize: 7,
    min: -3,
    max: 3
  },
  xaxis: {
    categories: ['HP', 'Attack', 'Defense', 'Speed', 'Sp. Def', 'Sp. Atk']
  }
}
const series = [
  {
    name: '',
    data: [0, 0, 0, 0, 0, 1]
  }
]
</script>

<template>
  <div class="RadarChart">
    <apexchart
      type="radar"
      width="300"
      height="300"
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
