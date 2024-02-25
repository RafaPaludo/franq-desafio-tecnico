<template>
  <v-sheet class="ma-2 pa-2">
    <v-card
      class="mx-auto"
      variant="outlined"
      ref="quotationCard"
      hover
      @click="handleClick"
    >
      <v-card-item>
        <v-card-title>
          {{ quotation.name }}
        </v-card-title>
      </v-card-item>

      <v-card-text
        v-if="quotationType === 'currencies'"
        class="card-currencies"
      >
        <div class="buy"><span>{{ formatCurrency(quotation.buy) }}</span>Compra</div>
        <div class="sell"><span>{{ formatCurrency(quotation.sell) }}</span>Venda</div>
        <div class="variation">
          <span
            :class="variationPositive(quotation.variation) ? 'good': 'bad'"
          >
            {{ quotation.variation }}
            <v-icon
              size="x-small"
              end
              :icon="variationPositive(quotation.variation) ? 'mdi mdi-trending-up' : 'mdi mdi-trending-down'"
            ></v-icon>
          </span> variação
        </div>
      </v-card-text>

      <v-card-text
        v-if="quotationType === 'stocks'"
        class="card-stocks"
      >
        <div class="location">{{ quotation.location }}</div>
        <div class="points"><span>{{ quotation.points }}</span>pontos</div>
        <div class="variation">
          <span
            :class="variationPositive(quotation.variation) ? 'good': 'bad'"
          >
            {{ quotation.variation }}
            <v-icon
              size="x-small"
              end
              :icon="variationPositive(quotation.variation) ? 'mdi mdi-trending-up' : 'mdi mdi-trending-down'"
            ></v-icon>
          </span> variação
        </div>
      </v-card-text>

      <v-card-text
        v-if="quotationType === 'bitcoin'"
        class="card-bitcoin"
      >
        <div class="buy"><span>{{ formatCurrency(quotation.buy, quotation.format[0]) }}</span>Compra</div>
        <div class="sell"><span>{{ formatCurrency(quotation.sell, quotation.format[0]) }}</span>Venda</div>
        <div class="variation">
          <span
            :class="variationPositive(quotation.variation) ? 'good': 'bad'"
          >
            {{ quotation.variation }}
            <v-icon
              size="x-small"
              end
              :icon="variationPositive(quotation.variation) ? 'mdi mdi-trending-up' : 'mdi mdi-trending-down'"
            ></v-icon>
          </span> variação
        </div>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { useChart } from '@/stores/chart'
import { onMounted, ref } from 'vue';

// Data
const chart = useChart()
const quotationCard = ref(null)

// Props
const props = defineProps({
  quotation: {
    type: Object,
    required: true
  },
  quotationType: {
    type: String,
    required: true,
    validator: (value) => {
      return ['currencies', 'stocks', 'bitcoin'].includes(value)
    }
  },
  selected: {
    type: Number
  }
})

// Methods
function formatCurrency (number, currency = 'BRL') {
  if (!number) {
    return '---'
  }

  return number?.toLocaleString('pt-br',{ style: 'currency', currency })
}

function variationPositive (number) {
  if (number > 0) {
    return true
  } else {
    return false
  }
}

function handleClick () {
  chart.data = props.quotation
}
</script>

<style lang="scss">
.v-sheet {
  .v-card {
    &--variant-outlined {
      color: #cdcdcd;
    }

    &-title {
      color: $black;
    }
    
    &-text {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    }
  }
}


.variation,
.points,
.buy,
.sell {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #434343;


  span {
    font-weight: 700;
    font-size: 1.5rem;
    color: $main-color;
    padding: .2rem 0;

    &.bad {
      color: red;
    }

    &.good {
      color: green;
    }
  }
}

.variation {
  align-self: flex-end;
}

.location {
  color: #434343;
}
</style>