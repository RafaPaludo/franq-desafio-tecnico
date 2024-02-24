<template>
  <section
    class="section"
  >
    <div
      class="form-container"
    >
      <img 
        :src="Logo"
        alt="Logo Franq"
        class="logo-img"
      >
      <div class="greetings">
        Olá,faça login para continuar. <br>
        Ou crie uma nova conta.
      </div>
      
      <v-card>
        <v-tabs
          v-model="tab"
          bg-color="primary"
          align-tabs="center"
        >
          <v-tab value="one">Login</v-tab>
          <v-tab value="two">Sign In</v-tab>
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
    </div>    
  </section>  
</template>

<script setup>
import { ref } from 'vue'
import LoginSignUp from '@/components/LoginSingUp.vue'
import LoginSingIn from '@/components/LoginSingIn.vue'
import Logo from '@/assets/logo-franq.svg'

const tab = ref(null)
</script>

<style lang="scss">
.section{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
}

.form-container {
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 2rem;
  border-radius: .25rem;
  box-shadow: 0px 0px 3px rgba(0,0,0,.4);
  gap: 2rem;
  max-width: 50rem;
  margin: 0 auto;
}

.greetings {
  font-size: 1.25rem;
  color: #5d5d5d;
  text-align: center;
}

.v-card {
  width: 100%;
  box-shadow: none;
  border: 1px solid #cdcdcd;
  border-top: none;
}
</style>