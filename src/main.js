/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from './router/index'

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

app
  .use(router)
  .use(pinia)
  .use(VueApexCharts)
  .mount('#app')
