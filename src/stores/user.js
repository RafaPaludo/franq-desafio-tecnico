import { defineStore } from "pinia"
import { ref, watch } from 'vue'

export const useUserAuth = defineStore('userAuth', () => {
  const user = ref(null)

  watch(
    user,
    (userVal) => {
      localStorage.setItem('user', JSON.stringify(userVal))
    },
    { deep: true }
  )

  if (localStorage.getItem('user')) {
    user.value = JSON.parse(localStorage.getItem('user'))
  }

  return { user }
})