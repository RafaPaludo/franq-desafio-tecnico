<template>
  <aside class="aside">
      <img 
        :src="Logo"
        alt="Logo Franq"
        class="logo"
      >

      <v-tabs
        v-model="tab"
        direction="vertical"
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
  </aside>

  <section class="content">
    <v-window v-model="tab">
      <v-window-item
        v-for="(quotation, quotationLabel, index) in results"
        :value="'option-' + index"
        :key="index"
      > 
        <v-container>
          <h2 class="quatation-header">{{ quotationLabel }}</h2>

          <v-row no-gutters>
            <QuotationCard
              :quotation="quotation"
              :quotationLabel="quotationLabel"
            />
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </section>
</template>

<script setup>
import Logo from '@/assets/logo-franq.svg'
import Quoatationcard from '@/components/QuotationCard.vue'

import { onMounted, ref } from 'vue'

const tab = ref('option-0')
const data = {"by":"default","valid_key":true,"results":{"currencies":{"source":"BRL","USD":{"name":"Dollar","buy":4.9643,"sell":4.9643,"variation":0.042},"EUR":{"name":"Euro","buy":5.3723,"sell":5.3706,"variation":0.028},"GBP":{"name":"Pound Sterling","buy":6.284,"sell":null,"variation":0.032},"ARS":{"name":"Argentine Peso","buy":0.0059,"sell":null,"variation":0.118},"CAD":{"name":"Canadian Dollar","buy":3.6823,"sell":null,"variation":0.056},"AUD":{"name":"Australian Dollar","buy":3.2561,"sell":null,"variation":0.078},"JPY":{"name":"Japanese Yen","buy":0.033,"sell":null,"variation":-0.059},"CNY":{"name":"Renminbi","buy":0.69,"sell":null,"variation":0.048},"BTC":{"name":"Bitcoin","buy":268382.582,"sell":268382.582,"variation":-1.262}},"stocks":{"IBOVESPA":{"name":"BM\u0026F BOVESPA","location":"Sao Paulo, Brazil","points":130240.55,"variation":0.16},"IFIX":{"name":"Índice de Fundos de Investimentos Imobiliários B3","location":"Sao Paulo, Brazil","points":3354.5,"variation":-0.05},"NASDAQ":{"name":"NASDAQ Stock Market","location":"New York City, United States","points":16041.62,"variation":2.96},"DOWJONES":{"name":"Dow Jones Industrial Average","location":"New York City, United States","points":39069.11,"variation":1.18},"CAC":{"name":"CAC 40","location":"Paris, French","points":7911.6,"variation":1.27},"NIKKEI":{"name":"Nikkei 225","location":"Tokyo, Japan","points":39098.68,"variation":2.19}},"available_sources":["BRL"],"bitcoin":{"blockchain_info":{"name":"Blockchain.info","format":["USD","en_US"],"last":51002.38,"buy":51002.38,"sell":51002.38,"variation":-1.262},"coinbase":{"name":"Coinbase","format":["USD","en_US"],"last":50974.865,"variation":-1.377},"bitstamp":{"name":"BitStamp","format":["USD","en_US"],"last":50976.0,"buy":50997.0,"sell":50992.0,"variation":-1.391},"foxbit":{"name":"FoxBit","format":["BRL","pt_BR"],"last":255654.6652,"variation":-0.713},"mercadobitcoin":{"name":"Mercado Bitcoin","format":["BRL","pt_BR"],"last":255512.12597053,"buy":255555.11999999,"sell":255555.12,"variation":-0.817}},"taxes":[{"date":"2024-02-21","cdi":11.25,"selic":11.25,"daily_factor":1.00041957,"selic_daily":11.15,"cdi_daily":11.15}]},"execution_time":0.0,"from_cache":true}


delete data.results.available_sources
delete data.results.taxes
const resultNames = Object.keys(data.results)
const results = data.results
console.log(results)
</script>

<style lang="scss">
.aside {
  padding: 2rem 1rem;
  border-radius: 0 1rem 1rem 0;
  box-shadow: 0px 0px 24px rgba(0,0,0,.4);
}

.logo {
  max-width: 150px;
  margin-bottom: 2rem;
}

.content {
  padding: 2rem 1rem;
}

.quatation-header {
  text-transform: capitalize;
}

</style>