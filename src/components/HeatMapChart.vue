<script setup lang="ts">
import theme from '../assets/scss/variables.module.scss'
import { type FormatedTypeMatchups } from '@/helpers/buildHeatMapChartSeries'

interface Props {
  chartId: string
  series: FormatedTypeMatchups
  width: number
  height: number
}

const { chartId, series, width, height } = defineProps<Props>()

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
  plotOptions: {
    heatmap: {
      enableShades: false,
      radius: 4,
      colorScale: {
        ranges: [
          {
            from: 0.5,
            to: 0.5,
            name: 'Not very effective (50%)',
            color: '#a40000'
          },
          {
            from: 0,
            to: 0,
            name: 'No effect (0%)',
            color: '#2e3436'
          },
          {
            from: 1,
            to: 1,
            name: 'Normal (100%)',
            color: '#cfcfcf'
          },
          {
            from: 2,
            to: 2,
            name: 'Super effective (200%)',
            color: '#4e9a06'
          }
        ]
      }
    }
  },
  tooltip: {
    enabled: false
  },
  legend: {
    showForSingleSeries: true,
    onItemHover: {
      highlightDataSeries: false
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
      :height="height"
      :width="width"
    ></apexchart>
  </div>
</template>

<style lang="scss">
.HeatMapChart {
  display: flex;
  justify-content: center;
}
</style>
