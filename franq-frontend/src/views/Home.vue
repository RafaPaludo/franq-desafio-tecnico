<template>
  <Header />

  <section class="content">
    <v-tabs
        v-model="tab"
        align-tabs="center"
        color="primary"
      >
      <v-tab 
        v-for="(quote, idx) in resultNames"
        :value="'option-' + idx"
        key="idx">
        <p></p>
        {{ quote }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item
        v-for="(quotationList, quotationType, index) in results"
        :value="'option-' + index"
        :key="index"
        class="quotation-list-container"
      >
        <!-- Cards de Cotações -->
        <QuotationList 
          :quotationList="quotationList"
          :quotationType="quotationType"
        />

        <!-- Chart -->
        <Chart class="chart" />
      </v-window-item>
    </v-window>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Data
const resultNames =ref(null)
const results = ref(null)
const tab = ref('option-0')

// Methods
/**
 * Fetch data from finance api.
 */
async function fetchData () {
  axios.get('http://35.173.236.69:3001/api/finance')
  .then((response) => {
    sanitizeData(response)
  })
  .catch(error => {
    console.error('Erro ao obter dados do backend:', error);
  });
}

/**
 * Fetch data from finance api.
 * @param {Object} response.data - The api response.
 */
function sanitizeData ({ data }) {
  delete data?.results?.available_sources
  delete data?.results?.taxes
  results.value = data?.results
  resultNames.value = Object.keys(data?.results)
}

// Hooks
onMounted(() => {
  fetchData()
})
</script>

<style lang="scss">
.content {
  padding: 3rem 2rem;
}

.quatation-header {
  text-transform: capitalize;
  padding-bottom: 1rem;
}

.quotation-list-container {
  display: flex;
}

@media screen and (max-width: 1000px) {
  .quotation-list-container {
    flex-direction: column-reverse;
  }

  .content {
    padding: 2rem 1rem;
  }
}
</style>