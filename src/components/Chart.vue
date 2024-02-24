<template>
  <apexchart
    ref="apexChart"
    type="area"
    height="350"
    :options="chartOptions"
    :series="series"
    @click="handleClick"
  >
  </apexchart>
</template>

<script setup>
import { ref } from 'vue';
import { useChart } from '@/stores/chart'
import { onMounted } from 'vue';

// Data
const chart = useChart()
const apexChart = ref(null)
const chartOptions = ref({
  chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 2,
  },
  title: {
    text: 'Currencies',
    align: 'center'
  },
  fill: {
    type: 'gradient',
    opacity: 0.4,
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val;
      },
    },
    title: {
      text: 'Pontos'
    },
  },
  xaxis: {
    labels: {
      formatter: function (val) {
        return val + 'h'
      }
    }
  }
})

const series = ref([{
  name: 'Pontos',
  data: [
    [10, 0],
    [11, 0],
    [12, 0],
    [13, 0],
    [14, 0],
    [15, 0],
    [16, 0],
    [17, 0]]
}])

function handleClick () {
  const initialData = chart.initialData
  const data = chart.data
  const info = data.buy || data.points  

  if (chart.data) {
    const series =  [{
      data: [
        [initialData, info],
        [initialData + 1, 0],
        [initialData + 2, 0],
        [initialData + 3, 0],
        [initialData + 4, 0],
        [initialData + 5, 0],
        [initialData + 6, 0],
        [initialData + 7, 0]
      ]
    }]

    apexChart.value.updateOptions({
      series,
      title: {
        text: chart.data.name
      },
    });
  }
}
</script>

<style lang="scss">
.chart {
  width: 100%;
  max-width: 400px;
  margin: 0;
  padding: 5rem 0;
}

@media screen and (max-width: 1000px) {
  .chart {
    max-width: none;
    padding: 1rem 0;
  }
}
</style>