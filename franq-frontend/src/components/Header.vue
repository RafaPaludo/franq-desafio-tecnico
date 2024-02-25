<template>
  <header class="header">
    <img 
      :src="Logo"
      alt="Logo Franq"
      class="logo-img"
    >

    <v-container>
      <v-row>
        <v-menu
          min-width="200px"
          rounded
        >
          <template v-slot:activator="{ props }">
            <v-list-item :title="`${userAuth.user.name}`" />
            <v-btn 
              icon
              v-bind="props"
            >
              <v-avatar color="primary">
                <v-icon icon="mdi-account-circle" />
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="mx-auto text-center">
                <v-btn
                  rounded
                  variant="text"
                  @click="userAuth.loginOut"
                >
                  <v-icon icon="mdi-exit-to-app" />Disconnect 
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-row>
    </v-container>
  </header>
</template>

<script setup>
import Logo from '@/assets/logo-franq.svg'
import { useUserAuth } from '@/stores/user'

const userAuth = useUserAuth()
</script>

<style lang="scss">
.header {
  box-shadow: 0px 0px 3px rgba(0,0,0,.4);
  padding: 2rem 3rem;
  border-radius: 0 0 .25rem .25rem;
  display: flex;
  justify-content: space-between;

  .v-container {
    width: auto;
    margin: 0;
  }
}

.logo-img {
  max-width: 150px;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>