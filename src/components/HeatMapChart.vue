<script setup lang="ts">
import theme from '../assets/scss/variables.module.scss'
import { type FormatedTypeMatchups } from '@/helpers/buildHeatMapChartSeries'

interface Props {
  chartId: string
  series: FormatedTypeMatchups
}

const { chartId, series } = defineProps<Props>()

const options = {
  chart: {
    fontFamily: theme.FONT_FAMILY,
    id: chartId,
    animations: {
      dynamicAnimation: {
        enabled: false
      }
    }
  },
  series: series
}
</script>

<template>
  <div class="HeatMapChart">
    <apexchart
      type="heatmap"
      :options="options"
      :series="options.series"
      height="200"
      width="500"
    ></apexchart>
  </div>
</template>
