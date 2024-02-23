<template>
    <v-form v-model="valid" @submit.prevent="loginUser">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            :rules="rules"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="password"
            type="password"
            :rules="rules"
            label="Senha"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-btn type="submit" block class="mt-2">Login</v-btn>
  </v-form>

  {{ successMessage }} {{ errorMessage }}
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AuthenticationService from '@/services/AuthenticationService'
import { useUserAuth } from '@/stores/user'

const valid = ref(false)
const password = ref('')
const email = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const rules = []
const userAuth = useUserAuth()
const router = useRouter()
const route = useRoute()

function loginUser () {
  AuthenticationService.login({
    email: email.value,
    password: password.value
  })
  .then(response => {
    successMessage.value = response?.data?.message
    logUser()
  })
  .catch(error => {
    errorMessage.value = error?.response?.data?.message
  })
}

function logUser () {
  userAuth.user = { email }
  router.push('/')
}
</script>
