<template>
  <v-app>
    <v-main>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue'
import axios from 'axios'

const data = ref(null)


async function fetchData (url) {
  // Fetch ideal
  // axios.get('http://localhost:3001/api/finance')
  // .then(response => {
  //   console.log(response);
  //   // Faça o que quiser com os dados
  // })
  // .catch(error => {
  //   // console.log(response);
  //   console.error('Erro ao obter dados do backend:', error);
  // });
  
  // Fetch mockado
  data.value = {
    "currencies": {
        "source": "BRL",
        "USD": {
            "name": "Dollar",
            "buy": 4.9364,
            "sell": 4.9364,
            "variation": 0.183
        },
        "EUR": {
            "name": "Euro",
            "buy": 5.3413,
            "sell": 5.3411,
            "variation": 0.306
        },
        "GBP": {
            "name": "Pound Sterling",
            "buy": 6.2422,
            "sell": null,
            "variation": 0.386
        },
        "ARS": {
            "name": "Argentine Peso",
            "buy": 0.0059,
            "sell": null,
            "variation": -0.13
        },
        "CAD": {
            "name": "Canadian Dollar",
            "buy": 3.6556,
            "sell": null,
            "variation": 0.347
        },
        "AUD": {
            "name": "Australian Dollar",
            "buy": 3.2338,
            "sell": null,
            "variation": 0.213
        },
        "JPY": {
            "name": "Japanese Yen",
            "buy": 0.0328,
            "sell": null,
            "variation": 0.119
        },
        "CNY": {
            "name": "Renminbi",
            "buy": 0.6866,
            "sell": null,
            "variation": 0.208
        },
        "BTC": {
            "name": "Bitcoin",
            "buy": 270504.761,
            "sell": 270504.761,
            "variation": -0.88
        }
    },
    "stocks": {
        "IBOVESPA": {
            "name": "BM&F BOVESPA",
            "location": "Sao Paulo, Brazil",
            "points": 130031.58,
            "variation": 0.09
        },
        "IFIX": {
            "name": "Índice de Fundos de Investimentos Imobiliários B3",
            "location": "Sao Paulo, Brazil",
            "points": 3356.04,
            "variation": -0.05
        },
        "NASDAQ": {
            "name": "NASDAQ Stock Market",
            "location": "New York City, United States",
            "points": 15580.87,
            "variation": -0.32
        },
        "DOWJONES": {
            "name": "Dow Jones Industrial Average",
            "location": "New York City, United States",
            "points": 38612.24,
            "variation": 0.13
        },
        "CAC": {
            "name": "CAC 40",
            "location": "Paris, French",
            "points": 7812.09,
            "variation": 0.22
        },
        "NIKKEI": {
            "name": "Nikkei 225",
            "location": "Tokyo, Japan",
            "points": 38262.16,
            "variation": -0.26
        }
    },
    "available_sources": [
        "BRL"
    ],
    "taxes": []
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss">
.v-main {
  display: grid;
  grid-template-columns: 200px 1fr;
}
</style>