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

      <v-btn type="submit" block class="mt-2" color="primary">Login</v-btn>
    </v-form>
    <v-alert
      v-if="errorMessage"
      color="error"
      icon="$error"
      :text="errorMessage"
    ></v-alert>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AuthenticationService from '@/services/AuthenticationService'
import { useUserAuth } from '@/stores/user'
import { useChart } from '@/stores/chart'

// Data
const chart = useChart()
const valid = ref(false)
const password = ref('')
const email = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const rules = []
const userAuth = useUserAuth()
const router = useRouter()
const route = useRoute()

// Methods
/**
 * Authenticate and login user.
 */
function loginUser () {
  AuthenticationService.login({
    email: email.value,
    password: password.value
  })
  .then(response => {
    successMessage.value = response?.data?.message
    saveUser(response?.data?.user)
  })
  .catch(error => {
    errorMessage.value = error?.response?.data?.message
  })
}

/**
  * Saves authenticate users credentials.
  * @param {Object} credentials - User data.
  * @param {String} credentials.name - User name.
  * @param {String} credentials.email - User email.
 */
function saveUser ({ email, name }) {
  userAuth.user = { email, name }
  chart.setInitialDate()
  
  setTimeout(() => {
    router.push('/')
  }, 1500)
}
</script>

<style lang="scss">
.v-alert {
  margin: 2rem 0;
}
</style>