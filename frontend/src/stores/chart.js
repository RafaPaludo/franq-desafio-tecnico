import { defineStore } from "pinia"
import { ref, watch } from 'vue'

export const useChart = defineStore('chart', () => {
  const data = ref(null)
  const initialData = ref(null)

  watch(
    initialData,
    (initialDataVal) => {
      localStorage.setItem('initialData', JSON.stringify(initialDataVal))
    },
    { deep: true }
  )

  if (localStorage.getItem('initialData')) {
    initialData.value = JSON.parse(localStorage.getItem('initialData'))
  }

  function setInitialDate () {
    initialData.value = new Date().getHours()
  }

  return { data, initialData, setInitialDate }
})