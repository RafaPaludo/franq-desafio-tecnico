<template>
  <v-container class="quotation-container">
    <h2 class="quatation-header">{{ quotationType }}</h2>

    <v-row no-gutters>
      <v-col
        v-for="(quotation, key, idx) in quotationList"
        :key="quotation"
        cols="12"
        sm="12"
      >
        <QuotationCard
          :quotation="quotation"
          :quotationType="quotationType"
          :selected="idx"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Props
const props = defineProps({
  quotationList: {
    type: Object,
    required: true,
    validator: (value) => {
      return delete value['source']
    } 
  },
  quotationType: {
    type: String,
    required: true,
    validator: (value) => {
      return ['currencies', 'stocks', 'bitcoin'].includes(value)
    }
  }
})
</script>