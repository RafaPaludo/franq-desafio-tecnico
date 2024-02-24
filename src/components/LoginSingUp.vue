<template>
  <v-form v-model="valid" @submit.prevent="registerUser">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
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
          md="12"
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
          md="12"
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

    <v-btn type="submit" block class="mt-2" color="primary">Registrar</v-btn>
  </v-form>

  <v-alert
    v-if="errorMessage"
    color="warning"
    icon="$warning"
    :text="errorMessage"
  />
  <v-alert
    v-if="successMessage"
    color="success"
    icon="$success"
    :text="successMessage"
  />

</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserAuth } from '@/stores/user'
import AuthenticationService from '@/services/AuthenticationService'

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
const router = useRouter()
const route = useRoute()

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
    console.log(response?.data?.user)
    logUser(response?.data?.user)
  })
  .catch(error => {
    errorMessage.value = error?.response?.data?.message
  })
}

function logUser ({ email, name }) {
  console.log('adasdasdasd')
  userAuth.user = { email, name }

  setTimeout(() => {
    router.push('/')
  }, 1500)
}

</script>
