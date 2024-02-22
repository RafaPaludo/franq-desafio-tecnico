<template>
  <v-form v-model="valid" @submit.prevent="registerUser">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nome"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            type="password"
            :rules="passwordRules"
            label="Senha"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-btn type="submit" block class="mt-2">Registrar</v-btn>
  </v-form>

  {{ errorMessage }}
  {{ successMessage }}
</template>

<script setup>
import { ref } from 'vue'
import AuthenticationService from '@/services/AuthenticationService'
import { useUserAuth } from '@/stores/user'

const valid = ref(false)
const name = ref('')
const password = ref('')
const email = ref('')
const nameRules = [
  value => {
    if (value) return true

    return 'Necessário informar um nome.'
  }
]
const emailRules = [
  value => {
    if (value) return true

    return 'Necessário informar um e-mail.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true

    return 'Informe um e-mail válido.'
  }
]

const passwordRules = [
  value => {
    if (value) return true

    return 'Necessário informar uma senha.'
  },
  value => {
    if (value?.length >= 4) return true

    return 'Senha precisa conter ao menos 6 characters.'
  }
]

const errorMessage = ref('')
const successMessage = ref('')
const userAuth = useUserAuth()

/*
  This function register a new user in the backend.
*/ 
function registerUser () {
  AuthenticationService.register({
    email: email.value,
    password: password.value,
    name: name.value
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
  userAuth.user = { name, email }
}

</script>
