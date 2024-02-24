<template>
  <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'

const chartOptions = {
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
      text: 'Price'
    },
  },
  xaxis: {
    type: 'datetime',
  }
}

const series =  [{
  name: '',
  data: [[1, 34], [3.8, 43], [5, 31] , [10, 43], [13, 33], [15, 43], [18, 33] , [20, 52]]
}]
</script>