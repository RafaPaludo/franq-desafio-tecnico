<template>
  <div>Hello World</div>
</template>

<script setup>
import { useUserAuth } from '@/stores/user'
import { onMounted } from 'vue';

const userAuth = useUserAuth()

onMounted(() => {
  if(userAuth) {
    console.log('Usuário autenticado')
  }
})
</script>
