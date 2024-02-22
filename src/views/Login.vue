<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <LoginSingIn />
        </v-window-item>

        <v-window-item value="two">
          <LoginSignUp />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import LoginSignUp from '@/components/LoginSingUp.vue'
import LoginSingIn from '@/components/LoginSingIn.vue'

const tab = ref(null)
</script>