<template>
  <v-col
    v-for="val in props.quotation"
    :key="val"
    cols="12"
    sm="12"
  >
    <v-sheet class="ma-2 pa-2">
      <v-card
        class="mx-auto"
        variant="outlined"
        hover
      >
        <v-card-item>
          <v-card-title>
            {{ val.name }}
          </v-card-title>
        </v-card-item>

        <v-card-text
          v-if="quotationLabel === 'currencies'"
          class="card-currencies"
          
        >
          <div class="buy"><span>{{ formatCurrency(val.buy) }}</span> Compra</div>
          <div class="sell"><span>{{ formatCurrency(val.sell) }}</span> Venda</div>
          <div class="variation">
            <span
              :class="variationPositive(val.variation) ? 'good': 'bad'"
            >
              {{ val.variation }}
              <v-icon
                size="x-small"
                end
                :icon="variationPositive(val.variation) ? 'mdi mdi-trending-up' : 'mdi mdi-trending-down'"
              ></v-icon>
            </span> variação
            
          </div>
        </v-card-text>

        <v-card-text
          v-if="quotationLabel === 'stocks'"
          class="card-stocks"
        >
          <div class="location">{{ val.location }}</div>
          <div class="points"><span>{{ val.points }}</span> pontos</div>
          <div class="variation">
            <span
              :class="variationPositive(val.variation) ? 'good': 'bad'"
            >
              {{ val.variation }}
              <v-icon
                size="x-small"
                end
                :icon="variationPositive(val.variation) ? 'mdi mdi-trending-up' : 'mdi mdi-trending-down'"
              ></v-icon>
            </span> variação
            
          </div>
        </v-card-text>

        <v-card-text
          v-if="quotationLabel === 'bitcoin'"
          class="card-bitcoin"
        >
          <div class="buy"><span>{{ formatCurrency(val.buy, val.format[0]) }}</span> Compra</div>
          <div class="sell"><span>{{ formatCurrency(val.sell, val.format[0]) }}</span> Venda</div>
          <div class="variation">
            <span
              :class="variationPositive(val.variation) ? 'good': 'bad'"
            >
              {{ val.variation }}
              <v-icon
                size="x-small"
                end
                :icon="variationPositive(val.variation) ? 'mdi mdi-trending-up' : 'mdi mdi-trending-down'"
              ></v-icon>
            </span> variação
            
          </div>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-col>
</template>

<script setup>
// Props
const props = defineProps({
  quotation: {
    type: Object,
    required: true,
    validator: (value) => {
      return delete value['source']
    } 
  },
  quotationLabel: {
    type: String,
    required: true,
    validator: (value) => {
      return ['currencies', 'stocks', 'bitcoin'].includes(value)
    }
  }
})

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